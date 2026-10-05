// 1. Central ➔ Mui Wo
window.PulseFerry.registerRoute("central-mui-wo", {
    name: "Central ➔ Mui Wo",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "CENTRAL": "Central Pier 6", "MW": "Mui Wo" },
    fares: { adultWeekday: "HK$16.70 (Ord) / $33.50 (Fast)", adultHoliday: "HK$24.20 (Ord) / $48.50 (Fast)" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "MW",
        ["00:30","03:00","06:10","07:00","07:40","08:30","09:00","09:50","10:30","11:10","11:50","12:30","13:10","13:50","14:30","15:10","15:50","16:30","17:20","17:40","18:00","18:30","19:00","19:30","20:00","20:40","21:20","22:00","22:45","23:30"],
        ["03:40","05:55","06:20","07:00","07:40","08:20","09:00","09:40","10:20","11:00","11:40","12:20","13:00","13:40","14:20","15:00","15:40","16:20","17:00","17:35","18:00","18:40","19:20","20:00","20:40","21:20","22:00","22:45","23:30"], 35)
});

// 2. Central ➔ Cheung Chau
window.PulseFerry.registerRoute("central-cheung-chau", {
    name: "Central ➔ Cheung Chau",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "CENTRAL": "Central Pier 5", "CC": "Cheung Chau" },
    fares: { adultWeekday: "HK$16.70 (Ord) / $32.90 (Fast)", adultHoliday: "HK$24.80 (Ord) / $47.60 (Fast)" },
    trips: {
        "CENTRAL-CC": [
            { t: "00:30", type: "fast", duration: 40 }, { t: "01:30", type: "fast", duration: 40 }, { t: "04:15", type: "fast", duration: 40 },
            { t: "06:10", type: "fast", duration: 40 },
            { t: "06:30", type: "ordinary", duration: 60, cargo: true }, { t: "07:00", type: "fast", duration: 40 },
            { t: "07:30", type: "ordinary", duration: 60, cargo: true }, { t: "08:00", type: "fast", duration: 40 },
            { t: "08:30", type: "ordinary", duration: 60, cargo: true }, { t: "09:00", type: "fast", duration: 40 },
            { t: "09:30", type: "ordinary", duration: 60, cargo: true }, { t: "10:00", type: "fast", duration: 40 },
            { t: "10:30", type: "ordinary", duration: 60, cargo: true }, { t: "11:00", type: "fast", duration: 40 },
            { t: "11:30", type: "ordinary", duration: 60, cargo: true }, { t: "12:00", type: "fast", duration: 40 },
            { t: "12:30", type: "ordinary", duration: 60, cargo: true }, { t: "13:00", type: "fast", duration: 40 },
            { t: "13:30", type: "ordinary", duration: 60, cargo: true }, { t: "14:00", type: "fast", duration: 40 },
            { t: "14:30", type: "ordinary", duration: 60, cargo: true }, { t: "15:00", type: "fast", duration: 40 },
            { t: "15:30", type: "ordinary", duration: 60, cargo: true }, { t: "16:00", type: "fast", duration: 40 },
            { t: "16:30", type: "ordinary", duration: 60, cargo: true }, { t: "17:00", type: "fast", duration: 40 },
            { t: "17:30", type: "ordinary", duration: 60, cargo: true }, { t: "18:00", type: "fast", duration: 40 },
            { t: "18:30", type: "ordinary", duration: 60, cargo: true }, { t: "19:00", type: "fast", duration: 40 },
            { t: "19:30", type: "ordinary", duration: 60, cargo: true }, { t: "20:00", type: "fast", duration: 40 },
            { t: "20:30", type: "ordinary", duration: 60, cargo: true }, { t: "21:00", type: "fast", duration: 40 },
            { t: "21:30", type: "ordinary", duration: 60, cargo: true }, { t: "22:00", type: "fast", duration: 40 },
            { t: "22:30", type: "ordinary", duration: 60, cargo: true }, { t: "23:00", type: "fast", duration: 40 },
            { t: "23:30", type: "ordinary", duration: 60, cargo: true }, { t: "23:45", type: "fast", duration: 40 }
        ],
        "CC-CENTRAL": [
            { t: "05:15", type: "fast", duration: 40 }, { t: "06:00", type: "ordinary", duration: 60, cargo: true },
            { t: "06:20", type: "fast", duration: 40 }, { t: "06:40", type: "ordinary", duration: 60, cargo: true },
            { t: "07:00", type: "fast", duration: 40 }, { t: "07:15", type: "ordinary", duration: 60, cargo: true },
            { t: "07:45", type: "fast", duration: 40 }, { t: "08:10", type: "fast", duration: 40 },
            { t: "08:20", type: "ordinary", duration: 60, cargo: true }, { t: "08:40", type: "fast", duration: 40 },
            { t: "09:00", type: "ordinary", duration: 60, cargo: true }, { t: "09:30", type: "fast", duration: 40 },
            { t: "10:15", type: "ordinary", duration: 60, cargo: true }, { t: "10:45", type: "fast", duration: 40 },
            { t: "11:15", type: "ordinary", duration: 60, cargo: true }, { t: "11:45", type: "fast", duration: 40 },
            { t: "12:15", type: "ordinary", duration: 60, cargo: true }, { t: "12:45", type: "fast", duration: 40 },
            { t: "13:15", type: "ordinary", duration: 60, cargo: true }, { t: "13:45", type: "fast", duration: 40 },
            { t: "14:15", type: "ordinary", duration: 60, cargo: true }, { t: "14:45", type: "fast", duration: 40 },
            { t: "15:15", type: "ordinary", duration: 60, cargo: true }, { t: "15:45", type: "fast", duration: 40 },
            { t: "16:15", type: "ordinary", duration: 60, cargo: true }, { t: "16:45", type: "fast", duration: 40 },
            { t: "17:15", type: "ordinary", duration: 60, cargo: true }, { t: "17:40", type: "fast", duration: 40 },
            { t: "18:00", type: "ordinary", duration: 60, cargo: true }, { t: "18:20", type: "fast", duration: 40 },
            { t: "18:45", type: "ordinary", duration: 60, cargo: true }, { t: "19:00", type: "fast", duration: 40 },
            { t: "19:40", type: "ordinary", duration: 60, cargo: true }, { t: "20:00", type: "fast", duration: 40 },
            { t: "20:30", type: "ordinary", duration: 60, cargo: true }, { t: "21:00", type: "fast", duration: 40 },
            { t: "21:30", type: "ordinary", duration: 60, cargo: true }, { t: "22:00", type: "fast", duration: 40 },
            { t: "22:30", type: "ordinary", duration: 60, cargo: true }, { t: "23:00", type: "fast", duration: 40 },
            { t: "23:30", type: "ordinary", duration: 60, cargo: true }, { t: "23:45", type: "fast", duration: 40 }
        ]
    }
});

// 3. Central ➔ Peng Chau
window.PulseFerry.registerRoute("central-peng-chau", {
    name: "Central ➔ Peng Chau",
    category: "islands",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 6", "PC": "Peng Chau" },
    fares: { adultWeekday: "HK$16.60 (Ord) / $31.00 (Fast)", adultHoliday: "HK$23.90 (Ord) / $45.60 (Fast)" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "PC",
        ["00:30","03:00","07:10","07:40","08:00","08:30","09:15","10:00","10:45","11:30","12:15","13:10","13:45","14:30","15:15","16:00","16:45","17:30","18:15","19:00","19:45","20:30","21:15","22:00","22:45","23:30"],
        ["06:15","06:45","07:15","07:45","08:15","08:45","09:30","10:15","11:00","11:45","12:30","13:15","14:00","14:45","15:30","16:15","17:00","17:45","18:30","19:15","20:00","20:45","21:30","22:15","23:00"], 30)
});

// 6. Central ➔ Discovery Bay
window.PulseFerry.registerRoute("central-discovery-bay", {
    name: "Central ➔ Discovery Bay",
    category: "islands",
    operator: "DB Transport",
    piers: { "CENTRAL": "Central Pier 3", "DB": "Discovery Bay" },
    fares: { adultWeekday: "HK$55.80 (Single Ticket)", adultHoliday: "HK$55.80" },
    trips: window.PulseFerry.generateFrequent("CENTRAL", "DB", "06:00", "23:30", 30, 30)
});

// 9. Inter-Islands
window.PulseFerry.registerRoute("inter-islands", {
    name: "Inter-Islands: Peng Chau ➔ Mui Wo ➔ Chi Ma Wan ➔ Cheung Chau",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "PC": "Peng Chau", "MW": "Mui Wo", "CMW": "Chi Ma Wan", "CC": "Cheung Chau" },
    fares: { adultWeekday: "HK$15.20", adultHoliday: "HK$15.20" },
    trips: [
        { stops: [{ p: "PC", t: "05:40" }, { p: "MW", t: "06:00" }, { p: "CMW", t: "06:15" }, { p: "CC", t: "06:35" }] },
        { stops: [{ p: "PC", t: "07:30" }, { p: "MW", t: "08:00" }, { p: "CMW", t: "08:20" }, { p: "CC", t: "08:45" }] },
        { stops: [{ p: "PC", t: "09:45" }, { p: "MW", t: "10:10" }, { p: "CMW", t: "10:30" }, { p: "CC", t: "10:50" }] },
        { stops: [{ p: "PC", t: "11:55" }, { p: "MW", t: "12:15" }, { p: "CC", t: "12:45" }], skippedStops: ["CMW"] },
        { stops: [{ p: "PC", t: "13:35" }, { p: "MW", t: "14:00" }, { p: "CMW", t: "14:15" }, { p: "CC", t: "15:00" }] },
        { stops: [{ p: "PC", t: "15:40" }, { p: "MW", t: "16:00" }, { p: "CMW", t: "16:15" }, { p: "CC", t: "16:50" }] },
        { stops: [{ p: "PC", t: "17:55" }, { p: "MW", t: "18:15" }, { p: "CC", t: "18:45" }], skippedStops: ["CMW"] },
        { stops: [{ p: "PC", t: "19:50" }, { p: "MW", t: "20:10" }, { p: "CMW", t: "20:30" }, { p: "CC", t: "21:00" }] },
        { stops: [{ p: "PC", t: "21:50" }, { p: "MW", t: "22:20" }, { p: "CC", t: "22:50" }], skippedStops: ["CMW"] },
        { stops: [{ p: "PC", t: "23:45" }, { p: "MW", t: "00:05" }] },
        { stops: [{ p: "CC", t: "06:35" }, { p: "CMW", t: "06:52" }, { p: "MW", t: "07:10" }, { p: "PC", t: "07:30" }] },
        { stops: [{ p: "CC", t: "08:45" }, { p: "CMW", t: "09:05" }, { p: "MW", t: "09:25" }, { p: "PC", t: "09:45" }] },
        { stops: [{ p: "CC", t: "10:50" }, { p: "CMW", t: "11:10" }, { p: "MW", t: "11:35" }, { p: "PC", t: "11:55" }] },
        { stops: [{ p: "CC", t: "12:45" }, { p: "MW", t: "13:15" }, { p: "PC", t: "13:45" }], skippedStops: ["CMW"] },
        { stops: [{ p: "CC", t: "15:00" }, { p: "CMW", t: "15:20" }, { p: "MW", t: "15:40" }, { p: "PC", t: "16:00" }] },
        { stops: [{ p: "CC", t: "16:50" }, { p: "CMW", t: "17:05" }, { p: "MW", t: "17:30" }, { p: "PC", t: "17:55" }] },
        { stops: [{ p: "CC", t: "18:45" }, { p: "CMW", t: "19:05" }, { p: "MW", t: "19:30" }, { p: "PC", t: "19:50" }] },
        { stops: [{ p: "CC", t: "21:00" }, { p: "MW", t: "21:30" }, { p: "PC", t: "21:50" }], skippedStops: ["CMW"] },
        { stops: [{ p: "CC", t: "22:50" }, { p: "CMW", t: "23:05" }, { p: "MW", t: "23:25" }, { p: "PC", t: "23:45" }] }
    ]
});

// 13. Peng Chau ➔ Trappist Monastery ➔ Discovery Bay
window.PulseFerry.registerRoute("peng-chau-trappist-db", {
    name: "Peng Chau ➔ Trappist Monastery ➔ Discovery Bay",
    category: "islands",
    operator: "Tsui Wah Ferry",
    piers: { "PC": "Peng Chau", "TM": "Trappist Monastery", "DB": "Discovery Bay (Nim Shue Wan)" },
    fares: { adultWeekday: "HK$14.00", adultHoliday: "HK$14.00" },
    trips: [
        { stops: [{ p: "PC", t: "06:15" }, { p: "TM", t: "06:25" }, { p: "DB", t: "06:30" }] },
        { stops: [{ p: "PC", t: "06:45" }, { p: "TM", t: "06:55" }, { p: "DB", t: "07:00" }] },
        { stops: [{ p: "PC", t: "07:15" }, { p: "TM", t: "07:25" }, { p: "DB", t: "07:30" }] },
        { stops: [{ p: "PC", t: "08:15" }, { p: "TM", t: "08:25" }, { p: "DB", t: "08:30" }] },
        { stops: [{ p: "PC", t: "09:30" }, { p: "TM", t: "09:40" }, { p: "DB", t: "09:45" }] },
        { stops: [{ p: "PC", t: "11:15" }, { p: "TM", t: "11:25" }, { p: "DB", t: "11:30" }] },
        { stops: [{ p: "PC", t: "14:15" }, { p: "TM", t: "14:25" }, { p: "DB", t: "14:30" }] },
        { stops: [{ p: "PC", t: "16:45" }, { p: "TM", t: "16:55" }, { p: "DB", t: "17:00" }] },
        { stops: [{ p: "PC", t: "18:15" }, { p: "TM", t: "18:25" }, { p: "DB", t: "18:30" }] },
        { stops: [{ p: "PC", t: "20:00" }, { p: "TM", t: "20:10" }, { p: "DB", t: "20:15" }] },
        { stops: [{ p: "PC", t: "22:00" }, { p: "TM", t: "22:10" }, { p: "DB", t: "22:15" }] },
        { stops: [{ p: "DB", t: "06:35" }, { p: "TM", t: "06:40" }, { p: "PC", t: "06:50" }] },
        { stops: [{ p: "DB", t: "07:35" }, { p: "TM", t: "07:40" }, { p: "PC", t: "07:50" }] },
        { stops: [{ p: "DB", t: "08:35" }, { p: "TM", t: "08:40" }, { p: "PC", t: "08:50" }] },
        { stops: [{ p: "DB", t: "10:00" }, { p: "TM", t: "10:05" }, { p: "PC", t: "10:15" }] },
        { stops: [{ p: "DB", t: "11:45" }, { p: "TM", t: "11:50" }, { p: "PC", t: "12:00" }] },
        { stops: [{ p: "DB", t: "14:45" }, { p: "TM", t: "14:50" }, { p: "PC", t: "15:00" }] },
        { stops: [{ p: "DB", t: "17:15" }, { p: "TM", t: "17:20" }, { p: "PC", t: "17:30" }] },
        { stops: [{ p: "DB", t: "18:45" }, { p: "TM", t: "18:50" }, { p: "PC", t: "19:00" }] },
        { stops: [{ p: "DB", t: "20:30" }, { p: "TM", t: "20:35" }, { p: "PC", t: "20:45" }] }
    ]
});

// 14. Peng Chau ➔ Hei Ling Chau
window.PulseFerry.registerRoute("peng-chau-hei-ling-chau", {
    name: "Peng Chau ➔ Hei Ling Chau",
    category: "islands",
    operator: "Sun Ferry / HKKF",
    piers: { "PC": "Peng Chau", "HLC": "Hei Ling Chau" },
    fares: { adultWeekday: "HK$31.90", adultHoliday: "HK$46.60" },
    trips: window.PulseFerry.generateDirectional("PC", "HLC",
        ["01:00","09:45","11:15","12:45","14:15","15:45","18:30","20:00","21:45"],
        ["01:05","09:50","11:20","12:50","14:20","15:50","18:35","20:05","21:50"], 5)
});
