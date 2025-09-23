---
title: algokit_utils.config.AlgoKitLogger
---

#### _class_ algokit_utils.config.AlgoKitLogger(name: str = 'algokit-utils-py', level: int = logging.NOTSET)

Bases: `logging.Logger`

Instances of the Logger class represent a single logging channel. A
“logging channel” indicates an area of an application. Exactly how an
“area” is defined is up to the application developer. Since an
application can have any number of areas, logging channels are identified
by a unique string. Application areas can be nested (e.g. an area
of “input processing” might include sub-areas “read CSV files”, “read
XLS files” and “read Gnumeric files”). To cater for this natural nesting,
channel names are organized into a namespace hierarchy where levels are
separated by periods, much like the Java or Python package namespace. So
in the instance given above, channel names might be “input” for the upper
level, and “input.csv”, “input.xls” and “input.gnu” for the sub-levels.
There is no arbitrary limit to the depth of nesting.

#### _classmethod_ get_null_logger() → logging.Logger

Return a logger that does nothing (a null logger).
