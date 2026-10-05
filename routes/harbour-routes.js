// 24. Central ➔ Tsim Sha Tsui
window.PulseFerry.registerRoute("star-ferry-central-tst", {
    name: "Central ➔ Tsim Sha Tsui",
    category: "harbour",
    operator: "Star Ferry",
    piers: { "CENTRAL": "Central Pier 7", "TST": "Tsim Sha Tsui Star Ferry Pier" },
    fares: { adultWeekday: "HK$5.00 (Upper) / $4.00 (Lower)", adultHoliday: "HK$6.50 (Upper) / $5.60 (Lower)" },
    trips: window.PulseFerry.generateFrequent("CENTRAL", "TST", "06:30", "23:30", 8, 8)
});

// 25. Wan Chai ➔ Tsim Sha Tsui
window.PulseFerry.registerRoute("star-ferry-wanchai-tst", {
    name: "Wan Chai ➔ Tsim Sha Tsui",
    category: "harbour",
    operator: "Star Ferry",
    piers: { "WANCHAI": "Wan Chai Ferry Pier", "TST": "Tsim Sha Tsui Star Ferry Pier" },
    fares: { adultWeekday: "HK$5.00", adultHoliday: "HK$6.50" },
    trips: window.PulseFerry.generateFrequent("WANCHAI", "TST", "07:30", "22:50", 12, 8)
});

// 26. Central ➔ Hung Hom
window.PulseFerry.registerRoute("central-hung-hom", {
    name: "Central ➔ Hung Hom",
    category: "harbour",
    operator: "Fortune Ferry",
    piers: { "CENTRAL": "Central Pier 8", "HH": "Hung Hom Ferry Pier" },
    fares: { adultWeekday: "HK$11.00", adultHoliday: "HK$11.00" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "HH",
        ["07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:00","18:30","19:00"],
        ["07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:00","18:30","19:00"], 16)
});

// 27. North Point ➔ Hung Hom
window.PulseFerry.registerRoute("north-point-hung-hom", {
    name: "North Point ➔ Hung Hom",
    category: "harbour",
    operator: "Sun Ferry",
    piers: { "NP": "North Point Ferry Pier", "HH": "Hung Hom Ferry Pier" },
    fares: { adultWeekday: "HK$9.00", adultHoliday: "HK$9.00" },
    trips: window.PulseFerry.generateDirectional("NP", "HH",
        ["07:23","07:53","08:23","08:53","09:23","09:53","10:23","11:23","12:23","13:23","14:23","15:23","16:23","17:23","17:53","18:23","18:53","19:23"],
        ["07:08","07:38","08:08","08:38","09:08","09:38","10:38","11:38","12:38","13:38","14:38","15:38","16:38","17:08","17:38","18:08","18:38","19:08"], 14)
});

// 28. North Point ➔ Kowloon City
window.PulseFerry.registerRoute("north-point-kowloon-city", {
    name: "North Point ➔ Kowloon City",
    category: "harbour",
    operator: "Sun Ferry",
    piers: { "NP": "North Point Ferry Pier", "KC": "Kowloon City Ferry Pier" },
    fares: { adultWeekday: "HK$9.00", adultHoliday: "HK$9.00" },
    trips: window.PulseFerry.generateDirectional("NP", "KC",
        ["07:17","07:47","08:17","08:47","09:17","09:47","10:17","11:17","12:17","13:17","14:17","15:17","16:17","17:17","17:47","18:17","18:47","19:17"],
        ["07:02","07:32","08:02","08:32","09:02","09:32","10:02","11:02","12:02","13:02","14:02","15:02","16:02","17:02","17:32","18:02","18:32","19:02"], 14)
});

// 29. North Point ➔ Kwun Tong
window.PulseFerry.registerRoute("north-point-kwun-tong", {
    name: "North Point ➔ Kwun Tong",
    category: "harbour",
    operator: "Fortune Ferry",
    piers: { "NP": "North Point Ferry Pier", "KT": "Kwun Tong Ferry Pier" },
    fares: { adultWeekday: "HK$9.00", adultHoliday: "HK$9.00" },
    trips: window.PulseFerry.generateDirectional("NP", "KT",
        ["07:00","07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:00","17:30","18:00","18:30","19:00","19:30"],
        ["07:15","07:45","08:15","08:45","09:15","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:15","17:45","18:15","18:45","19:15"], 12)
});

// 30. Sai Wan Ho ➔ Kwun Tong
window.PulseFerry.registerRoute("sai-wan-ho-kwun-tong", {
    name: "Sai Wan Ho ➔ Kwun Tong",
    category: "harbour",
    operator: "Coral Sea Ferry",
    piers: { "SWH": "Sai Wan Ho Pier", "KT": "Kwun Tong Pier" },
    fares: { adultWeekday: "HK$10.00", adultHoliday: "HK$10.00" },
    trips: window.PulseFerry.generateDirectional("SWH", "KT",
        ["06:48","07:18","07:48","08:18","08:48","09:18","09:48","10:48","11:48","12:48","13:48","14:48","15:48","16:48","17:18","17:48","18:18","18:48","19:18","20:18","21:18"],
        ["07:03","07:33","08:03","08:33","09:03","09:33","10:33","11:33","12:33","13:33","14:33","15:33","16:33","17:03","17:33","18:03","18:33","19:03","20:03","21:03"], 15)
});

// 31. Sai Wan Ho ➔ Sam Ka Tsuen
window.PulseFerry.registerRoute("sai-wan-ho-sam-ka-tsuen", {
    name: "Sai Wan Ho ➔ Sam Ka Tsuen",
    category: "harbour",
    operator: "Coral Sea Ferry",
    piers: { "SWH": "Sai Wan Ho Pier", "SKT": "Sam Ka Tsuen Pier" },
    fares: { adultWeekday: "HK$10.00", adultHoliday: "HK$10.00" },
    trips: window.PulseFerry.generateDirectional("SWH", "SKT",
        ["06:45","07:15","07:45","08:15","08:45","09:15","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:15","17:45","18:15","18:45","19:15","20:15","21:15"],
        ["07:00","07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:00","17:30","18:00","18:30","19:00","20:00","21:00"], 15)
});

// 32. Tseung Kwan O ➔ Sai Wan Ho
window.PulseFerry.registerRoute("tko-sai-wan-ho", {
    name: "Tseung Kwan O ➔ Sai Wan Ho",
    category: "harbour",
    operator: "Transport Department / Licensed Service",
    piers: { "TKO": "Tseung Kwan O South Landing", "SWH": "Sai Wan Ho Pier" },
    fares: { adultWeekday: "HK$12.00", adultHoliday: "HK$12.00" },
    trips: window.PulseFerry.generateDirectional("TKO", "SWH",
        ["07:15","07:45","17:45","18:15"],
        ["07:35","08:05","18:05","18:35"], 20)
});

// 33. Sam Ka Tsuen ➔ Tung Lung Chau
window.PulseFerry.registerRoute("sam-ka-tsuen-tung-lung-chau", {
    name: "Sam Ka Tsuen ➔ Tung Lung Chau",
    category: "harbour",
    operator: "Coral Sea Ferry",
    piers: { "SKT": "Sam Ka Tsuen Pier", "TLC": "Tung Lung Chau Pier" },
    fares: { adultWeekday: "HK$50.00 (Roundtrip)", adultHoliday: "HK$50.00 (Roundtrip)" },
    trips: window.PulseFerry.generateDirectional("SKT", "TLC",
        ["08:40","10:00","11:20","13:00","14:20","15:40","16:50"],
        ["09:20","10:40","12:00","13:40","15:00","16:20","17:30"], 40)
});
