document.getElementById("sbtn1").addEventListener("click", (event) => search());
document.getElementById("sbtn2").addEventListener("click", (event) => search2());
let output = document.getElementById("output");

function search() {
    let sparams = document.getElementById("searchbox").value;
    let type = document.getElementById("searchbar").value;

    fetch("http://localhost:1024/home/fanfiction/authors/search/select/" + type + "/" + sparams)
        .then(res => res.json())
        .then(res => searchpt2(res));


}

function search2() {

    fetch("http://localhost:1024/home/fanfiction/authors/search/select/")
        .then(res => res.json())
        .then(res => searchpt2(res));


}

function searchpt2(data) {
    console.log(data);
    output.innerText = "";
    for (let d of data) {

        let h = document.createElement("h3");
        let img = document.createElement("img");
        let sq = document.createElement("div");
        let imgdiv = document.createElement("div");
        sq.className = "card";
        sq.addEventListener("click", (event => view(d.id)))
        imgdiv.className = "imgdiv";
        h.innerText = "ID: " + d.id + "\n" + d.name + "\n";
        img.src = "/home/images/author/" + posters(d.image);
        imgdiv.append(img);
        sq.append(h, imgdiv);
        output.appendChild(sq);
    }
}

function view(data) {
    window.location.href = "/home/fanfiction/authors/view?id=" + data;

}

function posters(post) {
    if (post.includes("pic.jpg")) {
        return "defuser.jpg";
    }
    else {
        return post;
    }
}