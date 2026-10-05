// 7. Park Island ➔ Central
window.PulseFerry.registerRoute("park-island-central", {
    name: "Park Island ➔ Central",
    category: "islands",
    operator: "Park Island Transport Company Limited (PITCL)",
    piers: { "PI": "Park Island Ferry Pier", "CENTRAL": "Central Pier 2" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 27.00,
        adultHoliday: 27.00,
        residentAdultWeekday: 21.40,
        residentAdultHoliday: 21.40,
        childWeekday: 13.50,
        childHoliday: 13.50,
        concessionWeekday: 13.50,
        concessionHoliday: 13.50
    },
    trips: window.PulseFerry.generateDirectional("PI", "CENTRAL",
        ["06:30","07:00","07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","18:30","19:00","19:30","20:00","21:00","22:00","23:30"],
        ["06:55","07:25","07:55","08:25","08:55","09:25","10:25","11:25","12:25","13:25","14:25","15:25","16:25","17:25","18:25","18:55","19:25","19:55","20:25","21:25","22:25","23:55"], 22)
});

// 8. Park Island ➔ Tsuen Wan
window.PulseFerry.registerRoute("park-island-tsuen-wan", {
    name: "Park Island ➔ Tsuen Wan",
    category: "islands",
    operator: "Park Island Transport Company Limited (PITCL)",
    piers: { "PI": "Park Island Ferry Pier", "TW": "Tsuen Wan Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 12.00,
        adultHoliday: 12.00,
        childWeekday: 6.00,
        childHoliday: 6.00,
        concessionWeekday: 6.00,
        concessionHoliday: 6.00
    },
    trips: window.PulseFerry.generateDirectional("PI", "TW",
        ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00"],
        ["09:15","09:45","10:15","10:45","11:15","11:45","12:15","12:45","13:15","13:45","14:15","14:45","15:15","15:45","16:15"], 15)
});

// 12. Tuen Mun ➔ Tung Chung ➔ Sha Lo Wan ➔ Tai O
window.PulseFerry.registerRoute("tuen-mun-tai-o", {
    name: "Tuen Mun ➔ Tung Chung ➔ Sha Lo Wan ➔ Tai O",
    category: "lantau",
    operator: "Fortune Ferry",
    piers: { "TM": "Tuen Mun Ferry Pier", "TC": "Tung Chung Development Pier", "SLW": "Sha Lo Wan Pier", "TO": "Tai O Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 30.00,
        adultHoliday: 38.00,
        childWeekday: 15.00,
        childHoliday: 19.00,
        concessionWeekday: 15.00,
        concessionHoliday: 19.00
    },
    trips: [
        { stops: [{ p: "TM", t: "08:00" }, { p: "TC", t: "08:20" }, { p: "SLW", t: "08:35" }, { p: "TO", t: "09:10" }], duration: 70 },
        { stops: [{ p: "TM", t: "09:00" }, { p: "TC", t: "09:20" }, { p: "SLW", t: "09:35" }, { p: "TO", t: "10:38" }], duration: 98 },
        { stops: [{ p: "TM", t: "11:00" }, { p: "TC", t: "11:20" }, { p: "SLW", t: "11:35" }, { p: "TO", t: "12:10" }], duration: 70 },
        { stops: [{ p: "TM", t: "12:45" }, { p: "TC", t: "13:05" }, { p: "SLW", t: "13:20" }, { p: "TO", t: "13:55" }], duration: 70 },
        { stops: [{ p: "TM", t: "15:15" }, { p: "TC", t: "15:35" }, { p: "SLW", t: "15:50" }, { p: "TO", t: "16:25" }], duration: 70 },
        { stops: [{ p: "TM", t: "17:30" }, { p: "TC", t: "17:50" }, { p: "SLW", t: "18:05" }, { p: "TO", t: "18:40" }], duration: 70 },
        { stops: [{ p: "TO", t: "09:15" }, { p: "SLW", t: "09:33" }, { p: "TC", t: "09:48" }, { p: "TM", t: "10:25" }], duration: 70 },
        { stops: [{ p: "TO", t: "11:00" }, { p: "SLW", t: "11:18" }, { p: "TC", t: "11:33" }, { p: "TM", t: "12:10" }], duration: 70 },
        { stops: [{ p: "TO", t: "13:00" }, { p: "SLW", t: "13:18" }, { p: "TC", t: "13:33" }, { p: "TM", t: "14:10" }], duration: 70 },
        { stops: [{ p: "TO", t: "14:30" }, { p: "SLW", t: "14:48" }, { p: "TC", t: "15:03" }, { p: "TM", t: "15:40" }], duration: 70 },
        { stops: [{ p: "TO", t: "16:30" }, { p: "SLW", t: "16:48" }, { p: "TC", t: "17:03" }, { p: "TM", t: "17:40" }], duration: 70 },
        { stops: [{ p: "TO", t: "18:45" }, { p: "SLW", t: "19:03" }, { p: "TC", t: "19:18" }, { p: "TM", t: "19:55" }], duration: 70 }
    ]
});

// 34. Hong Kong (Sheung Wan) ➔ Macau Outer Harbour
window.PulseFerry.registerRoute("turbojet-macau-outer", {
    name: "Hong Kong (Sheung Wan) ➔ Macau Outer Harbour",
    category: "macau",
    operator: "TurboJET",
    piers: { "HK": "HK Macau Ferry Terminal (Sheung Wan)", "MACAU": "Macau Outer Harbour Ferry Terminal" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 175.00,
        adultHoliday: 190.00,
        superClassWeekday: 335.00,
        superClassHoliday: 360.00,
        childWeekday: 175.00,
        childHoliday: 190.00,
        concessionWeekday: 175.00,
        concessionHoliday: 190.00
    },
    trips: window.PulseFerry.generateDirectional("HK", "MACAU",
        ["07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"],
        ["07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"], 55)
});

// 35. Hong Kong (Sheung Wan) ➔ Macau Taipa
window.PulseFerry.registerRoute("cotai-water-jet-taipa", {
    name: "Hong Kong (Sheung Wan) ➔ Macau Taipa",
    category: "macau",
    operator: "Cotai Water Jet",
    piers: { "HK": "HK Macau Ferry Terminal (Sheung Wan)", "TAIPA": "Macau Taipa Ferry Terminal" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 175.00,
        adultHoliday: 190.00,
        childWeekday: 175.00,
        childHoliday: 190.00,
        concessionWeekday: 175.00,
        concessionHoliday: 190.00
    },
    trips: window.PulseFerry.generateDirectional("HK", "TAIPA",
        ["07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30","21:30","22:30"],
        ["07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30","21:30","22:30"], 65)
});
