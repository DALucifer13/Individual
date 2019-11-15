document.getElementById("delbtn").addEventListener("click", (event) => deleter());
document.getElementById("editbtn").addEventListener("click", (event) => editer());
document.getElementById("viewbtn").addEventListener("click", (event) => viewer());
document.getElementById("hbtn").addEventListener("click", (event) => window.location.href = "/home/fanfiction/authors");
const output = document.getElementById("output");

let id = new URLSearchParams(window.location.search).get('id');

fetch("http://localhost:1024/home/fanfiction/authors/search/select/id/" + id)
    .then(res => res.json())
    .then(res => load(res[0]));

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
    img.src = "/home/images/author/" + posters(data.image);
    p.innerText = "\nName: " + data.name
        + "\nNationality: " + data.nation
        + "\nBio: " + data.bio;

    imgdiv.append(img);
    sq.append(h, imgdiv);
    sq.appendChild(p);
    output.appendChild(sq);
}

function deleter() {
    fetch("http://localhost:1024/home/fanfiction/authors/view/delete/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json;charset=UTF-8" }
    }
    )
        ;
    window.location.href = "/home/fanfiction/authors";
}

function viewer() {
    fetch("http://localhost:1024/home/fanfiction/authors/search/select/id/" + id)
        .then(res => res.json())
        .then(res => view(res[0]));

}

function editer() {
    window.location.href = "edit?id=" + id;
}

function view(data) {
    console.log(data);
    {
        window.open(data.code, '_blank');
    }

}
function posters(post) {
    if (post.includes("pic.jpg")) {
        return "defuser.jpg";
    }
    else {
        return post;
    }
}