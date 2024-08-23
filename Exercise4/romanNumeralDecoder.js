const decodRomanNumeral = roman =>{
    const values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let decodedNumber = 0;

    for (let i = 0; i < roman.length; i++) {
        let currentVal = values[roman[i]];
        let nextVal = values[roman[i+1]]

        if(nextVal && currentVal < nextVal){
            decodedNumber -= currentVal 
        }else {
            decodedNumber += currentVal 
        }
        
    }
    return decodedNumber
}