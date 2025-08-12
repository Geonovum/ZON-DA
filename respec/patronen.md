# Algemene patronen (“handelingsperspectieven”) 
Handelingsperpectieven geven concrete invulling hoe je kunt handelen in een bepaalde situatie. Vanuit de ZoN context zijn dit dus burgers, overheden of bedrijven die ruimtelijke informatie, naast andere informatie gebruiken om een bepaald resultaat te bereiken. In deze paragraaf gebruiken we prototypische use cases als kapstok om het proces globaal te beschrijven en te benoemen welke functionaliteit (capablities) en componenten nodig zijn om de gewenste waarde te realiseren.

Moeten we ruimtelijke informatie wel als exclusief beschouwen? In de context van ZoN  is dat natuurlijk zo maar in ons (Geonovum) onderzoek naar data ecosystemen komen we er steeds meer achter dat niet-geo domeinen weinig afweten van de geostandaarden en hoe ze te gebruiken in de context van hun domein. 
Gebruik van ruimtelijke informatie is niet een doel op zich, maar gebruik van ruimtelijke informatie is een middel  om, naast vele andere soorten informatie, het doel te bereiken.

## Generieke handelingsperspectieven
In het algemeen geldt de generieke keten:  OPMERKING WL: de datawaardeketen is in 2.3 al toegelicht, moeten we daarnaar verwijzen? En dan onderstaande tekst laten vervallen?

Vraag -> Data inwinnen/verzamelen -> Analyse/verwerking -> Informatie -> Visualisatie/presentatie

## Vraag
Vraagarticulatie is een eerste stap om te bepalen wat is de informatiebehoefte van de vrager is. Op basis van de behoefte kan bepaald worden welke data benodigd zijn om de gevraagde behoefte te vervullen. Vaak weet een vrager niet wat de mogelijkheden zijn. Best practices, voorbeelden zijn hierbij nodig. Dit is vooral een communicatie vraag en vereist goed doorvragen en de vraag achter de vraag helder krijgen. Stel de juiste vragen en probeer niet teveel in oplossingen te denken.

## Data inwinnen/verzamelen
Is eenmaal de behoefte bepaald dan is het noodzakelijk om de juiste data in te winnen of te verzamelen zodanig dat de informatie hieruit gegenereerd kan worden.
Dit vereist kennis van data mamagement en het betekent dat data Findable (vindbaar), Accessible (toegankelijk), Interoperable (interoperabel) en Reusable (herbruikbaar) moeten zijn. 
Er zijn basisdata, bijvoorbeeld de basisregistraties, maar ook bijvoorbeeld luchtfoto's, satellietdata en andere sensor data. Deze data zijn in feite een gegeven en moeten beschikbaar gesteld zijn voor iedereen. Deze data vormen de basis voor verdere verwerking.

## Analyse/verwerking
Daarnaast zijn er verschillende niveau's van databewerking op deze basisdata mogelijk, zoals bijvoorbeeld van het toepassen van standaard, gevalideerde, algoritmes tot het toepassen van meer experimentele algoritmes. De diverse output data van deze niveau's zijn in zichzelf weer input voor een volgende verwerkingsstap. De te kiezen verwerkingsstap hangt af van de inputdata en de informatiebehoefte. Onderdeel van de verwerking zijn ook de kwaliteit en de validatie van de verwerking. Hoe goed is de uiteindelijke informatie?

## Informatie
Hoe wordt de informatie uiteindelijk gebruikt? Uiteraard moet dit in de vraagarticulatie behandeld zijn. Maar als de informatie uiteindelijk beschikbaar komt zal de informatie gevisualiseerd/gepresenteerd worden. Dan is de manier waarop bepalend voor de manier hoe de "buitenwereld" er teganaan kijkt.

## Visualisatie/presentatie
Hierbij is het van belang om voor de juiste doelgroep de informatie op de juiste manier te presenteren. De visualisatie van de informatie is van cruciaal belang voor het overbrengen van de boodschap. 

## Specifieke handelingsperspectieven
1) Mengen van geo en niet-geo data
Zorg ervoor dat niet alleen geodata beschikbaar komt maar ook niet-geo data. Hoe krijgen we toegang tot de niet-geo data en over welke data hebben we het dan? En gaan we het niet alleen over de data hebben maar ook over de benodigde tooling, om geo en niet-geo data te combineren, hiervoor?
2) Mengen van private en publieke data
Hoe krijgen we toegang tot private data? Gaan we dat zelf regelen? Of is hiervoor een apart afsprakenstelsel voor (nodig)? FDS kijkt vooralsnog alleen naar publieke data, is daar een niche voor DSFL?
3) Mengen van open en gesloten data
Onder welke voorwaarden is er toegang tot gesloten data? Is privacy (gesloten data) een showstopper of kans? Ligt de verantwoordelijkheid bij de verstrekker of de afnemer? Wat doen we met de doelbinding?
4) Koppelen aan andere domeinen
Bij FDS cicurleert een lijst met ruim 200 registraties uit andere domeinen. Gaan we dit gebruiken? Gaan we die allemaal binnen de kern en ring 1 halen (zie paragraaf 2.x)
5) Aansluiten databronnen: wat moet je doen als je een bron wilt aansluiten / Wat moet een bron kunnen?
Niet alleen voorwaarden, maar ook kwaliteit?Atualiteit?Metadata?
6) Geo-enabling: ik weet niets van geo maar wil het wel gebruiken, handreiking hoe locatiecomponenten als bv adres in te zetten bij nieuwe registraties
Zorgen voor unifomering in gebruik van locatiegegevens, handreikingen maken, zorgen dat verankering van locatiegegevens in toekomstige wetgeving (en misschien al in bestaande wetgeving?) verankerd wordt.

## Generiek
Generiek wil hier zeggen dat een gebied of GEO-locatie het vertrekpunt is voor een informatie vraag. Een voorbeeld hiervan:
Als organisatie (profit of non-profit) wil ik onderzoeken welke potentiële ontwikkeling er voor een bepaalde kavel in een bepaald gebied, bijvoorbeeld het havengebied van onze grootste zee-haven, mogelijk is. Om dit onderzoek uit te voeren zal geo-informatie met diverse andere gegevens gecombineerd moeten worden, afhankelijk van de context en de wijze waarop de analyse wordt uitgevoerd. 
Het onderzoeksgebied (afbakening) zal door de onderzoeker aangeleverd moeten worden. Dit kan bijvoorbeeld door een gebied op een kaart te tekenen. Informatie over de betreffende kavel, of andere kavels in het gebied, wordt daarna opgehaald vanuit de basisregistratie BAG.

Betreffende de fysieke leefomgeving zal in ieder geval zowel wel de huidige- als toekomstige regelgeving en de bestaande vergunningen meegenomen moeten worden. Hierbij richt het onderzoek zich op de vraag  “Wat mag er?”. Bijvoorbeeld: 
•	Welke regels gelden er op dit moment voor het gebied als geheel en specifiek deze kavel? 

•	Zijn er toekomstige wijzigingen in de de fysieke leefomgeving voorzien, bijvoorbeeld gebiedsontwikkeling? 

•	Zo ja, is er sprake van participatie en burgerbetrokkenheid of lopen er juridische procedures?   

•	Wat is er al vergund op deze locatie of in het relevante gebied? Lopen er al vergunningsaanvragen?

Afhankelijk van de situatie kan vervolgens onderzocht worden welke economische activiteiten interessant zijn voor deze specifieke kavel (“Wat is gunstig?”). Op basis van een grote diversiteit aan gegevens, zoals de kadastrale gegevens, marktdata, sector informatie of bevolkingsdata, kan een analyse van de fysieke en economische potentie worden uitgevoerd. 
Tot slot is het ook voor de vraag of een economische activiteit haalbaar en winstgevend kan zijn (“Wat loont?”) zinvol om diverse (financiële) gegevens te relateren aan de locatie. Bijvoorbeeld de grondwaarde, subsidieregelingen en  doorlooptijden van vergunningstrajecten.

## Atomair
Atomair is als je eigenschappen van enkele objecten gebruikt (geen gebieden dus) om een doel te bereiken.
Als burger wil ik nagaan of een windturbine in mijn gemeente voldoet aan de vergunning en welke subsidies verkregen zijn.
1) Zoeken
  - Op basis van locatie zoeken wat de indentificatie(s) is/zijn van de windturbine. (BGT - BRT - BAG - NetbeheerNL - RVO - ?)
2) Informatie opvragen
  - Wat zijn de voorwaarden voor het verlenen van deze vergunning? (officele bekendmakingen / DSO)
  - Welke subsidies zijn verleend voor deze windturbine? (RVO)
  - Hoeveel draaiuren en heeft deze windturbine en welk vermogen wordt opgewekt (NetbeheerNL)
  - Hoeveel geluid produceert deze windturbine in de tijd (inspectie)
  - Wat is de afstand tot de bebouwing? (BAG)
3) Analyse
- Bovenstaande informatie wil ik combineren en hiermee nagaan of de feitelijke situatie die ik waarneem nog voldoet aan de afgegeven vergunning.
(achterliggend probleem: windturbines zijn niet eenduidig geidentificeerd, waardoor het zeer lastig is om in verschillende administraties gegevens te kunnen opvragen of te combineren. Het in ZoN gestelde doel om de kernregistraties te verbinden met de basisregistraties moet het mogelijk maken om eenvoudiger verschillende datasets in samenhang te kunnen bevragen.)


## Datagedreven werken – hoe kom je aan data?
Hanteer de FAIR principes: Findable (vindbaar), Accessible (toegankelijk), Interoperable (interoperabel) en Reusable (herbruikbaar).
OPMERKING WL: wat zijn de randvoorwaarden die je aan data stelt? Is het Raamwerk geostandaarden leidend? Gaat het alleen over geodata of ook over andere databronnen.


## Data Analyseren
<>
## Data Visualiseren
<>
## Het gebruik van een Digital Twin of een model

<img src="https://github.com/user-attachments/assets/a212129f-c54b-43b4-90f2-2fc561b41a69" alt="Architectuur driehoek Met Geonovum logo" width="900">

## Aansluiten van een nieuwe bron of dataset
<>



<etc,....andere current issues en hoe die worden opgelost door het stelsel>

## Soorten gebruikers en hun handelingsperspectieven

### Bronhouders
**Wie?** Organisaties die geo-(basis)registraties beheren, zoals Kadaster (BRK), BAG‑houders (gemeenten), BGT‑houders (provincies/waterschappen) en registraties ondergrond (BRO).

**Handelingsperspectief**
- Afnemen en benutten gebruikersinzichten via gebruikersoverleggen om processen te verbeteren.  ￼
- Opstellen van kwaliteitszorg, toezicht en bijbehorende procedures.  ￼
- Actieve betrokkenheid bij standaardisatie en API‑orkestratie (IMX‑Geo) om semantische samenhang te vergroten.

### Afnemers / Gebruikende organisaties
**Wie?** Rijksoverheid, provincies, gemeenten, waterschappen, uitvoeringsorganisaties, bedrijven, kennisinstellingen, burgers. 

**Handelingsperspectief**
- Delen van gebruikservaringen via overleg met bronhouders in BRK, BAG, BRT‑gebruikersoverleggen.
- Communiceren van wensen, knelpunten en functionele behoeften voor dataproducten.
- Gebruik van dashboards (zoals BAG-gebruikersdashboard) om inzicht te verwerven in datakwaliteit en volume.

### Analisten, beleidsmakers en planners
**Wie?** Beleidsmedewerkers, planologen, civiele ingenieurs, overheids- en marktanalisten.

**Handelingsperspectief**
- Benutting van geaggregeerde, geïntegreerde datasets voor beleids- en ruimtelijke analyses.
- Toegang tot koppelingen tussen verschillende registraties via IMX‑Geo voor complexe ruimtelijke vraagstukken.
- Gebruik van 3D‑data en digitale tweelingen voor simulaties, impactanalyses en beleidsvisualisatie.

### Applicatie- en systeemontwikkelaars
**Wie?** (Geo-)IT‑leveranciers, softwareontwikkelaars, data‑engineers.

**Handelingsperspectief**
- Toegang tot gestandaardiseerde API’s (zoals bestuurlijke grenzen, IMX‑Geo‑orkestratie).
- Mogelijkheid om maatwerkapplicaties en integraties te ontwikkelen op basis van open standaarden.
- Deelname aan pilots en projecten (zoals woningbouwmonitor, Integrale Hoogtevoorziening Nederland, 3D‑voorziening).

### Bestuurders & strategische stakeholders
**Wie?** Portefeuillehouders, bestuurders, GI‑beraad-leden.

**Handelingsperspectief**
- Gebruik van het geodatafundament voor afstemming tussen beleid en uitvoering (“vraaggestuurd sturen op waardecreatie”).
- Borgen van governance, financiering en juridische kaders via bestuurlijke overleggen.
- Strategisch monitoren van maatschappelijke opgaven met robuuste data-infrastructuur als stuurmiddel.

**Samenvattend**
| Gebruikersgroep                 | Belangen                                                   | Handelingsperspectieven                                         |
|-------------------------------|-------------------------------------------------------------|------------------------------------------------------------------|
| **Bronhouders**               | Beheer van geo-basisregistraties (BAG, BGT, BRK, BRO)       | Deelnemen aan gebruikersoverleggen, kwaliteitszorg, standaardisatie via API’s |
| **Afnemers / Gebruikers**     | Gebruiksvriendelijkheid, datakwaliteit en volledigheid     | Delen van feedback via overleg, gebruik van dashboards         |
| **Analisten / Beleidsmakers** | Strategische inzichten, analyses, 3D‑planning             | Koppelen van datasets, simulaties, visualisaties               |
| **Ontwikkelaars**            | Integratie en ontwikkeling van geo-applicaties             | Bouwen met API’s, participeren in pilots en innovatie          |
| **Bestuurders / Strategen**   | Governance, financiering, beleidsslagkracht               | Kaders stellen, monitoren van maatschappelijke opgaven via data |
