# Gegevens, data en metadata in DSFL

## 'Gegevens' en 'data' in de context van DSFL

Om meteen met de deur in huis te vallen:
> De termen 'gegevens' en 'data' worden in deze Doelarchitectuur gebruikt als synoniem.

> Zicht op Nederland, en daarmee de scope van DSFL, is gericht op het delen van data in een ruimtelijke ('geo-')context.
Veel data in DSFL zal geografische data zijn, maar dat hoeft niet. Voor bepaalde maatschappelijke opgaven kan het nodig zijn om data die niet per se geografisch is opgeslagen (zoals projectmetingen) toch af te beelden op geografische ondergronden.

Om deze combinatie van geografische en niet-geografische data mogelijk te maken bevat DSFL een aantal hulpcomponenten. Zie hiervoor het hoofdstuk Componenten.

In DSFL worden niet alleen de klassieke data uitgewisseld. In het kader van datagedreven werken zijn er ook meer en meer informatie-producten die binnen de datawaardeketen uitgewisseld worden. 

> Onder 'gegevens' of 'data' in het kader van DSFL worden verstaan niet alleen klassieke data, maar ook daarvan afgeleide informatie-producten en andere digitale objecten (‘digital assets’ of ‘digital artefacts’).

Voorbeelden hiervan zijn algoritmen die door modellen en Digital Twins kunnen worden uitgewisseld, of interne parameters van AI-modellen. Het vinden en uitwisselen van deze digitale objecten kan leiden tot specifieke extra afspraken binnen DSFL. Denk hierbij bijvoorbeeld aan het inrichten van een 'App Store' waarin Digital Twins en relevante algoritmen kunnen worden gevonden (en 'gedownload'). 

DSFL is daarmee een heterogeen, dynamisch gegevenslandschap dat binnen de vastgestelde regels (zie Governance) kan groeien.



## 'Metadata' in de context van DSFL

Een dataspace is een ecosysteem waarin data- en serviceproviders en potentiële consumenten/gebruikers samen worden gebracht. Aangezien in DSFL men niet per definitie 'op elkaar aangewezen is' voor een vastgesteld probleem of proces, dient een succesvolle 'matchmaking' plaats te vinden tussen vraag en aanbod. Er worden in feite relaties opgebouwd die leiden tot datadeling. Om matchmaking te faciliteren, zijn beschrijvingen vereist van de beschikbare gegevens: metadata van de data en diensten die worden aangeboden, inclusief informatie over de voorwaarden waaronder ze worden aangeboden. De consument/gebruiker kan zo de juiste gegevens voor de juiste vraag identificeren en wordt doorgeleid naar de aanbieder.

<>


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
