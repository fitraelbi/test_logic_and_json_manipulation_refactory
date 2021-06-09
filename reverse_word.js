function Reverse_Word(str) {
    let res = str.split(" ")
    let reverse = res.map(item => {
        return item.split("").reverse().join("")
    })
    return reverse.join(" ")
    }
 
 console.log(Reverse_Word("I am A Great human"));