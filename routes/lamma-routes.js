// 4. Central ➔ Lamma Island (Yung Shue Wan)
window.PulseFerry.registerRoute("central-lamma-ysw", {
    name: "Central ➔ Lamma Island (Yung Shue Wan)",
    category: "aberdeen",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 4", "YSW": "Yung Shue Wan" },
    fares: { adultWeekday: "HK$22.00", adultHoliday: "HK$31.00" },
    trips: window.PulseFerry.generateFrequent("CENTRAL", "YSW", "06:30", "23:30", 25, 27)
});

// 5. Central ➔ Lamma Island (Sok Kwu Wan)
window.PulseFerry.registerRoute("central-lamma-skw", {
    name: "Central ➔ Lamma Island (Sok Kwu Wan)",
    category: "aberdeen",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 4", "SKW": "Sok Kwu Wan" },
    fares: { adultWeekday: "HK$28.20", adultHoliday: "HK$39.80" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "SKW",
        ["07:20","08:35","10:15","11:50","13:50","15:20","16:50","18:45","20:00","21:30","23:30"],
        ["06:45","07:55","09:10","10:20","11:30","13:00","14:35","16:00","17:15","18:40","20:00","21:35","23:00"], 35)
});

// 10. Aberdeen ➔ Pak Kok Tsuen ➔ Yung Shue Wan
window.PulseFerry.registerRoute("aberdeen-lamma-ysw", {
    name: "Aberdeen ➔ Pak Kok Tsuen ➔ Yung Shue Wan",
    category: "aberdeen",
    operator: "Tsui Wah Ferry",
    piers: { "AB": "Aberdeen Promenade Pier", "PKT": "Pak Kok Tsuen", "YSW": "Yung Shue Wan" },
    fares: { adultWeekday: "HK$20.0ate", adultHoliday: "HK$20.00" },
    trips: [
        { stops: [{ p: "AB", t: "07:20" }, { p: "PKT", t: "07:40" }, { p: "YSW", t: "07:55" }] },
        { stops: [{ p: "AB", t: "08:50" }, { p: "PKT", t: "09:10" }, { p: "YSW", t: "09:25" }] },
        { stops: [{ p: "AB", t: "10:00" }, { p: "PKT", t: "10:20" }, { p: "YSW", t: "10:35" }] },
        { stops: [{ p: "AB", t: "11:20" }, { p: "PKT", t: "11:40" }, { p: "YSW", t: "11:55" }] },
        { stops: [{ p: "AB", t: "12:40" }, { p: "PKT", t: "13:00" }, { p: "YSW", t: "13:15" }] },
        { stops: [{ p: "AB", t: "15:10" }, { p: "PKT", t: "15:30" }, { p: "YSW", t: "15:45" }] },
        { stops: [{ p: "AB", t: "16:20" }, { p: "PKT", t: "16:40" }, { p: "YSW", t: "16:55" }] },
        { stops: [{ p: "AB", t: "17:50" }, { p: "PKT", t: "18:10" }, { p: "YSW", t: "18:25" }] },
        { stops: [{ p: "AB", t: "19:15" }, { p: "PKT", t: "19:35" }, { p: "YSW", t: "19:50" }] },
        { stops: [{ p: "AB", t: "20:35" }, { p: "PKT", t: "20:55" }, { p: "YSW", t: "21:10" }] },
        { stops: [{ p: "AB", t: "22:00" }, { p: "PKT", t: "22:20" }, { p: "YSW", t: "22:35" }] },
        { stops: [{ p: "YSW", t: "06:40" }, { p: "PKT", t: "06:55" }, { p: "AB", t: "07:15" }] },
        { stops: [{ p: "YSW", t: "08:00" }, { p: "PKT", t: "08:15" }, { p: "AB", t: "08:35" }] },
        { stops: [{ p: "YSW", t: "09:30" }, { p: "PKT", t: "09:45" }, { p: "AB", t: "10:05" }] },
        { stops: [{ p: "YSW", t: "10:40" }, { p: "PKT", t: "10:55" }, { p: "AB", t: "11:15" }] },
        { stops: [{ p: "YSW", t: "12:00" }, { p: "PKT", t: "12:15" }, { p: "AB", t: "12:35" }] },
        { stops: [{ p: "YSW", t: "14:30" }, { p: "PKT", t: "14:45" }, { p: "AB", t: "15:05" }] },
        { stops: [{ p: "YSW", t: "15:45" }, { p: "PKT", t: "16:00" }, { p: "AB", t: "16:20" }] },
        { stops: [{ p: "YSW", t: "17:15" }, { p: "PKT", t: "17:30" }, { p: "AB", t: "17:50" }] },
        { stops: [{ p: "YSW", t: "18:40" }, { p: "PKT", t: "18:55" }, { p: "AB", t: "19:15" }] },
        { stops: [{ p: "YSW", t: "20:00" }, { p: "PKT", t: "20:15" }, { p: "AB", t: "20:35" }] }
    ]
});

// 11. Aberdeen ➔ Mo Tat Wan ➔ Sok Kwu Wan
window.PulseFerry.registerRoute("aberdeen-lamma-skw", {
    name: "Aberdeen ➔ Mo Tat Wan ➔ Sok Kwu Wan",
    category: "aberdeen",
    operator: "Chuen Kee Ferry",
    piers: { "AB": "Aberdeen Landing", "MTW": "Mo Tat Wan", "SKW": "Sok Kwu Wan" },
    fares: { adultWeekday: "HK$22.00", adultHoliday: "HK$31.00" },
    trips: [
        { stops: [{ p: "AB", t: "06:30" }, { p: "MTW", t: "06:50" }, { p: "SKW", t: "07:00" }] },
        { stops: [{ p: "AB", t: "08:00" }, { p: "MTW", t: "08:20" }, { p: "SKW", t: "08:30" }] },
        { stops: [{ p: "AB", t: "09:30" }, { p: "MTW", t: "09:50" }, { p: "SKW", t: "10:00" }] },
        { stops: [{ p: "AB", t: "11:00" }, { p: "MTW", t: "11:20" }, { p: "SKW", t: "11:30" }] },
        { stops: [{ p: "AB", t: "12:30" }, { p: "MTW", t: "12:50" }, { p: "SKW", t: "13:00" }] },
        { stops: [{ p: "AB", t: "14:00" }, { p: "MTW", t: "14:20" }, { p: "SKW", t: "14:30" }] },
        { stops: [{ p: "AB", t: "15:30" }, { p: "MTW", t: "15:50" }, { p: "SKW", t: "16:00" }] },
        { stops: [{ p: "AB", t: "17:00" }, { p: "MTW", t: "17:20" }, { p: "SKW", t: "17:30" }] },
        { stops: [{ p: "AB", t: "18:30" }, { p: "MTW", t: "18:50" }, { p: "SKW", t: "19:00" }] },
        { stops: [{ p: "AB", t: "20:00" }, { p: "MTW", t: "20:20" }, { p: "SKW", t: "20:30" }] },
        { stops: [{ p: "SKW", t: "07:05" }, { p: "MTW", t: "07:15" }, { p: "AB", t: "07:35" }] },
        { stops: [{ p: "SKW", t: "08:40" }, { p: "MTW", t: "08:50" }, { p: "AB", t: "09:10" }] },
        { stops: [{ p: "SKW", t: "10:15" }, { p: "MTW", t: "10:25" }, { p: "AB", t: "10:45" }] },
        { stops: [{ p: "SKW", t: "11:45" }, { p: "MTW", t: "11:55" }, { p: "AB", t: "12:15" }] },
        { stops: [{ p: "SKW", t: "13:15" }, { p: "MTW", t: "13:25" }, { p: "AB", t: "13:45" }] },
        { stops: [{ p: "SKW", t: "14:45" }, { p: "MTW", t: "14:55" }, { p: "AB", t: "15:15" }] },
        { stops: [{ p: "SKW", t: "16:15" }, { p: "MTW", t: "16:25" }, { p: "AB", t: "16:45" }] },
        { stops: [{ p: "SKW", t: "17:45" }, { p: "MTW", t: "17:55" }, { p: "AB", t: "18:15" }] },
        { stops: [{ p: "SKW", t: "19:15" }, { p: "MTW", t: "19:25" }, { p: "AB", t: "19:45" }] }
    ]
});

// 15. Aberdeen / Stanley ➔ Po Toi Island
window.PulseFerry.registerRoute("aberdeen-stanley-po-toi", {
    name: "Aberdeen / Stanley ➔ Po Toi Island",
    category: "aberdeen",
    operator: "Tsui Wah Ferry",
    piers: { "AB": "Aberdeen", "ST": "Stanley (Blake Pier)", "PTI": "Po Toi Island" },
    fares: { adultWeekday: "HK$50.00 (Single Ticket)", adultHoliday: "HK$50.00" },
    trips: [
        { stops: [{ p: "AB", t: "10:00" }, { p: "ST", t: "11:30" }, { p: "PTI", t: "12:00" }] },
        { weekendOnly: true, stops: [{ p: "AB", t: "15:00" }, { p: "PTI", t: "15:50" }] },
        { stops: [{ p: "PTI", t: "14:00" }, { p: "ST", t: "14:30" }] },
        { stops: [{ p: "PTI", t: "16:30" }, { p: "ST", t: "17:00" }, { p: "AB", t: "17:30" }] }
    ]
});
