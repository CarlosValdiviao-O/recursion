const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;
    else {
        let left = [],
            right = [];
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length / 2) 
                left.push(arr[i])
            else
                right.push(arr[i])
        }
        left = mergeSort(left);
        right = mergeSort(right);
        let i=0, j=0, k=0;
        while (i<left.length && j<right.length) {
            if (left[i] < right[j])
                arr[k]=left[i++]
            else
                arr[k]=right[j++]
            k++;
        }
        for (;i<left.length; i++)
            arr[k++]=left[i]
        for (;j<right.length; j++)
            arr[k++]=right[j]
        return arr
    }
}