// Dit bestand is een adaptatie van de standaard respec-config.js om te zorgen dat de ZoN-DA opmaak in lijn is met de MinBZK huisstijl.
var organisationConfig = {
    nl_organisationName: "MinBZK",
    // werkt nog niet 
    nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
    // bv styles url voor ander GN publicatiedomein met eigen stijlen zoals DSO of BRO:
    // nl_organisationStylesURL: "https://tools.geostandaarden.nl/respec/dso/style/",
    // nl_organisationStylesURL: "https://tools.geostandaarden.nl/respec/bro/style/",
    nl_organisationPublishURL: "https://minbzk.github.io/publicatie/",
    // logos: [{
    //     src: "https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg",
    //     alt: "Geonovum",
    //     id: "Geonovum",
    //     height: 67,
    //     width: 132,
    //     url: "https://www.geonovum.nl/geo-standaarden",
    //   }],
    logos: [{
        src: "https://gitdocumentatie.logius.nl/publicatie/respec/style/logos/figure-logius.svg",
        alt: "Logius",
        id: "Logius",
        height: 77,
        width: 44
    }],
	
	postProcess: [window.respecMermaid.createFigures],

	latestVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName", "/"],
    thisVersion: ["nl_organisationPublishURL", "pubDomain", "/", "specStatus", "-", "specType", "-", "shortName", "-", "publishDate"],
    prevVersion: ["nl_organisationPublishURL", "pubDomain", "/", "previousMaturity", "-", "specType", "-", "shortName", "-", "previousPublishDate"],
    useLogo: true,
    useLabel: true,

    license: "cc-by",
    addSectionLinks: true,

    localizationStrings: {
        en: {
            wv: "Editor's draft",
            cv: "Candidate recommendation",
            vv: "Proposed recommendation",
            def: "Recommendation",
            ld: "Living document",
            basis: "Document",
            //eo: "Outdated version",
            //tg: "Rescinded version",
            no: "Norm",
            st: "Standard",
            im: "Information model",
            pr: "Practical guideline",
            hr: "Guide",
            wa: "Work process agreement",
            al: "General",
            bd: "Governance documentation",
            bp: "Best practice",
        },
        nl: {
            wv: "Werkversie",
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
            def: "Vastgestelde versie",
            ld: "Levend document",
            basis: "Document",
            //eo: "Verouderde versie",
            //tg: "Teruggetrokken versie",
            no: "Norm",
            st: "Standaard",
            im: "Informatiemodel",
            pr: "Praktijkrichtlijn",
            hr: "Handreiking",
            wa: "Werkafspraak",
            al: "Algemeen",
            bd: "Beheerdocumentatie",
            bp: "Best practice",
        },
    },

    sotdText: {
        nl: {
            sotd: "Status van dit document",
            def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen stabiel document.`,
            cv: `Dit is een consultatieversie. `,
            vv: `Dit is de definitieve conceptversie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            basis: "Dit is een document zonder officiÃ«le status.",
            ld: "Dit is een levend document dat regelmatig gewijzigd wordt."
        },
        en: {
            sotd: "Status of this document",
            def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
            wv: `This is a working draft that can be changed, removed or replaced by other documents at any time. It is not a stable document.`,
            cv: `This is a stable draft, published for public comment. `,
            vv: `This is the final draft of this document. Edits resulting from consultations have been applied.`,
            basis: "This document has no official standing.",
            ld: "This is a living document, which is updated regularly."
        },
    },

    labelColor: {
        // def: "#045D9F",
        // wv: "#FF0000",
        // cv: "#045D9F",
        // vv: "#045D9F",
        // basis: "#80CC28",
        // ld: "#80CC28"
        wv: "#39870c"
    },
    
    licenses: {
        "cc0": {
            name: "Creative Commons 0 Public Domain Dedication",
            short: "CC0",
            url: "https://creativecommons.org/publicdomain/zero/1.0/",
            image: "https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg",
        },
        "cc-by": {
            name: "Creative Commons Attribution 4.0 International Public License",
            short: "CC-BY",
            url: "https://creativecommons.org/licenses/by/4.0/legalcode",
            image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg",
        },
        "cc-by-nd": {
            name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
            short: "CC-BY-ND",
            url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
            image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg",
        },
    },

    localBiblio: {
        "SemVer": {
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0",
            authors: ["T. Preston-Werner"],
            date: "June 2013"
        },
    },
}