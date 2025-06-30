# Vertrouwen: Identiteiten, Toegang en Veiligheid

## Inleiding

Het OPENDEI bouwstenenmodel laat zien, dat data sovereiniteit en vertrouwen en de drie bijbehorende bouwstenen ‘Identity Management’, Trusted Exchange’ en ‘Access & Usage Control/Policies’ een belangrijk en integraal onderdeel zijn van het data space concept. Gezamenlijk worden ze het ‘vertrouwenskader’ (trust framework) genoemd. OPEN DEI definieert een ‘trust framework’ als “een structuur die mensen en organisaties veilig en betrouwbaar online zaken laat doen”. Zie bijvoorbeeld ook iShare <https://docs.geostandaarden.nl/eu/VerkenningDataspaces/#2D59F874>

Met de bouwsteen ‘Identiteit management’ (Identity Management) kunnen belanghebbenden die in een data space actief zijn, worden geïdentificeerd, geverifieerd en geautoriseerd. Het zorgt ervoor dat organisaties, personen, machines en andere actoren worden voorzien van erkende identiteiten en dat die identiteiten kunnen worden geverifieerd, met inbegrip van aanvullende informatieverstrekking, die door autorisatiemechanismen kunnen worden gebruikt om toegangs- en gebruikscontrole mogelijk te maken.

De bouwsteen ‘toegangs- en gebruikscontrole’ (Access & Usage Control/Policies) garandeert de handhaving van het beleid inzake datatoegang en -gebruik dat is gedefinieerd als onderdeel van de algemene voorwaarden, die zijn vastgesteld wanneer data producten worden gepubliceerd (zie de bouwsteen Marktplaats’ verderop) of waarover wordt onderhandeld tussen providers en consumenten. Een dataprovider implementeert doorgaans mechanismen voor datatoegangsbeheer om misbruik van haar data te voorkomen, terwijl controlemechanismen voor datagebruik meestal worden geïmplementeerd aan de kant van de consument om misbruik van data te voorkomen. In complexe datawaardeketens worden beide mechanismen gecombineerd door ‘prosumenten’. Toegangscontrole en gebruikscontrole zijn afhankelijk van identificatie en authenticatie.

De derde bouwsteen ‘vertrouwde uitwisseling’ (trusted exchange) vergemakkelijkt de vertrouwde data-uitwisseling tussen deelnemers en stelt de deelnemers aan een data-uitwisseling gerust dat andere deelnemers echt zijn wie ze beweren te zijn en dat ze voldoen aan de gemaakte afspraken van de data space. Dit kan enerzijds worden bereikt door organisatorische maatregelen (zoals het werken met certificering / certificaten of door geverifieerde referenties) of anderzijds door eventuele technische maatregelen als attestering op afstand.

(bron: verkenning dataspaces GeoNovum)

## Identiteiten en actoren

Met een identiteit wordt een claim gesteld in de vorm van 'ik ben ...'. Identiteiten volgens eIDAS (“Visie op Rijksbreed IAM” van CIO-Rijk, januari 2025 is hierop gebaseerd) zijn onder te verdelen in: 
- Entiteiten: Dit overkoepelende begrip omvat natuurlijke personen, organisaties en dingen (gelijk aan NORA);
- Partijen: Deze kunnen natuurlijke personen of organisaties zijn. Partijen stellen doelen, maken beslissingen en beheren kennis;
- Actoren: Deze kunnen natuurlijke personen of dingen (zoals computers, apparaten) zijn. Actoren voeren acties uit namens Partijen;

In DSFL zijn partijen een breden verzameling zoals overheden, private organisaties en natuurlijke personen in verschillende rollen (burger, medewerker/ambtenaar). Een partij kan meerdere Identiteiten hebben, dit zullen we een hoedanigheid noemen. Een identiteit heeft een eigenaar die bepaalt of die identiteit bij de partij (en dus ook eventueel een Actor) hoort.

### Identiteitsregisters

In DSFL zijn meerdere Identiteitsregisters mogelijk omdat veel partijen in verschillende rollen in het stelsel als actor kunnen optreden. Dit wordt ‘Party Driven Actor’ (PDA) genoemd, volgens rapport TNO2024 R12345 uit 2024. Hierin wordt gedefinieerd:
- Welke handelingen de actor mag uitvoeren
- Volgens welk beleid deze handelingen moeten worden uitgevoerd
- Welke mandaten en rollen van toepassing zijn
- Hoe het werk van de actor wordt bestuurd

### Authenticatie

Voor het verifiëren van identiteiten en de toegang to resources vind zowel op EU niveau (eIDAS) als op nationaal niveau (Wet Digitale Overheid) standaardisatie plaats. Hiermee zijn eIDAS/eHerkenning/Digid erkende inlogmiddelen en kunnen ook andere WDO compliant middelen hieraan worden toegevoegd zoals iDIN. Voor services met toegangsbeperking wordt de identiteit vertaald naar autorisatie-tokens (bv op basis van OAuth2/OIDC) voor het aanspreken van de betreffende services en data.

### Delegeren, Machtigen en Mandateren

Dit betreft het overdragen van bevoegdheden aan andere partijen om handelingen, eventueel met rechtsgevolgen, uit te voeren. Dit kunnen zowel natuurlijke als niet natuurlijke personen zijn. De ene partij komt als het ware in de plaats van de andere partij. Dit is niet hetzelfde als autoriseren waarbij partijen in hun eigen hoedanigheid blijven handelen.

Het proces omdat naast de vaststelling van identiteiten en bevoegdheden ook de uitgifte, registratie, uitoefening, intrekking en controle. Dit kan zowel binnen organisaties als over organisaties heen. Het ontwerp van de dataspace dient zodanig te zijn dat machtigingenvoorzieningen en -registers kunnen worden ingevuld met generieke voorzieningen. Er wordt geen DSFL machtigingsregister gecreëerd. Hiermee wordt geaccepteerd dat niet alle vormen van machtigen beschikbaar zijn zoals ketenmachtigingen (N.B. De eHerkenning ketenmachtiging is geen ketenmachtiging).

? FSC toevoegen als mandateringsinstrument op API niveau.

## Toegang verlenen

Toegang verlenen of autorisatie betekent data ter beschikking stellen aan een afnemende partij (wat mag jij?). Toegang is afhankelijk van de wederzijdse identificatie en authenticatie van de betreffende partijen (wie ben jij?). Alleen Open data kan toegankelijk zijn zonder de afnemer te kennen.

Toegang verlenen of access management dient buiten de applicaties te worden gebracht (externalised) om separaat te kunnen worden beheerd. De basisgedachte is het scheiden van verantwoordelijkheden (separation of concerns). Regels worden gescheiden van code in zogenaamde policies, en het beheer van policies wordt gescheiden van het handhaven ervan. Welke verantwoordelijkheden precies gescheiden moeten worden is al meer dan 20 jaar geleden bedacht als onderdeel van de XACML autorisatiestandaard. Deze standaard bevat nog veel meer, waaronder een XML-gebaseerde policy-taal. Hoewel XML goeddeels uit de gratie is gevallen, zijn de basisverantwoordelijkheden algemeen geaccepteerd in de zogenaamde PxP-architectuur. Hierin is de uitvoering (enforcement), beslissing (decision) en autorisatieregel (policy information/administration) van elkaar gescheiden.

De basis van een extern toegangsmechanisme is een technologie-agnostische policy taal, minimaal gebaseerd op open standaarden. Binnen DSFL zal er één standaard worden ondersteund.

? Verder verwijzen naar https://vng-realisatie.github.io/ftv/ en https://vng-realisatie.github.io/ftv/onderzoek/status_techniek/standaarden/ en/of https://vng-realisatie.github.io/ftv/methodiek/federatief/
! Verschil met FTV is dat deze uitgaat van overheidsorganisaties (en dus PKIO certificaten) terwijl DSFL breed is en dus authenticatie bewijzen van een breed scala aan partijen zal ondersteunen.

## Veiligheid

Veiligheid waarborgt de vertrouwde data uitwisseling tussen partijen. Het omvat organisatorische en technische maatregelen. Op basis van risico's kunnen de maatregelen worden getroffen. Hiervoor zijn geaccepteerde maatregelsets beschikbaar zoals NIS2/BIO2 en ISO27001/2. Belangrijk is dat veiligheid niet achteraf kan worden toegevoegd maar integraal moet zijn mee-ontworpen. We praten dan over security en privacy 'by design'. Hierop wordt in de volgende paragrafen dieper op in gegaan.

### Contracts

Waar API's de enablers zijn voor beschikbaar stellen van data zijn API profielen/specificaties de technische contracten om aanbieder en afnemer op elkaar aan te laten sluiten. Hierbij  
Organisatorisch worden serviceniveau's gedefinieerd die afnemers zekerheid bieden. Er zijn 2 (categorieën) serviceniveau's: Fair Use en SLA gebaseerd.
- Fair Use wordt meestal gebruikt bij open data en om beschikbare resources zodanig te verdelen dat de afnemers optimaal gelijkwaardig worden behandeld.
- SLA gebaseerd wordt gebruikt voor afnemers die zekerheid willen hebben over de mate van dienstverlening en resources meestal omdat zij de data in een kritisch bedrijfsproces integreren. SLA gebaseerde afname is niet zonder kosten.

## Security by design

Beveiliging kan worden gedefinieerd als het nemen van maatregelen en acties om risico’s te beperken of de impact of schade te beperken die ontstaat als dreigingen misbruik maken van kwetsbaarheden. Dit kan bijvoorbeeld zijn als iemand een ‘hack’ probeert te plaatsen. Een risico wordt gedefinieerd als de kans op een incident te vermenigvuldigen met de impact/schade. Uiteindelijk is 100% veiligheid nooit helemaal te realiseren maar kan worden gesteld dat het ‘veilig’ is als het restrisico acceptabel is. Risico’s neem je bewust: dat noemen we de risk appetite. Om iets goed te kunnen beveiligen is het dus allereerst nodig om de risico’s te weten. Wat is de dreiging en door wie wordt die veroorzaakt? Daarnaast is de vraag welke maatregelen en acties kunnen worden genomen. Dit wordt ook wel aangeduid als ‘passende technische en organisatorische maatregelen’. 

De VIR (Voorschrift Informatiebeveiliging Rijksdienst) en VIR-BI (Bijzondere informatie) geven de strategische en wettelijke kaders voor informatiebeveiliging van overheidsvoorzieningen. De overheid heeft dit op bais van de ISO27001/2 standaard samengevat (en uitgebreid met overheid specifieke maatregelen) in een tactisch beveiligingskader genaamd de Baseline Informatiebeveiliging Overheid (BIO). Versie 2 hiervan zal leidend zijn aangezien hier ook de NIS2 EU richtlijn zal worden verwerkt. Daarmee heeft beveiliging, analoog aan de AVG bij privacy, een wettelijk kader gekregen.  

### Services

Services binnen de DSFL worden middels API's aangeboden. Hiervoor gelden de NL Design Rules als kader waarin specifiek beveiligingsrichtlijnen zijn opgenomen. Deels komen die van andere kaderstellende instanties zoals de TLS richtlijn van NCSC. Services die data aanbieden worden in drie categorieën ingedeeld in oplopende beveiliging:
- Open services (afgeschermd met API-Keys)
- Services met toegangsbeperking (afgeschermd met Oauth2/OIDC)
- Services met doelbinding (afgeschermd met PKIO)

Dit kan eigen data of data van derden zijn.

### Classificatie

Uitgangspunt is lage classificatie gezien de verantwoording van de kosten van beveiligingsmaatregelen. Het basisprincipe voor DSFL is ‘passende beveiligingsmaatregelen voor reële risico’s' Uitangspunt is dat de BIV-classificaties niet op risico’s duiden die maatregelen hoger dan het standaardniveau BIO2 BBN2 (basis beveiligingsniveau) vereisen. Maar gezien de verwerking van bedrijfsvertrouwelijke- en persoonsgegevens ook niet lager. De overheid kent grofweg drie niveaus van vertrouwelijkheidsclassificatie: publiek, departementaal vertrouwelijk (DepV) en staatsgeheim. Binnen DSFL zullen voor een groot deel publieke gegevens beschikbaar worden gemaakt. DepV betekent dat er schade kan ontstaan en hiervoor zijn de BIO2-maatregelen bedoeld. Hieronder vallen ook concurrentiegevoelige bedrijfs- en fabricagegegevens van organisaties. Staatsgeheime informatie dient buiten het stelsel te blijven omdat de kosten van de maatregelen niet opwegen tegen de kosten en de bruikbaarheid en beheerbaarheid ernstig in de weg zullen zitten. Voor DSO is DepV toepasselijk. Eigenaren van data dienen hun informatie van adequate labeling te voorzien. 

### Onweerlegbaarheid

Van de acties en handelingen die binnen DFL plaatsvinden zal minimaal vastlegging moeten plaatsvinden die voor verantwoording achteraf kan zorgen (tot en met juridische procedures). Zo kan ook niet worden ontkend dat deze handelingen hebben plaatsgevonden (onweerlegbaarheid). Daarnaast kunnen deze in beheerprocessen worden gebruikt. Dit betekent voorzieningen voor logging, auditing en archivering van scrijf- én leesacties en mutaties op identiteiten en policies die in separate registraties staan.

### Organisatie

Beveiliging begint bij inrichting van een beveiligingsorganisatie en –processen op strategisch, tactisch en operationeel niveau. Alleen dan kan beveiliging op bestendige wijze worden ingericht en uitgevoerd. Indien beveiligingsprocessen in de reguliere beheerprocessen worden opgenomen hebben zij de grootste effectiviteit. Beveiliging is per definitie hiërarchisch georganiseerd. Ook kunnen de maatregelen alleen bestendig zijn als deze continu op basis van nieuwe dreigingsinschattingen worden bijgesteld en verbeterd, bij voorkeur via een plan-do-check-act cyclus.
! samenvoegen met organisatie privacy

## Privacy by design

Privacy betreft het beperken van de inbreuk op iemands persoonlijke levenssfeer. Het vervult de wens om onbespied en onbewaakt te leven. Het is (in Europa) een grondrecht (art. 8 van Europees verdrag voor de rechten van mens) en een fundamentele bouwsteen voor een vrije samenleving. Privacy is met de verregaande verspreiding van digitale informatie via het internet een serieus vraagstuk en beschermingsprobleem geworden. Identiteitsfraude is geen incident meer maar een structureel criminele activiteit. Verlies van persoonsgegevens in de vorm van datalekken is aan de orde van de dag. Persoonsgegevens zijn gegevens die naar een natuurlijk persoon te herleiden zijn. Dus een gegeven of combinatie van gegevens waarmee een persoon zonder bijzondere inspanning kan worden geïdentificeerd. Op dit moment is de Algemene Verordening Gegevensbescherming (AVG) de juridische basis waarin is vastgelegd onder welke voorwaarden persoonsgegevens wél mogen worden verwerkt.

Persoonsgegevens dien je alleen voor een specifiek doel te gebruiken dat bekend is gemaakt en waarvoor toestemming is verkregen en niet voor een ander doel (doelbinding). Ook dien je niet meer gegevens te verzamelen die je voor het beoogde doel echt nodig hebt (dataminimalisatie) en eventueel alternatieven te overwegen die tot hetzelfde doel leiden (proportionaliteit/subsidiariteit). Voor de overheid is de belangrijkste verwerkingsgrond de noodzaak om een wettelijke en publieke taak goed uit te voeren. Toestemming van betrokkenen als grondslag is niet haalbaar aangezien het grotendeels machine/machine communicatie betreft.
Ergo, hoe minder persoonsgegevens gedeeld worden hoe beter. Privacy niet alleen 'by design' maar ook by default, dus de basisinstellingen zijn standaard het meeste privacybeschermend zijn. Dit zal ook voor DSFL als uitgangspunt van toepassing zijn. 

### Classificatie

Om te weten hoe persoonsgegevens beschermd moeten worden dienen deze eerste geclassificeerd te worden:
- De persoonsgegevens die in de aan te bieden en af te nemen data is opgenomen. Deze vallen onder de verantwoordelijkheid van de aanbieder/eigenaar en is deze in de meeste gevallen ook verwerkingsverantwoordelijke.
- De persoonsgegevens van de partijen (burgers, medewerkers van organisaties) die interacteren met de DSFL. Hiervoor is de DSFL beheerorganisatie verantwoordelijk.

Persoonsgegevens worden in een drietal categorieën ingedeeld:
- Bijzondere persoonsgegevens.
- Gevoelige persoonsgegevens.
- Gewone persoonsgegevens.

Bijzondere persoonsgegevens vallen onder een specifiek regime van de AVG. Ze zijn zo privacygevoelig dat ze extra bescherming nodig hebben. Dit zijn gegevens over iemands ras, gezondheid, politieke opvattingen, religie of seksuele gerichtheid. Ook strafrechtelijke gegevens vallen hieronder hetgeen betekent dat Toezicht & Handhaving (T&H) gegevens uitwisselen zich automatisch beperkt tot bestuurlijke T&H. In DSFL worden geen bijzondere persoonsgegevens verwerkt. Het is aan de aanbieder/eigenaar om te zorgen dat deze gegevens niet beschikbaar of benaderbaar zijn. Hoewel het BSN strict genomen geen bijzonder persoonsgegeven is maar een nationaal identificatienummer scharen we deze voor de DSFL in dezelfde categorie.

Gevoelige persoonsgegevens vallen niet binnen de categorie bijzondere persoonsgegevens maar er zijn we extra risico's aan verbonden. Dit betreft bijvoorbeeld inkomens- en of financiële gegevens maar ook in het verleden aangevraagde vergunningen. Voorafgaand aan zowel aanbieden als afnemen hiervan dienen de risico's in kaart te zijn gebracht, bij voorkeur in een DPIA.

? Kunnen er specifieke privacy policies worden gecreëerd en gestandaardiseerd waarin de doelbinding kan worden opgenomen zodat alleen afnemers die hieraan voldoen bij deze data kunnen.

Gewone persoonsgegevens vallen onder de reguliere kaders van de AVG zoals NAW en contactgegevens. Dit kan bijvoorbeeld ook een inspecteur zijn die een toezichtsrapport heeft geschreven. Hiervoor gelden de reguliere AVG kaders en waarborgen.

Publiek beschikbare persoonsgegevens zoals eigenaren van bedrijven in het Handelsregister kunnen bij verdere verwerking binnen de DSFL in één van de drie categorieën komen te vallen en worden de kaders voor die categorie van toepassing.

Specifieke risico’s zullen met passende maatregelen worden beschermd. Het meest voor de hand liggend is dan encryptie van persoonsgegevens in rust en tijdens transport, verwijzingen op basis van betekenisloze id's, pseudonimisering, maskering, anonimisering enz.

Binnen DSFL zorgen aanbieders/eigenaars van data voor de juiste classificatie en labeling van metadata en data die persoonsgegevens bevat. Hiermee kunnen afnemers ook bepalen dat zij persoonsgegevens niet ongewild alsnog verwerken. Als zij deze bewust wel verwerken hebben zij alle waarborgen van de AVG in acht genomen.

? Zijn er 2de orde privacy vraagstukken omdat veel informatie gekoppeld via geo voor bv huiseigenaren middels perceelinformatie tot privacy risico's kunnen leiden.

### Organisatie

Analoog aan beveiliging in algemene zin geldt ook voor privacy dat een aanzienlijke organisatorische en procesinrichting benodigd zijn. Processen voor privacybescherming zullen ook in reguliere beheerprocessen moeten worden ondergebracht op zowel strategisch, tactisch en operationeel niveau. AVG verplichte onderdelen als privacy beleid, privacy verklaringen, verwerkingenregister en DPIA's dienen te worden belegd.

Voor DSFL betekent dit een beheerorganisatie die dit voor de DSFL regelt als eisen aan de beheerorganisaties die data aanbieden en afnemen. De verwerkingsverantwoordelijkheid zal expliciet moeten zijn toegewezen met als uitgangspunt dat dit aan één entiteit kan worden toegewezen (MinIenW?). Hier kunnen dan ook de rechten van betrokkenen worden geborgd (zoals inzage, rectificatie, gegevenswissing, beperking van de verdere verwerking van gegevens)

? Wat maakt een DSFL beheerorganisatie tav privacy anders dan een reguliere beheerorganisatie. Centrale plek om DSFL generieke gegevensleveringsovereenkomsten op te stellen? Is er een DSFL beheerorganisatie voorzien?

