let per = 95;

if(per>=0 && per<=100){
    if(per<35){
        console.log("Go to Hell");
    }
    
    if(per>=35 && per<55){
        console.log("C");
    }
    
    else if(per>=55 && per<65){
        console.log("C");
    }
    
    else if(per>=65 && per<75){
        console.log("B");
    }
    
    else if(per>=75 && per<85){
        console.log("B+");
    }
    
    else if(per>=85 && per<95){
        console.log("A");
    }
    
    else{
        console.log("A+");
    }
}

else{
    console.log("Enter percentage between 0 and 100");
}

