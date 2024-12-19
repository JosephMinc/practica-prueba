"use strict";

let songs = [
    { song: "Blinding Lights", artist: "The Weeknd" },
    { song: "Shape of You", artist: "Ed Sheeran" },
    { song: "Levitating", artist: "Dua Lipa" },
    { song: "Stay", artist: "The Kid LAROI, Justin Bieber" },
    { song: "Good 4 U", artist: "Olivia Rodrigo" }
];


let message = "Songs and Artists:\n";
songs.forEach((item, index) => {
    message += `${index + 1}. ${item.song} by ${item.artist}\n`;
});

alert(message);


