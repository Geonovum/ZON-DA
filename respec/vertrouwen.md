# Vertrouwen: Identiteiten, Toegang en Veiligheid

## Inleiding

In diverse data space initiatieven bestaat deze categorie ook bekend als het ‘Trust framework’. Voorbeelden zijn iSHARE en International Data Spaces. In de categorie ‘Vertrouwen’ treffen we ook een drietal bouwstenen aan.

Met de bouwsteen ‘Identiteit management’ (IM) kunnen belanghebbenden die in een data space actief zijn, worden geïdentificeerd, geverifieerd en geautoriseerd. Het zorgt ervoor dat organisaties, personen, machines en andere actoren worden voorzien van erkende identiteiten en dat die identiteiten kunnen worden geverifieerd, met inbegrip van aanvullende informatieverstrekking, die door autorisatiemechanismen kunnen worden gebruikt om toegangs- en gebruikscontrole mogelijk te maken.

De bouwsteen ‘toegangs- en gebruikscontrole’ garandeert de handhaving van het beleid inzake datatoegang en -gebruik dat is gedefinieerd als onderdeel van de algemene voorwaarden, die zijn vastgesteld wanneer data producten worden gepubliceerd (zie de bouwsteen Marktplaats’ verderop) of waarover wordt onderhandeld tussen providers en consumenten. Een dataprovider implementeert doorgaans mechanismen voor datatoegangsbeheer om misbruik van haar data te voorkomen, terwijl controlemechanismen voor datagebruik meestal worden geïmplementeerd aan de kant van de consument om misbruik van data te voorkomen. In complexe datawaardeketens worden beide mechanismen gecombineerd door ‘prosumenten’. Toegangscontrole en gebruikscontrole zijn afhankelijk van identificatie en authenticatie.

De derde bouwsteen ‘vertrouwde uitwisseling’ vergemakkelijkt de vertrouwde data-uitwisseling tussen deelnemers en stelt de deelnemers aan een data-uitwisseling gerust dat andere deelnemers echt zijn wie ze beweren te zijn en dat ze voldoen aan de gemaakte afspraken van de data space. Dit kan enerzijds worden bereikt door organisatorische maatregelen (zoals het werken met certificering / certificaten of door geverifieerde referenties) of anderzijds door eventuele technische maatregelen als attestering op afstand.

(bron: verkenning dataspaces GeoNovum)

## Identiteiten en actoren in de DSFL

Identiteiten nauw volgens eIDAS (“Visie op Rijksbreed IAM” van CIO-Rijk, januari 2025 is hierop gebaseerd): 
- Entiteiten: Dit overkoepelende begrip omvat natuurlijke personen, organisaties en dingen (gelijk aan NORA);
- Partijen: Deze kunnen natuurlijke personen of organisaties zijn. Partijen stellen doelen, maken beslissingen en beheren kennis;
- Actoren: Deze kunnen natuurlijke personen of dingen (zoals computers, apparaten) zijn. Actoren voeren acties uit namens Partijen;

In DSFL: 
- Partijen zijn Overheden, Private organisaties, natuurlijke personen in verschillende rollen (Burger, Medewerker/Ambtenaar);
- <>

<Partij kan meerdere Identiteiten hebben, Identiteit heeft een eigenaar die bepaalt of die identiteit bij de Partij (en dus ook eventueel een Actor) hoort>

In DSFL: meerdere Identiteitsregisters mogelijk omdat veel Partijen in verschillende rollen in het stelsel als Actor kunnen optreden. Denk hierbij aan <>. Dit wordt ‘Party Driven Actor’ (PDA) genoemd, volgens rapport TNO2024 R12345 uit 2024. Hierin wordt gedefinieerd:
- Welke handelingen de actor mag uitvoeren
- Volgens welk beleid deze handelingen moeten worden uitgevoerd
- Welke mandaten en rollen van toepassing zijn
- Hoe het werk van de actor wordt bestuurd

## Delegeren

Delegeren kent verschillende vormen:
- Rechten kunnen doogeven aan personen binnen een organisatie
- Andere organisaties kunnen toestaan taken uit te voeren namens de eigen organisatie

> Dit betekent voor DSFL:
> - Rechten kunnen gedelegeerd worden onder voorwaarden
> - Periodiek vind er een controle plaats op gedelegeerde rechten

## Toegang verlenen

Toegang wordt geregeld via eIDAS erkende inlogmiddelen. In Nederland zijn DigiD en eHerkenning Europees erkende inlogmiddelen.

Open data dient toegankelijk te zijn zonder de identiteit van de afnemer te kennen.

> Dit betekent voor DSFL:
> - DigiD en eHerkenning zijn erkende inlogmiddelen en deze worden gebruik voor toegang tot besloten (en getarifeerde) data


## Veiligheid

Veiligheid waarborgt de vertrouwde data uitwisseling tussen partijen. Het omvat organisatorische en technische maatregelen. Op basis van risico's kunnen de maatregelen worden getroffen. Hiervoor zijn geaccepteerde maatregelsets beschikbaar zoals NIS2/BIO2 en ISO27002. 

Belangrijk is dat veiligheid niet achteraf kan worden toegevoegd maar integraal moet zijn mee-ontworpen. We praten dan over security en privacy 'by design'.

## Security by design

Security by design wordt toegepast. Dit passend bij het doel en benodigd beveiligingsniveau van DSFL (BIV 222).

Daar waarvan gegevens verwerkt worden hebben een aantal rechten, zoals het recht op: 
- inzage
- rectificatie
- gegevenswissing
- beperking van de verwerking van gegevens
- overdraagbaarheid
- bezwaar/beroep

> Dit betekent voor DSFL:
> - Er worden geen persoonsgegevens verwerkt die niet passen in de gerechtvaardigde doelen
> - Er worden passende technische en organisatorische maatregelen getroffen om gegevens te beschermen
 
## Privacy by design

<AVG: privacy – by design: standaard afscherming van persoonsgegevens en privacy als
basisprincipe, inclusief ‘zo min mogelijk gegevens over identiteit delen’/selectieve identificatie (komt deels ook uit WOB)>

In DSFL worden geen bijzondere persoonsgegevens verwerkt. Bijzondere persoonsgegevens zijn persoonsgegevens die zo gevoelig zijn dat ze extra bescherming nodig hebben, zoals gegevens over iemands ras, gezondheid, politieke opvattingen, religie of seksuele gerichtheid. 

Voor de uitvoering van het beleid is het noodzakelijk dat bestuursorganen beschikken over informatie van bedrijven, onder meer in het kader van vergunningverlening, toezicht en monitoring. Hieronder vallen concurrentiegevoelige bedrijfs- en fabricagegegevens. Hier dient zorgvuldig mee omgegaan te worden. 

> Dit betekent voor DSFL:
> - Er komt een verwerkingsregister en privacy verklaring.
