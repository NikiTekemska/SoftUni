function theImitationGame(data){
    let encrMsg = data.shift();
    let line = data.shift();
    while(line !== "Decode"){
        line = line.split("|");
        let action  = line.shift();
        switch (action){
            case "Move": 
            let numberOfLetters = Number(line[0]);
            encrMsg = Array.from(encrMsg);
            let firstPart = encrMsg.splice(0,numberOfLetters);
            encrMsg = encrMsg.join('') + firstPart.join('');
            break;
            case "Insert":
                let index = Number(line.shift());
                let value = line.shift();
                encrMsg = encrMsg.slice(0,index)+value+encrMsg.slice(index)
                 break;
            case "ChangeAll":
                let substr = line.shift();
                let replacement = line.shift();
                while(encrMsg.includes(substr)){
                    encrMsg = encrMsg.replace(substr,replacement);
                }
                 break;

        } line = data.shift();
    } console.log(`The decrypted message is: ${encrMsg}`)
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?','Decode',
  ])
  