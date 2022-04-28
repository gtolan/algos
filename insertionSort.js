//stash ordered list to left of current index
//J decreases to find the value which is the last
//number that is bigger than the current value
//once this number is found = J replaces the current value


const insertionSort = (arr) => {

    for(let i = 1;i < arr.length;i++){
        let current = arr[i];
        let j;
        //is current greater than last ele
        for(j = i-1;j >= 0 && arr[j] > current;j--){
            console.log(
              "j",
              j,
              arr,
              "behind:",
              arr[j],
              "in front of behind:",
              arr[j + 1],
              "current",
              current
            );  
            console.log('set arr[j+1 to arr[j]--', 'J index',j, 'val after j',arr[j+1],'J value',arr[j])      
            arr[j + 1] = arr[j];
            //swapping back into place before the current item     
        }
        //console.log('J is',j, 'Index j+1 is',j+1, 'i is:',i)
        console.log('j end of loop',j)
        arr[j + 1] = current;
        console.log('after',arr)
    }
    console.log('final',arr );
    return arr;
}

const list = [2,5,1,5,6,7,4,7,9,10,3,11];

insertionSort(list)