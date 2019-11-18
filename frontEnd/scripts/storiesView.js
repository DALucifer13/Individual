document.getElementById("hbtn").addEventListener("click", (event) => window.location.href = "/home/fanfiction/stories");
document.getElementById("delbtn").addEventListener("click", (event) => deleter());
document.getElementById("editbtn").addEventListener("click", (event) => editer());
document.getElementById("viewbtn").addEventListener("click", (event) => viewer());
const output = document.getElementById("output");
const output2 = document.getElementById("chapops");
let d = 1;

let id = new URLSearchParams(window.location.search).get('id');

    fetch("http://localhost:1024/home/fanfiction/stories/search/select/id/" + id)
    .then(res => res.json())
    .then(res => load(res[0]));

function load(data) {
    let p = document.createElement("p");
    let h = document.createElement("h3");
    let img = document.createElement("img");
    let sq = document.createElement("div");
    let imgdiv = document.createElement("div");
    sq.className = "info";
    imgdiv.className = "imgdiv";
    h.innerText = data.id + ": " + data.name + "\n";
    img.src = "/home/images/story/" + posters(data.image);
    p.innerText = "\nName: " + data.name
        + "\nFandoms: " + data.fandom1 + " & " + data.fandom2
        + "\nAuthor: " + data.author.name
        + "\nChapters/Pages: " + data.chapters
        + "\nWord Count: " + data.words
        + "\nSummary: " + data.summary;

    Array(+data.chapters).fill(null).map((_v, i) => i + 1).forEach(v => {
        let c = document.createElement("option");
        c.value = v;
        c.innerText = v;
        output2.append(c)
    });

    imgdiv.append(img);
    sq.append(h, imgdiv);
    sq.appendChild(p);
    output.appendChild(sq);
}

function deleter() {
    fetch("http://localhost:1024/home/fanfiction/stories/view/delete/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json;charset=UTF-8" }
    }
    )
        ;
    window.location.href = "/home/fanfiction/stories";
}

function viewer() {
    fetch("http://localhost:1024/home/fanfiction/stories/search/select/id/" + id)
        .then(res => res.json())
        .then(res => pager(res[0]));

}

function pager(data){
    if(data.link.includes("fanfiction.net")){
        midder = "";
    }
    else{
        midder = "reader/page-"
    }

    window.open(data.link + "/" + midder + output2.value, '_blank')
}

function editer() {
    window.location.href = "edit?id=" + id;
}

function posters(post) {
    if (post.includes("pic.jpg")) {
        return "defstory.jpg";
    }
    else {
        return post;
    }
}