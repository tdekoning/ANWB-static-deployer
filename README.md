Specs deployer
=============

Features
-------
* Settings opslag (JSON)

Todo
-------

### Must have

* Source code uitchecken uit SVN/GIT
* Java builder aanspreken voor bouwen
* Synchen van gebouwde source naar server (rsync, alleen bij deploy, niet dry-run)
* Varnish cache invalidatie
* Overzichtelijk overzicht van branches en tags
* Trunk, branches, tags en revisies deployen
* Preview, www of beide
* Ont/Ontw/Test/Acc/Prod
* Dry-run mogelijkheid

### Could have

* Zoekfunctionaliteit branches/tags
* Server status (welke versie draait waar?)
* Server status gadget feed
* 1 persoon tegelijk deployen (statusfeed van deployment (via comet) naar iedereen)
* Errors, bij bouwen of iets anders, duidelijk aangeven
* Automatische deployments (bijv. bij commit of elke x minuten)
* Markering voor omgeving (duidelijk aangeven waar gedeployed wordt)
* Logging (Wie, wat, waar, wanneer)
