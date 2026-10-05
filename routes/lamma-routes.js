window.PulseFerry.registerRoute("central-lamma-ysw", {
    name: "Central ➔ Lamma Island (Yung Shue Wan)",
    category: "islands",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 4", "YSW": "Yung Shue Wan" },
    fares: { adultWeekday: "HK$22.00", adultHoliday: "HK$31.00" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "YSW",  
        ["00:30","02:30","06:30","07:15","08:00","08:40","09:30","10:10","11:00","11:40","12:30","13:10","14:00","14:40","15:30","16:15","17:00","17:40","18:30","19:15","20:00","21:00","22:30","23:30"],
        ["01:15","05:30","06:20","07:00","07:40","08:20","09:00","09:45","10:30","11:15","12:00","12:45","13:30","14:15","15:00","15:45","16:30","17:15","18:00","18:45","19:30","20:15","21:15","22:30"], 27)
});

window.PulseFerry.registerRoute("central-lamma-skw", {
    name: "Central ➔ Lamma Island (Sok Kwu Wan)",
    category: "islands",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 4", "SKW": "Sok Kwu Wan" },
    fares: { adultWeekday: "HK$28.20", adultHoliday: "HK$39.80" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "SKW",  
        ["06:45","07:55","09:10","10:20","11:30","13:00","14:35","16:00","17:15","18:40","20:00","21:35","23:00"],
        ["07:20","08:30","09:45","10:55","12:15","13:45","15:15","16:35","17:55","19:15","20:45","22:15"], 35)
});
