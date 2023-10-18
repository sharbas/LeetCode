
//Maximum Repeating Substring






//

var maxRepeating = function(sequence, word) {
    //to find maximumcount 
    let maxCount=0
    //to pass the argument in includes function
    let pattern=word
    //iterating every sequence by using while loop
    while(sequence.includes(pattern)){
        pattern+=word
        maxCount++
    }
    return maxCount
 }