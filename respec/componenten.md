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
Afspraak: We maken tevens afspraken over de minimale encryptie sterkte en wanneer data wel of niet encrypted dient te zijn. Encryptie komt terug in paragraaf 5.4.6.1.
Er zijn verschillende oplossingen voor data opslag, de definities zijn hieronder uitgeschreven. Voornamelijk is als bron de DAMA DMBOK 2e editie (2017, ISBN: 9781634622349) gebruikt. Indien er afwijking is van de bron is dat vernoemd. 

4.5.5.1 Database
Def. Een database is elke verzameling van opgeslagen data, ongeacht de structuur of inhoud. Sommige grote databases verwijzen naar instanties en schema's (p. 168 DAMA DMBOK)

Het woord database wordt voor verschillende begrippen gebruikt:

de opgeslagen gegevens als zodanig.
de wijze waarop de gegevens zijn opgeslagen, het data(base)model.
de software waarmee databases kunnen worden aangemaakt en benaderd, Het databasemanagement systeem (DBMS).
Algemeen zijn er vier typen DBMS te onderkennen. Deze zijn Relational DBMS (RDBMS), Hierarchical DBMS, Network DBMS en Object-Oriented DBMS (OODBMS). Met een databasemanagementsysteem (DBMS) wordt een systeem aangeduid dat als database opgeslagen gegevens ontsluit, bewaakt en beheert. Een database bestaat vaak uit drie onderdelen: de opgeslagen gegevens (in één of meer bestanden), de functionaliteit waarmee de gegevens worden beheert (DBMS) en eventueel de gebruikersomgeving (client) die het gebruikers mogelijk maakt om de gegevens te gebruiken. Meestal is er één DBMS actief voor meer dan een gebruiker. Bekende en veelgebruikte programma's zijn relationele DBMS'en (afgekort tot RDBMS).

4.5.5.2 Data warehouse
Def. Een data warehouse (vaak afgekort tot DW of DWH) een combinatie van twee primaire onderdelen: een geïntegreerde beslissingsondersteunende database en de bijbehorende softwareprogramma's die worden gebruikt voor het verzamelen, opschonen, transformeren en opslaan van data uit een verscheidenheid aan operationele en externe bronnen (p. 362 DAMA DMBOK). NB: Er is bij de DAMA DMBOK een aparte definitie voor een Enterprise Data Warehouse (EDW), terwijl in sommige definities dit onder dezelfde definitie valt. 

Een datawarehouse kent de volgende kenmerken:

thematisch ingericht
geïntegreerd
geordend in de tijd
bevroren (gegevens)
4.5.5.3 Data lake
Def. Een data lake is een omgeving waar een enorme hoeveelheid data van uiteenlopende aard en structuur kunnen worden binnengehaald, opgeslagen, beoordeeld en geanalyseerd. (p. 476 DAMA DMBOK). 

4.5.5.4 Data lakehouse
Een data lakehouse is een nieuwer concept en nog niet gedefinieerd in de DAMA DMBOK. Hierbij is een combinatie definitie gekozen vanuit implementaties (databricks, snowflake) en theorie ("Deciphering Data Architectures", James Serra, 2024, 978-1-098-15076-1). 

Def. Een data lakehouse is een hybride benadering die een verscheidenheid aan ruwe gegevensformaten kunnen opnemen zoals een data lake, maar met meer functionaliteit om de functies van een data warehouse te vervangen. Een belangrijke mogelijke functionaliteit om het bieden van bijvoorbeeld ACID (Atomicity, Consistency, Isolation, and Durability) transacties en gegevenskwaliteit afdwingen zoals een data warehouse.
