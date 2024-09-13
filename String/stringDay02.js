let str = "Javascript";
for (const element in str) {
    // console.log(str[element]);
    console.log(element);   //here element defines the index of the string
}

/*
0
1
2
3
4
5
6
7
8
9
*/ 

for (const element of str) {
    console.log(element);
}
/*
J
a
v
a
s
c
r
i
p
t
*/