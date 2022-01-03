

// solution for the SV inteview test.



let numArray =  [4, 5, 9, 3, 32, 1, 100, 8];

//first I set max and min value, i set min value as the first index so there would be a point of comparison that is not 0
let max=0;
let min = numArray[0];

for (let i=0; i<numArray.length; i++){
    
    //I followed your pointers and each index is set as max and compared to the previous iteration 
    if(numArray[i] > max   ){
        max=numArray[i]
       
    }
    // the indeces that did not meet the boolean above is compared to the set min value, if it is lower it is set as the new min value.
    else if(numArray[i]<min){
        min=numArray[i]
        
    }
    
}

console.log(`Smallest integer:${min}, largest integer: ${max}`)