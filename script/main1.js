console.log("ArrayDemo");

//Create an Array and iterator over it 
const arr1 = []; //this is how can create an empty array

//add numbers from start value to end value in this array 
function initArry(){
    for (let i=1; 1<=10; i++){
        arr1.push(i);
    }
    }

// print this arry

function printArr(){
    For(let i=0; i<arr1.length; i++) {
        console.log(arr1[i]);
        if (i==2)break;
    }
}
/*Array.forEach ((item)=> {callback function will be call for each time } ) */
function printArr_foeEach() {
    arr1.forEach((item)=>{ /*callback function  */ index  
        console.log(item+":"+index);  }  );
}
initArry(10,20);  // initialize  the arry with number from 10 to 20
printArr();