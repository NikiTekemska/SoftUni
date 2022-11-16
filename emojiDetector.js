function emojiDetector(data) {
    let str = data.shift();
    let patternDigit = /\d/gm;
    let matches = str.match(patternDigit);
    let sum = 1;
    let coolnes = 0;
    let patternEmoji = /(:|\*){2}(([A-Z])([a-z]){2,})(\1){2}/gm;

    for (let i = 0; i < matches.length; i++) {
        sum *= Number(matches[i]);
    } console.log(`Cool threshold: ${sum}`);

    let emojiCounter = str.match(patternEmoji).length;
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);

    let validEmoji = patternEmoji.exec(str);
    while (validEmoji !== null) {
        let emoji = validEmoji[2];
        for (let j = 0; j < emoji.length; j++) {
           let ascii = emoji[j].charCodeAt();
           coolnes += ascii;
      } if (coolnes >= sum) {
           console.log(`${validEmoji[0]}`);
        }
        coolnes = 0;
        validEmoji = patternEmoji.exec(str);
       
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])