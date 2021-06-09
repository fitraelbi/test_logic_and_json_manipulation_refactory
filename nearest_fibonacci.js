function nearestFibonacci(arr)
{
    const num = arr.reduce((a, b) => a + b, 0); 
    if (num == 0) {
        console.log(0);
        return;
    }
 
    let first = 0, second = 1;
 
    let third = first + second;
 
    while (third <= num) {
 
        first = second;

        second = third;
 
        third = first + second;
    }

    let ans = (Math.abs(third - num)
               >= Math.abs(second - num))
                  ? second
                  : third;
 
    return`output = ${ans-num}` ;
}

let N = [15, 1, 3];
console.log(nearestFibonacci(N));