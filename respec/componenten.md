# Componenten/Voorzieningen

## Componenten volgens de DSSC referentie
<DSSC view op componenten, per component invullen/aangeven of en hoe we die invullen>

## Hergebruik van bestaande componenten
<wat is er al, wie heeft het al/hergebruik, wat moet er nog ontwikkeld/bepaald/gekozen worden> 

## Bronnen

## Identificatie
## Autorisatie
## Zoeken en vinden (catalogi en directory services)
## Metadata
NGR:
- Genereren van pseudo-geo info (als nieuwe component) voor mengen geo en niet-geo informatie? <welke eisen stellen we aan deze component, welke use case(s) willen we op korte termijn ondersteunen>

PDOK:
- (Geo-?)metadata/caching/viewer/ontsluiting wettelijke rapportages: PDOK

Data.overheid.nl:
- Duurt meer dan een jaar wanneer internationale DCAT standaard wijzigt om dat vervolgens te vertalen in nederlandse profiel o.a. tbv data.overheid.nl; hoe zorgen we dat gebruikte standaarden in sync blijven.
- 
## Dataopslag
Volgens NORA gaat het om robuuste, veilige opslag van gegevens in rust, in transit (denk aan buffers) en in memory (denk aan caches). De beschikbaarheid, authenticiteit en integriteit van deze gegevens dient te allen tijde te zijn verzekerd. Als burger, bedrijf en dienstverlener kun je ervan op aan dat de gegevens (en daaruit vloeiende informatie) veilig is.

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
Hogere kosten indien de data opslag behoefte omhoog gaat, en extra continue kosten met het kopieren van data naar het RDW. 
Gekopieerde data in het RDW.
Toegenomen complexiteit t.o.v. een traditioneel data lake, of data warehouse. 
Zonder extra randvoorwaarden, een grote mogelijkheid tot dezelfde problemen die wij al binnen RWS zijn, bijv. data eilanden.
Binnen in een domein, vooral één waar de hoeveelheid benodigde data in het data warehouse niet veel gaat groeien of uitbreiden, is het een mogelijke oplossing met weinig kosten maar veel flexibiliteit. Met de hoeveelheid data in RWS, nu en in de toekomst, kan een data fabric, een data lakehouse, of een data mesh een beter optie zijn voor het architectuur design op organisatie niveau. Federatief werken, vanuit de hoofdkennisvelden die wij al kennen, zit al in de organisatie structuur en is mogelijk dichter bij waar wij nu al naartoe aan het gaan zijn organisatie breed. 

*Data fabric*
Een data fabric betreft aan architectuur ontwerp waarbij er een combinatie is van een data warehouse en een data lake voor de sterkere kanten van beide, met de toevoeging van een aantal functies ter bevordering van data toegankelijkheid, security, vindbaarheid, en beschikbaarheid. Een centraal principe is dat een data fabric oplossing alle data kan consumeren binnen het domein waar het is toegepast (dat kan zijn RWS breed, of binnen een hoofdkennisveld). Er zijn 8 functies die bij een data fabric (kunnen) worden toegepast; beleid voor datatoegang, metadata catalogus, master data beheer, data virtualisatie, real-time processing, datatoegang via API's, data als diensten, en data producten. Het is niet nodig om alle functies te implementeren om een data fabric te implementeren, en het is discussieerbaar waar die lijn exact ligt. Een data mesh en een data fabric hebben mogelijk aparte rollen binnen data architectuur. Een data fabric is een methode wat binnen een domein toegepast kan worden, terwijl een data mesh een organisatie-breed ontwerp is. Verder is er nog een opmerkelijke toevoeging bij de definitie, en dat is dat een data fabric alle data, binnen het toegewezen domein of organisatie, kan opnemen op een uniforme manier. 

NB: Er zweven verschillende termen en definities rond voor dit concept. Zo wordt de term 'Modern Data Warehouse' ook eens gebruikt voor de definitie voor data fabric, of een andere definitie voor de term data fabric. Sommige termen zijn ook afhankelijk van technologieën die nog niet mogelijk of beschikbaar zijn, vooral rond het gedeelte van automatische data ontdekking en ingestie door het data fabric. 

Een data fabric is een variant op andere hybride architecturen, zoals een modern data warehouse, met extra functies. Het doel is een verbetering van data toegankelijkheid, beveiliging, vindbaarheid, en beschikbaarheid. En een "Intelligent" data fabric zou zoveel mogelijk autonoom data kunnen processen en aanbieden. Een data fabric en een data mesh kunnen beide toegepast worden in dezelfde data architectuur en sluiten elkaar dus niet noodzakelijkerwijs uit. Een data fabric zou in dat geval een domein-specifieke toepassing kunnen zijn. 

Voordelen:
Flexibel en schaalbaar. 
"Alle" data (binnen de scope) is op een uniforme en betrouwbare manier vindbaar en bereikbaar. 
Verminderen van data eilanden
Data wordt zo veel mogelijk in real-time verwerkt om de stroming door het data landschap te automatiseren en verbeteren. 
Geavanceerde data toegang beleidsregels, en de mogelijkheid om te voldoen aan verschillende sets regels en wetten. 
Sterke randvoorwaarden waar wij als RWS naartoe willen; Toegankelijkheid methodes, metadatering, master data, kernregistraties, het gebruik van API's. 
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

Domein-georiënteerde decentralisatie: Elk domein
Data als product: Gegevens moeten worden behandeld als een product, waarbij domeinen verantwoordelijk zijn voor de kwaliteit, bruikbaarheid en toegankelijkheid ervan. is eigenaar van zijn gegevens en beheert deze. 
Selfservice data-infrastructuur: Stel teams in staat met tools en platforms om hun data zelfstandig te beheren en te gebruiken zonder een grote afhankelijkheid van gecentraliseerde datateams.
Federatief IT beheer: Er bestaat een gezamenlijk gegevensbeheer tussen domeinen en een centraal gegevensteam om globale regels te definiëren, te implementeren en te controleren. 
