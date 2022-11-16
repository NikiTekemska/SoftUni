function worldTour(data) {
    let stop = data.shift();
    let token = data.shift();
    while (token !== "Travel") {
        token = token.split(":");
        let action = token.shift();
        switch (action) {
            case "Add Stop":
                let index = Number(token.shift());
                let str = token.shift();
                if (index >= 0 && index < stop.length) {
                    stop = stop.slice(0, index) + str + stop.slice(index);
                    
                } console.log(stop);
                break;
            case "Remove Stop":
                let startIndex = Number(token.shift());
                let endIndex = Number(token.shift());
                if (startIndex >= 0 && startIndex <= endIndex && endIndex < stop.length) {
                    stop = Array.from(stop);
                    stop.splice(startIndex, endIndex - startIndex+1);
                    stop = stop.join("");
                    
                } console.log(stop);
                break;
            case "Switch":
                let oldString = token.shift();
                let newString = token.shift();
                if(stop.includes(oldString)){
                    while (stop.includes(oldString)) {
                    stop = stop.replace(oldString, newString);
                    }
                    
                } console.log(stop);
            
                break;
        }
        token = data.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stop}`);
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
