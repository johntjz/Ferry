// ==========================================
// ZONE 1: STATIC DATA & ROUTE ENGINE
// ==========================================

window.pierCoordinates = {
    'Central Pier 2': {lat: 22.28738, lng: 114.15767}, 'Central Pier 3': {lat: 22.28723, lng: 114.15831},
    'Central Pier 4': {lat: 22.28704, lng: 114.15897}, 'Central Pier 5': {lat: 22.28682, lng: 114.15975},
    'Central Pier 6': {lat: 22.28666, lng: 114.16053}, 'Central Pier 7': {lat: 22.28646, lng: 114.16130},
    'Central Pier 8': {lat: 22.28612, lng: 114.16215}, 'HK Macau Ferry Terminal (Sheung Wan)': {lat: 22.2882, lng: 114.1517},
    'Tsim Sha Tsui Star Ferry Pier': {lat: 22.2936, lng: 114.1693}, 'Wan Chai Ferry Pier': {lat: 22.2831, lng: 114.1755},
    'Hung Hom Ferry Pier': {lat: 22.3000, lng: 114.1885}, 'North Point Ferry Pier': {lat: 22.2936, lng: 114.2005},
    'Kowloon City Ferry Pier': {lat: 22.3168, lng: 114.1950}, 'Kwun Tong Ferry Pier': {lat: 22.3087, lng: 114.2205},
    'Sai Wan Ho Pier': {lat: 22.2847, lng: 114.2217}, 'Sam Ka Tsuen Pier': {lat: 22.2906, lng: 114.2383},
    'Aberdeen Promenade Pier': {lat: 22.2472, lng: 114.1557}, 'Aberdeen Landing': {lat: 22.2472, lng: 114.1557},
    'Aberdeen': {lat: 22.2472, lng: 114.1557}, 'Yung Shue Wan': {lat: 22.2268, lng: 114.1120},
    'Sok Kwu Wan': {lat: 22.2045, lng: 114.1302}, 'Cheung Chau': {lat: 22.2081, lng: 114.0287},
    'Mui Wo': {lat: 22.2646, lng: 114.0016}, 'Peng Chau': {lat: 22.2836, lng: 114.0378},
    'Discovery Bay': {lat: 22.2965, lng: 114.0205}, "Macau Outer Harbour Ferry Terminal": {lat: 22.1968, lng: 113.5567},
    "Macau Taipa Ferry Terminal": {lat: 22.1633, lng: 113.5796}, "Chi Ma Wan": {lat: 22.2393, lng: 113.9995},
    "Park Island Ferry Pier": {lat: 22.3524, lng: 114.0612}, "Tsuen Wan Pier": {lat: 22.3664, lng: 114.1105},
    "Tuen Mun Ferry Pier": {lat: 22.3725, lng: 113.9652}, "Tung Chung Development Pier": {lat: 22.2938, lng: 113.9420},
    "Sha Lo Wan Pier": {lat: 22.2882, lng: 113.9013}, "Tai O Pier": {lat: 22.2543, lng: 113.8624},
    "Pak Kok Tsuen": {lat: 22.2384, lng: 114.1154}, "Mo Tat Wan": {lat: 22.1932, lng: 114.1436},
    "Stanley (Blake Pier)": {lat: 22.2178, lng: 114.2120}, "Po Toi Island": {lat: 22.1652, lng: 114.2530},
    "Wong Shek Pier": {lat: 22.4332, lng: 114.3361}, "Chek Keng Pier": {lat: 22.4184, lng: 114.3414},
    "Tap Mun Pier": {lat: 22.4705, lng: 114.3601}, "Wan Tsai Campsite Pier": {lat: 22.4578, lng: 114.3365},
    "Ma Liu Shui Landing 3": {lat: 22.4143, lng: 114.2190}, "Sham Chung Pier": {lat: 22.4414, lng: 114.2862},
    "Lai Chi Chong Pier": {lat: 22.4550, lng: 114.3005}, "Tung Ping Chau Pier": {lat: 22.5414, lng: 114.4352},
    "Sai Kung Public Pier": {lat: 22.3814, lng: 114.2740}, "Yim Tin Tsai Pier": {lat: 22.3785, lng: 114.3015},
    "Kau Sai Village Pier": {lat: 22.3526, lng: 114.3168}, "High Island (Leung Shuen Wan)": {lat: 22.3551, lng: 114.3444},
    "Sha Tau Kok Pier": {lat: 22.5442, lng: 114.2241}, "Kat O Pier": {lat: 22.5458, lng: 114.2942},
    "Ap Chau Pier": {lat: 22.5417, lng: 114.2694}, "Lai Chi Wo Pier": {lat: 22.5285, lng: 114.2625},
    "Hei Ling Chau": {lat: 22.2577, lng: 114.0321}, "Trappist Monastery": {lat: 22.2811, lng: 114.0205},
    "Discovery Bay (Nim Shue Wan)": {lat: 22.2905, lng: 114.0190}, "Tseung Kwan O South Landing": {lat: 22.2961, lng: 114.2600},
    "Tung Lung Chau Pier": {lat: 22.2475, lng: 114.2915}
};

window.HK_PUBLIC_HOLIDAYS = {
    "2026-10-01": "National Day", "2026-10-18": "Chung Yeung Festival", "2026-12-25": "Christmas Day", "2026-12-26": "Boxing Day",
    "2027-01-01": "New Year's Day", "2027-02-06": "Lunar New Year's Day"
};

window.PulseFerry = {
    scheduleData: {},
    timeToMins: function(tm) {
        if (!tm || typeof tm !== 'string') return 0;
        const parts = tm.split(':');
        return parts.length >= 2 ? Number(parts[0]) * 60 + Number(parts[1]) : 0;
    },
    minsToTime: function(m) {
        if (isNaN(m)) return "00:00";
        const h = Math.floor(m / 60) % 24;
        const min = m % 60;
        return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
    },
    addMins: function(tm, mins) {
        return this.minsToTime(this.timeToMins(tm) + mins);
    },
    generateFrequent: function(p1, p2, startTime, endTime, headwayMins, travelMins) {
        const trips = [];
        let current = this.timeToMins(startTime);
        const end = this.timeToMins(endTime);
        while (current <= end) {
            const timeStr = this.minsToTime(current);
            const arrivalStr = this.addMins(timeStr, travelMins);
            trips.push({ stops: [{ p: p1, t: timeStr }, { p: p2, t: arrivalStr }], duration: travelMins });
            trips.push({ stops: [{ p: p2, t: timeStr }, { p: p1, t: arrivalStr }], duration: travelMins });
            current += headwayMins;
        }
        return trips;
    },
    generateDirectional: function(p1, p2, outbound, inbound, travelMins) {
        const trips = [];
        outbound.forEach(tm => trips.push({ stops: [{ p: p1, t: tm }, { p: p2, t: this.addMins(tm, travelMins) }], duration: travelMins }));
        inbound.forEach(tm => trips.push({ stops: [{ p: p2, t: tm }, { p: p1, t: this.addMins(tm, travelMins) }], duration: travelMins }));
        return trips;
    },
    registerRoute: function(key, data) {
        if (data.trips && !Array.isArray(data.trips)) {
            let normalizedTrips = [];
            for (const [dirKey, departures] of Object.entries(data.trips)) {
                const [p1, p2] = dirKey.split("-");
                departures.forEach(dep => {
                    const duration = dep.duration || 45;
                    const arrivalTime = this.addMins(dep.t, duration);
                    normalizedTrips.push({
                        weekdayOnly: dep.weekdayOnly || false,
                        weekendOnly: dep.weekendOnly || false,
                        vesselType: dep.type || "standard",
                        duration: duration,
                        cargo: dep.cargo || false,
                        stops: [{ p: p1, t: dep.t }, { p: p2, t: arrivalTime }]
                    });
                });
            }
            data.trips = normalizedTrips;
        }
        this.scheduleData[key] = data;
    }
};

// ==========================================
// FULLY MERGED ROUTING DATA
// ==========================================

window.PulseFerry.registerRoute("central-mui-wo", {
    name: "Central ⟷ Mui Wo",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "CENTRAL": "Central Pier 6", "MW": "Mui Wo" },
    fares: { adultWeekday: "HK$33.50 (Fast)", adultHoliday: "HK$48.50 (Fast)", concessionWeekday: "HK$16.70 (Fast)", concessionHoliday: "HK$24.20 (Fast)" },
    trips: [
        ...window.PulseFerry.generateDirectional("CENTRAL", "MW",
            ["00:30", "03:00", "06:10", "07:00", "07:40", "08:30", "09:00", "09:50", "10:30", "11:10", "11:50", "12:30", "13:10", "13:50", "14:30", "15:10", "15:50", "16:30", "17:20", "17:40", "18:00", "18:30", "19:00", "19:30", "20:00", "20:40", "21:20", "22:00", "22:45", "23:30"],
            ["03:40", "05:55", "06:20", "06:50", "07:15", "07:45", "08:05", "08:30", "09:00", "09:30", "10:00", "10:40", "11:30", "12:10", "12:50", "13:30", "14:10", "14:50", "15:30", "16:10", "16:50", "17:30", "18:10", "18:40", "19:40", "20:30", "21:30", "22:40", "23:30"], 35).map(t => ({...t, weekdayOnly: true})),
        ...window.PulseFerry.generateDirectional("CENTRAL", "MW",
            ["00:30", "03:00", "07:00", "08:00", "08:30", "09:00", "09:40", "10:20", "11:00", "12:00", "13:00", "13:40", "14:20", "15:00", "15:40", "16:20", "17:00", "17:40", "18:20", "19:00", "19:40", "20:20", "21:00", "21:40", "22:20", "23:00", "23:40"],
            ["03:40", "06:20", "07:05", "08:00", "08:40", "09:20", "10:00", "10:40", "11:20", "12:00", "12:40", "13:20", "14:00", "14:40", "15:20", "16:00", "16:40", "17:20", "18:00", "18:40", "19:20", "20:00", "20:40", "21:20", "22:00", "22:50", "23:30"], 35).map(t => ({...t, weekendOnly: true}))
    ]
});

window.PulseFerry.registerRoute("central-cheung-chau", {
    name: "Central ⟷ Cheung Chau",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "CENTRAL": "Central Pier 5", "CC": "Cheung Chau" },
    fares: { adultWeekday: "HK$16.70 (Ord) / $32.90 (Fast)", adultHoliday: "HK$24.80 (Ord) / $47.60 (Fast)" },
    trips: {
        "CENTRAL-CC": [
            { t: "00:30", type: "fast", duration: 40 }, { t: "01:30", type: "fast", duration: 40 }, { t: "04:15", type: "fast", duration: 40 },
            { t: "06:10", type: "fast", duration: 40 }, { t: "06:30", type: "ordinary", duration: 60, cargo: true }, { t: "07:00", type: "fast", duration: 40 },
            { t: "07:30", type: "ordinary", duration: 60, cargo: true }, { t: "08:00", type: "fast", duration: 40 }, { t: "08:30", type: "ordinary", duration: 60, cargo: true },
            { t: "09:00", type: "fast", duration: 40 }, { t: "09:30", type: "ordinary", duration: 60, cargo: true }, { t: "10:00", type: "fast", duration: 40 },
            { t: "10:30", type: "ordinary", duration: 60, cargo: true }, { t: "11:00", type: "fast", duration: 40 }, { t: "11:30", type: "ordinary", duration: 60, cargo: true },
            { t: "12:00", type: "fast", duration: 40 }, { t: "12:30", type: "ordinary", duration: 60, cargo: true }, { t: "13:00", type: "fast", duration: 40 },
            { t: "13:30", type: "ordinary", duration: 60, cargo: true }, { t: "14:00", type: "fast", duration: 40 }, { t: "14:30", type: "ordinary", duration: 60, cargo: true },
            { t: "15:00", type: "fast", duration: 40 }, { t: "15:30", type: "ordinary", duration: 60, cargo: true }, { t: "16:00", type: "fast", duration: 40 },
            { t: "16:30", type: "ordinary", duration: 60, cargo: true }, { t: "17:00", type: "fast", duration: 40 }, { t: "17:30", type: "ordinary", duration: 60, cargo: true },
            { t: "18:00", type: "fast", duration: 40 }, { t: "18:30", type: "ordinary", duration: 60, cargo: true }, { t: "19:00", type: "fast", duration: 40 },
            { t: "19:30", type: "ordinary", duration: 60, cargo: true }, { t: "20:00", type: "fast", duration: 40 }, { t: "20:30", type: "ordinary", duration: 60, cargo: true },
            { t: "21:00", type: "fast", duration: 40 }, { t: "21:30", type: "ordinary", duration: 60, cargo: true }, { t: "22:00", type: "fast", duration: 40 },
            { t: "22:30", type: "ordinary", duration: 60, cargo: true }, { t: "23:00", type: "fast", duration: 40 }, { t: "23:30", type: "ordinary", duration: 60, cargo: true },
            { t: "23:45", type: "fast", duration: 40 }
        ],
        "CC-CENTRAL": [
            { t: "05:15", type: "fast", duration: 40 }, { t: "06:00", type: "ordinary", duration: 60, cargo: true }, { t: "06:20", type: "fast", duration: 40 },
            { t: "06:40", type: "ordinary", duration: 60, cargo: true }, { t: "07:00", type: "fast", duration: 40 }, { t: "07:15", type: "ordinary", duration: 60, cargo: true },
            { t: "07:45", type: "fast", duration: 40 }, { t: "08:10", type: "fast", duration: 40 }, { t: "08:20", type: "ordinary", duration: 60, cargo: true },
            { t: "08:40", type: "fast", duration: 40 }, { t: "09:00", type: "ordinary", duration: 60, cargo: true }, { t: "09:30", type: "fast", duration: 40 },
            { t: "10:15", type: "ordinary", duration: 60, cargo: true }, { t: "10:45", type: "fast", duration: 40 }, { t: "11:15", type: "ordinary", duration: 60, cargo: true },
            { t: "11:45", type: "fast", duration: 40 }, { t: "12:15", type: "ordinary", duration: 60, cargo: true }, { t: "12:45", type: "fast", duration: 40 },
            { t: "13:15", type: "ordinary", duration: 60, cargo: true }, { t: "13:45", type: "fast", duration: 40 }, { t: "14:15", type: "ordinary", duration: 60, cargo: true },
            { t: "14:45", type: "fast", duration: 40 }, { t: "15:15", type: "ordinary", duration: 60, cargo: true }, { t: "15:45", type: "fast", duration: 40 },
            { t: "16:15", type: "ordinary", duration: 60, cargo: true }, { t: "16:45", type: "fast", duration: 40 }, { t: "17:15", type: "ordinary", duration: 60, cargo: true },
            { t: "17:40", type: "fast", duration: 40 }, { t: "18:00", type: "ordinary", duration: 60, cargo: true }, { t: "18:20", type: "fast", duration: 40 },
            { t: "18:45", type: "ordinary", duration: 60, cargo: true }, { t: "19:00", type: "fast", duration: 40 }, { t: "19:40", type: "ordinary", duration: 60, cargo: true },
            { t: "20:00", type: "fast", duration: 40 }, { t: "20:30", type: "ordinary", duration: 60, cargo: true }, { t: "21:00", type: "fast", duration: 40 },
            { t: "21:30", type: "ordinary", duration: 60, cargo: true }, { t: "22:00", type: "fast", duration: 40 }, { t: "22:30", type: "ordinary", duration: 60, cargo: true },
            { t: "23:00", type: "fast", duration: 40 }, { t: "23:30", type: "ordinary", duration: 60, cargo: true }, { t: "23:45", type: "fast", duration: 40 }
        ]
    }
});

window.PulseFerry.registerRoute("central-peng-chau", {
    name: "Central ⟷ Peng Chau",
    category: "islands",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 6", "PC": "Peng Chau" },
    fares: { adultWeekday: "HK$16.60 (Ord) / $31.00 (Fast)", adultHoliday: "HK$23.90 (Ord) / $45.60 (Fast)" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "PC",
        ["00:30", "03:00", "07:10", "07:40", "08:00", "08:30", "09:15", "10:00", "10:45", "11:30", "12:15", "13:10", "13:45", "14:30", "15:15", "16:00", "16:45", "17:30", "18:15", "19:00", "19:45", "20:30", "21:15", "22:00", "22:45", "23:30"],
        ["06:15", "06:45", "07:15", "07:45", "08:15", "08:45", "09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "15:30", "16:15", "17:00", "17:45", "18:30", "19:15", "20:00", "20:45", "21:30", "22:15", "23:00"], 
        30
    )
});

window.PulseFerry.registerRoute("central-discovery-bay", {
    name: "Central ⟷ Discovery Bay",
    category: "islands",
    operator: "DB Transport",
    piers: { "CENTRAL": "Central Pier 3", "DB": "Discovery Bay" },
    fares: { adultWeekday: "HK$55.80 (Single Ticket)", adultHoliday: "HK$55.80" },
    trips: window.PulseFerry.generateFrequent("CENTRAL", "DB", "06:00", "23:30", 30, 30)
});

window.PulseFerry.registerRoute("inter-islands", {
    name: "Inter-Islands: Peng Chau ⟷ Mui Wo ⟷ Chi Ma Wan ⟷ Cheung Chau",
    category: "islands",
    operator: "Sun Ferry",
    piers: { "PC": "Peng Chau", "MW": "Mui Wo", "CMW": "Chi Ma Wan", "CC": "Cheung Chau" },
    fares: { adultWeekday: "HK$16.30", adultHoliday: "HK$16.30" }, // FIXED: Flat fare everyday
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

window.PulseFerry.registerRoute("peng-chau-trappist-db", {
    name: "Peng Chau ⟷ Trappist Monastery ⟷ Discovery Bay",
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

window.PulseFerry.registerRoute("peng-chau-hei-ling-chau", {
    name: "Peng Chau ⟷ Hei Ling Chau",
    category: "islands",
    operator: "Sun Ferry / HKKF",
    piers: { "PC": "Peng Chau", "HLC": "Hei Ling Chau" },
    fares: { adultWeekday: "HK$31.90", adultHoliday: "HK$46.60" },
    trips: window.PulseFerry.generateDirectional("PC", "HLC",
        ["01:00", "09:45", "11:15", "12:45", "14:15", "15:45", "18:30", "20:00", "21:45"],
        ["01:05", "09:50", "11:20", "12:50", "14:20", "15:50", "18:35", "20:05", "21:50"], 5
    )
});

window.PulseFerry.registerRoute("park-island-central", {
    name: "Park Island ⟷ Central",
    category: "islands",
    operator: "PITCL",
    piers: { "PI": "Park Island Ferry Pier", "CENTRAL": "Central Pier 2" },
    fares: { currency: "HKD", adultWeekday: 27.00, adultHoliday: 27.00 },
    trips: window.PulseFerry.generateDirectional("PI", "CENTRAL",
        ["06:30","07:00","07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","18:30","19:00","19:30","20:00","21:00","22:00","23:30"],
        ["06:55","07:25","07:55","08:25","08:55","09:25","10:25","11:25","12:25","13:25","14:25","15:25","16:25","17:25","18:25","18:55","19:25","19:55","20:25","21:25","22:25","23:55"], 22)
});

window.PulseFerry.registerRoute("park-island-tsuen-wan", {
    name: "Park Island ⟷ Tsuen Wan",
    category: "islands",
    operator: "PITCL",
    piers: { "PI": "Park Island Ferry Pier", "TW": "Tsuen Wan Pier" },
    fares: { currency: "HKD", adultWeekday: 12.00, adultHoliday: 12.00 },
    trips: window.PulseFerry.generateDirectional("PI", "TW",
        ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00"],
        ["09:15","09:45","10:15","10:45","11:15","11:45","12:15","12:45","13:15","13:45","14:15","14:45","15:15","15:45","16:15"], 15)
});

window.PulseFerry.registerRoute("central-lamma-ysw", {
    name: "Central ⟷ Lamma Island (Yung Shue Wan)",
    category: "lamma",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 4", "YSW": "Yung Shue Wan" },
    fares: { adultWeekday: "HK$22.10", adultHoliday: "HK$30.80" }, 
    trips: window.PulseFerry.generateFrequent("CENTRAL", "YSW", "06:30", "23:30", 25, 27)
});

window.PulseFerry.registerRoute("central-lamma-skw", {
    name: "Central ⟷ Lamma Island (Sok Kwu Wan)",
    category: "lamma",
    operator: "HK & Kowloon Ferry",
    piers: { "CENTRAL": "Central Pier 4", "SKW": "Sok Kwu Wan" },
    fares: { adultWeekday: "HK$27.50", adultHoliday: "HK$38.70" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "SKW",
        ["07:20","08:35","10:15","11:50","13:50","15:20","16:50","18:45","20:00","21:30","23:30"],
        ["06:45","07:55","09:10","10:20","11:30","13:00","14:35","16:00","17:15","18:40","20:00","21:35","23:00"], 35)
});

window.PulseFerry.registerRoute("aberdeen-lamma-ysw", {
    name: "Aberdeen ⟷ Pak Kok Tsuen ⟷ Yung Shue Wan",
    category: "lamma",
    operator: "Tsui Wah Ferry",
    piers: { "AB": "Aberdeen Promenade Pier", "PKT": "Pak Kok Tsuen", "YSW": "Yung Shue Wan" },
    fares: { adultWeekday: "HK$19.00", adultHoliday: "HK$21.00" }, 
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

window.PulseFerry.registerRoute("aberdeen-lamma-skw", {
    name: "Aberdeen ⟷ Mo Tat Wan ⟷ Sok Kwu Wan",
    category: "lamma",
    operator: "Chuen Kee Ferry",
    piers: { "AB": "Aberdeen Landing", "MTW": "Mo Tat Wan", "SKW": "Sok Kwu Wan" },
    fares: { adultWeekday: "HK$12.50", adultHoliday: "HK$18.70" },
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

window.PulseFerry.registerRoute("tuen-mun-tai-o", {
    name: "Tuen Mun ⟷ Tung Chung ⟷ Sha Lo Wan ⟷ Tai O",
    category: "kaito",
    operator: "Fortune Ferry",
    piers: { "TM": "Tuen Mun Ferry Pier", "TC": "Tung Chung Development Pier", "SLW": "Sha Lo Wan Pier", "TO": "Tai O Pier" },
    fares: { currency: "HKD", adultWeekday: 30.00, adultHoliday: 38.00 },
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

window.PulseFerry.registerRoute("aberdeen-stanley-po-toi", {
    name: "Aberdeen / Stanley ⟷ Po Toi Island",
    category: "kaito",
    operator: "Tsui Wah Ferry",
    piers: { "AB": "Aberdeen", "ST": "Stanley (Blake Pier)", "PTI": "Po Toi Island" },
    fares: { adultWeekday: "HK$30.00", adultHoliday: "HK$30.00" }, 
    trips: [
        { stops: [{ p: "AB", t: "10:00" }, { p: "ST", t: "11:30" }, { p: "PTI", t: "12:00" }] },
        { weekendOnly: true, stops: [{ p: "AB", t: "15:00" }, { p: "PTI", t: "15:50" }] },
        { stops: [{ p: "PTI", t: "14:00" }, { p: "ST", t: "14:30" }] },
        { stops: [{ p: "PTI", t: "16:30" }, { p: "ST", t: "17:00" }, { p: "AB", t: "17:30" }] }
    ]
});

window.PulseFerry.registerRoute("wong-shek-tap-mun", {
    name: "Wong Shek ⟷ Chek Keng ⟷ Tap Mun",
    category: "kaito",
    operator: "Tsui Wah Ferry",
    piers: { "WS": "Wong Shek Pier", "CK": "Chek Keng Pier", "TM": "Tap Mun Pier" },
    fares: { currency: "HKD", adultWeekday: 11.00, adultHoliday: 16.00 },
    trips: window.PulseFerry.generateDirectional("WS", "TM", ["08:30","10:35","12:30","14:30","16:30","18:30"], ["07:45","10:00","11:45","13:45","15:45","18:00"], 35)
});

window.PulseFerry.registerRoute("wong-shek-wan-tsai", {
    name: "Wong Shek ⟷ Wan Tsai / Nam Fung Wan",
    category: "kaito",
    operator: "Tsui Wah Ferry",
    piers: { "WS": "Wong Shek Pier", "WT": "Wan Tsai Campsite Pier" },
    fares: { currency: "HKD", adultWeekday: 11.00, adultHoliday: 16.00 },
    trips: window.PulseFerry.generateFrequent("WS", "WT", "08:00", "18:00", 45, 15)
});

window.PulseFerry.registerRoute("tolo-harbour-kaito", {
    name: "Ma Liu Shui ⟷ Sham Chung ⟷ Lai Chi Chong ⟷ Tap Mun ⟷ Wong Shek",
    category: "kaito",
    operator: "Tsui Wah Ferry",
    piers: { "MLS": "Ma Liu Shui Landing 3", "SC": "Sham Chung Pier", "LCC": "Lai Chi Chong Pier", "TM": "Tap Mun Pier", "WS": "Wong Shek Pier" },
    fares: { currency: "HKD", adultWeekday: 20.00, adultHoliday: 30.00 },
    trips: [
        { stops: [{ p: "MLS", t: "08:30" }, { p: "SC", t: "09:05" }, { p: "LCC", t: "09:20" }, { p: "TM", t: "10:00" }, { p: "WS", t: "10:35" }] },
        { stops: [{ p: "MLS", t: "15:00" }, { p: "SC", t: "15:35" }, { p: "LCC", t: "15:50" }, { p: "TM", t: "16:30" }, { p: "WS", t: "17:00" }] },
        { stops: [{ p: "WS", t: "11:15" }, { p: "TM", t: "11:45" }, { p: "LCC", t: "12:20" }, { p: "SC", t: "12:35" }, { p: "MLS", t: "13:10" }] },
        { stops: [{ p: "WS", t: "17:30" }, { p: "TM", t: "18:00" }, { p: "LCC", t: "18:30" }, { p: "SC", t: "18:45" }, { p: "MLS", t: "19:20" }] }
    ]
});

window.PulseFerry.registerRoute("ma-liu-shui-tung-ping-chau", {
    name: "Ma Liu Shui ⟷ Tung Ping Chau",
    category: "kaito",
    operator: "Tsui Wah Ferry",
    piers: { "MLS": "Ma Liu Shui Landing 3", "TPC": "Tung Ping Chau Pier" },
    fares: { currency: "HKD", adultWeekday: 100.00, adultHoliday: 100.00 },
    trips: [
        { stops: [{ p: "MLS", t: "09:00" }, { p: "TPC", t: "10:30" }] },
        { stops: [{ p: "TPC", t: "17:15" }, { p: "MLS", t: "18:45" }] }
    ]
});

window.PulseFerry.registerRoute("sai-kung-yim-tin-tsai", {
    name: "Sai Kung ⟷ Yim Tin Tsai",
    category: "kaito",
    operator: "Local Kaito",
    piers: { "SK": "Sai Kung Public Pier", "YTT": "Yim Tin Tsai Pier" },
    fares: { currency: "HKD", adultWeekday: 60.00, adultHoliday: 60.00 },
    trips: window.PulseFerry.generateDirectional("SK", "YTT",
        ["10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00"],
        ["10:20","10:50","11:20","11:50","12:20","12:50","13:20","13:50","14:20","14:50","15:20"], 15)
});

window.PulseFerry.registerRoute("sai-kung-kau-sai-chau", {
    name: "Sai Kung ⟷ Kau Sai Village / High Island",
    category: "kaito",
    operator: "Tsui Wah Ferry",
    piers: { "SK": "Sai Kung Public Pier", "KSV": "Kau Sai Village Pier", "LSW": "High Island (Leung Shuen Wan)" },
    fares: { currency: "HKD", adultWeekday: 35.00, adultHoliday: 45.00 },
    trips: window.PulseFerry.generateDirectional("SK", "KSV", ["09:30","11:30","14:30","16:30"], ["10:15","12:15","15:15","17:15"], 35)
});

window.PulseFerry.registerRoute("sha-tau-kok-kat-o-ap-chau", {
    name: "Ma Liu Shui / Sha Tau Kok ⟷ Kat O ⟷ Ap Chau",
    category: "kaito",
    operator: "Best Boundary / Local Kaito",
    piers: { "MLS": "Ma Liu Shui Landing 3", "STK": "Sha Tau Kok Pier", "KO": "Kat O Pier", "AC": "Ap Chau Pier" },
    fares: { currency: "HKD", adultWeekday: 90.00, adultHoliday: 90.00 },
    trips: [
        { stops: [{ p: "MLS", t: "09:00" }, { p: "KO", t: "10:30" }, { p: "AC", t: "11:00" }] },
        { stops: [{ p: "AC", t: "12:30" }, { p: "KO", t: "13:00" }] },
        { stops: [{ p: "KO", t: "15:30" }, { p: "MLS", t: "17:00" }] }
    ]
});

window.PulseFerry.registerRoute("sha-tau-kok-lai-chi-wo", {
    name: "Sha Tau Kok ⟷ Lai Chi Wo",
    category: "kaito",
    operator: "Local Kaito",
    piers: { "STK": "Sha Tau Kok Pier", "LCW": "Lai Chi Wo Pier" },
    fares: { currency: "HKD", adultWeekday: 40.00, adultHoliday: 50.00 },
    trips: window.PulseFerry.generateDirectional("STK", "LCW", ["09:00","10:30","12:00","14:00","15:30"], ["09:45","11:15","12:45","14:45","16:15"], 30)
});

window.PulseFerry.registerRoute("turbojet-macau-outer", {
    name: "Hong Kong (Sheung Wan) ⟷ Macau Outer Harbour",
    category: "macau",
    operator: "TurboJET",
    piers: { "HK": "HK Macau Ferry Terminal (Sheung Wan)", "MACAU": "Macau Outer Harbour Ferry Terminal" },
    fares: { currency: "HKD", adultWeekday: 175.00, adultHoliday: 190.00 },
    trips: window.PulseFerry.generateDirectional("HK", "MACAU",
        ["07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"],
        ["07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"], 55)
});

window.PulseFerry.registerRoute("cotai-water-jet-taipa", {
    name: "Hong Kong (Sheung Wan) ⟷ Macau Taipa",
    category: "macau",
    operator: "Cotai Water Jet",
    piers: { "HK": "HK Macau Ferry Terminal (Sheung Wan)", "TAIPA": "Macau Taipa Ferry Terminal" },
    fares: { currency: "HKD", adultWeekday: 175.00, adultHoliday: 190.00 },
    trips: window.PulseFerry.generateDirectional("HK", "TAIPA",
        ["07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30","21:30","22:30"],
        ["07:30","08:30","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30","21:30","22:30"], 65)
});

window.PulseFerry.registerRoute("star-ferry-central-tst", {
    name: "Central ⟷ Tsim Sha Tsui",
    category: "harbour",
    operator: "Star Ferry",
    piers: { "CENTRAL": "Central Pier 7", "TST": "Tsim Sha Tsui Star Ferry Pier" },
    fares: { adultWeekday: "HK$5.00 (Upper)", adultHoliday: "HK$6.50 (Upper)" },
    trips: window.PulseFerry.generateFrequent("CENTRAL", "TST", "06:30", "23:30", 8, 8)
});

window.PulseFerry.registerRoute("star-ferry-wanchai-tst", {
    name: "Wan Chai ⟷ Tsim Sha Tsui",
    category: "harbour",
    operator: "Star Ferry",
    piers: { "WANCHAI": "Wan Chai Ferry Pier", "TST": "Tsim Sha Tsui Star Ferry Pier" },
    fares: { adultWeekday: "HK$5.00", adultHoliday: "HK$6.50" },
    trips: window.PulseFerry.generateFrequent("WANCHAI", "TST", "07:30", "22:50", 12, 8)
});

window.PulseFerry.registerRoute("central-hung-hom", {
    name: "Central ⟷ Hung Hom",
    category: "harbour",
    operator: "Fortune Ferry",
    piers: { "CENTRAL": "Central Pier 8", "HH": "Hung Hom Ferry Pier" },
    fares: { adultWeekday: "HK$10.70", adultHoliday: "HK$10.70" },
    trips: window.PulseFerry.generateDirectional("CENTRAL", "HH",
        ["07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:00","18:30","19:00"],
        ["07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:00","18:30","19:00"], 16)
});

window.PulseFerry.registerRoute("north-point-hung-hom", {
    name: "North Point ⟷ Hung Hom",
    category: "harbour",
    operator: "Sun Ferry",
    piers: { "NP": "North Point Ferry Pier", "HH": "Hung Hom Ferry Pier" },
    fares: { adultWeekday: "HK$10.00", adultHoliday: "HK$10.00" },
    trips: window.PulseFerry.generateDirectional("NP", "HH",
        ["07:23","07:53","08:23","08:53","09:23","09:53","10:23","11:23","12:23","13:23","14:23","15:23","16:23","17:23","17:53","18:23","18:53","19:23"],
        ["07:08","07:38","08:08","08:38","09:08","09:38","10:38","11:38","12:38","13:38","14:38","15:38","16:38","17:08","17:38","18:08","18:38","19:08"], 14)
});

window.PulseFerry.registerRoute("north-point-kowloon-city", {
    name: "North Point ⟷ Kowloon City",
    category: "harbour",
    operator: "Sun Ferry",
    piers: { "NP": "North Point Ferry Pier", "KC": "Kowloon City Ferry Pier" },
    fares: { adultWeekday: "HK$10.00", adultHoliday: "HK$10.00" },
    trips: window.PulseFerry.generateDirectional("NP", "KC",
        ["07:17","07:47","08:17","08:47","09:17","09:47","10:17","11:17","12:17","13:17","14:17","15:17","16:17","17:17","17:47","18:17","18:47","19:17"],
        ["07:02","07:32","08:02","08:32","09:02","09:32","10:02","11:02","12:02","13:02","14:02","15:02","16:02","17:02","17:32","18:02","18:32","19:02"], 14)
});

window.PulseFerry.registerRoute("north-point-kwun-tong", {
    name: "North Point ⟷ Kwun Tong",
    category: "harbour",
    operator: "Fortune Ferry",
    piers: { "NP": "North Point Ferry Pier", "KT": "Kwun Tong Ferry Pier" },
    fares: { adultWeekday: "HK$8.30", adultHoliday: "HK$8.30" },
    trips: window.PulseFerry.generateDirectional("NP", "KT",
        ["07:00","07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:00","17:30","18:00","18:30","19:00","19:30"],
        ["07:15","07:45","08:15","08:45","09:15","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:15","17:45","18:15","18:45","19:15"], 12)
});

window.PulseFerry.registerRoute("sai-wan-ho-kwun-tong", {
    name: "Sai Wan Ho ⟷ Kwun Tong",
    category: "harbour",
    operator: "Coral Sea Ferry",
    piers: { "SWH": "Sai Wan Ho Pier", "KT": "Kwun Tong Pier" },
    fares: { adultWeekday: "HK$9.00", adultHoliday: "HK$9.00" },
    trips: window.PulseFerry.generateDirectional("SWH", "KT",
        ["06:48","07:18","07:48","08:18","08:48","09:18","09:48","10:48","11:48","12:48","13:48","14:48","15:48","16:48","17:18","17:48","18:18","18:48","19:18","20:18","21:18"],
        ["07:03","07:33","08:03","08:33","09:03","09:33","10:33","11:33","12:33","13:33","14:33","15:33","16:33","17:03","17:33","18:03","18:33","19:03","20:03","21:03"], 15)
});

window.PulseFerry.registerRoute("sai-wan-ho-sam-ka-tsuen", {
    name: "Sai Wan Ho ⟷ Sam Ka Tsuen",
    category: "harbour",
    operator: "Coral Sea Ferry",
    piers: { "SWH": "Sai Wan Ho Pier", "SKT": "Sam Ka Tsuen Pier" },
    fares: { adultWeekday: "HK$9.00", adultHoliday: "HK$9.00" },
    trips: window.PulseFerry.generateDirectional("SWH", "SKT",
        ["06:45","07:15","07:45","08:15","08:45","09:15","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:15","17:45","18:15","18:45","19:15","20:15","21:15"],
        ["07:00","07:30","08:00","08:30","09:00","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:00","17:30","18:00","18:30","19:00","20:00","21:00"], 15)
});

window.PulseFerry.registerRoute("tko-sai-wan-ho", {
    name: "Tseung Kwan O ⟷ Sai Wan Ho",
    category: "harbour",
    operator: "Transport Department",
    piers: { "TKO": "Tseung Kwan O South Landing", "SWH": "Sai Wan Ho Pier" },
    fares: { adultWeekday: "HK$16.80", adultHoliday: "HK$16.80" },
    trips: window.PulseFerry.generateDirectional("TKO", "SWH", ["07:15","07:45","17:45","18:15"], ["07:35","08:05","18:05","18:35"], 20)
});

window.PulseFerry.registerRoute("sam-ka-tsuen-tung-lung-chau", {
    name: "Sam Ka Tsuen ⟷ Tung Lung Chau",
    category: "harbour",
    operator: "Coral Sea Ferry",
    piers: { "SKT": "Sam Ka Tsuen Pier", "TLC": "Tung Lung Chau Pier" },
    fares: { adultWeekday: "HK$45.00 (RT)", adultHoliday: "HK$45.00 (RT)" },
    trips: window.PulseFerry.generateDirectional("SKT", "TLC",
        ["08:40","10:00","11:20","13:00","14:20","15:40","16:50"],
        ["09:20","10:40","12:00","13:40","15:00","16:20","17:30"], 40)
});
