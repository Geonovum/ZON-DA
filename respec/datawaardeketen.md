# Datawaardeketen Zicht op Nederland

![Samenhangende data](./respec/media/samenhangende_data.png)

Een plaatje kun je invoegen door het te plaatsen in de respec/media map en dan een verwijzing in markdown te doen:

```
![<beschrijving plaatje>](./respec/media/<naam plaatje>)
```
Als je het plaatje geforceerd een bepaalde grootte wil geven kan het ook met een html tag:

```
<img src="./respec/media/naam plaatje>" alt="beschrijving plaatje" width="900">
```
(waarbij width het aantal pixels aangeeft van de breedte van het plaatje)

## Waardeketen (Paul/Peter)

Waardeketen zoals beschreven in de visie Zicht op Nederland

- Stappen in de waardeketen
    - Inwinnen
    - Verwerken
    - Analyseren
    - …
- Relatie tussen waardeketen en bedrijfsprocessen
    - Datagedreven werken
    - Beheren van gegevens
    - Randvoorwaarden om waardeketen te laten werken zoals dataparagrafen in opdrachten die je uitbesteedt
    - Informatiebehoeften in de keten

Originele input van René:
- breed, moeilijk om vast omlijnde processen te onderscheiden
- plaatje en uitleg Datawaardeketen
- Scope “RO/beleidscyclus” uitleggen, samenhang met datawwaardeketen
- Vanuit enterprise architectuur zeg je bijv niks over inwinnen en inwineisen en kwaliteitsniveaus, maar bijv. wel over stapelbaarheid, dus elk object een ID en elk dataproduct een geo-referentie
- Volgen datawaardeketen: ongestructureerde data -> gestructureerde data -> geaggregeerde data -> analyse/visualisatie data. 
- Voorzieningenarchitectuur (functionele componenten): machineleesbaar, mensleesbaar, identificatie/toegang, terugmelding etc
- verwijzing naar “Patronen”

## Afbakening van bronnen en gebruik (Ine/Arno)

## Metadata (Ine/Niels)

- Begrippen en informatie/gegevensmodellen – per stap in de waardeketen
- Dataset metadata (ISO 1911X, DCAT) – per stap in de waardeketen
- Data lineage – per stap in de waardeketen
- Toegankelijkheid van metadata voor alle toepassingsdomeinen – generiek doorzoekbaar maken

## Voorwaarden voor het gebruik vanuit proces geredeneerd (Danny)
- Verrekening
- Logging
- Autorisatie

## Kwaliteit (Danny)
De kwaliteit van gegevens is een belangrijke bepalende factor voor de bruikbaarheid ervan. In de context van een datastelsel is dat niet anders. Het inzichtelijk maken en verbeteren van de  kwaliteit van de gegevens die beschikbaar in het datastelsel verdient daarom expliciete aandacht. Dit is in de basis een verantwoordelijkheid van bronhouders, maar ook afnemers hebben daarbij een verantwoordelijkheid. De eisen die worden gesteld aan de kwaliteit van gegevens zijn nu eenmaal afhankelijk van het gebruik. Er is dan ook expliciete afstemming over kwaliteitseisen nodig tussen bronhouders en afnemers. Afnemers zouden ook twijfels over de juistheid van gegevens expliciet moeten terugmelden aan bronhouders.

Er is in de context van NORA eeen [stappenplan](https://www.noraonline.nl/wiki/Stappenplan_gegevenskwaliteit) ontwikkeld voor het verbeteren van de kwaliteit van gegevens dat bronhouders een handreiking biedt. Het geeft aan welke stappen voor een specifieke gegevensverzameling zou moeten worden gezet. Uitgangspunt voor het stappenplan is dat er al een algemene inrichting aanwezig is in de vorm van strategie, beleid, governance, architectuur, processen en systemen. De voorgestelde stappen voor het verbeteren van de kwaliteit van een specifieke gegevensverzameling zijn: 1. Bepalen context, 2. Beschrijven gegevens, 3. Beschrijven regels en eisen, 4. Meten gegevenskwaliteit, 5. Afhandelen signalen en 6. Implementeren maatregelen. Het verbeteren van de kwaliteit van gegevens staat relatief los van het datastelsel. Het is meer een randvoorwaarde.

In een datastelsel ligt de nadruk op het uitwisselen van gegevens. Daarbij is het vooral belangrijk dat er informatie en metagegevens beschikbaar zijn over kwaliteit. Dat betekent dat in de metagegevens van de dataset die beschikbaar wordt gesteld ook informatie over gegevenskwaliteit is opgenomen. Hiervoor zijn in een aantal standaarden voorgedefinieerde eigenschappen opgenomen. Daarnaast kan in de beschrijvende tekst informatie over de gewenste en gemeten gegevenskwaliteit worden opgenomen. Binnen de Nederlandse overheid is er een raamwerk met een standaard begrippenkader beschikbaar voor gegevenskwaliteit: het [NORA raamwerk gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit). Deze biedt standaard termen, maar ook standaard formuleringen om uitdrukking te geven aan de kwaliteit van gegevens. Dit raamwerk is liefst ook de basis voor het definiëren en meten van gegevenskwaliteit, zodat kwaliteit vanaf het begin op een uniforme manier wordt beschouwd.

## Gegevensleveringsovereenkomsten (Danny/Rene/Ine)
- Overnemen rijksbreed gegevensdelingsbeleid (concept)?
- Relatie met connectoren

## Publicatie (Arno)
- Publicatie van metadata – per stap in de waardeketen
