# Componenten/Voorzieningen
DSFL stelt eisen aan de spelers in het stelsel, maar neemt hen ook werk uit handen. Daarvoor zijn gecentraliseerde componenten voorzien die de dataspace faciliteren, bijvoorbeeld voor het vinden van data en voor het regelen van toegang. Dat betekent dat de huidige Basisregistraties aangepast moeten worden om (stapsgewijs) om te smelten  tot DSFL. De ‘centrale’ componenten kunnen betrokken worden, of deel worden van, de GDI of het FDS.  
  
<font color="red">
Eerste braindump van componenten / voorzieningen die (mogelijk) nodig zijn in de doorontwikkeling van de Nationale Geo Informatie Infrastructuur:
  
- Uitgaande van een federatief datastelsel / data bij de bron
- Uitgaande van het aanbieden van (ook) gesloten data

Belangrijk is het principe "Afspraken voor standaarden voor voorzieningen". Natuurlijk hebben we het over digitale informatie uitwisseling waarvoor technische bouwblokken nodig zijn. Deze technische bouwblokken hoeven niet één op één overeen te komen met software. Zie [DSSC Blueprint - Technical Building Blocks](https://dssc.eu/space/BVE2/1071254703/Technical+Building+Blocks) voor een toelichting.

Dit resulteert in 3 categoriën van services/technische componenten:
- Sommige services die nodig zijn voor inidividuele deelnemers om van Data Space Fysieke Leefomgeving (DSFL) gebruik te kunnen maken: deelnemer services
- Andere services die nodig zijn voor de samenwerking tussen deelnemers: federatie services
- Laatste categorie services zijn aanvullend om waarde te kunnen verhogen bovenop het uitwisselen van data: waardecreatie services

> Voor de DSFL betekent dit:
> - Het DSFL levert geen deelnemer services maar vertrouwd op al aanwezige (referentie) implementaties
> - Het DSFL biedt voorzieningen die invulling geven aan de federatie services
> - In de eerste versie van het DSFL zal nog niet actief invulling gegeven worden aan waardecreatie services maar op termijn moeten deze toegevoegd kunnen worden

**Bij elke dataprovider en bij elke data consumer:**
1. Een connector conform het dataspace protocol. 
Hiermee wordt ingeregeld dat metadata (DCAT en ODRL) bekeken kan worden (Data Catalog Protocol), dat het contract digitaal gesloten kan worden (Contract Negotiation Protocol) en dat de toegang tot de data wordt ingeregeld (Transfer Process Protocols). Dit is niet anders dan in andere dataspaces. Interessante aspecten:
- gaan de beschikbare connectoren (al) goed om met DCAT-AP / kun je bv. de bounding box van de dataset inzichtelijk krijgen?
- ik heb voorbeelden gezien dat de geo-locatie van de data consumer een rol speelt in de contract negotiation, bv. een aanvrager uit Rusland mag de data niet krijgen. Dit zal via identity management worden ingeregeld vermoed ik, maar wellicht zit hier nog een geo-haakje?
- welke functionaliteiten en data zijn relevant voor de connector en aan welke standaarden moeten die voldoen? 

**Centraal**

0. Afsprakenstelsel Nationale Geo Informatie Infrastructuur. 
Er is het [raamwerk van geo standaarden](https://docs.geostandaarden.nl/rwgs/rw/) en een aantal Geo-standaarden staan daarnaast de Pas Toe of Leg Uit lijst, maar wellicht is het goed om met de deelnemende partijen (verdergaande) afspraken te expliciteren. Dit is niet anders dan in andere dataspaces. 

1. Landelijke catalogi zijnde NGR, data.overheid.nl, API register,....
Dataproviders met geodata maken een connectie tussen hun eigen catalogus en deze landelijke catalogus om hun data beter vindbaar te maken. Ook rekenmodellen en algoritmes worden op die wijze voor hergebruik aangeboden. De catalogus is alleen een centrale vindplek, om de data te benaderen wordt je verwezen naar de bron. 

IdV: Wellicht komt er per dataspace een aparte catalogus die de relevante metadata voor de use cases binnen die dataspace harvest uit bestaande catalogi, voor geo data, miet geodata, modellen , API's etc.

2. Een landelijke marktplaats / appstore. 
Op basis van data worden vele toepassingen gebouwd, denk aan digital twins, apps, viewers, AI-toepassingen. Om hergebruik te stimuleren kunnen deze toepassingen gepubliceerd worden in de landelijke marktplaats / appstore. Dit is niet anders dan in andere dataspaces.

3. Deelnemers register. 
Als er binnen de Nationale Geo Informatie Infrastructuur op een uniforme wijze gesloten data uitgewisseld gaat worden, dan is het nodig te weten welke partijen zich geconformeerd hebben aan het (te maken) afsprakenstelsel. Dit is niet anders dan in andere dataspaces.

4. Autorisatie register. 
Als er binnen de Nationale Geo Informatie Infrastructuur op een uniforme wijze gesloten data uitgewisseld gaat worden, dan is het nodig te weten welke partijen welke autorisaties hebben. Dit is niet anders dan in andere dataspaces.
Het autorisatiebeheer is een aandachtspunt; er is geen component beschikbaar voor het centraal beheren van autorisaties. Als iemand inlogt met een inlogmiddel van een organisatie, moet in het register bekend zijn gemaakt welke autorisatie na de authenticatie wordt toegekend. Als we geen eigen registers maken voor machtigingen/rollen, betekent het dat we een gap hebben voor autorisatie? Uitwisseling/hergebruik van autorisaties vanuit bronhouders is niet mogelijk, oplossingsrichting is ook afhankelijk hoe het beheer van autorisaties georganiseerd gaat worden (kadaster, of ministerie, of bronhouder).

6. Vocabulary Hub. 
De betekenis en onderlinge samenhang van gegevenselementen dient inzichtelijk te zijn. Hiertoe dient onder andere de NL-SBB standaard, gebaseerd op SKOS. Dit is niet anders dan in andere dataspaces.

7. Logging functionaliteit. 
Bij het delen van gesloten data voor accountability. Dit is niet anders dan in andere dataspaces.

8. De expertise rondom coordinaat referentie systemen. 
De expertise rondom onze coordinaatreferentiestelsels (RD, NAP en LAT) is georganiseerd bij de Nederlandse Samenwerking Geodetische Infrastructuur (een samenwerking van het Kadaster, Rijkswaterstaat en de Dienst der Hydrografie van de Koninklijke Marine). Hier wordt bijvoorbeeld de transformatie API beheerd voor transformaties tussen coordinaatstelsels, ook naar internationale stelsels zoals ETRS'89 of WGS84. Dit is een blijvend van belang zijnde functie. 

9. Idee: wegwijzer / helpdesk functie, bv om niet-geo gespecialiseerde organisaties op weg te helpen, bv met een vraag als 'hoe geo-refereer ik mijn dataset'. 

10. Idee: URI-strategie adviespunt. 
Als we meer en meer data met elkaar gaan delen, dan is het op enig moment wellicht nodig iets meer te gaan regelen rond UUID's. Hoewel dit in de eerdere Inventarisatie Data Ecosystemen alleen ter sprake kwam bij ZoN/NGII is dit niet anders dan in andere dataspaces.

Een URI strategie is nodig om te borgen dat je het kunt ontsluiten voor linked data. Linked Data verschilt van conventiële technieken door het gebruik van verbonden data met semantiek die gemakkelijk kan worden verwerkt. Conventiële technieken gebruiken niet-verbonden datasets zonder semantische context. Het is nog wel een keuze of LinkedData ondersteunt moet worden; is er bereidheid de extra benodigde kwaliteit erin te steken.

Er is geen apart linked data access point nodig als met OGC-API’s wordt gewerkt die aan bepaalde voorwaarden voldoen; sommige OGC API’s kunnen RDF teruggeven maar dat is afhankelijk van hoe ze zijn opgebouwd. Als de OGC API RDF (JSON-LD/Turtle) teruggeeft resources op URI’s identificeert (URI’s als identifiers), dan kan het ook de functie hebben van een linked data access point. Het is dus implementatie-afhankelijk; wanneer de API alleen GeoJSON of HTML ondersteunt dan kan het niet worden gezien als een linked data access point. Eventueel kan met behulp van JSON-LD relatief eenvoudig worden gezorgd dat API ook Linked Data teruggeeft.
   
</font>

## Samenhang dataspace in relatie tot data provider en data consumers

![image](https://github.com/user-attachments/assets/4472cbaa-c966-435d-b816-0a87ef937966)

## Componenten volgens de DSSC referentie

<img src="./respec/media/InteractionOfTechnicalComponents.png" alt="Interactie tussen technische componenten" width="900">
Afbeelding Interactie tussen technische componenten (bron: IDS-RAM)

Overzicht van (technische) services uit de DSCC: https://dssc.eu/space/BVE2/1071254998/Services+for+Implementing+Technical+Building+Blocks 
<img width="1178" height="876" alt="image" src="https://github.com/user-attachments/assets/39411332-a8c1-4d59-be57-b707954790dc" />

In paragraaf 5.2 "Componenten volgens de DSSC referentie" is aangegeven dat er veel componenten bestaan die invulling kunnen geven aan de benodigde services. Nu zijn niet alle services nodig in het geval van de DSFL simpelweg omdat deze functionaliteit niet nodig is. In deze paragraaf benoemen we een aantal componenten en geven daarbij aan of deze nodig gaan zijn en hoe deze ingevuld kunnen worden voor DSFL. Voordat we de optionele services (en componenten) aflopen beginnen we met aan te geven wat minimaal nodig is voor een dataspace.

Voor de benodigde componenten lopen we de core componenten af uit [IDS-RAM4 System Layer](https://docs.internationaldataspaces.org/ids-knowledgebase/ids-ram-4/layers-of-the-reference-architecture-model/3-layers-of-the-reference-architecture-model/3_5_0_system_layer):
- Identity Provider;
- Dataspace Connector;
- App Store en Data Apps;
- Metadata Broker;
- Clearing House;
- Vocabulary Hub.

**Identity Provider en Dataspace Connector**

Een minimale dataspace bestaat (volgens IDSA, zie [What is a Minimum Viable Data Space?](https://docs.internationaldataspaces.org/ids-knowledgebase/ids-reference-testbed/minimum-viable-data-space/mvds)):
1. Twee connectoren (één bij de data aanbieder en één bij de data afnemer);
2. Een identity provider (die o.a. informatie bevat over de deelnemers en digitale certificaten levert voor vertrouwde uitwisseling van data).

> Voor de DSFL betekent dit dat elke deelnemer zelf moet zorgen voor een connector. Voor de identity provider moet nog nagegaan worden wat hiervoor handig is, meestal verzorgt de governance organisatie deze voorziening.

**App Store en Data Apps**

De App Store en Data Apps zijn optioneel. in het IDSA model. Om datagedreven werken aan maatschappelijke opgaven in de fysieke leefomgeving mogelijk te maken wordt binnen Zicht op Nederland ingezet op de ontwikkeling van aan elkaar verbonden Digital Twins. Deze Digital Twins gebruiken (ook) metadata om hun onderlinge verbanden en scope van gebruik te publiceren.  

> De doelarchitectuur van DSFL ondersteunt (over de as van de metadata) het aansluiten van App Stores. In het kader van Zicht op Nederland is dit met name een App Store voor het uitwisselen van data, algoritmen en complete modellen van Digital Twins.

**Metadata Broker**

De vindbaarheid van data en deze dan kunnen gebruiken wanneer dat toegestaan wordt door de aanbieder is essentieel voor de DSFL. Het component Metadata Broker is hiervoor onmisbaar. Deze geeft informatie over de aangesloten connectoren: de aangeboden interfaces, de eigenaar ervan en de metadata van de aangeboden datasets.

> DSFL zal een Metadata Broker nodig hebben. 

**Clearing House**

Het component Clearing House vormt de basis voor vastlegging van de transacties die de toegang tot en/of gebruik van data door verschillende gebruikers vastleggen(‘loggingsfunctie’). Op basis hiervan kunnen deelnemers verantwoording en betaling/facturering met elkaar doen. Het is een optioneel component die afhankelijk van het vertrouwen die de deeelnemers in elkaar hebben EN de wens/noodzaak om de uitwisseling van data met elkaar te verrekenen.

> Binnen DSFL is er sprake van zo vrij als mogelijk delen van data. Er is voldoende vertrouwen in de deelnemers en er is geen verrekening van toepassing bij het gebruik van de data. Hierdoor zal er niet een Clearing House component gerealiseerd worden.

**Vocabulary Hub**

De Vocabulary Hub is het platform waar gemeenschappelijk vocabulaires gepubliceerd en onderhouden worden. Het doel is het aanbrengen van de semantische samenhang en afstemming via het vastleggen van de semantiek in de dataspace. Hiervoor worden de verschillende begrippen afkomstig van vnl. data modellen (informatiemodellen) van de dataspace vastgelegd en beschikbaar gesteld via federatieve diensten. De vindbaarheid van data wordt vergroot door eenduidige begrippen te hanteren.

> De semantiek en vindbaarheid van data zoals opgenomen in DSFL is van groot belang. Een Vocabulary Hub wordt opgenomen om hieraan bij te dragen.

Arno: Bovenstaande is gewijzigd door mij. Onderstaande opmerkingen zijn wellicht achterhaald?!
HW: DCAT maakt weer net een ander onderscheid, de datasetserie ontbreekt hier. Bij RWS hanteren we het zo:
IdV: in DCAT3 is er wel een klasse dataset series
![image](https://github.com/user-attachments/assets/1a6f7259-b67a-4def-af10-b50c21d6c35f)

## Componenten vanuit de EIRA 

In het onderdeel Technical Interoperability van de EIRA is een set van enablers gedefinieerd. 1 daarvan is de Data Space Enabler: Definition: Data Space Enablers ABB is a Grouping that refers to components and services that support the creation and management of a dataspace.

![image](https://github.com/user-attachments/assets/68e1a15b-b609-4b30-9a69-d4b2095c4cf1)

Dataspace; Definition: Data space ABB is an Application Service as the virtual space that enables the creation of a single market for data by integrating, transforming and making available such data.  
Dataspace Connector; Definition: Data Space Connector ABB is an Application Service that enables the easy and trustworthy procedure to share data and work collaboratively with other research institutions.
Dataspace Connector Provider; Definition: Data Space Connector Provider ABB is an Application Service that enables maintenance control over the data and sets the conditions for its use in the data space ecosystem
Dataspace Connector Consumer; Definition: Data Space Connector Consumer ABB is an Application Service that enables data gathering and accessibility over available data sources and data in terms of content, structure quality, actuality and other attributes.

Er zijn ook nog een heel aantal andere enablers die optioneel onderdeel van de value service van een dataspace kunnen zijn of relevant kunnen zijn voor de aansluiting in het domein van de provider of de consumer. Het lijstje: API Enablers, Orchestration Enablers, Trust Enablers, Data Exchange Enablers, Translation Enablers, Privacy Enablers, Digital Workplace Enablers, Test Enablers, Security Enablers, Knowledge Dicovery Enablers, Analytics Enablers, Artificial Intelligence Enablers, Data Management Enablers, User Experience Management Enablers, Schedule Management Enablers.


## Specifieke componenten van DSFL
<>

### Geo-zoekcomponent
<>

### App Store voor Digital Twins

In het kader van Zicht op Nederland ondersteunt de doelarchitectuur DSFL de ontwikkeling van een Store voor het uitwisselen van data, algoritmen en complete modellen van Digital Twins. Deze App Store is dan ook een component in de DSFL.

Deze App Store is <>

## Hergebruik van bestaande componenten
<wat is er al, wie heeft het al/hergebruik, wat moet er nog ontwikkeld/bepaald/gekozen worden> 

## Bronnen

## Identificatie
De elektronische indentificatie en vertrouwensdienst voor elektronische transaties van personen is opgenomen in de VERORDENING (EU) Nr. 910/2014 VAN HET EUROPEES PARLEMENT EN DE RAAD, van 23 juli 2014
<https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32014R0910&from=NL>. De definitie die daarbij wordt gehanteerd voor "elektronishe identificatie": het proces van het gebruiken van persoonsidentificatiegegevens in elektronische vorm die op unieke wijze een natuurlijke persoon of rechtspersoon, of een natuurlijke persoon die een rechtspersoon vertegenwoordigt, aanduiden;  

## Autorisatie
Volgens de IAM (Identity & Access Management) expertgroep van NORA gaat het bij Autorisatie om: Het proces om te beslissen of een Entiteit op grond van een Authenticatiemiddel, Identiteitsverklaring, of een Machtiging, toegang krijgt tot een Resource. De beslissing wordt mede gebaseerd op de bij de resource behorende Autorisatieregels en omgevingsfactoren. Voorbeelden van omgevingsfactoren zijn het moment op de dag en de locatie. Vaak is er een splitsing in een functie om de autorisatie-beslissing te nemen (ook wel genoemd: PDP = Policy Decision Point) wat resulteert in een autorisatie-beslissing (soms ook toegangstoken genoemd) en een functie om deze beslissing af te dwingen op basis van de autorisatie-beslissing (ook wel genoemd: PEP = Policy Enforcement Point). De beslissingsfunctie (PDP) functie kan zowel binnen een dienst als daarbuiten worden uitgevoerd; het afdwingen van de beslissing (PEP) wordt noodzakelijkerwijs altijd binnen de dienst uitgevoerd.

## Zoeken en vinden (catalogi en directory services)

De catalogi zijn vaak deelverzamelingen van de data en de onderliggende modellen van deze deelverzamelingen zijn verschillend. Om data federatief te delen is het noodzakelijk dat de verschillende modellen in de connector naast elkaar staan en aanvullend zijn. Overlap moet dan zoveel mogelijk worden voorkomen en dienen elkaar aan te vullen.
De conventiele data wereld gaat uit van datasets en datasetseries. Die wereld is deels achterhaald en er is steeds meer behoefte aan het doorzoekbaar en vindbaar maken van de bronnen, waar de datasets en series een resultaat zijn van de query aan die bronnen. Technieken als Linkeddata helpen om de data doorzoekbaar en vindbaar te maken. Het is een secuur en daardoor tijdsintensief proces om de data Linkeddata complient te maken. Dillema daarbij is of die tijdsinvestering acceptabel is. 

## Zoeken en vinden (data inhoud)

Vocabulaire (Vocabulary Hub):
BegrippenXL is een (bestaand) on-line systeem voor het definiëren en relateren van begrippen. Het maakt kennis over wat woorden precies betekenen expliciet. De taal van de organisatie wordt vastgelegd in een woordenboek. Een dergelijk woordenboek heet ook wel een thesaurus en is veel meer dan een lijst van woorden. Het biedt ruimte om vanuit allerlei perspectieven de begrippen te beschrijven en ze onderling te relateren. 

Voorkomen wordt dat alle databronnen gerepliceerd of geindexeerd worden in de connectorlaag om de data doorzoekbaar en vindbaar te maken. De zoekfunctie is er op gericht om de API's van de databronnen te doorzoeken. Hiermee maakt de connector altijd gebruik van de laatste versie van de data. De response van de zoekfunctie geeft een link naar de databron met als resultaat een dataset. Het combineren van datasets leidt tot nieuwe dataproducten.  

## (Gefedereerde) analyse 

Gebruikers willen zonder diepgaande kennis over de datastructuren, gecombineerde gegevens kunnen opvragen. Hier is eerder naar gekeken in kader van de basisregistraties (IMX), waarbij gesteld is dat ZoN verder gaat met IMX-Geo (zie: https://www.geonovum.nl/nieuws/zicht-op-nederland-gaat-verder-met-imx-geo). Binnen Zicht op Nederland zou er een project komen (of is dat er al?) om de eerdere pilot een vervolg te geven. Dit vervolgtraject behelst "verdere verkenning, ontwikkeling en beproeving van gebruiksvoorbeelden voor IMX binnen en buiten het geo-domein", zie https://www.zichtopnl.nl/datafundament/projecten/kruisbevraging/default.aspx . 

## Metadata
NGR:
- Genereren van pseudo-geo info (als nieuwe component) voor mengen geo en niet-geo informatie? <welke eisen stellen we aan deze component, welke use case(s) willen we op korte termijn ondersteunen>
  
  IdV:
- of gebruik maken van de generieke metadata standaard DCAT-AP-NL, waarmee zowel geo data als overige data beschreven kan worden. Dan zijn er geen specifieke functionaliteiten nodig, maar kan  de bevraging van alle metadata hetzelde zijn.
- niet geo data zou ik overigens niet aan het NGR toevoegen, maar in een andere catalog ontsluiten
- NGR is in vergevorderd stadium om de bestaande ISO 19115 metadata ook conform DCAT-AP-NL te ontsluiten.

PDOK:
- (Geo-?)metadata/caching/viewer/ontsluiting wettelijke rapportages: PDOK

Data.overheid.nl:
- Duurt meer dan een jaar wanneer internationale DCAT standaard wijzigt om dat vervolgens te vertalen in nederlandse profiel o.a. tbv data.overheid.nl; hoe zorgen we dat gebruikte standaarden in sync blijven.
IdV: nu er een eerste DCAT-AP-NL profiel is, is het een kwesie van updaten om in sync te blijven. Daarvoor is beheer belegd bij Geonovum en een beheerproces ingeregeld. Wel moet er samen met de werkgroep beoordeeld worden welke consequenties updates voor de verschillende domeinen hebben, en of het wenselijk is deze in het NL profiel door te voeren. Dat vergt toch enige tijd en zorgvuldigheid voor dit is doorvertaald naar een nieuwe versie van een profiel. Na vaststelling van een nieuwe versie van een profiel is deze echter nog niet geimplementeerd in dataoverheid.nl
  
## Datastore
IdV:  hoe moet ik dit zien in het kader van federatief data delen?  
Federatief delen van data middels een connector, betekent in praktische zin dat er rekening gehouden moet worden met verschillende datasources bij de providers. Iedere datasoure omvat een datastore component, voor zowel geo- als niet geodata. De verschillende opslagcomponenten met voor- en nadelen worden hieronder beschreven.
(later tekst nog inkorten, niet alles is relevant)
Volgens NORA gaat het bij een datastore / dataopslag om robuuste, veilige opslag van gegevens in rust, in transit (denk aan buffers) en in memory (denk aan caches). De beschikbaarheid, authenticiteit en integriteit van deze gegevens dient te allen tijde te zijn verzekerd. Als burger, bedrijf en dienstverlener kun je ervan op aan dat de gegevens (en daaruit vloeiende informatie) veilig is.

Afspraak: We maken afspraken over de vereisten van gespiegelde data.  
Afspraak: We maken tevens afspraken over de minimale encryptie sterkte en wanneer data wel of niet encrypted dient te zijn. Encryptie is een onderdeel van data beveiling. 
Er zijn verschillende oplossingen voor data opslag, de definities zijn hieronder uitgeschreven. Voornamelijk is als bron de DAMA DMBOK 2e editie (2017, ISBN: 9781634622349) gebruikt. Indien er afwijking is van de bron is dat vernoemd. 

*Database*
Def. Een database is elke verzameling van opgeslagen data, ongeacht de structuur of inhoud. Sommige grote databases verwijzen naar instanties en schema's (p. 168 DAMA DMBOK)

Het woord database wordt voor verschillende begrippen gebruikt:

De opgeslagen gegevens als zodanig.  
De wijze waarop de gegevens zijn opgeslagen, het data(base)model.  
De software waarmee databases kunnen worden aangemaakt en benaderd, Het databasemanagement systeem (DBMS).  
Algemeen zijn er vier typen DBMS te onderkennen. Deze zijn Relational DBMS (RDBMS), Hierarchical DBMS, Network DBMS en Object-Oriented DBMS (OODBMS).  
Met een databasemanagementsysteem (DBMS) wordt een systeem aangeduid dat als database opgeslagen gegevens ontsluit, bewaakt en beheert. Een database bestaat vaak uit drie onderdelen: de opgeslagen gegevens (in één of meer bestanden), de functionaliteit waarmee de gegevens worden beheert (DBMS) en eventueel de gebruikersomgeving (client) die het gebruikers mogelijk maakt om de gegevens te gebruiken. Meestal is er één DBMS actief voor meer dan een gebruiker. Bekende en veelgebruikte programma's zijn relationele DBMS'en (afgekort tot RDBMS).

*Data warehouse*
Def. Een data warehouse (vaak afgekort tot DW of DWH) een combinatie van twee primaire onderdelen: een geïntegreerde beslissingsondersteunende database en de bijbehorende softwareprogramma's die worden gebruikt voor het verzamelen, opschonen, transformeren en opslaan van data uit een verscheidenheid aan operationele en externe bronnen (p. 362 DAMA DMBOK). NB: Er is bij de DAMA DMBOK een aparte definitie voor een Enterprise Data Warehouse (EDW), terwijl in sommige definities dit onder dezelfde definitie valt. 

Een datawarehouse kent de volgende kenmerken:  
thematisch ingericht  
geïntegreerd  
geordend in de tijd  
bevroren (gegevens)

*Data lake*
Def. Een data lake is een omgeving waar een enorme hoeveelheid data van uiteenlopende aard en structuur kunnen worden binnengehaald, opgeslagen, beoordeeld en geanalyseerd. (p. 476 DAMA DMBOK). 

*Data lakehouse*
Een data lakehouse is een nieuwer concept en nog niet gedefinieerd in de DAMA DMBOK. Hierbij is een combinatie definitie gekozen vanuit implementaties (databricks, snowflake) en theorie ("Deciphering Data Architectures", James Serra, 2024, 978-1-098-15076-1). 

Def. Een data lakehouse is een hybride benadering die een verscheidenheid aan ruwe gegevensformaten kunnen opnemen zoals een data lake, maar met meer functionaliteit om de functies van een data warehouse te vervangen. Een belangrijke mogelijke functionaliteit om het bieden van bijvoorbeeld ACID (Atomicity, Consistency, Isolation, and Durability) transacties en gegevenskwaliteit afdwingen zoals een data warehouse.

*Modern data warehouse*
Een modern data warehouse is een gecentralizeerd architectuur ontwerp met een combinatie van een data warehouse en een data lake om de toegevoegde waarde van beide te benutten. Alle data wordt primair opgeslagen in het data lake, en vervolgens gekopieerd naar een relationeel data warehouse (RDW) indien nodig, voor bijv: compliance met wetten, BI analyses, etc. Bij opslag in het data lake is alle nodige staging and preparation ingericht. Het heeft een schema-on-write for the RDW en een schema-on-read voor het data lake. 

Een modern data warehouse is een flexibeler architectuur design, met een minder grote investering voor een grote hoeveelheid data in een data warehouse, met schema-on-write. Nog steeds veel van de voordelen van een traditioneel RDW en de voordelen van een data lake. De voordelen en nadelen van een modern data warehouse zijn afhankelijk van de scope (bijv. domein of organisatie) en de randvoorwaarden, bijv. governance, metadata, aangezien de definitie van een modern data warehouse niet verder ingaat op dit soort randvoorwaarden. 

Voordelen: 
Het is een flexibel architectuur design.  
Een centraal, single-point-of-truth voor data  

Nadelen:
Niet schaalbaar met toenemende behoeftes van het RDW in een modern data warehouse.
Hogere kosten indien de data opslag behoefte omhoog gaat, en extra continue kosten met het kopieren van data.
Gekopieerde data.
Toegenomen complexiteit t.o.v. een traditioneel data lake, of data warehouse. 
Zonder extra randvoorwaarden, een grote mogelijkheid tot dezelfde problemen die wij al bekend zijn, bijv. data eilanden.
Binnen in een domein, vooral één waar de hoeveelheid benodigde data in het data warehouse niet veel gaat groeien of uitbreiden, is het een mogelijke oplossing met weinig kosten maar veel flexibiliteit. Met de hoeveelheid data in RWS, nu en in de toekomst, kan een data fabric, een data lakehouse, of een data mesh een beter optie zijn voor het architectuur design op organisatie niveau. Federatief werken, vanuit de hoofdkennisvelden die wij al kennen, zit al in de organisatie structuur en is mogelijk dichter bij waar wij nu al naartoe aan het gaan zijn organisatie breed. 

*Data fabric*
Een data fabric betreft een architectuur ontwerp waarbij er een combinatie is van een data warehouse en een data lake voor gebruik te maken van de sterkere kanten van beide, met de toevoeging van een aantal functies ter bevordering van data toegankelijkheid, security, vindbaarheid, en beschikbaarheid. Een centraal principe is dat een data fabric oplossing alle data kan consumeren binnen het domein waar het is toegepast (dat kan zijn RWS breed, of binnen een hoofdkennisveld). Er zijn 8 functies die bij een data fabric (kunnen) worden toegepast; beleid voor datatoegang, metadata catalogus, master data beheer, data virtualisatie, real-time processing, datatoegang via API's, data als diensten, en data producten. Het is niet nodig om alle functies te implementeren om een data fabric te implementeren, en het is discussieerbaar waar die lijn exact ligt. Een data mesh en een data fabric hebben mogelijk aparte rollen binnen data architectuur. Een data fabric is een methode wat binnen een domein toegepast kan worden, terwijl een data mesh een organisatie-breed ontwerp is. Verder is er nog een opmerkelijke toevoeging bij de definitie, en dat is dat een data fabric alle data, binnen het toegewezen domein of organisatie, kan opnemen op een uniforme manier. 

NB: Er zweven verschillende termen en definities rond voor dit concept. Zo wordt de term 'Modern Data Warehouse' ook eens gebruikt voor de definitie voor data fabric, of een andere definitie voor de term data fabric. Sommige termen zijn ook afhankelijk van technologieën die nog niet mogelijk of beschikbaar zijn, vooral rond het gedeelte van automatische data ontdekking en ingestie door het data fabric. 

Een data fabric is een variant op andere hybride architecturen, zoals een modern data warehouse, met extra functies. Het doel is een verbetering van data toegankelijkheid, beveiliging, vindbaarheid, en beschikbaarheid. En een "Intelligent" data fabric zou zoveel mogelijk autonoom data kunnen processen en aanbieden. Een data fabric en een data mesh kunnen beide toegepast worden in dezelfde data architectuur en sluiten elkaar dus niet noodzakelijkerwijs uit. Een data fabric zou in dat geval een domein-specifieke toepassing kunnen zijn. 

Voordelen:
Flexibel en schaalbaar. 
"Alle" data (binnen de scope) is op een uniforme en betrouwbare manier vindbaar en bereikbaar. 
Verminderen van data eilanden
Data wordt zo veel mogelijk in real-time verwerkt om de stroming door het data landschap te automatiseren en verbeteren. 
Geavanceerde data toegang beleidsregels, en de mogelijkheid om te voldoen aan verschillende sets regels en wetten. 
Sterke randvoorwaarden waar wij als overheid naartoe willen; Toegankelijkheid methodes, metadatering, master data, kernregistraties, het gebruik van API's. 
Geen kopieën, voornamelijk bij gebruik van data virtualisatie. 

Nadelen:
Een ontzettend ingewikkeld ontwerp  
Overgang naar data fabric kan veel tijd en geld kosten  
Een noodzaak om veel expertise in de organisatie te hebben en houden.  
Achteraf oplossen van problemen, bijv. door gebrek aan expertise, is extra uitdagend door complexiteit van een data fabric.  
Het automatisch laten lopen van veel van deze processen vaak erg ver weg van waar wij zijn en kan een erg grote uitdaging vormen vanuit het huidige data landschap.  
Mogelijke latency problemen, door de complexiteit
(afhankelijk van definitie en implementatie) Een data virtualisatie kan nodig zijn om alle randvoorwaarden te halen, terwijl uit huidig onderzoek en referentiebezoeken het nog niet zeker is of data virtualisatie de functies biedt die wij nodig hebben. Specifiek zijn er onzekerheden rond de performance voor ons data landschap, en het geven van (groeps) autorisaties aan alle nodige partijen. 
(afhankelijk van welke definitie en hoever het geïmplementeerd wordt) Nog niet alle nodige technologieën zijn implementeerbaar, voornamelijk bij de automatisering en real-time processing voorwaardes 

*Data mesh*  
Het concept van een data mesh gaat voornamelijk over een holistisch data architectuur ontwerp met een focus op het decentralizeren van data in een organisatie, in plaats van het centraliseren, m.b.v. bijv. een data lakehouse. Bij een data mesh is elk domein verantwoordelijk voor zijn eigen data, schoonmaken, analyseren en het beschikbaar stellen. Een data mesh heeft vier kenmerkende principes:

Domein-georiënteerde decentralisatie: Elk domein is verantwoordelijk voor het maken, onderhouden en delen van haar eigen “data producten”  
Data als product: Gegevens moeten worden behandeld als een product, waarbij domeinen verantwoordelijk zijn voor de kwaliteit, bruikbaarheid en toegankelijkheid ervan. Er iseen eigenaar van de gegevens en deze worden beheert. 
Selfservice data-infrastructuur: Stel teams in staat met tools en platforms om hun data zelfstandig te beheren en te gebruiken zonder een grote afhankelijkheid van gecentraliseerde datateams.
Federatief IT beheer: Er bestaat een gezamenlijk gegevensbeheer tussen domeinen en een centraal gegevensteam om globale regels te definiëren, te implementeren en te controleren. 

## Historie
Historie wordt beheerd en (wanneer van toepassing) ontsloten bij de bron; er wordt dus niet (opnieuw) historie opgebouwd. 

## Connector
[Bron: Geonovum nieuwsartikel Een duik in het DataSpace Protocol](https://www.geonovum.nl/nieuws/een-duik-in-het-dataspace-protocol)
Om vertrouwd data te kunnen delen, heeft IDSA, de International Data Space Association, het DataSpace Protocol ontwikkeld. Het DataSpace Protocol bevindt zich in het proces om een ISO standaard te worden. Dit protocol speelt ook een rol bij het standaardisatiewerk bij CEN / CENELEC. Daarom wil Geonovum meer kennis en ervaring opdoen met dit protocol. 
 
Bij vertrouwd datadelen is niet alleen standaardisatie op de data-laag - de Data Plane - nodig, het is ook belangrijk dat de ‘Control Plane’ gestandaardiseerd is. Het Control Plane is het deel van een netwerk dat bepaalt hoe gegevens het beste kunnen worden doorgestuurd. 
In de basis bestaat het DataSpace Protocol uit 3 protocollen:
- Het Catalog protocol om (afhankelijk van je rechten) de catalogus van een ander in te mogen zien. Bij open data zal dat de hele catalogus zijn, maar bij vertrouwde data, komt het ook voor dat je uberhaupt niet mag weten dat de data bestaan. Het Catalog protocol handelt af dat je de metadata te zien krijgt die je mag zien
- Het Contract Negotiation Protocol. Zodra je weet welke dataset je wilt hebben, start de onderhandeling over het contract en het uiteindelijk tekenen van het contract. Bij vertrouwd datadelen zal er immers sprake zijn van gebruiksvoorwaarden
- Het Transfer Process Protocol. Nog niet de daadwerkelijke data-overdracht (dat gaat via het Transport protocol), maar de afspraken die daarvoor nodig zijn.

TNO heeft een implementatie van het dataspace protocol (welke ook gecertificeerd is door IDSA) gedaan; de TNO Security Gateway (TSG). Sogelink, provincie Friesland, Kadaster en Geonovum heeft een experiment uitgevoerd om ervaring op te doen met dit dataspace protocol. De ervaringen uit het experiment worden gepubliceerd, zie [Dataspace Protocol connector experiment](https://geonovum.github.io/eu-DataspaceProtocolconnectorexperiment/). 
