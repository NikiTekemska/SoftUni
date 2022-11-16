function activationKey(data){
    let rawKey = data.shift();
    let line = data.shift();
    while(line !== "Generate"){
        line = line.split(">>>");
        let action = line.shift();
        switch (action){
            case "Contains":
                let substring = line.shift();
                if(rawKey.includes(substring)){
                    console.log(`${rawKey} contains ${substring}`)
                }else {
                    console.log("Substring not found!");
                }
                break;
            case "Flip":
                let command = line.shift();
                let startIndex = Number(line.shift());
                let endIndex = Number(line.shift());
                let firstPart = rawKey.slice(0,startIndex);
                let middlePart = rawKey.slice(startIndex,endIndex);
                let secondPart = rawKey.slice(endIndex);
                 if(command === "Upper"){
                    middlePart = middlePart.toUpperCase();
                 } else {
                    middlePart = middlePart.toLowerCase();
                 } 
                 rawKey = firstPart + middlePart + secondPart;
                 console.log(rawKey);
                break;
            case "Slice":
                let newStartIndex = Number(line.shift());
                let newEndIndex = Number(line.shift());
                rawKey = rawKey.split("");
                rawKey.splice(newStartIndex,newEndIndex-newStartIndex); 
                rawKey = rawKey.join("");
                console.log(rawKey);
                break;
        }
        line = data.shift();
    }
    console.log(`Your activation key is: ${rawKey}`)
}
activationKey(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
