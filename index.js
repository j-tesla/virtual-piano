let notes = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];

document.addEventListener("keydown", function (event){
    notes.forEach(function (item) {
        if (event.code === 'Key' + item){
            let note = new Audio('snd/' + item + '.mp3')
            note.play()
        }
    });
});