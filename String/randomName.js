let ranNum = Math.random();
console.log(ranNum);
scriptI = "PHP";
scriptII = "JavaScript";

pLangI = "Java";
pLangII = "Python";
pLangIII = "C#";

if(ranNum<0.1){
    console.log(`${scriptI} ${pLangI}`);
}

else if(ranNum>0.1 && ranNum<0.3){
    console.log(`${scriptI} ${pLangIII}`);
}

else if(ranNum>0.3 && ranNum<0.5){
    console.log(`${scriptII} ${pLangI}`);
}

else if(ranNum>0.5 && ranNum<0.7){
    console.log(`${scriptI} ${pLangII}`);
}

else{
    console.log(`${scriptII} ${pLangII}`);
}