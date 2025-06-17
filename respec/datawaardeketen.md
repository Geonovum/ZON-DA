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
- breed, moeilijk om vast omlijnde processen te onderscheiden>
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
- Wat is het belang van gegevenskwaliteit in deze dataspace?
- Welke eisen stel je aan bepaalde soorten gegevens?
- Raamwerk gegevenskwaliteit NORA
- Stappenplan gegevenskwaliteit NORA

## Gegevensleveringsovereenkomsten (Danny/Rene/Ine)
- Overnemen rijksbreed gegevensdelingsbeleid (concept)?
- Relatie met connectoren

## Publicatie (Arno)
- Publicatie van metadata – per stap in de waardeketen
