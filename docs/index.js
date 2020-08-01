let notes = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
tiles = document.querySelectorAll('kbd');

function play_note(index, color_change) {
    let sound = new Audio('snd/' + notes[index] + '.mp3');
    sound.play();
    if (color_change) {
        if (index < 7) {
            tiles[index].style.backgroundColor = "#fcd4c0";
        }
        else {
            tiles[index].style.backgroundColor = "#5a5858";
        }
    }
}

document.addEventListener("keydown", function (event){
    notes.forEach(function (item, index) {
        if (event.code === 'Key' + item){
            play_note(index, true);
        }
    });
});

document.addEventListener("keyup", function (event) {
    notes.forEach(function (item, index) {
        if (event.code === 'Key' + item){
            if (index < 7) {
                tiles[index].style.backgroundColor = "white"
            }
            else {
                tiles[index].style.backgroundColor = "black"
            }
        }
    });
});


tiles.forEach(function (tile, index) {
    tile.addEventListener("click", function () {
        play_note(index, false);
        tile.style.backgroundColor = "white"
    });
});
