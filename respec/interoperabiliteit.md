# Interoperabiliteit
<scope van dit document: technische interoperabiliteit en semantische operabiliteit zoals in het OpenDEI/DSSC model>

Voor Zicht op Nederland moeten we eerst een aantal termen die in ons domein leven goed definiëren en daarmee een plaats geven in het model. Tevens speelt geo-informatie een belangrijke rol. Geo-informatie heeft een aantal specifieke rollen en kenmerken die in de architectuur van Zicht op Nederland een aparte vermelding en specifieke oplossingen waard zijn.

Algemeen: focus op geo leggen.

## Interoperabiliteit (Yvette, Walter)
- EIF lagenmodel uitgelegd.
  - Juridisch
  - Organisatorisch
  - Semantisch
  - Technisch
- Locatie als aparte laag
- Relatie met DSSC blueprint.
- Wat is interoperabiliteit en hoe verhoudt zich dat tot metadata
- Behoefte aan interoperabiliteit / noodzaak tot data services
  - Operationele context
- Interoperabiliteitsprofielen (Walter)

## De specifieke rol van geo in interoperabiliteit (Otto, Marcel)
- Data en datasets
- brede definitie van data: ook algoritmes, DT-configuraties, regelgeving, vergunningen, etc. vallen hier onder
- “Ringen” van data gezien vanuit Zicht op Nederland
- Ring 0: basisregistraties geo
- overige ringen
- Databronnen (misschien verschuift deze naar 'Componenten/Voorzieningen')
- De rol van geo-specifieke informatie-elementen
- Combineren van Geo- en niet geo-informatie 

## Juridisch (Marcel, Yvette)

## Organisatorisch (Yvette, Rene)

## Semantisch (Danny, Walter)
Op semantisch niveau is het belangrijk dat gegevens betekenis hebben voor gebruikers van de gegevens die worden uitgewisseld. Dat gaat in eerste instantie over het helder definiëren van begrippen, zodat er een gemeenschappelijke betekenis wordt gegeven aan bepaalde termen. Vervolgens dient het domein van gesprek te worden gedefinieerd in een conceptueel informatiemodel dat de betekenis verder formaliseert, zodat het duidelijk genoeg is voor de vertaling naar informatievoorziening en gegevensuitwisseling. Voor het definiëren van begrippen is inmiddels de [Nederlandse standaard voor het beschrijven van begrippen](https://docs.geostandaarden.nl/nl-sbb/nl-sbb/) (NL-SBB) beschikbaar. Voor het definiëren van conceptuele informatiemodellen kan gebruik worden gemaakt van het [Metamodel voor Informatiemodellering](https://docs.geostandaarden.nl/mim/mim/) (MIM) of de Linked Data standaarden [RDFS](https://www.w3.org/TR/rdf-schema/) en [OWL](https://www.w3.org/TR/owl2-overview/).

In bredere zin is het belangrijk dat gegevens worden voorzien van betekenisvolle metagegevens zodat afnemers begrijpen wat ze betreffen en of ze bruikbaar zijn voor een bepaald gebruiksdoel. In eerste instantie gaat dat over verzamelingen van gegevens (datasets) die expliciet worden gepubliceerd in een gegevenscatalogus zoals het Nationaal Geo Register en data.overheid.nl. Hiervoor zijn standaarden beschikbaar zoals [DCAT](https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/) en [ISO 19115](https://docs.geostandaarden.nl/md/mdprofiel-iso19115/), waarmee relevante eigenschappen kunnen vastgelegd. Dat gaat over beschrijvende metagegevens zoals titel, samenvatting en trefwoorden. Er zouden ook metagegevens moeten worden opgenomen over de kwaliteit van de gegevens, zodat gebruikers beter kunnen inschatten of de gegevens betrouwbaar genoeg zijn voor hun toepassing.

De gegevens in de datasets worden beschikbaar gesteld in de vorm van gegevensdiensten zoals API's, waarbij de gegevens ook in specifieke formaten worden aangeboden. Daarbij kan gebruik worden gemaakt van de DCAT standaard, en voor geodata van de [ISO 19119](https://docs.geostandaarden.nl/md/mdprofiel-iso19119/) standaard. De term "dataproduct" is een meer algemene manier om te spreken over een bepaalde manier om gegevens te verkrijgen in een bepaald formaat. De term komt uit de context van data mesh, waarbij tevens wordt gestreefd naar het combineren van gegevens en metagegevens zodat ze onlosmakelijk aan elkaar zijn verbonden. In de huidige situatie zijn metagegevens veelal versnipperd en verspreid over allerlei catalogi, wat tot ongewenste zoekacties leidt bij gebruikers. Dit creëert al snel een te hoge drempel. Dit vraagt expliciete aandacht in dit datastelsel.

Er is een behoefte aan het kunnen combineren van geografische gegevens met andere soorten gegevens. Dergelijke gegevens zijn veelal dus niet voorzien van locatie-informatie. Het is daarom belangrijk om ook op administratief niveau gegevens met elkaar te kunnen combineren. Dat vraagt het gebruik van stabiele en wereldwijd unieke identificaties, zowel bij de bron als in gegevensverzamelingen die gecombineerd moeten worden met deze bron. De [NEN3610:2022](https://www.nen.nl/nen-3610-2022-nl-296137) standaard beschrijft hiervoor conventies. Het maakt bijvoorbeeld onderscheid tussen een formaat-onafhankelijke functionele identificatie en een formaat-specifieke technische identificatie. In het federatief datastelsel zijn ook inhoudelijke afspraken gemaakt over de te gebruiken identificerende kenmerken in de [informatiekundige kern](https://realisatieibds.nl/groups/view/0056c9ef-5c2e-44f9-a998-e735f1e9ccaa/federatief-datastelsel/wiki/view/a46b937f-cff7-41dc-ab6d-d5119a2478c0/notitie-informatiekundige-kern). Deze hebben ook betrekking op verwijzingen naar geodata.

Nader uit te werken:
- Hoe gaan we ervoor zorgen dat metagegevens op één plek integraal vindbaar en beschikbaar zijn voor afnemers?
- Op welk niveau leggen we dit vast?

Dit bekenent:
- Gebruik van de Nederlandse standaard voor het beschrijven van begrippen (NL-SBB) voor het beschrijven van de betekenis van gegevens die worden uitgewisseld
- Gebruik van de standaarden MIM en/of RDFS en OWL voor het definiëren van een conceptueel informatiemodel van de gegevens die worden uitgewisseld
- Gebruik van het Nederlands profiel op ISO 19115 en DCAT-AP-NL 3.0 voor het beschrijven van datasets
- Metagegevens van dataproducten zijn op één plek integraal vindbaar en beschikbaar
- Gebruik van de NEN3610:2022 standaard voor het definiëren van geodata, zoals bijvoorbeeld unieke identificatie
- Gebruik van de informatiekundige kern van het federatief datastelsel voor het identifceren van gegevens

## Technisch (Danny, Otto, Arno)
Op technisch niveau vindt de daadwerkelijke uitwisseling van gegevens plaats, maar daarvoor zijn ook technische afspraken en metagegevens nodig. Dat gaat bijvoorbeeld over logische gegevensmodellen en fysieke datamodellen, maar ook over informatie over de precieze locatie van gegevens en de opbouw van API's. De eerder genoemde standaard MIM kan gebruikt worden voor het definiëren van logische gegevensmodellen. Ze worden vertaald naar XML- of JSON Schema's, bij voorkeur geautomatiseerd. Linked Data gebaseerde modellen maken gebruik van de [SHACL](https://www.w3.org/TR/shacl/) standaard, die de RDFS/OWL specificaties verdiepen en duidelijk maken in welke gegevensstructuur gegevens beschikbaar zijn.

De locatie van gegevens en de beschikbare formaten worden beschreven in standaarden zoals DCAT en ISO 19115/19119. Daarnaast moeten er specificiaties voor API's worden opgesteld. Hiervoor is de [OpenAPI](https://www.openapis.org/) specificatie beschikbaar. Het resultaat wordt gepubliceerd op developer.overheid.nl zodat ontwikkelaars snel voor hen relevante API's kunnen vinden en gebruiken. Het is in meer algemene zin de plek waar ontwikkelaars binnen de overheid informatie kunnen vinden over hoe er binnen de Nederlandse overheid software wordt ontwikkeld.

Voor de technische uitwisseling zelf geldt dat deze steeds meer gebaseerd is op API's, steeds meer realtime is en steeds fijnmaziger. Daarmee kunnen specifieke gebruikers (inclusief ontwikkelaats) op een laagdrempelige manier, direct voor hen relevante gegevens verkrijgen. In een aantal omstandigheden blijft uitwisseling in batch en/of van bestanden meer passend, bijvoorbeeld als het proces dat wordt ondersteund meer periodiek van aard is en/of geen hoge eisen stelt aan de actualiteit van gegevens. De geo-standaarden zijn inmiddels ook overgegaan naar API-gebaseerde standaarden en sluiten daarmee aan op genoemde ontwikkelingen. Het voordeel van API standaarden is dat deze in de basis weinig specifieke functionaliteit vragen en dus in veel gevallen geen aanvullende middleware componenten nodig hebben.

Een belangrijk aandachtspunt is data bij de bron. Dit credo is vooral een uitting van de intentie om gegevens niet te kopiëren als het niet nodig is. Ze zouden moeten worden opgehaald bij de bron op het moment dat het relevant is. Daarmee worden problemen met consistentie en/of actualiteit zoveel mogelijk voorkomen. Dit heeft een directe relatie met de beweging naar API's, realtime en fijnmazigheid. Voor geodata blijven er echter nog steeds bepaalde processen die toch om een kopie vragen. Denk bijvoorbeeld aan het uitvoeren van geluidsberekeningen, waarbij gebruik wordt gemaakt van een grote hoeveelheid gegevens over de leefomgeving. Dit zijn langlopende processen, die ook directe toegang tot de betreffende gegevens nodig hebben. Het minimaliseren van kopieën kan alleen door de berekening direct bij de data zelf plaats te laten vinden. Er blijft daarbij echter altijd ook een behoefte aan een kopie van landelijke 3D basisbestanden.  

Er wordt in de technische uitwisseling van gegevens onderscheid gemaakt tussen het control plane en het data plane. Het control plane is gericht op het ondersteunen van het proces, terwijl de data plane de daadwerkelijke overdracht van gegevens verzorgd. De laatste is toenemend minder relevant aan het worden, mede ingegeven door een algemene beweging naar het gebruik van open standaarden en RESTful API's. Het control plane is verantwoordelijk voor het controleren van relevante afspraken, zoals het controleren van de autorisatieregels (policies) die gelden voor het afnemen van de gegevens. Hiervoor zijn meerdere standaarden in ontwikkeling zoals het Dataspace Protocol, AuthZEN en de Nederlandse Federated Service Connectivity (FSC) en de standaarden die worden ontwikkeld in het project Federatieve Toegangsverlening. Tegelijkertijd zijn dit soort standaarden vooral relevant voor het uitwisselen van gevoelige gegevens, terwijl veel geografische gegevens als open data beschikbaar zijn.  

Het gebruik van bepaalde standaarden heeft ook impact op de voorzieningen die deelnemers nodig hebben om deel te nemen aan het datastelsel. In algemene zin wordt in de context van data spaces gesproken over connectoren. Een connector is een technische voorziening waarmee een deelnemer aansluit op de data space. Voor het internationale Dataspace Protocol is er inmiddels een verzameling van standaard connectoren beschikbaar. Als gebruik wordt gemaakt van bijvoorbeeld de FSC standaard, dan vraagt dit weer andere connectoren (inways/outways) en voorzieningen. Als uitgebreide voorzieningen nodig zijn voor het controleren van autorisatieregels (bijvoorbeeld op basis van de AuthZEN standaard) dan is er ook een policy engine nodig om deze autorisatieregels te controleren.

Nader uit te werken:
- Op welk niveau leggen we dit vast?
- Metadata versus data uitwisselen
- Impact van behoefte aan combineren
- Is er een clearing house nodig in het datastelsel?
- Gaat het datastelsel gebruik maken van het Dataspace Protocol, AuthZEN, FSC en/of FTV en in welke omstandigheden?
- Welke connectoren hebben deelnemers nodig?

Dit betekent:
- Gebruik van de standaar MIM en/of SHACL voor het specificeren van logische gegevensmodellen
- Automatisch genereren van fysieke schema's uit logische gegevenmsmodellen
- Specificeren van API's middels de OpenAPI specificatie
- Publiceren van API's op developer.overheid.nl