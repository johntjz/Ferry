// Central to Cheung Chau mapped explicitly for Fast vs Ordinary (Cargo)
window.PulseFerry.registerRoute("central-cheung-chau", {
    name: "Central ➔ Cheung Chau",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "CENTRAL": "Central Pier 5", "CC": "Cheung Chau" },
    fares: { adultWeekday: "HK$14.20 (Ord) / $28.10 (Fast)", adultHoliday: "HK$21.20 (Ord) / $40.70 (Fast)" },
    trips: {
        "CENTRAL-CC": [
            { t: "00:30", type: "fast", duration: 35 }, { t: "01:30", type: "fast", duration: 35 }, { t: "04:15", type: "fast", duration: 35 },
            { t: "06:10", type: "ordinary", duration: 55, cargo: true }, { t: "07:00", type: "fast", duration: 35 },
            { t: "07:40", type: "ordinary", duration: 55, cargo: true }, { t: "08:00", type: "fast", duration: 35 },
            { t: "08:40", type: "fast", duration: 35 }, { t: "09:00", type: "ordinary", duration: 55, cargo: true },
            { t: "09:45", type: "fast", duration: 35 }, { t: "10:15", type: "ordinary", duration: 55, cargo: true },
            { t: "10:45", type: "fast", duration: 35 }, { t: "11:15", type: "ordinary", duration: 55, cargo: true },
            { t: "11:45", type: "fast", duration: 35 }, { t: "12:15", type: "ordinary", duration: 55, cargo: true },
            { t: "12:45", type: "fast", duration: 35 }, { t: "13:15", type: "ordinary", duration: 55, cargo: true },
            { t: "13:45", type: "fast", duration: 35 }, { t: "14:15", type: "ordinary", duration: 55, cargo: true },
            { t: "14:45", type: "fast", duration: 35 }, { t: "15:15", type: "ordinary", duration: 55, cargo: true },
            { t: "15:45", type: "fast", duration: 35 }, { t: "16:15", type: "ordinary", duration: 55, cargo: true },
            { t: "16:45", type: "fast", duration: 35 }, { t: "17:20", type: "ordinary", duration: 55, cargo: true },
            { t: "17:40", type: "fast", duration: 35 }, { t: "18:00", type: "ordinary", duration: 55, cargo: true },
            { t: "18:20", type: "fast", duration: 35 }, { t: "18:30", type: "fast", duration: 35, weekdayOnly: true },
            { t: "18:45", type: "ordinary", duration: 55, cargo: true }, { t: "19:00", type: "fast", duration: 35 },
            { t: "19:15", type: "fast", duration: 35, weekdayOnly: true }, { t: "19:30", type: "ordinary", duration: 55, cargo: true, weekendOnly: true },
            { t: "19:40", type: "ordinary", duration: 55, cargo: true, weekdayOnly: true }, { t: "20:00", type: "fast", duration: 35 },
            { t: "20:30", type: "ordinary", duration: 55, cargo: true }, { t: "21:00", type: "fast", duration: 35 },
            { t: "21:30", type: "ordinary", duration: 55, cargo: true }, { t: "22:00", type: "fast", duration: 35 },
            { t: "22:30", type: "ordinary", duration: 55, cargo: true }, { t: "23:00", type: "fast", duration: 35 },
            { t: "23:30", type: "ordinary", duration: 55, cargo: true }, { t: "23:45", type: "fast", duration: 35 }
        ],
        "CC-CENTRAL": [
            { t: "02:20", type: "fast", duration: 35 }, { t: "05:10", type: "fast", duration: 35 },
            { t: "05:50", type: "ordinary", duration: 55, cargo: true }, { t: "06:20", type: "fast", duration: 35 },
            { t: "06:40", type: "ordinary", duration: 55, cargo: true }, { t: "07:00", type: "fast", duration: 35 },
            { t: "07:15", type: "ordinary", duration: 55, cargo: true }, { t: "07:45", type: "fast", duration: 35 },
            { t: "07:50", type: "ordinary", duration: 55, cargo: true }, { t: "07:55", type: "fast", duration: 35 },
            { t: "08:10", type: "fast", duration: 35 }, { t: "08:20", type: "fast", duration: 35 },
            { t: "08:40", type: "ordinary", duration: 55, cargo: true }, { t: "09:00", type: "fast", duration: 35 },
            { t: "09:30", type: "fast", duration: 35 }, { t: "10:00", type: "ordinary", duration: 55, cargo: true },
            { t: "10:45", type: "fast", duration: 35 }, { t: "11:15", type: "ordinary", duration: 55, cargo: true },
            { t: "11:45", type: "fast", duration: 35 }, { t: "12:15", type: "ordinary", duration: 55, cargo: true },
            { t: "12:45", type: "fast", duration: 35 }, { t: "13:15", type: "ordinary", duration: 55, cargo: true },
            { t: "13:45", type: "fast", duration: 35 }, { t: "14:15", type: "ordinary", duration: 55, cargo: true },
            { t: "14:45", type: "fast", duration: 35 }, { t: "15:15", type: "ordinary", duration: 55, cargo: true },
            { t: "15:45", type: "fast", duration: 35 }, { t: "16:15", type: "ordinary", duration: 55, cargo: true },
            { t: "16:45", type: "fast", duration: 35 }, { t: "17:15", type: "ordinary", duration: 55, cargo: true },
            { t: "17:40", type: "fast", duration: 35 }, { t: "18:20", type: "ordinary", duration: 55, cargo: true },
            { t: "19:00", type: "fast", duration: 35 }, { t: "19:30", type: "ordinary", duration: 55, cargo: true },
            { t: "20:00", type: "fast", duration: 35 }, { t: "20:30", type: "ordinary", duration: 55, cargo: true },
            { t: "21:00", type: "fast", duration: 35 }, { t: "21:30", type: "ordinary", duration: 55, cargo: true },
            { t: "22:00", type: "fast", duration: 35 }, { t: "22:30", type: "ordinary", duration: 55, cargo: true },
            { t: "23:00", type: "fast", duration: 35 }, { t: "23:30", type: "ordinary", duration: 55, cargo: true },
            { t: "23:45", type: "fast", duration: 35 }
        ]
    }
});

// Central ➔ Mui Wo (can be upgraded later to map exact Fast/Slow identical to Cheung Chau format)
window.PulseFerry.registerRoute("central-mui-wo", {
    name: "Central ➔ Mui Wo",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "CENTRAL": "Central Pier 6", "MW": "Mui Wo" },
    fares: { adultWeekday: "HK$16.60 (Ord) / $32.80 (Fast)", adultHoliday: "HK$25.50 (Ord) / $47.10 (Fast)" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "MW", 
        ["00:30","03:00","06:10","07:00","07:40","08:30","09:10","10:00","10:50","11:30","12:10","13:00","13:50","14:40","15:30","16:20","17:10","18:00","18:50","19:40","20:30","21:30","22:30","23:30"],
        ["01:30","04:15","06:10","07:00","07:40","08:00","08:40","09:00","09:45","10:15","10:45","11:15","11:45","12:15","12:45","13:15","13:45","14:15","14:45","15:15","15:45","16:15","16:45","17:20"], 35)
});

window.PulseFerry.registerRoute("central-peng-chau", {
    name: "Central ➔ Peng Chau",
    category: "islands",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 6", "PC": "Peng Chau" },
    fares: { adultWeekday: "HK$16.60 (Ord) / $31.00 (Fast)", adultHoliday: "HK$23.90 (Ord) / $45.60 (Fast)" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "PC", 
        ["00:30","03:00","06:00","07:00","07:45","08:30","09:15","10:00","10:45","11:30","12:15","13:00","13:45","14:30","15:15","16:00","16:45","17:30","18:15","19:00","20:00","21:00","22:30","23:30"],
        ["01:15","03:45","06:45","07:30","08:15","09:00","09:45","10:30","11:15","12:00","12:45","13:30","14:15","15:00","15:45","16:30","17:15","18:00","18:45","19:30","20:30","21:30","22:45","23:45"], 30)
});

window.PulseFerry.registerRoute("central-discovery-bay", {
    name: "Central ➔ Discovery Bay",
    category: "islands",
    operator: "DB Transport",
    piers: { "CENTRAL": "Central Pier 3", "DB": "Discovery Bay" },
    fares: { adultWeekday: "HK$46.00 (Single Ticket)", adultHoliday: "HK$46.00" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "DB", 
        ["00:00","01:00","02:00","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","13:00","14:00","15:00","16:00","17:00","17:30","18:00","18:30","19:00","19:30","20:00","21:00","22:00","23:00"],
        ["00:30","01:30","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:30","13:30","14:30","15:30","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:30","21:30","22:30","23:30"], 25)
});
