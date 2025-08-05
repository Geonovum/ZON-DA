# inleiding

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
leefomgeving niet oplossen. Door ons te baseren op feiten, verkleinen we de kans
op vertragingen en faalkosten als gevolg van verkeerde besluiten. Daardoor kunnen
we het tempo van de wederombouw van Nederland verhogen en de daarmee
gepaard gaande kosten verlagen. In de tweede plaats omdat beelden, denk aan
digitale kaarten of zelfs digitale tweelingen1, mensen bij complexe vraagstukken
vaak meer zeggen dan woorden. Ze kunnen een grote bijdrage leveren aan
participatie en aan betere besluitvorming bij gebiedsinrichting.
Daarom is het belangrijk dat we de informatiepositie van burgers, bedrijven en
overheden op het terrein van de fysieke leefomgeving versterken en zorgen voor
een meer datagedreven aanpak van het leggen van ruimtelijke puzzels op
uiteenlopende schaalniveaus.
```

<>Waardeketen

<>Datagedreven werken en moderne tools (modellen, Digital Twins, Large Language Models) vereisen vergaande, snelle toegang tot goed gedefinieerde data

<>Bronhouders van data eisen soevereiniteit om toegang tot data te kunnen controleren/bepalen

<>Daarvoor is een robuuste, uitbreidbare en toekomstvaste architectuur nodig

<>EU: federatief datadelen is de toekomst, als tegenhanger tegenover traditioneel, commercieel gevoelig platformdenken

Deze architectuur, gericht op de doelen zoals verwoord in Zicht op Nederland, noemen we de Dataspace voor de Fysieke Leefomgeving – DSFL

## Waarom een 'Dataspace Fysieke Leefomgeving'?
<korte verwijzing/uitleg Zicht op Nederland>

Gegevens uitwisselen die gaan over de fysieke leefomgeving is een brede scope. Als je daar ook nog het ‘aansluiten op maatschappelijke vraagstukken, nu en in de toekomst’ bij optelt, wordt de potentiële scope nog breder. Een dergelijk brede scope is niet te vangen in een enkelvoudig ‘systeem’ of ‘platform’. 

<generiek karakter, veel partijen, zowel bronnen als gebruik van data>
<aan kunnen blijven op opkomende technologische sprongen, zoals AI, Digital Twins en Natuurlijke Taal modellen>
<ontwikkeltempo kan per partij verschillend zijn, dat is bij ‘een systeem’ of ‘een platform’ een stuk moeilijker te organiseren>

<positionering, ook t.o.v. Basisregistraties GEO>

<EU, IBDS elementen toevoegen>
<implementatie kan op verschillende tempo’s gebeuren bij de verschillende partijen, als de partijen zich allemaal aan de afgesproken architectuur en bijbehorende standaarden houden>

<governance bij ‘de federatie’ leggen (GI-Beraad)>

<rol VRO: regie voeren op de samenwerking en aansluiten partijen/gegevens>

<standaarden kunnen geregeld worden op nog hoger niveau: NL Overheid, EU>

## Uitgangspunten en samenhang met andere initiatieven
DSFL ontstaat, wordt niet ‘gebouwd’, ontstaat door ‘bouw’ bij aangesloten stakeholders. Er worden voor DSFL zo min mogelijk nieuwe dingen ontwikkeld. DSFL sluit zo veel mogelijk aan op bestaande standaarden en voorzieningen.

Overheid, bedrijfsleven en ‘eenieder’ zowel aan de bron-kant als aan de gebruikers-kant
Private en publieke data
Open en toegangsbeperkte data

NGII:
- Stelsel van (Geo-)Basisregistraties
- PDOK
- NGR (metadata)

Samenhang:
- EU
- IBDS
- DisGEO (met name de relatie met SOR) <is DisGEO vastgesteld? Zou juni 2021 gebeurd moeten zijn>
- FDS
- DGDOO
- Andere dataspace-initiatieven of soortgelijk
  - DSO
  - DMI
  - DSGO
- Zicht op Nederland: Datafundament
- Zicht op Nederland: Digital Twins

<Scope: andere registraties? Wettelijk kader?>

## Globale Architectuurbeschrijving Zicht op Nederland
<copy/paste Architectuurbeschrijving 0.4? Of verwijzen in Inleiding?>


<hier meteen een plaat erin gooien van het eindresultaat? Wel mooie stijl, dan vullen we hem in/leggen we hem uit gedurende de rest van het document, á la een detective>

<verbinding met datawaardeketen met plaatje>

## De referentie-architecturen: OpenDEI, FDS
Overkoepelend: OpenDEI/DSSC, inclusief plaatje architectuurstack OpenDEI/DSSC . Ook al komen geografie en Ruimtelijke Ordening als zodanig niet voor in de lijst van voorziene dataspaces van DSSC – vanwege het feit dat daar vooral naar industrieën is gekeken en niet naar overheden op zichzelf).

Voor de stelselfuncties geldt de referentie-architectuur zoals FDS die gebruikt:
<plaatje stelselfuncties FDS>

Voor de indeling van de FDS stelselfuncties is gebruik gemaakt van twee Europese achitectuurraamwerken:
- Het (new) European Interoperability Framework (EIF) wat betreft het onderkennen van de 4 dimensies (‘layers’) van interoperabiliteit: technische interoperabiliteit, semantische interoperabiliteit, organisatorische interoperabiliteit en juridische (‘legal’) interoperabiliteit.
- het bouwstenenmodel van OPENDEI.

Hierbij is het OPENDEI model toegepast voor de opdeling van de technische stelselfuncties. Voor de organisatorische stelselfuncties is een eigen structuur toegepast omdat in het OPENDEI model de organisatorische en juridische interoperabiliteitsdimensies uit het EIF niet zijn uitgewerkt. Daarbij is de opdeling in coördinerende en faciliterende organisatorische stelselfuncties ontleend aan de stelselarchitectuur van het stelsel van basisregistraties, de voorganger (en startpunt van het ontstaan) van Zicht op Nederland. 

Dit document richt zich op de technische stelselfuncties. Uitgangspunt is om de organisatorische stelselfuncties zo min mogelijk te raken en in eerste instantie (dus voor de scope van deze architectuur) deze te beleggen in het huidige Stelsel van Basisregistraties.  


