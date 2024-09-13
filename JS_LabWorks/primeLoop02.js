for (let num = 2; num <= 100; num++) {
    for (i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            break;
        }
    }
    if (i > num / 2) { 
        console.log(num);
    }
}
