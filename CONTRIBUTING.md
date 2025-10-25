# Contributing

The project currently does not use Conventional Commits or any specific conventions.
Work is branched
and merged from [main](https://github.com/algorandfoundation/devportal/tree/devrel-content) as the main trunk.

For the internal devrel guide,
see the [Solas documentation](https://solas.algorand.foundation/doc/content-development-workflow-dPylBlDwdm#h-feature-branches)

## Get Started

### Setup Repository

Clone the repository if it has not been done already.
This only has to be done once to set up the project

```shell showLineNumbers=false frame=none
git clone git@github.com:algorandfoundation/devportal.git
```

Update the latest changes from the remote repository

```shell showLineNumbers=false frame=none
git fetch
```

#### Feature branches

Please use the following convention when naming branches for clarity:

```
{feat/fix/chore/change}/topicgroup-section-page
```

For example:

```shell showLineNumbers=false frame=none
git checkout feat/algokit-utils-client
```

### Submitting Changes

Provide a descriptive commit message that outlines the changes.
Changes must be done via a Pull Request (PR).

Ensure the following acceptance criteria are met before submitting a PR:

- Ensure there are no typos in the content
- Ensure `pnpm run lint` passes
- Ensure `pnpm run build` passes

### Publishing [TBD]

Production deployment from `main-dist` branch to CloudFlare Pages. PRs can be previewed in CF Pages as well.
