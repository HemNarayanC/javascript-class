function fruits(n, c, w, t) {
    this.fname =  n;
    this.color =  c;
    this.weight = w;
    this.taste = t;
};

fruits.prototype.price = "Rs. 150";

const fruit = new fruits("apple", "red", "200gm", "sweet");
console.log(fruit.price);


console.log(fruit);