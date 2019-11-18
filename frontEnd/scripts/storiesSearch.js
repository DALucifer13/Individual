document.getElementById("sbtn1").addEventListener("click", (event) => search());
document.getElementById("sbtn2").addEventListener("click", (event) => search2());
let output = document.getElementById("output");

function search() {
    output.innerText = "";
    let sparams = document.getElementById("searchbox").value;
    let type = document.getElementById("searchbar").value;
    if (type === "fandom") {
        fetch("http://localhost:1024/home/fanfiction/stories/search/select/fandom1/" + sparams)
            .then(res => res.json())
            .then(res => searchpt2(res));
        fetch("http://localhost:1024/home/fanfiction/stories/search/select/fandom2/" + sparams)
            .then(res => res.json())
            .then(res => searchpt2(res));
    }
    else {
        fetch("http://localhost:1024/home/fanfiction/stories/search/select/" + type + "/" + sparams)
            .then(res => res.json())
            .then(res => searchpt2(res));
    }



}

function search2() {
    output.innerText = "";
    fetch("http://localhost:1024/home/fanfiction/stories/search/select/")
        .then(res => res.json())
        .then(res => searchpt2(res));


}

function searchpt2(data) {
    console.log(data);

    for (let d of data) {
        let p = document.createElement("p");
        let h = document.createElement("h3");
        let img = document.createElement("img");
        let sq = document.createElement("div");
        let imgdiv = document.createElement("div");
        sq.className = "card";
        sq.addEventListener("click", (event => view(d.id)))
        imgdiv.className = "imgdiv";
        h.innerText = d.name + "\n";
        img.src = "/home/images/story/" + posters(d.image);
        p.innerText = "Fandoms: " + d.fandom1 + " & " + d.fandom2
            + "\nChapters: " + d.chapters + "\nWord Count: " + d.words;
        imgdiv.append(img);
        sq.append(h, imgdiv, p);
        output.appendChild(sq);
    }
}

function view(data) {
    window.location.href = "/home/fanfiction/stories/view?id=" + data;

}

function posters(post) {
    if (post.includes("pic.jpg")) {
        return "defstory.jpg";
    }
    else {
        return post;
    }
}