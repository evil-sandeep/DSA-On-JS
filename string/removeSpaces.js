const remSpac=(str)=>{
    let emptySTR=""
    for(let i=0; i<str.length; i++){
        
        if(str[i]!==" "){
         emptySTR += str[i]
        }
    }
    return emptySTR
}

let str= 'h el o w or ld'
console.log(remSpac(str))

//Is approach me hum ek new empty string banate hain jisme final result store hoga. Uske baad hum original string ko character-by-character
//  traverse karte hain using loop. Har iteration me hum current character ko check karte hain ki wo space hai ya nahi.

// Agar current character space nahi hota, toh usko new string me add kar dete hain. Agar current character space hota hai, toh usko skip 
// kar dete hain aur next character par move kar jaate hain.

// Is tarah loop complete hone tak sirf non-space characters new string me store hote rehte hain. Finally jo string banti hai usme saare 
// spaces remove ho chuke hote hain, aur usko return kar dete hain.