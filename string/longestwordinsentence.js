const longestwordinsentence=(str)=>{
    let word=str.split(' ')
    // console.log(word)
    let longest=''
    for(let char of word){

        if(char.length > longest.length){
            longest=char
        }
    }
    return longest
    

}
let str='sandeep kumar sahoo'
console.log( (str))

// Is approach me sabse pehle hum sentence ko spaces ke basis par split karte hain taki har word alag ho jaye. \
// split(" ") method sentence ko words ke array me convert kar deta hai. Iske baad hum ek variable longest banate hain jo currently 
// sabse bade word ko store karega. Initially ye empty string hota hai.

// Uske baad hum for...of loop use karte hain. for...of loop array ke actual values ko one-by-one iterate karta hai. 
// Kyuki split ke baad hume words ka array milta hai, isliye har iteration me for...of loop ek complete word deta hai, 
// na ki individual characters.


// Har iteration me hum current word ki length ko longest variable me stored word ki length ke saath compare karte hain. Agar current word ki length zyada hoti hai, toh hum longest variable ko update kar dete hain aur usme current word store kar dete hain.

// Loop complete hone ke baad longest variable me wahi word bachta hai jiski length sabse zyada hoti hai. Finally usko return kar dete hain.