notes = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];

document.addEventListener("keydown", function (event){
    for (let i = 0; i < 7; i = i + 1){
        if (event.code === 'Key' + notes[i]){
            console.log("The '" + notes[i] + "' key is pressed.");
        }
    }
});