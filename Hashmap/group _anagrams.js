const groupAnagram = (words) => {

    let anagramMap = {};

    for(let word of words){

        // Sorted key banao
        let sortedWord = word.split('').sort().join('');

        // Agar key pehle se hai
        if(anagramMap[sortedWord]){

            anagramMap[sortedWord].push(word);

        } else {

            // Naya group banao
            anagramMap[sortedWord] = [word];
        }
    }

    return Object.values(anagramMap);
}

let words = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagram(words));