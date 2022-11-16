function secretChat(data){
    let message = data.shift();
    let line = data.shift();
    while(line !== "Reveal"){
        line = line.split(":|:");
        let command = line.shift();
        switch (command){
            case "InsertSpace":
                let index = line.shift();
                message = message.slice(0,index)+" "+ message.slice(index); 
                console.log(message);
                break;
            case "Reverse":
                let substring = line.shift();
                if(message.includes(substring)){
                    message = message.replace(substring,"");
                    substring = substring.split("").reverse().join("");
                    message = message+substring;
                    console.log(message);
                } else {
                    console.log("error");
                }
                
                break;
            case "ChangeAll":
                let givenSub = line.shift();
                let replacment = line.shift();
                if(message.includes(givenSub)){
                    while(message.includes(givenSub)){
                        message = message.replace(givenSub,replacment);
                    }
                }
                console.log(message);
                break;
        }
        line = data.shift();
    }
    console.log(`You have a new text message: ${message}`)
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  )