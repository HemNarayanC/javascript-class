

function getData(data, getNextData){
    setTimeout(() => {
        console.log(`Data is ${data}`);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    console.log("getting next data...");
    getData(2, () => {
        console.log("getting next data...");
        getData(3, () => {
            console.log("getting next data...");
            getData(4, () => {
                console.log("getting next data...");
                getData(5)
            })
        })
    })
});
