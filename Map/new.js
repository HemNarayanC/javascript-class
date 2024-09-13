const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

let hiUsers = myUsers.map((item) => {
    const container = {};
    container[item.name] = item.likes;
    container.age = 50;
    return container;
})

console.log(hiUsers);