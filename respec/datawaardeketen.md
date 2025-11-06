## Datawaardeketen
De doelarchitectuur van DSFL is gebaseerd op de datawaardeketen, zoals die is gemodelleerd in Zicht op Nederland. DSFL wordt zodanig ontworpen dat deze datawaardeketen kan worden opgebouwd - voor een deel generiek, voor een deel vraaggestuurd.

Dit hoofdstuk beschrijft de datawaardeketen en de implicaites voor (het ontwerp van) de DSFL.


## De waardeketen (Paul/Peter /Stephan) <>aanvullen/afmaken keten

In de Meerjarenvisie Zicht op Nederland is de waardeketen gedefinieerd als een opeenvolging van activiteiten die stap voor stap waarde toevoegen aan data om de bruikbaarheid ervan in een besluitvormingsproces te maximaliseren. De keten omvat het inwinnen van gegevens, ontsluiten en analyseren ervan en het gebruiken van de inzichten die hiermee verworven worden. (zie onderstaande figuur). 
Deze keten ontvouwt zich volgens het Data–Informatie-Kennis-Handelingsperspectief principe.  

<figure><img src='respec/media/Datawaardeketen_ZoN_architectuur.svg' alt='Principe van de datawaardeketen in Zicht op Nederland.' style='width: 100%;'></img><figcaption>Principe van de datawaardeketen in Zicht op Nederland.<i></i></figcaption></figure>


Data omvat hier de feitelijke waarnemingen en metingen aan een object in de fysieke leefomgeving. Hierbij wordt niet alleen geo-data ingewonnen, maar ook meer beschrijvende gegevens, bijvoorbeeld de dimensies van een gebouw, de kenmerken van een voertuig, de beschrijving van grondlagen in een boring, etcetera).

Informatie ontstaat indien er door een kennishouder waarde aan deze data wordt toegevoegd. In de context van ZoN zien we dit als een interpretatie van de gegevens naar een 2D kaartbeeld of 3D model binnen het domein waarin de gegevens zijn waargenomen. Voorbeelden zijn de bodemkaart van Nederland, gemaakt door Wageningen University & Research op basis van bodemkundige waarnemingen, of de topografische kaart van Nederland, gemaakt door het Kadaster op basis van waarnemingen aan de ruimtelijke inrichting van Nederland.

Kennis ontstaat indien informatie uit verschillende domeinen wordt samengebracht om inzicht te krijgen in het gedrag/veranderingen van een bepaald fenomeen. Bijvoorbeeld het Nederlands Hydrologisch Instrumentarium. Hierin werken verschillende kennispartners samen om gegevens over onder andere de hydro-geologische opbouw, monitoring van de grondwaterstand, oppervlaktewater en neerslag te combineren om inzicht te krijgen in de veranderingen van het (grond)watersysteem in Nederland.

Wijsheid ontstaat indien de via de datawaardeketen verkregen inzichten gebruikt worden bij het opstellen van datagedreven handelingsperspectieven. De keten is dus gestoeld op algemene datasets, die richting het handelingsperspectief steeds specifieker worden geanalyseerd en geïnterpreteerd.
In de referentie architectuur Digital Twin voor de fysieke leefomgeving   is een dataproduct beschreven als een combinatie van gegevens, technologie, en (reken)modellen die ervoor zorgt dat de data eenvoudig in de werkprocessen van de gebruiker kan worden toegepast. Deze definiete omvat alles wat in de datawaardeketen wordt gedaan om informatie en wijsheid te creëren, evenals de technologie die wordt aangeboden om over de gehele waardeketen producten aan te bieden. Zo is bijvoorbeeld de topografische kaart van Nederland een digital twin van de bovengrondse inrichting van Nederland, en het NHI een digital twin van het Nederlandse watersysteem.
Het is niet noodzakelijk dat de hele waardeketen doorlopen wordt om tot waardevolle resultaten te komen. Ingewonnen data kunnen direct in het werkproces waarin ze ontstaan toegepast worden. Elke schakel kent daarnaast een afslag naar hergebruik door derden die vaak weer andere doelen hebben dan het doel behorend bij de oorspronkelijke reden van inwinning. Zo neemt de waarde van data, uitgedrukt in meerwaarde voor het bedrijfsproces of de processtap van het proces waarnaar de data of informatie ontsloten wordt, op verschillende manieren toe.

> Binnen het stelsel m.b.t. de fysieke leefomgeving kan data na elke stap in de waardeketen beschikbaar komen voor gebruik door anderen.

Dit principe heeft een gevolg, namelijk dat het wel duidelijk moet zijn wat de waarde/kwaliteit van de data is.

> Voor elk gegevens moet bekend zijn wat de waarde/kwaliteit in de waardeketen is.

Deze waarde/kwaliteit is een metagegeven van de data.

Inwinnen
Voor het inwinnen van zinvolle data is het nodig dat er eisen gesteld worden aan de kwaliteit van de waarnemingen en metingen. Deze doelarchitectuur beschrijft niet in detail hoe waarnemingen leiden tot data. Er kunnen wel eisen gesteld worden aan de waarnemingen. Daarom is er voor waarnemingen een datamodel nodig.

> Het uitgangspunt is: er is een informatiemodel voor waarnemingen.

Een voorbeeld hiervan is het "Informatiemodel Metingen" van de Waterschappen.

Interpreteren en visualiseren
_Nog uit te werken: staat nu hierboven. Wellicht nog tekst nodig om de term 'domein' te duiden._



## Publicatie van beschikbare data

Na elke stap in de datawaardeketen kunnen data beschikbaar komen die voor (her-)gebruik in aanmerking komen. Deze data dient echter kenbaar gemaakt te worden Om deze 'matchmaking' tussen gegevensaanbieder en -afnemer/gebruiker plaats te kunnen laten vinden. Deze stap wordt de 'Publicatie' van gegevens genoemd.

In de federatieve gedachte is de aanbieder van data niet altijd dezelfde als de eigenaar van de data. Het publiceren is wel een operationele, intensieve activiteit die wel (geautomatiseerd) bij de gegevensaanbieder wordt uitgevoerd. De gegevenseigenaar bepaalt echter wel wat en in hoeverre bepaalde gegevens in welke stap van de waardeketen gepubliceerd mogen worden.

> Om herbruikbaarheid van gegevens te faciliteren en te stimuleren, worden in DSFL beschikbare gegevens door de gegevensaanbieder volgens aanwijzingen van de gegevenseigenaar bekendgemaakt ('gepubliceerd')

Binnen de context van DSFL geldt dat de plaats waar de data wordt gepubliceerd een (voor de DSFL) centrale component is, die minimaal de volgende functionaliteit bevat:
- Providers kunnen (a) deze beschrijvingen als aanbiedingen beschikbaar stellen, waardoor ze zichtbaar worden voor alle (of een deel van) andere deelnemers aan de dataruimte die als potentiële consumenten worden beschouwd, en (b) aanbiedingen beheren in overeenstemming met hun levenscyclus (publiceren, bijwerken, verwijderen) en de toegang ertoe beheren;
- Consumenten kunnen tussen aanbiedingen zoeken om te bepalen of de kenmerken en voorwaarden voldoen aan hun behoeften en vereisten, en vervolgens toegang aanvragen tot de aangeboden data of dienst.


## Vocabulaire (nieuw toegevoegd, Arno)

Ine gaat dit samenvoegen met paragraaf over metadata

Arno: Uit overleg 1-9-2025 nog de opmerking dat er overlap is met par. 3.5 Semantisch (Danny, Walter) EN dat vocabulaires/waardelijsten een belangrijk onderdeel zijn van DSFL, dit voegt waarde/kennis toe aan data!

Met hetzelfde doel, het vinden en gebruiken van de data producten, beheren vocabulaireproviders een vocabulary, die wordt gebruikt om data producten te annoteren en te beschrijven (inclusief ontologieën, referentie data modellen, metadata-elementen). Vocabulaireproviders leveren deze (domein-specifieke) vocabulaires en hun verwijzingen naar het informatiemodel, dat de basis vormt voor de beschrijving van data producten.

Nader uit te werken:
- Behoort de vocabulaire bij de bron of is het onderdeel van het datastelsel?

## Uitwisselen van metadata (moet dit naar interoperabiliteit?)

De DCAT standaard wordt in Europa en daarbuiten steeds meer ingezet om domeinoversteigend metadata uit te wisselen. DCAT-AP-NL faciliteert de uitwisseling van metadata tussen Nederlandse datacatalogi en EU datacatalogi.

Op het Europese applicatieprofiel [DCAT-AP-3.0] worden domein specifieke profielen ontwikkeld, zoals geoDCAT-AP en healthDCAT-AP, die meestal een verdere specificatie van eigenschappen en extra specifieke eigenschappen bevatten. Deze extra eigenschappen van domein specifieke Europese profielen zijn niet opgenomen in DCAT-AP-NL, deze kunnen aanvullend op DCAT-AP-NL worden toegepast. Eventueel kan er ook een Nederlands profiel op een Europes domein specifieke profiel worden ontwikkeld.

DCAT-AP-NL faciliteert de uitwisseling van metadata tussen Nederlandse datacatalogi en EU datacatalogi. Daarmee vervangt het niet de domeinspecifieke standaarden zoals ISO 19115. Vanuit domeinspecieke standaarden en profielen, zoals bijvoorbeeld INSPIRE, die gebaseerd is op ISO 19115, kunnen er profielen op DCAT worden ontwikkeld die ook een mapping van elementen bevat van de domein specifieke standaard naar DCAT. geoDCAT is daar een voorbeeld van.

- Begrippen en informatie/gegevensmodellen – per stap in de waardeketen
- Dataset metadata (ISO 1911X, DCAT) – per stap in de waardeketen
- Data lineage – per stap in de waardeketen
- Toegankelijkheid van metadata voor alle toepassingsdomeinen – generiek doorzoekbaar maken


## Data lineage

DFSFL implementeert het principe van federatief datadelen voor alle partijen en processen die zich bewegen/voordoen in de fysieke leefomgeving. Dat is nogal een brede scope: er zijn potentieel veel partijen en veel data aan de orde. Daarom is het belangrijk dat de eigenaar van data te allen tijde het gebruik en de verwerking van 'zijn' data in de hele datawaardeketen kan volgen, al is het alleen al om eventuele problemen en fouten te kunnen ondervangen. 

Deze controle-mogelijkheid heet 'data lineage'.

DSFL bevat afspraken, standaarden en voorzieningen voor het kunnen uitvoeren van data lineage. 

<>welke? Niels?

## Overige afspraken over ontsluiten <>

DSFL gaat, technisch gezien, over de koppeling en het (her-)gebruik van geodata en data in een geografische context.

Publicatie en hergebruik van (geo-)data wordt relevanter met de opkomst van concepten als smart cities en digital twins. Het is van belang dat alle partijen, en zeker de partijen in ring 0 en 1, hun (geo-)data zodanig kunnen ontsluiten dat zij mee kunnen doen in het federatief data delen.

Winst bij alle overheden valt vooral te halen door bij opdrachtverlening aan een externe partij of uitvoerende overheidsorganisatie een dataparagraaf op te nemen, waarin verantwoordelijkheid voor de data wordt vastgelegd en afspraken worden gemaakt over het beheer en ontsluiten van de gecreëerde data. 

Het ontsluiten (en bijhouden) van alle geodata is een enorme klus als dat bij een organisatie nu niet op orde is. Prioriteren is dan nodig. De prioritering voor het ontsluiten van geodata kan aan de hand van de prioritaire vraagstukken en informatiebehoeftes worden vormgegeven die uit het proces van vraagarticulatie van Zicht op Nederland naar voren komen en door de vraag van andere organisaties.

Zowel voor realisatie van FDS als voor een werkende Datapace Fysieke Leefomgeving is goede metadata cruciaal. In het GI-beraad is afgesproken dat het ontsluiten van data voor hergebruik expliciet te borgen in de aanpak voor een Dataspace Fysieke Leefomgeving (en aangezien realisatie daarvan binnen de kaders van FDS moet passen, daarmee ook mee te werken aan een goed functionerend FDS).


Daar waar mogelijk te borgen dat voor nieuwe datasets het ontsluiten van data voor hergebruik direct wordt uitgevoerd (om zo de ‘reparatie-opgave’ niet groter te laten worden;

Voor de ontsluiting van bestaande geodata als dat nog niet op orde is, prioriteren aan de hand van:
- de (mogelijke) prioritaire vraagstukken en informatiebehoeftes die uit het proces van vraagarticulatie van Zicht op Nederland naar voren komen.  
- de vraag van een andere organisaties die behoefte heeft aan data.

Bij opdrachtverlening aan een externe partij of uitvoerende overheidsorganisatie een dataparagraaf op te nemen waarin verantwoordelijkheid voor de data wordt vastgelegd en afspraken worden gemaakt over het beheer en ontsluiten van de gecreëerde data. De leden van het GI Beraad worden geadviseerd om te profiteren van de ervaringen van RVO rond de dataparagraaf bij externe opdrachtverlening en de inkoopvoorwaarden van de provincies.

Proces op hoofdlijnen:
1. Duiden van de noodzaak voor een bepaalde gegevensset vanuit de behoefte
2. Afstemming tussen afnemer en bronhouder over behoeften en voorwaarden voor het aanbieden
3. Positioneren van de huidige en gewenste situatie van de gegevensset in het ringenmodel, en gewenste veranderingen op basis daarvan
4. Bepalen of de behoefte breder is en hoe dit opgelost moet worden (met name financiering en governance)
5. Aanbrengen gewenste verandering, kan variëren van simpelweg toegankelijk maken tot nieuwe inwinning van gegevens

