const items = [
    { id: 1, category: 'A' },
    { id: 2, category: 'B' },
    { id: 3, category: 'A' },
    { id: 4, category: 'C' },
    { id: 5, category: 'B' }
];

const categoryCount = items.reduce((acc, currItems) => {
    if (acc[currItems.category]) {
        acc[currItems.category]++;
    }

    else {
        acc[currItems.category] = 1;
    }
    console.log('Current Accumulator State:');
    for (const key in acc) {
        console.log(`  ${key}: ${acc[key]}`);
    }
    return acc;
}, {});

console.log(categoryCount);