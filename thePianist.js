function thePianist(data){
    let n = Number(data.shift());
    let collection ={};
    for (let i = 0; i < n; i++){
        let [piece,composer,key] = data.shift().split("|");
        collection[piece]={};
        collection[piece][composer] = key;
    }
    let token = data.shift();
    while(token!=="Stop"){
        token=token.split("|");
        let command = token.shift();
        switch(command){
            case "Add": 
            let givenPiece = token.shift();
            let givenComposer = token.shift();
            let givenKey = token.shift();
            if(collection.hasOwnProperty(givenPiece)){
                console.log(`${givenPiece} is already in the collection!`)
            } else {
                collection[givenPiece]={};
                collection[givenPiece][givenComposer] = givenKey;
                console.log(`${givenPiece} by ${givenComposer} in ${givenKey} added to the collection!`);
            }
            break;
            case "Remove":
            let searchedPiece = token.shift();
            if(collection.hasOwnProperty(searchedPiece)){
                delete collection[searchedPiece];
                console.log(`Successfully removed ${searchedPiece}!`)
            } else{
                console.log(`Invalid operation! ${searchedPiece} does not exist in the collection.`)
            } 
            break;
            case "ChangeKey":
                let newPiece = token.shift();
                let newKey = token.shift();
                if(collection.hasOwnProperty(newPiece)){
                    for(let [keyComposer,valueKey]  of Object.entries(collection[newPiece])){
                    collection[newPiece][keyComposer]= newKey;
                    console.log(`Changed the key of ${newPiece} to ${newKey}!`)
                }
            } else {
                console.log(`Invalid operation! ${newPiece} does not exist in the collection.`)
            }
                 break;
        }
        token = data.shift();
    } for(let finalPiece in collection){
        let entries = Object.entries(collection[finalPiece]);
        let [composer,key] = entries[0];
        console.log(`${finalPiece} -> Composer: ${composer}, Key: ${key}`)
    }
    
} thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )