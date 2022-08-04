module.exports = function toReadable (number) {
    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbersBig = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   
    let strNambers = number+'';

    if(number === 0){

        return 'zero';
    } else if(number < 20){

        return numbers[number];

    }else if(number < 100){

        let result = `${numbersBig[strNambers[0]]} ${numbers[strNambers[1]]}`;
        return result.trim();
    }else if(number < 1000) {

        let n = (number % 100);

        if (n >= 10 && n < 20) {
            console.log(number % 100);
            return  `${numbers[strNambers[0]]} hundred ${numbers[n]}`;
       
        }else { 

            const number1 = numbersBig[strNambers[1]];
            let result = `${numbers[strNambers[0]]} hundred ${number1 ? `${number1} ` : ''}${numbers[strNambers[2]]}`;
            return result.trim();
       }
        
    };
}




