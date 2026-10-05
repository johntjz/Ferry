window.PulseFerry.registerRoute("park-island-central", {
    name: "Park Island ➔ Central",
    category: "islands",
    operator: "PITCL",
    piers: { "PI": "Park Island Ferry Pier", "CENTRAL": "Central Pier 2" },
    fares: { adultWeekday: "HK$36.00 (Visitor) / $24.10 (Resident)", adultHoliday: "HK$36.00 (Visitor) / $24.10 (Resident)" },
    trips: window.PulseFerry.generateDirectional("PI", "CENTRAL",  
        ["06:30","07:00","07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","18:30","19:00","19:30","20:00","21:00","22:00","23:00"],
        ["06:55","07:25","07:55","08:25","08:55","09:25","10:25","11:25","12:25","13:25","14:25","15:25","16:25","17:25","18:25","18:55","19:25","19:55","20:25","21:25","22:25","23:25"], 22)
});

window.PulseFerry.registerRoute("turbojet-macau-outer", {
    name: "Hong Kong (Sheung Wan) ➔ Macau Outer Harbour",
    category: "macau",
    operator: "TurboJET",
    piers: { "HK": "HK Macau Ferry Terminal (Sheung Wan)", "MACAU": "Macau Outer Harbour" },
    fares: { adultWeekday: "HK$194.00 (Day) / $242.00 (Night)", adultHoliday: "HK$212.00 (Day) / $242.00 (Night)" },
    trips: window.PulseFerry.generateDirectional("HK", "MACAU",  
        ["07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30","21:30","22:30","23:30"],
        ["07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30","21:30","22:30","23:30"], 65)
});
