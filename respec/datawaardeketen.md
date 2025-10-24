## Datawaardeketen
De doelarchitectuur van DSFL is gebaseerd op de datawaardeketen, zoals die is gemodelleerd in Zicht op Nederland. DSFL wordt zodanig ontworpen dat deze datawaardeketen kan worden opgebouwd - voor een deel generiek, voor een deel vraaggestuurd.

Dit hoofdstuk beschrijft de datawaardeketen en de implicaites voor (het ontwerp van) de DSFL.

## De begrippen 'gegevens' en 'data' in de context van DSFL

Om meteen met de deur in huis te vallen:
> De termen 'gegevens' en 'data' worden in deze Doelarchitectuur gebruikt als synoniem.

> Zicht op Nederland, en daarmee de scope van DSFL, is gericht op het delen van data in een ruimtelijke ('geo-')context.
Veel data in DSFL zal geografische data zijn, maar dat hoeft niet. Voor bepaalde maatschappelijke opgaven kan het nodig zijn om data die niet per se geografisch is opgeslagen (zoals projectmetingen) toch af te beelden op geografische ondergronden.

Om deze combinatie van geografische en niet-geografische data mogelijk te maken bevat DSFL een aantal hulpcomponenten. Zie hiervoor het hoofdstuk Componenten.

In DSFL worden niet alleen de klassieke data uitgewisseld. In het kader van datagedreven werken zijn er ook meer en meer informatie-producten die binnen de datawaardeketen uitgewisseld worden. 

> Onder 'gegevens' of 'data' in het kader van DSFL worden verstaan niet alleen klassieke data, maar ook daarvan afgeleide informatie-producten en andere digitale objecten (‘digital assets’ of ‘digital artefacts’).

Voorbeelden hiervan zijn algoritmen die door modellen en Digital Twins kunnen worden uitgewisseld, of interne parameters van AI-modellen. Het vinden en uitwisselen van deze digitale objecten kan leiden tot specifieke extra afspraken binnen DSFL. Denk hierbij bijvoorbeeld aan het inrichten van een 'App Store' waarin Digital Twins en relevante algoritmen kunnen worden gevonden (en 'gedownload'). 

DSFL is daarmee een heterogeen, dynamisch gegevenslandschap dat binnen de vastgestelde regels (zie Governance) kan groeien.

## Het begrip 'metadata' in de context van DSFL

Een dataspace is een ecosysteem waarin data- en serviceproviders en potentiële consumenten/gebruikers samen worden gebracht. Aangezien in DSFL men niet per definitie 'op elkaar aangewezen is' voor een vastgesteld probleem of proces, dient een succesvolle 'matchmaking' plaats te vinden tussen vraag en aanbod. Er worden in feite relaties opgebouwd die leiden tot datadeling. Om matchmaking te faciliteren, zijn beschrijvingen vereist van de beschikbare gegevens: metadata van de data en diensten die worden aangeboden, inclusief informatie over de voorwaarden waaronder ze worden aangeboden. De consument/gebruiker kan zo de juiste gegevens voor de juiste vraag identificeren en wordt doorgeleid naar de aanbieder.

<>


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


## Datasets en databronnen: een dynamisch ringenmodel 

Voor het begrippen 'dataset' en 'databron' grijpen we terug op de definitie van data.overheid.nl:

**Dataset:** een beschrijving van een verzameling van data van een data-eigenaar. Dit kan bijvoorbeeld één tabel met data zijn of een verzameling van tabellen met samenhangende data, bijvoorbeeld alle tabellen per jaar over de periode 2005-2016.  
**Databron:** een verwijzing naar de daadwerkelijke vindplaats van data die in de dataset wordt benoemd. Een dataset bevat één of meer databronnen. In het voorbeeld is er één databron in de vorm van één tabel met data of meerdere  databronnen overeenkomend met het aantal tabellen per jaar.

In het kader van Zicht op Nederland zijn de (geo-)Basisregistraties de belangrijkste databronnen voor het leveren van basis datasets.
Naast de basisregistraties bestaan er diverse andere – vaak domein specifieke - datasets bij een veelheid van databronnen. Sommige datasets zijn inhoudelijk aanvullend op die in de basisregistraties, andere overlappen deels hiermee. De kwaliteit (juistheid, volledigheid, actualiteit) is variabel. Ook de mate van toegankelijkheid en bruikbaarheid varieert: sommige datasets zijn publiek beschikbaar en gestandaardiseerd, andere niet. Daarnaast verschilt de governance: is beheer duurzaam geregeld en gefinancierd.

Op basis van deze kenmerken classificeren we datasets in een ringenmodel: 
- Buitenring: datasets die niet landelijk gestandaardiseerd of gedeeld zijn;
- Ring 2: datasets die wél gestandaardiseerd zijn, maar alleen binnen het oorspronkelijke doel worden gebruikt. Er is geen garantie op beschikbaarheid of actualisatie, zeker bij projectmatige datasets;
- Ring 1: gestandaardiseerd, gedeeld en financieel geborgd. Dit zijn duurzame geo-datasets zonder wettelijke grondslag, maar met breed gebruik en langdurig beheer;
- Kern ('Ring 0'): de basisregistraties. Deze zijn juridisch, organisatorisch en financieel geborgd. Er geldt een wettelijke verplichting tot het maken, gebruiken en terugmelden van gegevens.

Daarnaast zijn er datasets waarvan het bestaan niet publiek bekend is – deze bevinden zich “buiten de buitenring”. 

Het ringenmodel toont daarmee schematisch een data-ecosysteem in zijn geheel (zie figuur).

<figure><img src='respec/media/ringenmodel_datasets.png' alt='Classificatie van databronnen in Ringmodel.' style='width: 100%;'></img><figcaption>Classificatie van databronnen in Ringmodel.<i></i></figcaption></figure>

> DSFL gebruikt het ringenmodel om datasets en/of -bronnen te classificeren op basis van toegepaste standaardisatie, beschikbaarheid voor gebruik, duurzame borging en gebruiksplicht. Daarmee wordt bepaald op welke manier en in welke context een dataset bruikbaar is of kan worden binnen de DSFL.  

De ontwikkeling van DSFL richt zich primair op datasets uit de kern ('ring 0') en de ring 1 van het ringenmodel. Hierdoor heeft de DSFL maximale meerwaarde en kan deze meerwaarde snel worden gemunt. 

> De doelarchitectuur van DSFL richt zich a priori op de ontsluiting van datasets in de ringen 'kern' ('ring 0') en ring 1.

> Het ringenmodel (en daarmee DSFL) is dynamisch: datasets/-bronnen kunnen 'binnen de ringen' terecht komen door te voldoen aan een aantal technische, organisatorische en beheersmatige (governance-)eisen.

Hierdoor ontstaat een DSFL dat zich kan blijven aanpassen aan de maatschappelijke vraagstukken, één van de belangrijke eisen die aan het stelsel zijn gesteld.

## Afbakening van gegevens, bronnen en gebruik (Ine/Arno)

De huidige (geo-)Basisregistraties voeren de registraties van fysieke en virtuele objecten (volgens NEN3610) van de DSFL. Naast deze Basisregistraties bevat de DSFL allerlei gegevens over deze/gekoppeld aan gebieden, die niet alleen door de overheid maar ook door andere partijen kunnen worden geleverd en beheerd.

Voor de afbakening van de gegevens in DSFL geldt dat deze wordt gevormd door het gebruik, niet door het aanbod. Aangaande het gebruik staat in de kaders (geparafraseerd): 'data die nodig zijn voor het oplossen van de maatschappelijke opgaven'. Dat is een brede definitie, waarbij op voorhand geen keuze kan worden gemaakt tussen bijvoorbeeld open en gesloten data en data die van overheidspartijen afkomstig is of bijvoorbeeld van een commerciële partij.

> De volgende categoriën data maken onderdeel van de DSFL:
- open publieke data
- gesloten publieke data
- open data van derden
- gesloten data van derden

Er worden dus a priori geen bronnen uitgesloten. De categorisering in ringen (zie de vorige paragraaf) is echter wel van toepassing: deze bepaalt aan welke eisen een databron moet voldoen om als volwaardige partij in het stelsel te functioneren. Deze Doelarchitectuur beschrijft waar deze eisen over gaan.

Het gebruik van de data in DSFL heeft ten principale wel een afbakening, namelijk een doelbinding. Deze doelbinding bestaat wettelijk al lang, maar impliciet gebruikt. In de DSFL (of beter gezegd: in het principe van 'dataspaces' in het algemeen) wordt deze doelbinding echter expliciet gemaakt door middel van een contract bij het uitwisselen van de gegevens.

> Het delen van data binnen DSFL heeft een contractuele grondslag, zowel voor levering als gebruik.

Deze grondslag kan minimaal zijn, zoals in het geval van 'open data'. Het is wel een belangrijk beginsel, omdat hiermee principieel wordt geregeld dat gebruik van gegevens gebonden wordt aan een onderliggende afspraak - en daarmee de weg vrij maakt om gebruik van data te analyseren. Tevens worden hiermee patronen mogelijk zoals betalen voor bepaald gebruik of het controleren op doelbinding.

<>gratis vs betaalde data

Een kenmerk van een dataspace is dat deze rondom use cases wordt ingericht. In het geval van DSFL zijn dit de maatschappelijke vraagstukken. Hierbij worden alle stakeholders betrokken, zodat de vragende partijen ook in contact zijn met de aanbiedende partijen en vraag en aanbod op elkaar kunnen worden afgestemd. Dit heeft als consequentie dat niet alle data over de fysieke leefomgeving op voorhand in de dataspace fysieke leefomgeving beschikbaar moet worden gesteld. 

> Per maatschappelijke vraag/use case wordt bepaald welke data nodig is.

De 'basis-set' van beschikbare data wordt gevormd door de datasets in de kern ('ring 0') van het ringenmodel. Deze vallen onder de wet op de Basisregistraties. <>

Bij de term 'afbakening' hoort ook een set regels en een bepaalde Governance. De overheid speelt de rol van ‘primus inter pares': zij treedt in het data-ecosysteem op als ‘gewone’ speler. Daarbij speelt zij ook een andere rol spelen: als stelselverantwoordelijke. Zie hiervoor het hoofdstuk Governance.


## Gegevenskwaliteit (Danny)
De kwaliteit van gegevens is een belangrijke bepalende factor voor de bruikbaarheid ervan. In de context van een datastelsel is dat niet anders. Het inzichtelijk maken en verbeteren van de kwaliteit van de gegevens die beschikbaar zijn in het datastelsel verdient daarom expliciete aandacht. Dit is in de basis een verantwoordelijkheid van bronhouders, maar ook afnemers hebben een verantwoordelijkheid. De eisen die worden gesteld aan de kwaliteit van gegevens zijn nu eenmaal afhankelijk van het gebruik. Er is dan ook expliciete afstemming over kwaliteitseisen nodig tussen bronhouders en afnemers. 

> De kwaliteit van gegevens wordt expliciet gemaakt in de metagegegevens

Afnemers zouden ook twijfels over de juistheid van gegevens expliciet moeten terugmelden aan bronhouders. Dit is reeds ingebed in het stelsel van Basisregistraties en daarmee een impliciete eis voor de registraties in ring 0 van het datafudament van Zicht op Nederland - en dus ook voor DSFL.

> De registraties in de 'kern' (ring 0) van Zicht op Nederland hebben een terugmeldvoorziening voor het verbeteren van de kwaliteit van de gegevens in de bron

In de waardeketen verandert per stap de rol van kwaliteit. Daar waar de waarnemingen nog ver af staan van specifiek gebruik, zullen informatieproducten daarentegen juist heel specifiek gericht zijn op een bepaald gebruik. Dat betekent dat aan een informatieproduct meer specifieke eisen zullen worden gesteld dan aan een registratie van waarnemingen. Tegelijkertijd is de kwaliteit waarmee de waarnemingen zijn gemeten sterk bepalend voor de kwaliteit in de rest van de keten. De uitdaging is dus vooral om afstemming in de gehele keten te organiseren. 

> Het is essentieel dat er in alle schakels van de datawaardeketen aandacht is voor het continu verbeteren van de kwaliteit van gegevens. Gegevenskwaliteit is nu dus geen éénmalige inspanning.

Er is in de context van NORA een [stappenplan](https://www.noraonline.nl/wiki/Stappenplan_gegevenskwaliteit) ontwikkeld voor het verbeteren van de kwaliteit van gegevens dat bronhouders een handreiking biedt (zie volgende figuur). Het geeft aan welke stappen voor een specifieke gegevensverzameling zou moeten worden gezet. De basis is dat er voldoende algemene afspraken en inrichting aanwezig zijn in de vorm van bijvoorbeeld strategie, beleid, governance, architectuur, processen en systemen. Voor het verbeteren van de kwaliteit van een specifieke gegevensverzameling is vervolgens nodig om de context te bepalen, de gegevens te beschrijven in de vorm van metagegevens, de kwaliteitsregels en -eisen te beschrijven, de kwaliteit te meten, afwijkingen en andere signalen zoals terugmeldingen af te handelen en verbetermaatregelen uit te voeren. In de context van de basisregistraties zijn al allerlei kwaliteitsdashboards en rapportages beschikbaar om dit soort processen te ondersteunen. Het verbeteren van de kwaliteit van gegevens staat relatief los van het datastelsel. Het is vooral een randvoorwaarde voor de waardeketen zelf. 

![Stappenplan gegevenskwaliteit](./respec/media/stappenplan_gegevenskwaliteit.png)

In een datastelsel ligt de nadruk op het uitwisselen van gegevens. Daarbij is het vooral belangrijk dat er informatie en metagegevens beschikbaar zijn over kwaliteit. 

> In de metagegevens van een dataset die beschikbaar wordt gesteld in DSFL wordt ook informatie over gegevenskwaliteit opgenomen

Hiervoor zijn in een aantal standaarden voorgedefinieerde eigenschappen opgenomen. Daarnaast kan in de beschrijvende tekst informatie over de gewenste en gemeten gegevenskwaliteit worden opgenomen. Binnen de Nederlandse overheid is er een raamwerk met een standaard begrippenkader beschikbaar voor gegevenskwaliteit: het [NORA raamwerk gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit). Deze biedt standaard begrippen, maar ook standaard formuleringen om uitdrukking te geven aan de kwaliteit van gegevens. Dit raamwerk is liefst ook de basis voor het definiëren en meten van gegevenskwaliteit, zodat kwaliteit vanaf het begin op een uniforme manier wordt beschouwd.

> In de DSFL wordt de kwaliteit van gegevens uitgedrukt in termen van de standaard begrippen in het NORA raamwerk gegevenskwaliteit

## Publicatie van beschikbare data

Na elke stap in de datawaardeketen kunnen data beschikbaar komen die voor (her-)gebruik in aanmerking komen. Deze data dient echter kenbaar gemaakt te worden Om deze 'matchmaking' tussen gegevensaanbieder en -afnemer/gebruiker plaats te kunnen laten vinden <>
<>Deze stap wordt de 'Publicatie' van gegevens genoemd.

In de federatieve gedachte is de aanbieder van data niet altijd dezelfde als de eigenaar van de data. Het publiceren is wel een operationele, intensieve activiteit die wel (geautomatiseerd) bij de gegevensaanbieder wordt uitgevoerd. De gegevenseigenaar bepaalt echter wel wat en in hoeverre bepaalde gegevens gepubliceerd mogen worden.

> Om herbruikbaarheid van gegevens te faciliteren en te stimuleren, worden in DSFL beschikbare gegevens door de gegevensaanbieder volgens aanwijzingen van de gegevenseigenaar bekendgemaakt ('gepubliceerd')

Binnen de context van DSFL geldt dat de plaats waar de data wordt gepubliceerd een (voor de DSFL) centrale component is, die minimaal de volgende functionaliteit bevat:
- Providers kunnen (a) deze beschrijvingen als aanbiedingen beschikbaar stellen, waardoor ze zichtbaar worden voor alle (of een deel van) andere deelnemers aan de dataruimte die als potentiële consumenten worden beschouwd, en (b) aanbiedingen beheren in overeenstemming met hun levenscyclus (publiceren, bijwerken, verwijderen) en de toegang ertoe beheren;
- Consumenten kunnen tussen aanbiedingen zoeken om te bepalen of de kenmerken en voorwaarden voldoen aan hun behoeften en vereisten, en vervolgens toegang aanvragen tot de aangeboden data of dienst.

> DSFL bevat een metadata-catalogus voor het publiceren en terugvinden van informatie over de binnen DFSL bestaande datasets en diensten

Het publiceren van data in DSFL bestaat voor een dataprovider uit de volgende stappen:
- metadata over kwaliteit, de link naar de dienst (URI), de API beschrijving, de gebruikervoorwaarden (creative commons kan als default worden genomen), etc. vaststellen 
- metadata formeren conform het NL profiel op ISO 19115;
- metadata opslaan in de DSFL metadata-component.

In specifieke gevallen kan hiervan worden afgeweken. Voorbeelden waar kan worden afgeweken zijn Werkversies, operationele data en onderzoeksdata.

In [DSSC Blueprint - Publication and Discovery](https://dssc.eu/space/BVE2/1071256989/Publication+and+Discovery) is meer informatie te vinden.

<> Nader uit te werken:
-  <> Harvesten (moeten we dat wel willen? Dat is toch niet federatief?) van relevante metadata duidelijk opnemen, ook dat dit geldt richting (groot)aanbieders van data als naar andere (sectorale/nationale/europese/wereldwijde) catalogi
- In hoeverre zijn de data-services zelf-beschrijvend?
- Is de geo-vertaal functionaliteit onderdeel van deze 'component'?


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

## Overige fspraken over ontsluiten <>

IdV: Bij de meeste organisaties zijn de bestaande afspraken uit het GI-beraad voor het beheer en ontsluiten van ruimtelijke data voor hergebruik bekend en worden tot op zekere hoogte nageleefd.  

De afspraken over ontsluiten van geodata lijken minder bekend bij de individuele gemeenten en waterschappen. Publicatie en hergebruik van (geo)data wordt relevanter met de opkomst van smart cities en digital twins. Het is van belang de gemeenten en waterschappen te stimuleren de afspraken na te komen. Dat geldt overigens ook voor alle andere overheden: de basis van ontsluiten van (geo)data moet op orde zijn om mee te kunnen doen in het federatief data delen in bijvoorbeeld de dataspace fysieke leefomgeving. 

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

