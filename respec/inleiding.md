# Inleiding

Uit de aanbiedingsbrief aan de tweede kamer: Meerjarenvisie Zicht op Nederland, d.d. 12 februari 2024: 

```
Op 6 oktober jl. heb ik u de contourennotitie Nota Ruimte aangeboden. Centraal
hierin staan de te maken keuzes over de inrichting van onze fysieke leefomgeving.
Keuzes die ervoor moeten zorgen dat ook toekomstige generaties verzekerd zijn
van een hoge kwaliteit van leven.

Om tot gedegen en gedragen keuzes te kunnen komen, is het belangrijk om op
zowel lokaal, regionaal als landelijk niveau te beschikken over de juiste informatie.
Dat wil zeggen over op feiten gebaseerd beelden van alle facetten van de fysieke
leefomgeving. In de eerste plaats omdat feiten er toe doen. Zonder een complete
en gezamenlijke informatiepositie kunnen we de opgaven in de fysieke
leefomgeving niet oplossen.

Door ons te baseren op feiten, verkleinen we de kans
op vertragingen en faalkosten als gevolg van verkeerde besluiten. Daardoor kunnen
we het tempo van de wederombouw van Nederland verhogen en de daarmee
gepaard gaande kosten verlagen. In de tweede plaats omdat beelden, denk aan
digitale kaarten of zelfs digitale tweelingen, mensen bij complexe vraagstukken
vaak meer zeggen dan woorden. Ze kunnen een grote bijdrage leveren aan
participatie en aan betere besluitvorming bij gebiedsinrichting.

Daarom is het belangrijk dat we de informatiepositie van burgers, bedrijven en
overheden op het terrein van de fysieke leefomgeving versterken en zorgen voor
een meer datagedreven aanpak van het leggen van ruimtelijke puzzels op
uiteenlopende schaalniveaus.
```

In deze aanbieding staan de elementen die kaderstellend zijn voor de architectuur voor de uitvoering van Zicht op Nederland:
* Inhoudelijk aansluiten op de Nota Ruimte
* De scope is de fysieke leefomgeving
* Aansluiten op de 'opgaven in de fysieke leefomgeving'
* Het realiseren van een complete en gezamenlijke informatiepositie (burgers, bedrijven en overheden)
* Het (kunnen) leveren van beelden
* Het ondersteunen van een meer datagedreven aanpak van de vraagstukken

## Aansluiten op de Nota Ruimte

## 'Fysieke Leefomgeving' als scope

## Aansluiten op de opgaven in de fysieke leefomgeving

## Een complete en gezamenlijke informatiepositie

## Het kunnen leveren van beelden

## Baseren op feiten: een datagedreven aanpak
Bij datagedreven werken bepalen de (ruwe) data de richting waar de organisatie opgaat, niet vooraf geformuleerde verwachtingen of doelstellingen. Het is duidelijk dat deze 'feiten' hoge eisen stellen aan de data.

Voor datagedreven werken worden moderne, vaak complexe tools ingezet, zoals modellen, Digital Twins, Large Language Models. Deze tools vereisen vergaande, snelle toegang tot goed gedefinieerde data.

Eisen die datagedreven werken stelt:
* Snelle toegang tot data, in wisselende hoeveelheden
* Goede vindbaarheid van data
* Goed gedefinieerde data
* Bekende (liefst hoge) kwaliteit van data

Een afgeleide eis is dat het stelsel kan blijven aansluiten op opkomende technologische sprongen. AI, Digital Twins en Natuurlijke Taal modellen worden hierboven al genoemd, maar ook andere (technische) sprongen, zoals quantum computing, moeten tijdig kunnen worden geïmplementeerd of op worden aangesloten. Deze wendbaarheid is een belangrijke ontwerpfactor, niet alleen technisch maar ook organisatorisch ('governance').

## Een 'Dataspace Fysieke Leefomgeving' - DSFL
Gegevens uitwisselen die gaan over de fysieke leefomgeving is een brede scope. Als je daar ook nog het ‘aansluiten op maatschappelijke vraagstukken, nu en in de toekomst’ bij optelt, wordt de potentiële scope nog breder. Een dergelijk brede scope is niet te vangen in een enkelvoudig ‘systeem’ of ‘platform’. De oplossing ligt in een stelsel van semi-autonoom optredende bronnen en afnemers, waarbij iedereen zich zodanig gedraagt dat er een samenhangend stelsel ontstaat, met een hoge mate van flexibiliteit en decentralisatie. Dit wordt 'federatief datadelen' genoemd. Federatief datadelen is de tegenhanger van het traditioneel, commercieel gevoelig platformdenken.

Zo'n federatief stelsel van afspraken, zowel organisatorisch, semantisch als informatie-technisch, is een complex geheel. Daarvoor is een robuuste, uitbreidbare en toekomstvaste architectuur nodig. Gelukkig bestaan er, ook gepropageerd door de EU, een aantal belangrijke initiatieven om deze afspraken te ordenen en te standaardiseren. De stelsels die in deze context ontstaan worden 'dataspaces' genoemd.

Het aantal potentiële databronnen in DSFL is groot en afkomstig van een groot aantal publieke en private partijen. Dat gegeven maakt een decentrale oplossing voor de DSFL een voor de hand liggende, zo niet noodzakelijke keuze (of je zou alle bronnen moeten nationaliseren). De kunst is om deze bronnen in samenhang te kunnen ontsluiten. Daarom moeten de aangesloten zich houden aan strikte regels om de samenhang en kwaliteit van de dienstverlening binnen DSFL/NDFL te kunnen garanderen. Een aantal ondersteunende zaken voor de aangesloten partijen worden in de dataspace uit handen genomen door centrale componenten. De Overheid is stelselverantwoordelijke voor de DSFL/NDFL, en daarmee facilitator, regelgever en handhaver. Tevens is de Overheid opdrachtgever voor het beheer van de centrale componenten. 

De eisen die Zicht op Nederland stelt aan de ontsluiting van de informatie komen overeen met de doelstellingen waarvoor dataspaces worden ontworpen. Daarnaast is er op het gebied van Geo-informatie reeds een functionerend 'stelsel van Geo-basisregistraties' waarbij meerdere partijen aangesloten zijn, ieder met een bepaalde autonomie op het vlak van bijvoorbeeld governance en ontwikkeltempo. Een federatief stelsel (dataspace) is geschikter om gezamenlijk vooruit te komen dan het ontwikkelen van een gezamenlijk 'systeem' of 'platform'.
> De architectuur die nodig is om de doelen van Zicht op Nederland te halen, wordt ontworpen als een dataspace en wordt de Dataspace Fysieke Leefomgeving genoemd - DSFL.

> De keuze voor federatief datadelen (en daarmee voor het doen ontstaan van DSFL) sluit aan op de strategie van de nederlandse overheid:
>* De Interbestuurlijke Datastrategie (IBDS)
>* De ontwikkeling van gezamenlijke afspraken over het bouwen van federatieve datastelsels onder overheidsbrede afspraken, het 'Federatief Datastelsel' (FDS)
>* De Nederlandse Datastrategie (NDS)

Op het niveau van de EU zijn/worden een aantal architecturen voor dataspaces ontwikkeld. Aansluiten op deze ontwikkelingen is een beetje een bewegend doel, maar kan via stevige oplijning via FDS worden bewerkstelligd.

> De governance van het geheel ('de federatie') kan synchroon aan het stelsel van basisregistraties worden ingericht, dus via het GI-beraad, waarbij de regie op de samenwerking is belegd bij het Ministerie van VRO.

## Uitgangspunten en samenhang met andere initiatieven
DSFL bestaat uit een ‘federatie’ van spelers die gegevens delen over de fysieke leefomgeving. Er bestaan ook andere domeinen, zoals het Sociaal domein en het Zorgdomein. In samenspel met in FDS ontwikkelde principes kan DSFL federeren met elk ander domein dat ook deze regels en standaarden hanteert. Dit is een belabgrijk onderdeel van de Interbestuurlijke DataStrategie (IBDS). Er ontstaat een ‘gefedereerd stelsel van gefedereerde stelsels’, waarin elk stelsel zijn eigen specialisme dekt. Voor de 'eindgebruiker' is dit een uniform bevraagbaar landschap met in theorie letterlijk oneindige mogelijkheden. 

Zoals reeds gezegd sluit DSFL zoveel mogelijk aan op bestaande afspraken, initiatieven, standaarden en (eventueel centraal ontwikkelde) componenten. Er worden voor DSFL zo min mogelijk nieuwe dingen ontwikkeld.

> DSFL ontstaat dus en wordt niet ‘gebouwd’; het ontstaat door ‘bouw’ bij aangesloten stakeholders. DSFL kan gezien worden als een uitbreiding of een vernieuwde versie van het Stelsel van Geo-Basisregistraties. Er hoeft geen nieuw governance-model te worden bedacht. Het bestaande GI-Beraad kan d.m.v. een gezamenlijk ontwikkel-portfolio DSFL in stappen laten ontstaan, er is geen 'big bang' scenario.

* Overheid, bedrijfsleven en ‘eenieder’ zowel aan de bron-kant als aan de gebruikers-kant
* Private en publieke data
* Open en toegangsbeperkte data
* Combineren van geo- en niet-geo informatie

<a>NGII</a>:
- Stelsel van (Geo-)Basisregistraties
- <a>PDOK</a>
- <a>NGR</a> (metadata)

Samenhang:
- DisGEO (met name de relatie met SOR) <is DisGEO vastgesteld? Zou juni 2021 gebeurd moeten zijn>
- DGDOO
- Andere dataspace-initiatieven of soortgelijk
  - DSO
  - DMI
  - DSGO
- Zicht op Nederland: Datafundament
- Zicht op Nederland: Digital Twins

<Scope: andere registraties?>

## De referentie-architecturen: OpenDEI, FDS
Overkoepelend: OpenDEI/DSSC, inclusief plaatje architectuurstack OpenDEI/DSSC . Ook al komen geografie en Ruimtelijke Ordening als zodanig niet voor in de lijst van voorziene dataspaces van DSSC – vanwege het feit dat daar vooral naar industrieën is gekeken en niet naar overheden op zichzelf).

> Voor de stelselfuncties in DSFL geldt de referentie-architectuur zoals FDS die gebruikt:
<plaatje stelselfuncties FDS>

Voor de indeling van de FDS stelselfuncties is gebruik gemaakt van twee Europese achitectuurraamwerken:
- Het (new) European Interoperability Framework (EIF) wat betreft het onderkennen van de 4 dimensies (‘layers’) van interoperabiliteit: technische interoperabiliteit, semantische interoperabiliteit, organisatorische interoperabiliteit en juridische (‘legal’) interoperabiliteit.
- het bouwstenenmodel van OPENDEI.

Hierbij is het OPENDEI model toegepast voor de opdeling van de technische stelselfuncties. Voor de organisatorische stelselfuncties is een eigen structuur toegepast omdat in het OPENDEI model de organisatorische en juridische interoperabiliteitsdimensies uit het EIF niet zijn uitgewerkt. Daarbij is de opdeling in coördinerende en faciliterende organisatorische stelselfuncties ontleend aan de stelselarchitectuur van het stelsel van basisregistraties, de voorganger (en startpunt van het ontstaan) van Zicht op Nederland. 

> De doelarchitectuur van ZoN en daarme de architectuur van DSFL richt zich op de technische stelselfuncties. Uitgangspunt is om de organisatorische stelselfuncties zo min mogelijk te raken door deze in eerste instantie (dus voor de scope van deze architectuur) te beleggen in het huidige Stelsel van Basisregistraties.  

FDS kent een aantal beperkingen in de scope waardoor DSFL een aantal eigen keuzes moet maken:
* FDS kent geen waardeketen, waardoor features als 'combineren van geo- en niet-geo informatie' en 'aansluiten op Digital Twins' niet expliciet worden ondersteund
* FDS levert (dus) geen ondersteunende componenten, waardoor hiervoor altijd expliciete keuzes moeten worden gemaakt binnen DSFL
* FDS beperkt zich tot de uitwisseling van openbare gegevens tussen overheidspartijen. Het regelen van meer granulaire toegang - zowel op organisatie-/rol-/persoonsniveau als op 'niveau van openbaarheid' valt dus binnen de specifieke architectuur van DSFL

> DSFL maakt expliciet eigen afspraken naast FDS voor de ondersteuning van de waardeketen (zowel in standaarden/richtlijnen als componenten), andere componenten voor diverse stelselfuncties en voor het regelen van granulaire toegang tot gegevens in het stelsel

## Wettelijk kader
<Marjolein vragen, kort bondig stukje>


<verbinding met datawaardeketen met plaatje>



