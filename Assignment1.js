const fibs = (num) => {
    let arr = [];
    let num1 = 0;
    let num2 = 1;
    for (let i=0; i<num; i++) {
        if (i % 2 === 0) {
            arr.push(num1);
            num1 += num2;
        }
        else {
            arr.push(num2);
            num2 += num1;
        }
    }
    return arr;
}

const fibsRec = (num, num1 = 0, num2 = 1) => {
    if (num > 1) {
        if (num1 < num2) {
            next = num1;
            num1 += num2;
            return [next].concat(fibsRec(num-1, num1, num2))
        }
        else {
            next = num2;
            num2 += num1;
            return [next].concat(fibsRec(num-1, num1, num2))
        }  
    } 
    else
        return (num1 > num2) ? num2 : num1;       
}
