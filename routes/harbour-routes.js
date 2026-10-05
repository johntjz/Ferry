window.PulseFerry.registerRoute("star-ferry-central-tst", {
    name: "Central ➔ Tsim Sha Tsui",
    category: "harbour",
    operator: "Star Ferry",
    piers: { "CENTRAL": "Central Pier 7", "TST": "Tsim Sha Tsui Star Ferry Pier" },
    fares: { adultWeekday: "HK$5.00 (Upper) / $4.00 (Lower)", adultHoliday: "HK$6.50 (Upper) / $5.60 (Lower)" },
    trips: window.PulseFerry.generateFrequent("CENTRAL", "TST", "06:30", "23:30", 8, 9)
});

window.PulseFerry.registerRoute("star-ferry-wanchai-tst", {
    name: "Wan Chai ➔ Tsim Sha Tsui",
    category: "harbour",
    operator: "Star Ferry",
    piers: { "WANCHAI": "Wan Chai Ferry Pier", "TST": "Tsim Sha Tsui Star Ferry Pier" },
    fares: { adultWeekday: "HK$5.00", adultHoliday: "HK$6.50" },
    trips: window.PulseFerry.generateFrequent("WANCHAI", "TST", "07:20", "22:50", 10, 8)
});

window.PulseFerry.registerRoute("central-hung-hom", {
    name: "Central ➔ Hung Hom",
    category: "harbour",
    operator: "Fortune Ferry",
    piers: { "CENTRAL": "Central Pier 8", "HH": "Hung Hom Ferry Pier" },
    fares: { adultWeekday: "HK$10.00", adultHoliday: "HK$10.00" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "HH",  
        ["07:50","08:30","09:10","09:50","10:30","11:10","11:50","13:10","14:00","14:40","16:00","16:40","17:20","18:00","18:40","19:20"],
        ["07:30","08:10","08:50","09:30","10:10","10:50","11:30","12:50","13:30","14:20","15:00","16:20","17:00","17:40","18:20","19:00"], 16)
});
