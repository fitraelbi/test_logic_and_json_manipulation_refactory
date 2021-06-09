function leap_year(start, end) {
    let arr = []
    for (i = start+1; i <= end; i++){
        if(i%4 == 0){
            arr.push(i)
        }
    }
    return arr.join(", ")
   }

console.log(leap_year(1900, 2020));