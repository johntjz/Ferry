window.PulseFerry.registerRoute("star-ferry-central-tst", {
    name: "Central ➔ Tsim Sha Tsui",
    category: "harbour",
    operator: "Star Ferry",
    piers: { "CENTRAL": "Central Pier 7", "TST": "Tsim Sha Tsui Star Ferry Pier" },
    fares: { adultWeekday: "HK$5.00", adultHoliday: "HK$6.50" },
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
    fares: { adultWeekday: "HK$10.70", adultHoliday: "HK$10.70" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "HH", 
        ["07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:00","18:30","19:00","19:30"],
        ["07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:00","18:30","19:00","19:30"], 16)
});
