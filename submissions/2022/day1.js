const daysUntilXmas = (xmas, date) => {
    // subtracting xmas from today will give the millisecond difference.
    // To transform to day, I am dividng by 1000 (to get seconds), 60 (to get minutes), 60 (to get hours) and 24 (to get days)
    return Math.ceil((xmas - date) / (1000 * 60 * 60 * 24))
}

daysUntilXmas(new Date("2022-12-25"), new Date())
