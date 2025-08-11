# Datawaardeketen

## Waardeketen (Paul/Peter /Stephan)
In de Meerjarenvisie Zicht op Nederland is de waardeketen gedefinieerd als de keten van het inwinnen van gegevens, ontsluiten en analyseren tot het gebruiken van de inzichten die hiermee verworven worden. De waardeketen is daarbij gevisualiseerd in onderstaande figuur.

![Figuur: Datawaardeketen in Zicht op Nederland](respec/media/ZoN_Visie_Waardeketen.png)

Data moeten ingewonnen en ontsloten worden, vervolgens gecombineerd, geanalyseerd en gevisualiseerd alvorens het bruikbare informatie is. In deze waardeketen levert elke schakel op zichzelf staande producten op en voegt daarbij waarde toe aan de data. 

Het is niet noodzakelijk dat de hele waardeketen doorlopen wordt om tot waardevolle resultaten te komen. Ingewonnen data kunnen direct in het werkproces waarin ze ontstaan toegepast worden. Als de ontsluiting goed geregeld is, kunnen gebruikers aan de slag met data uit diverse bronnen. Door daarbij data te combineren, in een bepaalde context te plaatsen of door data te interpreteren en daarbij kennis toe te voegen, wordt de waarde vergroot. Elke schakel kent daarnaast een afslag naar hergebruik door derden die vaak weer andere doelen hebben dan het doel behorend bij de oorspronkelijke reden van inwinning. Zo neemt de waarde van data, uitgedrukt in meerwaarde voor het bedrijfsproces of de processtap van het proces waarnaar de data of informatie ontsloten wordt, op verschillende manieren toe.

> Binnen het stelsel t.b.v. de fysieke leefomgeving zijn data na elke stap in de waardeketen beschikbaar voor anderen.

Inwinnen: waarnemingen en metingen

Bij het inwinnen van data, via waarnemingen en metingen, wordt niet alleen geo-data ingewonnen, maar worden ook andere data van de relevante objecten ingewonnen en geregistreerd. De waarneming of meting heeft dan betrekking op een object in de fysieke leefomgeving, waarmee er altijd een relatie is met geo-data. 

De kenmerken van het object plus specifieke domein informatie bepalen of een ingewonnen object met kenmerken in een specifieke dataset wordt opgenomen. De waarnemingen worden aan de ene kant bepaald door het domein van de waarnemingen (bijvoorbeeld 'beschermde bomen') en aan de andere kant waar je de waarneming voor gebruikt (bijvoorbeeld 'beschermen bomen met historische waarde', of 'beschermen van bomen die een waterloop markeren').  

_iets meer over metingen, want dat zijn contextloze waarnemingen? (vraag RK)_

Voor het inwinnen van zinvolle data is het nodig dat er eisen gesteld worden aan de kwaliteit van de waarnemingen en metingen. Deze doelarchitectuur beschrijft niet in detail hoe waarnemingen leiden tot data. Er kunnen wel eisen gesteld worden aan de waarnemingen. 

> Het uitgangspunt is: er is een informatiemodel voor waarnemingen.

Een voorbeeld hiervan is het "Informatiemodel Metingen" van de Waterschappen.  

Interpreteren en visualiseren

_Nog uit te werken:_
- Informatie ontstaat zodra de data in de context is geplaats. Informatie kan worden gebruikt voor het begrijpen en voorspellen van gedrag en voor de onderbouwing van een handelingsperspectief.  
- Kennis/wijsheid = Informatie * Ervaring Vaardigheden en Attitude (Houding)
- Kennis zit verweven in de modellen en daarbij is er sprake van interpretaties. De datawaardeketen is daarmee niet alleen data gedreven maar ook kennis gedreven.
- Wat is de reikwijdte van een domein? In de plaat vakinhoudelijk, grondwater etc. 
Van links naar rechts wordt waarde toegevoegd. Het ontstaan van data heeft zijn eigen dynamiek. Er moet bekend zijn wat de actualiteit is. 
- Term dataproduct uitleggen.

## Indeling van datasets: een dynamisch ringenmodel 
Naast de basisregistraties bestaan er diverse andere – vaak domein specifieke - datasets. Sommige zijn inhoudelijk aanvullend op de basisregistraties, terwijl andere deels hiermee overlappen. De kwaliteit (juistheid, volledigheid, actualiteit) is variabel. Ook de mate van toegankelijkheid en bruikbaarheid varieert: sommige datasets zijn publiek beschikbaar en gestandaardiseerd, andere niet. Daarnaast verschilt de governance. Vaak is het beheer niet duurzaam geregeld en gefinancierd.
Op basis van deze kenmerken classificeren we datasets in een ringenmodel: 

- Buitenring: datasets die niet landelijk gestandaardiseerd of gedeeld zijn.
- Ring 2: datasets die wél gestandaardiseerd zijn, maar alleen binnen het oorspronkelijke doel worden gebruikt. Er is geen garantie op beschikbaarheid of actualisatie, zeker bij projectmatige datasets.
- Ring 1: gestandaardiseerd, gedeeld en financieel geborgd. Dit zijn duurzame geo-datasets zonder wettelijke grondslag, maar met breed gebruik en langdurig beheer.
- Kern: de basisregistraties. Deze zijn juridisch, organisatorisch en financieel geborgd. Er geldt een wettelijke verplichting tot het maken, gebruiken en terugmelden van gegevens.

Daarnaast zijn er datasets waarvan het bestaan niet publiek bekend is – deze bevinden zich “buiten de buitenring”. 

Het ringenmodel toont daarmee schematisch een data-ecosysteem in zijn geheel (zie figuur).

![Figuur: Classificatie van databronnen in Ringmodel.](respec/media/ringenmodel_datasets.png)

> DSFL gebruikt het ringenmodel om datasets / bronnen te classificeren op basis van toegepaste standaardisatie, beschikbaarheid voor gebruik, duurzame borging en gebruiksplicht. Daarmee wordt bepaald op welke manier en in welke context een dataset bruikbaar is of kan worden binnen de DSFL.  

Voor de DSFL gebruiken we daarom datasets uit de kern en de 1e ring van het ringmodel _die een landelijke dekking hebben?? (vraag RK)_. Hierdoor heeft de DSFL  maximale meerwaarde. Daarnaast moeten ze gestandaardiseerd en duurzaam beschikbaar zijn om aangesloten processen optimaal te kunnen laten functioneren.

Datasets die niet gestandaardiseerd zijn en toegankelijk zijn niet bruikbaar binnen een duurzaam in te richten datawaardeketen. 

> De doelarchitectuur van DSFL richt zich a priori op de ontsluiting van datasets in de ringen 'kern' en ring 1.

> Het ringenmodel (en daarmee DSFL) is dynamisch: datasets/bronnen kunnen 'binnen de ringen' terecht komen door te voldoen aan een aantal technische, organisatorische en beheersmatige (governance-)eisen.

Hierdoor ontstaat een DSFL dat zich kan blijven aanpassen aan de maatschappelijke vraagstukken, één van de belangrijke eisen die aan het stelsel zijn gesteld.

## De datawaardeketen _(deze overlapt met de bovenstaande paragraaf én een onderstaande paragraaf - samenvoegen? (vraag RK)_
In de DSFL worden ketens ingericht volgens het principe van de datawaardeketen uit Zicht op Nederland. De datawaardeketen is een opeenvolging van activiteiten die stap voor stap waarde toevoegen aan data om de bruikbaarheid ervan in een besluitvormingsproces te maximaliseren. Deze keten ontvouwt zicht volgens de Data – Informatie- Kennis -Wijsheid principe. Hierin staat data voor een feitelijke waarneming in de werkelijkheid (bijvoorbeeld de dimensies van een gebouw, de kenmerken van een voertuig, de beschrijving van grondlagen in een boring etc.). Het geeft inzicht in hoe verschillende databronnen in een keten worden gebruikt en verrijkt door een combinatie van kennishouders om gericht toegevoegde waarde te hebben in het verkrijgen van een handelingsperspectief en het op basis hiervan nemen van geïnformeerde datagedreven besluiten. 

Informatie ontstaat indien er door een kennishouder waarde aan deze data wordt toegevoegd. In de context van ZoN zien we dit als een interpretatie van de gegevens naar een 2D kaartbeeld of 3D model binnen het domein waarin de gegevens zijn waargenomen. Voorbeelden zijn de bodemkaart van Nederland, gemaakt door Wageningen University & Research op basis van bodemkundige waarnemingen, of de topografische kaart van Nederland, gemaakt door het Kadaster op basis van waarnemingen aan de ruimtelijke inrichting van Nederland.

Kennis ontstaat indien informatie uit verschillende domeinen wordt samengebracht om inzicht te krijgen in het gedrag/veranderingen van een bepaald fenomeen. Bijvoorbeeld het Nederlands Hydrologisch Instrumentarium. Hierin werken verschillende kennispartners samen om gegevens over onder andere de hydro-geologische opbouw, monitoring van de grondwaterstand, oppervlaktewater en neerslag te combineren om inzicht te krijgen in de veranderingen van het (grond)watersysteem in Nederland. Uiteindelijk worden de hiermee verkregen inzichten gebruikt voor het maken van datagedreven handelingsperspectieven.

Een waardeketen is gebaseerd op algemeen bruikbare datasets, die richting het handelingsperspectief steeds specifieker worden geanalyseerd en geïnterpreteerd. De term Digital Twin is van toepassing zowel informatie producten als kennis producten. Zo is de topografische kaart van Nederland een digital twin van de bovengrondse inrichting van Nederland, en het NHI een digital twin van het Nederlandse watersysteem.

Bovenop de waardecreatie in de keten zelf, worden de gebruikte data, gerealiseerde producten en toegepaste modellen over de keten heen ontsloten via portalen en API’s. Als zodanig levert deze ontsluiting ook waarde op voor gebruik in werkprocessen van derden.

In de referentie architectuur Digital Twin voor de fysieke leefomgeving   is een dataproduct beschreven als een combinatie van gegevens, technologie, en (reken)modellen die ervoor zorgt dat de data eenvoudig in de werkprocessen van de gebruiker kan worden toegepast. Deze definiete omvat alles wat in de datawaardeketen wordt gedaan om informatie en wijsheid te creëren, evenals de technologie die wordt aangeboden om over de gehele waardeketen producten aan te bieden.

De DSFL ondersteunt de gehele datawaardeketen. De toegevoegde waarde van een datawaardeketen bestaat alleen indien de gehele keten duurzaam is ingericht. De keten start bij de organisaties die daadwerkelijk waarnemingen verrichten en deze aanleveren. Vervolgens wordt in verschillende stappen waarde toegevoegd door kennishouders om tenslotte de gecombineerde waarde te ontsluiten richting handelingsperspectieven. Het wegvallen van een van deze schakels maakt de datawaardeketen disfunctioneel.

![Figuur: Principe van de datawaardeketen in Zicht op Nederland.](respec/media/Waardeketen_en_DFL.png)

## Afbakening van bronnen en gebruik (Ine/Arno)

De huidige (geo-)Basisregistraties voeren de registraties van fysieke en virtuele objecten (volgens NEN3610 ) van de DSFL. Naast deze Basisregistraties bevat de DSFL/NDFL allerlei gegevens over deze/gekoppeld aan gebieden, die niet alleen door de Overheid, maar ook door andere partijen kunnen worden geleverd en beheerd. Onder gegevens verstaan we hier niet alleen klassieke data, maar ook daarvan afgeleide informatie-producten en andere digitale objecten (‘digital assets’ of ‘digital artefacts’), zoals algoritmen die door modellen en Digital Twins kunnen worden uitgewisseld. Zo ontstaat een heterogeen, dynamisch gegevenslandschap dat binnen de vastgestelde regels (zie Governance) kan groeien en waarbij de Overheid de rol van ‘primus inter pares’ speelt: zij treedt op als ‘gewone’ speler zowel als Stelselverantwoordelijke.

DSFL stelt eisen aan de spelers in het stelsel, maar neemt hen ook werk uit handen. Daarvoor zijn gecentraliseerde componenten voorzien die de dataspace faciliteren, bijvoorbeeld voor het vinden van data en voor het regelen van toegang. Dat betekent dat de huidige Basisregistraties aangepast moeten worden om (stapsgewijs) om te smelten  tot DSFL. De ‘centrale’ componenten kunnen betrokken worden, of deel worden van, de GDI of het FDS.

> Zicht op Nederland, en daarmee de scope van DSFL, is gericht op het delen van ruimtelijke data, waarbij het delen van data een contractuele grondslag heeft. 

> De volgende categoriën data maken onderdeel van de DSFL:
- open publieke data
- gesloten publieke data
- open data van derden
- gesloten data van derden

Uitgangspunt voor DSFL is dat de kosten die in de waardeketen van Zicht op Nederland zijn gemaakt zijn gedekt tot en met het moment van ontsluiten.

> Mochten er kosten verbonden zijn aan het gebruik van data dan wordt dat buiten het DSFL om verrekend. Er wordt niet voorzien in 'betalen naar gebruik'.

Een kenmerk van een dataspace is dat deze rondom maatschappelijke vraagstukken/use cases wordt ingericht. Hierbij worden alle stakeholders betrokken, zodat de vragende partijen ook in contact zijn met de aanbiedende partijen en vraag en aanbod op elkaar kunnen worden afgestemd. Dit heeft als consequentie dat niet alle data over de fysieke leefomgeving op voorhand in de dataspace fysieke leefomgeving beschikbaar moet worden gesteld. Per maatschappelijke vraag/use case zal moeten worden bepaald welke data daarbij nodig is.

_Discussiepunt: welke data maken we beschikbaar zodat makkelijker aan de vraag voldaan kan worden (zonder deze altijd al te kennen). Dit in de lijn van een keuze tussen een data warehouse, data lake of lakehouse. Is hier in het kader van bv dhet stelsel van Basisregistraties al iets zinnigs te zeggen?_

_Het onderscheid tussen een data warehouse, data lake of lakehouse is ons inziens niet relevant. Het gaat over het uitwisselen van gegevens en niet over het beheren/opslaan van gegevens?_

_De tekst in deze paragraaf overlapt met de tekst onder "Indeling van datasets" en zou daarmee geïntegreerd moeten worden._

## Metadata (Ine/Niels)

De DCAT standaard wordt in Europa en daarbuiten steeds meer ingezet om domeinoversteigend metadata uit te wisselen. DCAT-AP-NL faciliteert de uitwisseling van metadata tussen Nederlandse datacatalogi en EU datacatalogi.

Op het Europese applicatieprofiel [DCAT-AP-3.0] worden domein specifieke profielen ontwikkeld, zoals geoDCAT-AP en healthDCAT-AP, die meestal een verdere specificatie van eigenschappen en extra specifieke eigenschappen bevatten. Deze extra eigenschappen van domein specifieke Europese profielen zijn niet opgenomen in DCAT-AP-NL, deze kunnen aanvullend op DCAT-AP-NL worden toegepast. Eventueel kan er ook een Nederlands profiel op een Europes domein specifieke profiel worden ontwikkeld.

DCAT-AP-NL faciliteert de uitwisseling van metadata tussen Nederlandse datacatalogi en EU datacatalogi. Daarmee vervangt het niet de domeinspecifieke standaarden zoals ISO 19115. Vanuit domeinspecieke standaarden en profielen, zoals bijvoorbeeld INSPIRE, die gebaseerd is op ISO 19115, kunnen er profielen op DCAT worden ontwikkeld die ook een mapping van elementen bevat van de domein specifieke standaard naar DCAT. geoDCAT is daar een voorbeeld van.

- Begrippen en informatie/gegevensmodellen – per stap in de waardeketen
- Dataset metadata (ISO 1911X, DCAT) – per stap in de waardeketen
- Data lineage – per stap in de waardeketen
- Toegankelijkheid van metadata voor alle toepassingsdomeinen – generiek doorzoekbaar maken


## Bepaling van de waardeketens: inkijk in de governance
In de DSFL bestaan vele waardeketens. Deze waardeketens in de DSFL worden functioneel bepaald: welke handelingsperspectieven willen we ondersteunen en welke kennis, informatie en gegevens hebben we hiervoor vervolgens nodig? 

Dit is een vraagarticulatie proces waarbij de datawaardeketen ‘in omgekeerde volgorde’ wordt doorlopen. Hierbij zijn in de regel veel partijen betrokken. Deze partijen zijn bestuurlijk bij elkaar gebracht in het GI-beraad. 

> Het GI-beraad bepaalt wlke waardeketens door DSFL ondersteund worden. 

De (aangewezen) beheerder van DSFL organiseert vervolgens dat de juiste kennis, informatie en data producten beschikbaar zijn en dat de dataleveranciers hun gegevens aan de keten kunnen aanleveren. Hierin speelt de doelarchitectuur van Zicht op Nederland (en daarmee de afspraken waarmee partijen aansluiten op de DSFL) een belangrijke rol.

Het datadeelstelsel van Zicht op Nederland, DSFL, staat niet op zichzelf. Er zijn ook andere ketens en datadeelstelsels, voor diverse domeinen. Het is het meest efficiënt en effectief als deze verschillende datadeelstelsels op elkaar kunnen worden aangesloten. Een dataset/bron hoeft dan iet aan te sluiten op alle ketengebruikers, maar hoeft haar gegevens slechts in één stelsel kenbaar en vindbaar te maken. Andere stelsels kunnen hier dan op aansluiten, zodat op termijn er één virtueel datalandschap ontstaat waarmee gecombineerde vragen over alle domeinen heen kunnen worden beantwoord; een ideale invulling aan het principe ‘eenmalige inwinning – meervoudig gebruik’. Om dit te kunnen bewerkstelligen, sluit DSFL aan op de bredere afspraken die worden gemaakt in het kader van hetr 'Federatief Datastelsel', FDS.

> DSFL geeft zoveel als mogelijk invulling aan de afspraken en standaarden die worden vastgesteld in het kader van het FDS.

De bestuursorganen, zitting hebbend in het GI-beraad, hebben als eerste profijt van de aangeboden data, informatie en kennis bij het uitvoeren van hun taken. Daarnaast hebben ze het bestuurlijk mandaat om het inrichten van de waardeketen duurzaam vorm te geven. Zij organiseren het duurzaam bijhouden van kennis en informatie producten organiseren door het maken van (wettelijke) afspraken met kennisinstellingen, het ‘promoveren’ van datasets naar de classificatie ‘Ring 1’of ‘kern’ en het organiseren van het duurzaam aanleveren van gegevens door dataleveranciers aan deze datasets. Tenslotte zijn zij ook de grote inhoudelijke belanghebbenden in het proces van vraagarticulatie.

> Het is aan de betrokken bestuursorganen om te organiseren dat de kennis, informatie en data duurzaam beschikbaar zijn. 

![Figuur:  Inrichting van een datawaardeketen in de Dataspace Fysieke leefomgeving en de rol van bestuursorganen.](respec/media/Dataspace_fysieke_leefomgeving.png)

- Relatie tussen waardeketen en bedrijfsprocessen
    - Datagedreven werken
    - Beheren van gegevens
    - Randvoorwaarden om waardeketen te laten werken zoals dataparagrafen in opdrachten die je uitbesteedt
    - Informatiebehoeften in de keten

_Originele input van René_
- Koppeling met Voorzieningen/Componenten: machineleesbaar, mensleesbaar, aggregeren, vinden, identificatie/toegang, terugmelding, etc.

## Voorwaarden en afspraken (Danny/Rene/Ine)
Een datastelsel is vooral een afsprakenstelsel, waarbij de afspraken middels technische standaarden en protocollen worden uitgevoerd/geïmplementeerd. 

De deelnemende partijen spreken af om te voldoen aan een set van basisvoorwaarden, waardoor vervolgens gegevens efficiënt en effectief kunnen worden uitgewisseld. Basisvoorwaarden gaan bijvoorbeeld over rechten en plichten van deelnemers, de wijze van identificeren en autoriseren van deelnemers, de manier waarop gegevens moeten worden aangeboden en de metagegevens die daarbij moeten worden aangeleverd, maar ook organisatorische zaken zoals financiering. 

Tegelijkertijd kunnen er ook meer specifieke afspraken tussen aanbieders en afnemers worden gemaakt. Bepaalde afnemers kunnen specifieke eisen stellen aan de kwaliteit van gegevens of de wijze waarop ze worden aangeboden. 

Door dit soort afspraken onstaat er een bepaald vertrouwensniveau tussen de deelnemers. Het datastelsel is daarmee ook een vertrouwensnetwerk. Voor algemeen geldende afspraken rondom datadelen wordt invulling gegeven aan afspraken worden gemaakt in de context van FDS. Specifieke afspraken voor het (geo-)domein in het kader van Zicht op Nederland worden ingevuld door DSFL. Het is daarom belangrijk om te weten wat FDS wel en niet regelt.

> Vanuit DSFL wordt actief meegewerkt aan de ontwikkeling van FDS.

> Voor de inrichting van DSFL worden specifieke afspraken gemaakt en protocollen/standaarden aangewezen voor de zaken die niet door FDS worden gedekt.
 
_Een kernvraag is hoe met financiering van het datastelsel wordt omgegaan. Het lastige daarbij is dat de waarde vooral bij gebruikers liggen, terwijl de kosten vooral liggen bij de inwinning en opwaardering van gegevens. Als er dus geen andere  financieringsstromen zijn waar vanuit kan worden gegaan, dan is het nodig om afspraken te maken over het vastleggen van het gebruik en onderlinge verrekening. Hiervoor kan gebruik worden gemaakt van een derde partij die de uitwisselingen van gegevens logt en de financiële consequenties daarvan kan bepalen. Een dergelijke derde partij wordt ook wel een clearing house genoemd._

Het is belangrijk dat rechten, plichten en aansprakelijkheden tussen aanbieders en afnemers van gegevens goed zijn geborgd. Een gegevensleveringsovereenkomst (ook wel: GLO) is een verzameling afspraken tussen een aanbieder en een afnemer van gegevens. In een GLO leggen partijen vast welke gegevens worden gedeeld, onder welke voorwaarden, en wie verantwoordelijk is. Onderdeel van een GLO zijn ook de kwaliteitseisen die zijn afgesproken en die daarom bij de uitvoering van de overeenkomst moeten worden geborgd, gecontroleerd en gemonitord. Het is ook mogelijk om meer gedetailleerde afspraken in een GLO vast te leggen zoals de afgesproken kwaliteitsregels, het gebruikte gegevensmodel en/of de gebruikte formaten. 

Er wordt ook wel onderscheid gemaakt tussen algemene afspraken en specificaties op operationeel niveau. In het voorgestelde Rijksbreed gegevensdelingsbeleid worden deze respectievelijk een gegevensleveringsprotocol (GLP) en een gegevensleversetspecificatie (GLS) genoemd. Vanuit de AVG is het belangrijk dat een verwerkingsverantwoordelijke duidelijke afspraken maakt met de verwerkers d.m.v. verwerkersovereenkomsten. Een dergelijke verwerkersovereenkomst kan ook als een gegevensleveringsovereenkomst worden gezien en gebruikt. Het is ook mogelijk om afspraken over gegevens en gegevenskwaliteit in machineleesbare vorm vast te leggen en zelfs geautomatiseerd te controleren. 

De vraag is hoe het concept van gegevensleveringsovereenkomsten past op datastelsels. Ze kunnen als complementair worden gezien. Overeenkomsten die in de context van een datastelsel worden opgesteld hoeven dan alleen te beschrijven dat wat niet reeds onderdeel is van de basisvoorwaarden van het datastelsel of op andere wijze in het datastelsel aanwezig is. Zou zouden bijvoorbeeld metagegevens over het te hanteren gegevensmodel in het datastelsel in een stelselcatalogus beschikbaar kunnen zijn. De onderdelen van de eerder genoemde GLP en GLS documenten in het rijksbreed gegevensdelingsbeleid zouden dan ook in de context van het datastelsel moeten worden beoordeeld en geplot. Er is een kritische blik nodig op de te administreren gegevens en de criteria die daarbij gelden, om administratieve overlast te voorkomen. Het datastelsel voor de fysieke leefomgeving zou een registratie moeten bieden voor het administreren van de noodzakelijke gegevens. Hiermee ontstaat inzicht en transparantie in welke uitwisselingen tussen deelnemers verlopen.

Voor de geo-basisregistraties (en andere registraties) zijn er al allerlei afspraken tussen bronhouders, aanbieders en afnemers, die niet opnieuw gemaakt hoeven te worden. Het kan waardevol zijn om te onderzoeken of alle relevante soorten afspraken daarin een plek hebben en of afspraken op een meer uniforme wijze kunnen gemaakt.

Onderdeel van de afspraken zijn ook een autorisatiematrix en autorisatieregels die bepalen welke partijen toegang hebben tot welke gegevens.

Er zullen ook afspraken moeten worden gemaakt over de te gebruiken protocollen en standaarden voor de uitwisseling van gegevens. Zie hiervoor ook het hoofdstuk interoperabiliteit. Er is daarbij specifieke aandacht nodig voor het zoveel mogelijk geautomatiseerd controleren van voorwaarden en autorisatieregels. Daarvoor kunnen ook specifieke middlewarecomponenten nodig zijn, zoals connectoren of oplossingen voor het controleren van autorisatieregels. Dit vraagt ook gemeenschappelijke afspraken, zoals over het verplicht gebruik van specifieke connectoren.

Een ander onderwerp waarvoor het nodig is om afspraken over te maken is historie. In bepaalde gebruikscontexten is er behoefte aan specifieke vormen van historie. Bronnen moeten specifiek ontworpen zijn om specifieke vormen van historie te ondersteunen. Dit is niet iets dat achteraf eenvoudig kan worden toegevoegd aan een bron. In algemene zin zou een bron in ieder geval in ieder geval de wijzigingen in de bron zelf moeten registreren (formele historie). Het vastleggen van de historie van wijzigingen van objecten in de werkelijkheid (materiële historie) vraagt meer inspanning. Hierop moet het inwinningsproces ook zijn ingericht.

## Procesafspraken over ontsluiten
IdV: Bij de meeste organisaties zijn de bestaande afspraken uit het GI-beraad voor het beheer en ontsluiten van ruimtelijke data voor hergebruik bekend en worden tot op zekere hoogte nageleefd.  

De afspraken over ontsluiten van geodata lijken minder bekend bij de individuele gemeenten en waterschappen. Publicatie en hergebruik van (geo)data wordt relevanter met de opkomst van smart cities en digital twins. Het is van belang de gemeenten en waterschappen te stimuleren de afspraken na te komen. Dat geldt overigens ook voor alle andere overheden: de basis van ontsluiten van (geo)data moet op orde zijn om mee te kunnen doen in het federatief data delen in bijvoorbeeld de dataspace fysieke leefomgeving. 

Winst bij alle overheden valt vooral te halen door bij opdrachtverlening aan een externe partij of uitvoerende overheidsorganisatie een dataparagraaf op te nemen, waarin verantwoordelijkheid voor de data wordt vastgelegd en afspraken worden gemaakt over het beheer en ontsluiten van de gecreëerde data. 

Het ontsluiten (en bijhouden) van alle geodata is een enorme klus als dat bij een organisatie nu niet op orde is. Prioriteren is dan nodig. De prioritering voor het ontsluiten van geodata kan aan de hand van de prioritaire vraagstukken en informatiebehoeftes worden vormgegeven die uit het proces van vraagarticulatie van Zicht op Nederland naar voren komen en door de vraag van andere organisaties.

Zowel voor realisatie van FDS als voor een werkende Datapace Fysieke Leefomgeving is goede metadata cruciaal. In het GI-beraad is afgesproken dat;
•	het ontsluiten van data voor hergebruik expliciet te borgen in de aanpak voor een Dataspace Fysieke Leefomgeving (en aangezien realisatie daarvan binnen de kaders van FDS moet passen, daarmee ook mee te werken aan een goed functionerend FDS).

Ontsluiten voor hergebruik betekent dat de geo-datasets die door de leden van het GI-beraad (in opdracht) worden vervaardigd:
o	Waar mogelijk van een creative commons licentie worden voorzien,
o	van metadata worden voorzien conform het NL profiel op ISO 19115,
o	waarbij deze metadata in het NGR gepubliceerd worden.
In specifieke gevallen kan hiervan worden afgeweken en werkversies, operationele data en onderzoeksdata zijn hiervan uitgesloten.

•	Daar waar mogelijk te borgen dat voor nieuwe datasets het ontsluiten van data voor hergebruik direct wordt uitgevoerd (om zo de ‘reparatie-opgave’ niet groter te laten worden;

•	Voor de ontsluiting van bestaande geodata als dat nog niet op orde is, prioriteren aan de hand van

o	 de (mogelijke) prioritaire vraagstukken en informatiebehoeftes die uit het proces van vraagarticulatie van Zicht op Nederland naar voren komen.  
o	de vraag van een andere organisaties die behoefte heeft aan data.

•	Bij opdrachtverlening aan een externe partij of uitvoerende overheidsorganisatie een dataparagraaf op te nemen waarin verantwoordelijkheid voor de data wordt vastgelegd en afspraken worden gemaakt over het beheer en ontsluiten van de gecreëerde data. De leden van het GI Beraad worden geadviseerd om te profiteren van de ervaringen van RVO rond de dataparagraaf bij externe opdrachtverlening en de inkoopvoorwaarden van de provincies.

Proces op hoofdlijnen:
1. Duiden van de noodzaak voor een bepaalde gegevensset vanuit de behoefte
2. Afstemming tussen afnemer en bronhouder over behoeften en voorwaarden voor het aanbieden
3. Positioneren van de huidige en gewenste situatie van de gegevensset in het ringenmodel, en gewenste veranderingen op basis daarvan
4. Bepalen of de behoefte breder is en hoe dit opgelost moet worden (met name financiering en governance)
5. Aanbrengen gewenste verandering, kan variëren van simpelweg toegankelijk maken tot nieuwe inwinning van gegevens

Nader uit te werken: 
- Hoe gaan de concepten GLP en GLS toepassen in het datastelsel?

Dit betekent:
- Basisvoorwaarden worden beperkt tot wat specifiek is voor het datastelsel en bijbehorende domein 
- Deelnemers conformeren aan de basisvoorwaarden die worden gesteld door het datastelsel en hierop wordt getoetst bij toelating
- Er vinden technische controles plaats bij het uitwisselen van gegevens om te bepalen of afnemers voldoen aan voorwaarden zoals autorisatieregels

## Gegevenskwaliteit (Danny)
De kwaliteit van gegevens is een belangrijke bepalende factor voor de bruikbaarheid ervan. In de context van een datastelsel is dat niet anders. Het inzichtelijk maken en verbeteren van de  kwaliteit van de gegevens die beschikbaar zijn in het datastelsel verdient daarom expliciete aandacht. Dit is in de basis een verantwoordelijkheid van bronhouders, maar ook afnemers hebben een verantwoordelijkheid. De eisen die worden gesteld aan de kwaliteit van gegevens zijn nu eenmaal afhankelijk van het gebruik. Er is dan ook expliciete afstemming over kwaliteitseisen nodig tussen bronhouders en afnemers. Afnemers zouden ook twijfels over de juistheid van gegevens expliciet moeten terugmelden aan bronhouders.

In de waardeketen verandert de rol van kwaliteit. Daar waar de waarnemingen nog ver af staan van specifiek gebruik, zullen informatieproducten juist heel specifiek gericht zijn op een bepaald gebruik. Dat betekent dat aan een informatieproduct veel meer specifieke eisen zullen worden gesteld dan aan een registratie van waarnemingen. Tegelijkertijd is de kwaliteit waarmee de waarnemingen zijn gemeten sterk bepalend voor de kwaliteit in de rest van de keten. De uitdaging is dus vooral om afstemming in de gehele keten te organiseren. Daarnaast is essentieel dat er in alle schakels van de keten aandacht is voor het continu  verbeteren van de kwaliteit van gegevens. Gegevenskwaliteit is nu eenmaal niet een eenmalige inspanning.

Er is in de context van NORA een [stappenplan](https://www.noraonline.nl/wiki/Stappenplan_gegevenskwaliteit) ontwikkeld voor het verbeteren van de kwaliteit van gegevens dat bronhouders een handreiking biedt (zie volgende figuur). Het geeft aan welke stappen voor een specifieke gegevensverzameling zou moeten worden gezet. De basis is dat er voldoende algemene afspraken en inrichting aanwezig zijn in de vorm van bijvoorbeeld strategie, beleid, governance, architectuur, processen en systemen. Voor het verbeteren van de kwaliteit van een specifieke gegevensverzameling is vervolgens nodig om de context te bepalen, de gegevens te beschrijven in de vorm van metagegevens, de kwaliteitsregels en -eisen te beschrijven, de kwaliteit te meten, afwijkingen en andere signalen zoals terugmeldingen af te handelen en verbetermaatregelen uit te voeren. In de context van de basisregistraties zijn al allerlei kwaliteitsdashboards en rapportages beschikbaar om dit soort processen te ondersteunen. Het verbeteren van de kwaliteit van gegevens staat relatief los van het datastelsel. Het is vooral een randvoorwaarde.

![Stappenplan gegevenskwaliteit](./respec/media/stappenplan_gegevenskwaliteit.png)

In een datastelsel ligt de nadruk op het uitwisselen van gegevens. Daarbij is het vooral belangrijk dat er informatie en metagegevens beschikbaar zijn over kwaliteit. Dat betekent dat in de metagegevens van de dataset die beschikbaar wordt gesteld ook informatie over gegevenskwaliteit is opgenomen. Hiervoor zijn in een aantal standaarden voorgedefinieerde eigenschappen opgenomen. Daarnaast kan in de beschrijvende tekst informatie over de gewenste en gemeten gegevenskwaliteit worden opgenomen. Binnen de Nederlandse overheid is er een raamwerk met een standaard begrippenkader beschikbaar voor gegevenskwaliteit: het [NORA raamwerk gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit). Deze biedt standaard begrippen, maar ook standaard formuleringen om uitdrukking te geven aan de kwaliteit van gegevens. Dit raamwerk is liefst ook de basis voor het definiëren en meten van gegevenskwaliteit, zodat kwaliteit vanaf het begin op een uniforme manier wordt beschouwd.

Dit betekent:
- Het expliciet maken van de kwaliteit van gegevens die beschikbaar worden gesteld in de metagegegevens
- Het gebruik van de standaard begrippen in het NORA raamwerk gegevenskwaliteit

## Publicatie (Arno)

- Publicatie van metadata – per stap in de waardeketen

Een dataspace is een ecosysteem van data- en serviceproviders en potentiële consumenten. Providers willen hun potentiële consumenten bereiken en omgekeerd relaties opbouwen die leiden tot datadeling. Om datadeling te faciliteren, zijn beschrijvingen, zoals metadata, van de data en diensten die ze aanbieden, inclusief informatie over de voorwaarden waaronder ze worden aangeboden, vereist.

De bouwsteen Publicatie en Ontdekking maakt het volgende mogelijk:
- Providers kunnen (a) deze beschrijvingen als aanbiedingen beschikbaar stellen, waardoor ze zichtbaar worden voor alle (of een deel van) andere deelnemers aan de dataruimte die als potentiële consumenten worden beschouwd, en (b) aanbiedingen beheren in overeenstemming met hun levenscyclus (publiceren, bijwerken, verwijderen) en de toegang ertoe beheren.
- Consumenten kunnen tussen aanbiedingen zoeken om te bepalen of de kenmerken en voorwaarden voldoen aan hun behoeften en vereisten, en vervolgens toegang aanvragen tot de aangeboden data of dienst.

In [DSSC Blueprint - Publication and Discovery](https://dssc.eu/space/BVE2/1071256989/Publication+and+Discovery) is meer informatie te vinden.

Nader uit te werken:
- Harvesten van relevante metadata duidelijk opnemen, ook dat dit geldt richting (groot)aanbieders van data als naar andere (sectorale/nationale/europese/wereldwijde) catalogi
- In hoeverre zijn de data-services zelf-beschrijvend?
- In hoeverre is het geospatial zoeken en vinden van gegevens onderdeel van DSFL?

> DIt betekent voor DSFL:
> - Er komt een DSFL catalogus met daarin informatie over de deelnemers, datasets en services

## Vocabulaire (nieuw toegevoegd, Arno)

Met hetzelfde doel, het vinden en gebruiken van de data producten, beheren vocabulaireproviders een vocabulary, die wordt gebruikt om data producten te annoteren en te beschrijven (inclusief ontologieën, referentie data modellen, metadata-elementen). Vocabulaireproviders leveren deze (domein-specifieke) vocabulaires en hun verwijzingen naar het informatiemodel, dat de basis vormt voor de beschrijving van data producten.

Nader uit te werken:
- Behoort de vocabulaire bij de bron of is het onderdeel van het datastelsel?


