function mirrorWords(data){
    let str=data.shift();
    let pattern = /([@|#])([A-Za-z]{3,})(\1)(\1)([A-Za-z]{3,})(\1)/gm;
    let match = pattern.exec(str);
    let mirrorCounter = 0;
    let validPairCounter = 0;
    let arrCollect = [];
    while(match !==null){
        let word1 = match[2];
        let word2 = match[5];
        word2 = word2.split("").reverse().join("");
        if(word1===word2){
            mirrorCounter++;
            let arr = [];
            arr.push(word1);
            word2 = match[5]
            arr.push(word2);
            arr = arr.join(" <=> ")
            arrCollect.push(arr);
        }
        validPairCounter++;
        match = pattern.exec(str);
    }
    if(validPairCounter === 0){
        console.log("No word pairs found!")
    } else {
        console.log(`${validPairCounter} word pairs found!`)
    }
    if(mirrorCounter === 0){
        console.log("No mirror words!")
    } else {
        console.log(`The mirror words are:`)
        arrCollect = arrCollect.join(", ")
        console.log(arrCollect);
    }
    
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part#traP##@@leveL@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    
    )