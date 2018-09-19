// expect an array of strings
function getLongestNameLength(arr){
    let currentMax = arr[0].length
    for(let i=0; i<arr.length; i++){
        if (arr[i].length>currentMax){
            currentMax=arr[i].length
        }
    } 
    return currentMax;
}

function drawLine( length  ) {   
    let line=""
    for (let i=0; i<length; i++){ 
        line+="━"
    }
    return(line);
}

function drawSpaces( length  ) {   
    let line=""
    for (let i=0; i<length; i++){ 
        line+=" "
    }
    return(line);
}


function drawTopBorder( length ){
    return "┍" + drawLine(length) + "┑"
}

function drawMiddleBorder( length ){
    return "┠" + drawLine(length) + "┨"
}

function drawBottomBorder( length ){
     return "┗" + drawLine(length) + "┛"
}

function drawBarsAround( name, totalLengh ){
    let spacesToadd = totalLengh - name.length
    let spaces = drawSpaces( spacesToadd )
    return "┃" + name + spaces + "┃"
}


function boxIt ( nameArray ) {
    let maxLength = getLongestNameLength( nameArray )
    let result = drawTopBorder(maxLength) + "\n"

    for (let i=0; i < nameArray.length; i++){ 
        result += drawBarsAround( nameArray[i], maxLength ) + "\n"
        // this if is to avoid printing the last middle divider
        if ( i<(nameArray.length-1)) {
            result += drawMiddleBorder(maxLength) + "\n"
        }
    }

    result += drawBottomBorder(maxLength)

    return result;
}


// main code
const arrayOfNames = process.argv.slice(2);
let box = boxIt( arrayOfNames )
console.log ( box );




// box with names
//      calculate width
//          get max length from array
//      draw top
//          repeat a bar as wide as width characters
//      draw items
//          for loop
//              draw name
//              draw divider (middle)
//      draw bottom