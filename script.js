const inputElement = document.querySelector('input[type=number]');
const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('p');


/* How to Write Roman Numerals
Break down the number into its basic components, beginning with the largest number. Example: 273 = 200 + 70 + 3.

Break down the numbers again, using your basic values (see step 1): (200) + (70) + (3) = (100 + 100) + (50 + 10 + 10) + (1 + 1 + 1).

Convert into the appropriate Roman numerals: (C + C) + (L + X + X) + (I+ I + I) = CCLXXIII). If you have more than 3 numbers in a row, keep the first numeral and subtract accordingly. Example: 400 = 100 + 100 + 100 + 100 = "100 less than 500" = CD, instead of CCCC.*/

function convertRomans (numEntered) {
    var vNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var rNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var result = "";
    for(i = 0; i < vNum.length; i++) {
        value = parseInt(numEntered/vNum[i]);
        for(j = 0; j < value; j++) {
            result += rNum[i];
        }
        numEntered = numEntered%vNum[i];
    }
    inputElement.value = ''
    inputElement.focus()
    return result;
}

const inputVal = inputElement.value;

buttonElement.addEventListener('click', (e) => {
  resultElement.innerText=  `${inputElement.value} => : ${convertRomans(inputElement.value)}`;
});

inputElement.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        resultElement.innerText = `${inputElement.value} => : ${convertRomans(inputElement.value)}`
    }
})
