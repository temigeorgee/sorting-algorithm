// bubble sort
var bubbleSort = function(array){
    var length = array.length;
    for(var i = 0; i < length; i++){
        for(var j = 0; j < length; j++){
            if(array[j] > array[j + 1]){
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
}
}
}
    return array;
}
console.log(bubbleSort([5,8,2,1,3,6,7,4]));

    // selection sort
    function selectionSort(array){
    
        for(var i = 0; i < array.length; i++){
            var min = i;
            for(var j = i + 1; j < array.length; j++){
                if(array[min] > array[j]){
                    min = j;
                }
            }
            if(i !== min){
                var temp = array[i];
                array[i] = array[min];
                array[min] = temp;
            }
        }
        return array;
    }
console.log(selectionSort([5,8,2,1,3,6,7,4]));

    // insertion sort
    function insertionSort(array){
        for(var i = 1; i < array.length; i++){
            key = array[i];
            j = i - 1;
            while(j >= 0 && array[j] > key){
                array[j + 1] = array[j]
                j--;
            }
            array[j + 1] = key;
    
        }
        return array;
    }
console.log(insertionSort([5,8,2,1,3,6,7,4]));

    // merge sort
    function mergeSort(array){
        var half = array.length / 2;
        if(array.length < 2){
            return array;
        }
        const left = array.splice(0, half);
        return merge(mergeSort(left), mergeSort(array))
    }
    function merge(left,right){
        const emptyArr = [];
        while(left.length && right.length){
            if(left[0] < right[0]){
                emptyArr.push(left.shift())
            }else{
                emptyArr.push(right.shift())
            }
        }
        return [...emptyArr,...left,...right];
    }

    // quick sort
    function quickSort(array){
        if(array.length <= 1){
            return array;
        }else{
                var leftArray = [];
                var rightArray = [];
                var newArray = [];
                var pivot = array.pop();
                var length = array.length;
                for(var i = 0; i < length; i++){
                    if(array[i] <= pivot){
                        leftArray.push(array[i]);
                    } else{
                        rightArray.push(array[i]);
                    }
                }
                return newArray.concat(quickSort(leftArray), pivot, quickSort(rightArray))
            }
    }
    function pivot(arr, left = 0, right = arr.length - 1) {
        let shift = left;
        for (let i = left + 1; i <= right; i++) {
            if (arr[i] < arr[left]) {
                shift++;
                swap(arr, i, shift);
            }
        }
    
        swap(arr, left, shift);
        return shift;
    }
    
    function swap(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }

