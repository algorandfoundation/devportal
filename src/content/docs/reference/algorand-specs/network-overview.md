---
title: Network Overview
---

## Legacy Network Implementation: Websocket Mesh

### Websocket Sub-network

Currently transactions are distributed using the GossipSub protocol, while all other messages are forwarded over the pre-existing custom message protocol /algorand-ws/1.0.0 that uses the same message serialization as the existing WebsocketNetwork implementation. These two protocols are multiplexed over a single connection using libp2p streams.

A Stream Manager construction is used to create and manage streams for use with non-gossipsub protocols. In particular, all messages pertaining consensus are handled through websocket streams.

A Stream Manager has the following data associated to it:

```
type streamManager struct {
	ctx                 context.Context
	log                 logging.Logger
	host                host.Host
	handler             StreamHandler
	allowIncomingGossip bool

	streams     map[peer.ID]network.Stream
	streamsLock deadlock.Mutex
}
```

- streams is a key/value store mapping from peer IDs to Stream data structure definitions.
- streamsLock is a lock to acquire the resource and perform read/write operations

A stream manager also implements the network.Notifiee interface.

A stream handler function is called by libp2p whenever a new stream is accepted.
StreamHandler(.)

It first performs a check on wheter there already exists a connection with the given peer,
and if so, if this connection is still available, refusing to open a new stream if that
is the case.

### Gossipsub Sub-network

For more information, refer to the [official libp2p publish/subscribe documentation](https://docs.libp2p.io/concepts/pubsub/overview/).

The larger overlay parameters are configured as such:

```
	pubsub.GossipSubD = 8
	pubsub.GossipSubDscore = 6
	pubsub.GossipSubDout = 3
	pubsub.GossipSubDlo = 6
	pubsub.GossipSubDhi = 12
	pubsub.GossipSubDlazy = 12
	pubsub.GossipSubDirectConnectInitialDelay = 30 * time.Second
	pubsub.GossipSubIWantFollowupTime = 5 * time.Second
	pubsub.GossipSubHistoryLength = 10
	pubsub.GossipSubGossipFactor = 0.1
```

Topics in the PubSub model are akin to message channels, with each node subscribing to specific topics for message propagation.

The topic utilized to subscribe to transaction gossiping is the string `algotx01`.

Here, the naming convention is the word `algo`, followed by a 2 byte protocol tag
(in this case `tx`) followed by the 2 byte version identifier (in this case `01`).

The makePubSub(.) function initializes the PubSub system with a list of options that set parameters for peer scoring, topic filters, validation, and subscription handling.

- Peer Scoring: Sets peer score parameters, like the FirstMessageDeliveriesWeight, which scores peers based on the promptness of message delivery.
- Subscription Filters: Limits subscriptions to the `algotx01` topic.
- Validation Queue Size: Configures the validation queue, allowing up to 256 messages awaiting validation.

The service interface implementation for the PubSub system is as follows:

- Publish(.)
  Sends data to a specific topic. After verifying the topic exists, it uses the topic’s Publish(.) method to propagate the data across the network.
- ListPeersForTopic(.)
  Retrieves a list of peers currently subscribed to a given topic, making it accessible to other parts of the network package.

We define an enumeration of pubsub message validation results as follows
(where $ValidationResult$ is an alias for a signed integer).
These are taken from libp2p pubsub implementation.

```go
const (
	// ValidationAccept is a validation decision that indicates a valid message that should be accepted and
	// delivered to the application and forwarded to the network.
	ValidationAccept = ValidationResult(0)
	// ValidationReject is a validation decision that indicates an invalid message that should not be
	// delivered to the application or forwarded to the application. Furthermore the peer that forwarded
	// the message should be penalized by peer scoring routers.
	ValidationReject = ValidationResult(1)
	// ValidationIgnore is a validation decision that indicates a message that should be ignored: it will
	// be neither delivered to the application nor forwarded to the network. However, in contrast to
	// ValidationReject, the peer that forwarded the message must not be penalized by peer scoring routers.
	ValidationIgnore = ValidationResult(2)
	// internal
	validationThrottled = ValidationResult(-1)
)
```
