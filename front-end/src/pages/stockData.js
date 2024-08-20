export const generateStockData = () => {
    const intervalDays = 1;
    const priceStart = 200;
    const priceRange = 1;
    const volumeRange = 1000;
    const volumeStart = 20000000;

    const AddMinutes = (date, minutes) => {
        return new Date(date.getTime() + minutes * 60 * 1000);
    };

    const AddDays = (date, days) => {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    };

    const AddYears = (date, years) => {
        return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
    };

    const GetStocksBetween = (dateStart, dateEnd) => {
        const interval = intervalDays * 24 * 60; // interval in minutes
        let time = AddDays(dateStart, 0);
        let v = volumeStart;
        let o = priceStart;
        let h = o + Math.random() * priceRange;
        let l = o - Math.random() * priceRange;
        let c = l + Math.random() * (h - l);

        const stock = [];
        while (time.getTime() < dateEnd.getTime()) {
            stock.push({ date: time, open: o, high: h, low: l, close: c, volume: v });

            o = c + (Math.random() - 0.5) * priceRange;
            if (o < 0) {
                o = Math.abs(o) + 2;
            }
            h = o + Math.random() * priceRange;
            l = o - Math.random() * priceRange;
            c = l + Math.random() * (h - l);
            v = v + (Math.random() - 0.5) * volumeRange;
            if (v < 0) {
                v = Math.abs(v) + 10000;
            }

            o = Math.round(o * 100) / 100;
            h = Math.round(h * 100) / 100;
            l = Math.round(l * 100) / 100;
            c = Math.round(c * 100) / 100;
            v = Math.round(v * 100) / 100;

            time = AddMinutes(time, interval);
        }
        return stock;
    };

    const today = new Date();
    const oneYearAgo = AddYears(today, -1);

    // Generate stock data for the past year
    const data = GetStocksBetween(oneYearAgo, today);
    return data;
};