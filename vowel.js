// 5. How would you determine the number of vowels in a sentence?




function numberOfVowels(sentence) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of sentence) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(numberOfVowels('I love you'))