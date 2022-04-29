const merge = (left, right) => {
    let sortedArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift());
        };
    }
    let result = [...sortedArr, ...left, ...right];
    
    return result;
}


let arr = [1,4,11,2,5,2,6,9,10];

const mergeSort = (arr) => {
    console.log('Result',arr)
    if (arr.length < 2) return arr;
   
    let midIndex = Math.floor(arr.length / 2);
    let arr1 = arr.splice(0,midIndex);
        console.log('arr1',arr1, 'arrRest',arr)
    return merge(mergeSort(arr1),mergeSort(arr))
}
mergeSort(arr);