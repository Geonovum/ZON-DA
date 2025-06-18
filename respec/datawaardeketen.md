# Datawaardeketen Zicht op Nederland

![Samenhangende data](./respec/media/samenhangende_data.png)

Een plaatje kun je invoegen door het te plaatsen in de respec/media map en dan een verwijzing in markdown te doen:

```
![<beschrijving plaatje>](./respec/media/<naam plaatje>)
```
Als je het plaatje geforceerd een bepaalde grootte wil geven kan het ook met een html tag:

```
<img src="./respec/media/naam plaatje>" alt="beschrijving plaatje" width="900">
```
(waarbij width het aantal pixels aangeeft van de breedte van het plaatje)

## Waardeketen (Paul/Peter)

Waardeketen zoals beschreven in de visie Zicht op Nederland


- Stappen in de waardeketen
    - Verzamelen
    - Analytics
    - Interpretatie
    - Actie
- Relatie tussen waardeketen en bedrijfsprocessen
    - Datagedreven werken
    - Beheren van gegevens
    - Randvoorwaarden om waardeketen te laten werken zoals dataparagrafen in opdrachten die je uitbesteedt
    - Informatiebehoeften in de keten

Originele input van René:
- breed, moeilijk om vast omlijnde processen te onderscheiden
- plaatje en uitleg Datawaardeketen
- Scope “RO/beleidscyclus” uitleggen, samenhang met datawwaardeketen
- Vanuit enterprise architectuur zeg je bijv niks over inwinnen en inwineisen en kwaliteitsniveaus, maar bijv. wel over stapelbaarheid, dus elk object een ID en elk dataproduct een geo-referentie
- Volgen datawaardeketen: ongestructureerde data -> gestructureerde data -> geaggregeerde data -> analyse/visualisatie data. 
- Voorzieningenarchitectuur (functionele componenten): machineleesbaar, mensleesbaar, identificatie/toegang, terugmelding etc
- verwijzing naar “Patronen”

## Afbakening van bronnen en gebruik (Ine/Arno)

## Metadata (Ine/Niels)

- Begrippen en informatie/gegevensmodellen – per stap in de waardeketen
- Dataset metadata (ISO 1911X, DCAT) – per stap in de waardeketen
- Data lineage – per stap in de waardeketen
- Toegankelijkheid van metadata voor alle toepassingsdomeinen – generiek doorzoekbaar maken

## Voorwaarden en afspraken (Danny/Rene/Ine)
Een datastelsel is vooral een afsprakenstelsel. De deelnemende partijen spreken af om te voldoen aan een set van basisvoorwaarden, waardoor vervolgens gegevens sneller kunnen worden uitgewisseld. Tegelijkertijd kunnen er ook meer specifieke afspraken tussen aanbieders en afnemers worden gemaakt, als dat nodig is. Denk bijvoorbeeld aan dat bepaalde afnemers specifieke eisen kunnen stellen aan de kwaliteit van gegevens of de wijze waarop ze worden aangeboden. Basisvoorwaarden gaan bijvoorbeeld over rechten en plichten van deelnemers, financiering, de wijze van identificeren en autoriseren van deelnemers, de manier waarop gegevens moeten worden aangeboden en de metagegevens die daarbij moeten worden aangeleverd. Door dit soort afspraken onstaat er een bepaald vertrouwensniveau tussen de deelnemers. Het datastelsel is daarmee ook een vertrouwensnetwerk.

Een kernvraag is hoe met financiering van het datastelsel wordt omgegaan. Het lastige daarbij is dat de waarde vooral bij gebruikers liggen, terwijl de kosten vooral liggen bij de inwinning en opwaardering van gegevens. Als er dus geen andere  financieringsstromen zijn waar vanuit kan worden gegaan, dan is het nodig om afspraken te maken over het vastleggen van het gebruik en onderlinge verrekening. Hiervoor kan gebruik worden gemaakt van een derde partij die de uitwisselingen van gegevens logt en de financiële consequenties daarvan kan bepalen. Een dergelijke derde partij wordt ook wel een clearing house genoemd.

Het is belangrijk dat rechten, plichten en aansprakelijkheden tussen aanbieders en afnemers van gegevens goed zijn geborgd. Een gegevensleveringsovereenkomst (ook wel: GLO) is een verzameling afspraken tussen een aanbieder en een afnemer van gegevens. In een GLO leggen partijen vast welke gegevens worden gedeeld, onder welke voorwaarden, en wie verantwoordelijk is. Onderdeel van een GLO zijn ook de kwaliteitseisen die zijn afgesproken en die daarom bij de uitvoering van de overeenkomst moeten worden geborgd, gecontroleerd en gemonitord. Het is ook mogelijk om meer gedetailleerde afspraken in een GLO vast te leggen zoals de afgesproken kwaliteitsregels, het gebruikte gegevensmodel en/of de gebruikte formaten. 

Er wordt ook wel onderscheid gemaakt tussen algemene afspraken en specificaties op operationeel niveau. In het voorgestelde Rijksbreed gegevensdelingsbeleid worden deze respectievelijk een gegevensleveringsprotocol (GLP) en een gegevensleversetspecificatie (GLS) genoemd. Vanuit de AVG is het belangrijk dat een verwerkingsverantwoordelijke duidelijke afspraken maakt met de verwerkers d.m.v. verwerkersovereenkomsten. Een dergelijke verwerkersovereenkomst kan ook als een gegevensleveringsovereenkomst worden gezien en gebruikt. Het is ook mogelijk om afspraken over gegevens en gegevenskwaliteit in machineleesbare vorm vast te leggen en zelfs geautomatiseerd te controleren. 

De vraag is hoe het concept van gegevensleveringsovereenkomsten past op datastelsels. Deze twee kunnen als complementair worden gezien. Overeenkomsten die in de context van een datastelsel worden opgesteld hoeven dan alleen te beschrijven dat wat niet reeds onderdeel is van de basisvoorwaarden van het datastelsel of op andere wijze in het datastelsel aanwezig is. Zou zouden bijvoorbeeld metagegevens over het te hanteren gegevensmodel in het datastelsel in een stelselcatalogus beschikbaar kunnen zijn. De onderdelen van de eerder genoemde GLP en GLS documenten in het rijksbreed gegevensdelingsbeleid zouden dan ook in de context van het datastelsel moeten worden beoordeeld en geplot. Er is een kritische blik nodig op de te administreren gegevens en de criteria die daarbij gelden, om administratieve overlast te voorkomen. Het datastelsel voor de fysieke leefomgeving zou een registratie moeten bieden voor het administreren van de noodzakelijke gegevens. Hiermee ontstaat inzicht en transparantie in welke uitwisselingen tussen deelnemers verlopen.

Er zullen ook afspraken moeten worden gemaakt over de te gebruiken protocollen en standaarden voor de uitwisseling van gegevens. Daarbij wordt typisch onderscheid gemaakt tussen het control plane en het data plane. Het control plane is gericht op het ondersteunen van het proces, terwijl de data plane de daadwerkelijke overdracht van gegevens verzorgd. De laatste is toenemend minder relevant aan het worden, mede ingegeven door een algemene beweging naar het gebruik van open standaarden en RESTful API's. Het control plane is verantwoordelijk voor het controleren van relevante afspraken, zoals het controleren van de autorisatieregels (policies) die gelden voor het afnemen van de gegevens. Hiervoor zijn meerdere standaarden in ontwikkeling zoals het Dataspace Protocol, AuthZEN en de Nederlandse Federated Service Connectivity (FSC) en de standaarden die worden ontwikkeld in het project Federatieve Toegangsverlening. Tegelijkertijd zijn dit soort standaarden vooral relevant voor het uitwisselen van gevoelige gegevens, terwijl veel geografische gegevens als open data beschikbaar zijn.  

Het gebruik van bepaalde standaarden heeft ook impact op de voorzieningen die deelnemers nodig hebben om deel te nemen aan het datastelsel. In algemene zin wordt in de context van data spaces gesproken over connectoren. Een connector is een technische voorziening waarmee een deelnemer aansluit op de data space. Voor het internationale Dataspace Protocol is er inmiddels een verzameling van standaard connectoren beschikbaar. Als gebruik wordt gemaakt van bijvoorbeeld de FSC standaard, dan vraagt dit weer andere connectoren (inways/outways) en voorzieningen. Als uitgebreide voorzieningen nodig zijn voor het controleren van autorisatieregels (bijvoorbeeld op basis van de AuthZEN standaard) dan is er ook een policy engine nodig om deze autorisatieregels te controleren.

Dit betekent:
- Deelnemers conformeren aan de basisvoorwaarden die worden gesteld door het datastelsel en hierop wordt getoetst bij toelating
- Er vinden technische controles plaats bij het uitwisselen van gegevens om te bepalen of afnemers voldoen aan voorwaarden zoals autorisatieregels

Openstaande issues: 
- Is er een clearing house nodig in het datastelsel?
- Hoe gaan de concepten GLP en GLS toepassen in het datastelsel?
- Gaat het datastelsel gebruik maken van het Dataspace Protocol, AuthZEN, FSC en/of FTV en in welke omstandigheden?
- Welke connectoren hebben deelnemers nodig?

## Gegevenskwaliteit (Danny)
De kwaliteit van gegevens is een belangrijke bepalende factor voor de bruikbaarheid ervan. In de context van een datastelsel is dat niet anders. Het inzichtelijk maken en verbeteren van de  kwaliteit van de gegevens die beschikbaar zijn in het datastelsel verdient daarom expliciete aandacht. Dit is in de basis een verantwoordelijkheid van bronhouders, maar ook afnemers hebben daarbij een verantwoordelijkheid. De eisen die worden gesteld aan de kwaliteit van gegevens zijn nu eenmaal afhankelijk van het gebruik. Er is dan ook expliciete afstemming over kwaliteitseisen nodig tussen bronhouders en afnemers. Afnemers zouden ook twijfels over de juistheid van gegevens expliciet moeten terugmelden aan bronhouders.

In de waardeketen verandert de rol van kwaliteit. Daar waar de waarnemingen nog ver af staan van specifiek gebruik, zullen informatieproducten juist heel specifiek gericht zijn op een bepaald gebruik. Dat betekent dat aan een informatieproduct veel meer specifieke eisen zullen worden gesteld dan aan een registratie van waarnemingen. Tegelijkertijd is de kwaliteit waarmee de waarnemingen zijn gemeten sterk bepalend voor de kwaliteit in de rest van de keten. De uitdaging is dus vooral om afstemming in de gehele keten te organiseren. Daarnaast is essentieel dat er in alle schakels van de keten aandacht is voor het continu  verbeteren van de kwaliteit van gegevens. Gegevenskwaliteit is nu eenmaal niet een eenmalige inspanning.

Er is in de context van NORA eeen [stappenplan](https://www.noraonline.nl/wiki/Stappenplan_gegevenskwaliteit) ontwikkeld voor het verbeteren van de kwaliteit van gegevens dat bronhouders een handreiking biedt (zie volgende figuur). Het geeft aan welke stappen voor een specifieke gegevensverzameling zou moeten worden gezet. De basis is dat er voldoende algemene afspraken en inrichting aanwezig zijn in de vorm van strategie, beleid, governance, architectuur, processen en systemen. Voor het verbeteren van de kwaliteit van een specifieke gegevensverzameling is vervolgens nodig om de context te bepalen, de gegevens te beschrijven in de vorm van metagegevens, de kwaliteitsregels en -eisen te beschrijven, de kwaliteit te meten, afwijkingen en andere signalen zoals terugmeldingen af te handelen en verbetermaatregelen uit te voeren. In de context van de basisregistraties zijn al allerlei kwaliteitsdashboards en rapportages beschikbaar om dit soort processen te ondersteunen. Het verbeteren van de kwaliteit van gegevens staat relatief los van het datastelsel. Het is vooral een randvoorwaarde.

![Stappenplan gegevenskwaliteit](./respec/media/stappenplan_gegevenskwaliteit.png)

In een datastelsel ligt de nadruk op het uitwisselen van gegevens. Daarbij is het vooral belangrijk dat er informatie en metagegevens beschikbaar zijn over kwaliteit. Dat betekent dat in de metagegevens van de dataset die beschikbaar wordt gesteld ook informatie over gegevenskwaliteit is opgenomen. Hiervoor zijn in een aantal standaarden voorgedefinieerde eigenschappen opgenomen. Daarnaast kan in de beschrijvende tekst informatie over de gewenste en gemeten gegevenskwaliteit worden opgenomen. Binnen de Nederlandse overheid is er een raamwerk met een standaard begrippenkader beschikbaar voor gegevenskwaliteit: het [NORA raamwerk gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit). Deze biedt standaard termen, maar ook standaard formuleringen om uitdrukking te geven aan de kwaliteit van gegevens. Dit raamwerk is liefst ook de basis voor het definiëren en meten van gegevenskwaliteit, zodat kwaliteit vanaf het begin op een uniforme manier wordt beschouwd.

Dit betekent:
- Het expliciet maken van de kwaliteit van gegevens die beschikbaar worden gesteld in de metagegegevens
- Het gebruik van de standaard begrippen in het NORA raamwerk gegevenskwaliteit

## Publicatie (Arno)
- Publicatie van metadata – per stap in de waardeketen
