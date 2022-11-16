function plantDiscovery(data) {
    let n = Number(data.shift());
    let collection = {};
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = data.shift().split("<->");
        collection[plant] = {};
        collection[plant].rarity = rarity;
        collection[plant]['rating'] = 0;
    }
    let line = data.shift();
    while (line !== "Exhibition") {
        line = line.split(": ");
        let action = line.shift();
        let command = line.shift().split(" - ");
        switch (action) {
            case "Rate":
                let newPlant = command.shift();
                if(collection.hasOwnProperty(newPlant)){
                let addRating = command.shift();
                let oldRating = Number(collection[newPlant].rating);
                let newRating = oldRating + Number(addRating);
                if (oldRating !== 0){
                newRating = newRating/2; 
            } 
            collection[newPlant]['rating'] = newRating;
        } else {
            console.log("error");
        }
                break;
            case "Update":
                let plant = command.shift();
                if (collection.hasOwnProperty(plant)){
                let rarity = command.shift();
                collection[plant].rarity = rarity;
                } else {
                    console.log("error");
                }
                break;
            case "Reset":
                let resetPlant = command.shift();
                if (collection.hasOwnProperty(resetPlant)){
                collection[resetPlant]['rating'] = 0.00;
                } else {
                    console.log("error")
                }
                break;
        }
        line = data.shift();
    }
    console.log(`Plants for the exhibition:`);
    for (let newPlant in collection) {
        let entries = Object.entries(collection[newPlant]);
        let [rarity, rarityValue] = entries[0];
        let [rating, ratingValue] = entries[1];
        console.log(`- ${newPlant}; Rarity: ${rarityValue}; Rating: ${((Number(ratingValue)).toFixed(2))}`);
    }
}
plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
)