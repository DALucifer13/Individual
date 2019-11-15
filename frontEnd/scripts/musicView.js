document.getElementById("hbtn").addEventListener("click", (event) => window.location.href = "/home/music");
document.getElementById("delbtn").addEventListener("click", (event) => deleter());
document.getElementById("editbtn").addEventListener("click", (event) => editer());
document.getElementById("viewbtn").addEventListener("click", (event) => play());
document.getElementById("stpbtn").addEventListener("click", (event) => stop());
document.getElementById("psbtn").addEventListener("click", (event) => pause());
const output = document.getElementById("output");
let audio;
let id = new URLSearchParams(window.location.search).get('id');

fetch("http://localhost:1024/home/music/search/select/id/" + id)
    .then(res => res.json())
    .then(res => load(res[0]));

fetch("http://localhost:1024/home/music/search/select/id/" + id)
    .then(res => res.json())
    .then(res => player(res[0]));

function load(data) {
    console.log(data);
    let p = document.createElement("p");
    let h = document.createElement("h3");
    let img = document.createElement("img");
    let sq = document.createElement("div");
    let imgdiv = document.createElement("div");
    sq.className = "info";
    imgdiv.className = "imgdiv";
    h.innerText = data.id + ": " + data.name + "\n";
    img.src = "/home/images/music/" + posters(data.image);
    p.innerText = "\nName: " + data.name
        + "\nAlbum: " + data.album
        + "\nArtist: " + data.artist
        + "\nLength: " + data.length
        + "\nGenre: " + data.genre;

    imgdiv.append(img);
    sq.append(h, imgdiv);
    sq.appendChild(p);
    output.appendChild(sq);
}

function deleter() {
    fetch("http://localhost:1024/home/music/view/delete/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json;charset=UTF-8" }
    }
    )
        ;
    window.location.href = "/home/music";
}


function editer() {
    window.location.href = "edit?id=" + id;
}

function player(data) {
    audio = new Audio("/home/music/" + data.location);
    
}

function play() {
    audio.play();
}

function stop(){
    audio.load();
    pause();
}

function pause(){
    audio.pause();
}

function posters(post) {
    if (post.includes("pic.jpg")) {
        return "defsong.jpg";
    }
    else {
        return post;
    }
}