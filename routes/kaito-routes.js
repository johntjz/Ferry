// 16. Wong Shek ➔ Chek Keng ➔ Tap Mun
window.PulseFerry.registerRoute("wong-shek-tap-mun", {
    name: "Wong Shek ➔ Chek Keng ➔ Tap Mun",
    category: "saikung",
    operator: "Tsui Wah Ferry",
    piers: { "WS": "Wong Shek Pier", "CK": "Chek Keng Pier", "TM": "Tap Mun Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 11.00,
        adultHoliday: 16.00,
        childWeekday: 11.00,
        childHoliday: 16.00,
        concessionWeekday: 11.00,
        concessionHoliday: 16.00
    },
    trips: window.PulseFerry.generateDirectional("WS", "TM",
        ["08:30","10:35","12:30","14:30","16:30","18:30"],
        ["07:45","10:00","11:45","13:45","15:45","18:00"], 35)
});

// 17. Wong Shek ➔ Wan Tsai / Nam Fung Wan
window.PulseFerry.registerRoute("wong-shek-wan-tsai", {
    name: "Wong Shek ➔ Wan Tsai / Nam Fung Wan",
    category: "saikung",
    operator: "Tsui Wah Ferry",
    piers: { "WS": "Wong Shek Pier", "WT": "Wan Tsai Campsite Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 11.00,
        adultHoliday: 16.00,
        childWeekday: 11.00,
        childHoliday: 16.00,
        concessionWeekday: 11.00,
        concessionHoliday: 16.00
    },
    trips: window.PulseFerry.generateFrequent("WS", "WT", "08:00", "18:00", 45, 15)
});

// 18. Ma Liu Shui ➔ Sham Chung ➔ Lai Chi Chong ➔ Tap Mun ➔ Wong Shek
window.PulseFerry.registerRoute("tolo-harbour-kaito", {
    name: "Ma Liu Shui ➔ Sham Chung ➔ Lai Chi Chong ➔ Tap Mun ➔ Wong Shek",
    category: "tolo",
    operator: "Tsui Wah Ferry",
    piers: { "MLS": "Ma Liu Shui Landing 3", "SC": "Sham Chung Pier", "LCC": "Lai Chi Chong Pier", "TM": "Tap Mun Pier", "WS": "Wong Shek Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 20.00,
        adultHoliday: 30.00,
        childWeekday: 20.00,
        childHoliday: 30.00,
        concessionWeekday: 20.00,
        concessionHoliday: 30.00
    },
    trips: [
        { stops: [{ p: "MLS", t: "08:30" }, { p: "SC", t: "09:05" }, { p: "LCC", t: "09:20" }, { p: "TM", t: "10:00" }, { p: "WS", t: "10:35" }] },
        { stops: [{ p: "MLS", t: "15:00" }, { p: "SC", t: "15:35" }, { p: "LCC", t: "15:50" }, { p: "TM", t: "16:30" }, { p: "WS", t: "17:00" }] },
        { stops: [{ p: "WS", t: "11:15" }, { p: "TM", t: "11:45" }, { p: "LCC", t: "12:20" }, { p: "SC", t: "12:35" }, { p: "MLS", t: "13:10" }] },
        { stops: [{ p: "WS", t: "17:30" }, { p: "TM", t: "18:00" }, { p: "LCC", t: "18:30" }, { p: "SC", t: "18:45" }, { p: "MLS", t: "19:20" }] }
    ]
});

// 19. Ma Liu Shui ➔ Tung Ping Chau
window.PulseFerry.registerRoute("ma-liu-shui-tung-ping-chau", {
    name: "Ma Liu Shui ➔ Tung Ping Chau",
    category: "tolo",
    operator: "Tsui Wah Ferry",
    piers: { "MLS": "Ma Liu Shui Landing 3", "TPC": "Tung Ping Chau Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: true,
        adultWeekday: 100.00,
        adultHoliday: 100.00,
        childWeekday: 100.00,
        childHoliday: 100.00,
        concessionWeekday: 100.00,
        concessionHoliday: 100.00
    },
    trips: [
        { stops: [{ p: "MLS", t: "09:00" }, { p: "TPC", t: "10:30" }] },
        { stops: [{ p: "TPC", t: "17:15" }, { p: "MLS", t: "18:45" }] }
    ]
});

// 20. Sai Kung ➔ Yim Tin Tsai
window.PulseFerry.registerRoute("sai-kung-yim-tin-tsai", {
    name: "Sai Kung ➔ Yim Tin Tsai",
    category: "saikung",
    operator: "Local Kaito",
    piers: { "SK": "Sai Kung Public Pier", "YTT": "Yim Tin Tsai Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: true,
        adultWeekday: 60.00,
        adultHoliday: 60.00,
        childWeekday: 60.00,
        childHoliday: 60.00,
        concessionWeekday: 60.00,
        concessionHoliday: 60.00
    },
    trips: window.PulseFerry.generateDirectional("SK", "YTT",
        ["10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00"],
        ["10:20","10:50","11:20","11:50","12:20","12:50","13:20","13:50","14:20","14:50","15:20"], 15)
});

// 21. Sai Kung ➔ Kau Sai Village / High Island
window.PulseFerry.registerRoute("sai-kung-kau-sai-chau", {
    name: "Sai Kung ➔ Kau Sai Village / High Island",
    category: "saikung",
    operator: "Tsui Wah Ferry",
    piers: { "SK": "Sai Kung Public Pier", "KSV": "Kau Sai Village Pier", "LSW": "High Island (Leung Shuen Wan)" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 35.00,
        adultHoliday: 45.00,
        childWeekday: 35.00,
        childHoliday: 45.00,
        concessionWeekday: 35.00,
        concessionHoliday: 45.00
    },
    trips: window.PulseFerry.generateDirectional("SK", "KSV",
        ["09:30","11:30","14:30","16:30"],
        ["10:15","12:15","15:15","17:15"], 35)
});

// 22. Sha Tau Kok / Ma Liu Shui ➔ Kat O ➔ Ap Chau
window.PulseFerry.registerRoute("sha-tau-kok-kat-o-ap-chau", {
    name: "Ma Liu Shui / Sha Tau Kok ➔ Kat O ➔ Ap Chau",
    category: "tolo",
    operator: "Best Boundary / Local Kaito",
    piers: { "MLS": "Ma Liu Shui Landing 3", "STK": "Sha Tau Kok Pier", "KO": "Kat O Pier", "AC": "Ap Chau Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: true,
        adultWeekday: 90.00,
        adultHoliday: 90.00,
        childWeekday: 90.00,
        childHoliday: 90.00,
        concessionWeekday: 90.00,
        concessionHoliday: 90.00
    },
    trips: [
        { stops: [{ p: "MLS", t: "09:00" }, { p: "KO", t: "10:30" }, { p: "AC", t: "11:00" }] },
        { stops: [{ p: "AC", t: "12:30" }, { p: "KO", t: "13:00" }] },
        { stops: [{ p: "KO", t: "15:30" }, { p: "MLS", t: "17:00" }] }
    ]
});

// 23. Sha Tau Kok ➔ Lai Chi Wo
window.PulseFerry.registerRoute("sha-tau-kok-lai-chi-wo", {
    name: "Sha Tau Kok ➔ Lai Chi Wo",
    category: "tolo",
    operator: "Local Kaito",
    piers: { "STK": "Sha Tau Kok Pier", "LCW": "Lai Chi Wo Pier" },
    fares: {
        currency: "HKD",
        isRoundtrip: false,
        adultWeekday: 40.00,
        adultHoliday: 50.00,
        childWeekday: 40.00,
        childHoliday: 50.00,
        concessionWeekday: 40.00,
        concessionHoliday: 50.00
    },
    trips: window.PulseFerry.generateDirectional("STK", "LCW",
        ["09:00","10:30","12:00","14:00","15:30"],
        ["09:45","11:15","12:45","14:45","16:15"], 30)
});
