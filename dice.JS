function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const image = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value); 
        image.push(`<img src="dice_images/${value}.png" alt="dice ${value}">`);
        

    }

    diceResult.textContent = `dice: ${values.join(', ')};`
    diceImages.innerHTML = image.join('');


    console.log(values);
}
