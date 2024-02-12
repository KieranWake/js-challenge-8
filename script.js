// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything
function destructuringArray () {
    const arr = ["eyes", "nose", "lips", "ears"];
    let [a, b, c, d] = arr;
    
    console.log(arr(a, b, d, ...c));
}
 

//The purpose of ES6's destructuring assignment is to index an arrays -
//items on one line '[]' instead of having to declare variables for each-
//array element.