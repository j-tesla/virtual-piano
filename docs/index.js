let notes = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
tiles = document.querySelectorAll('kbd');

function play_note(note, tile, color_change) {
    let sound = new Audio('snd/' + note + '.mp3');
    sound.play();
    if (color_change) {
        tile.style.backgroundColor = "#fcd4c0";
    }
}

document.addEventListener("keydown", function (event){
    notes.forEach(function (item, index) {
        if (event.code === 'Key' + item){
            play_note(item, tiles[index], true);
        }
    });
});

document.addEventListener("keyup", function (event) {
    notes.forEach(function (item, index) {
        if (event.code === 'Key' + item){
            tiles[index].style.backgroundColor = "white"
        }
    });
});


tiles.forEach(function (tile, index) {
    tile.addEventListener("click", function () {
        play_note(tile.innerText, tiles[index], false);
        tile.style.backgroundColor = "white"
    });
});
