document.getElementById("saveme").addEventListener("click", (event) => save());
_id = document.getElementById("id");
n_id = document.getElementById("nid");
i_id = document.getElementById("iid");
c_id = document.getElementById("cid");
w_id = document.getElementById("wid");
sc_id = document.getElementById("scid");
a_id = document.getElementById("aid");
f1_id = document.getElementById("f1id");
f2_id = document.getElementById("f2id");
su_id = document.getElementById("suid");
cb_id = document.getElementById("searchops");
let id = new URLSearchParams(window.location.search).get('id');

fetch("http://localhost:1024/home/fanfiction/stories/search/select/id/" + id)
    .then(res => res.json())
    .then(res => load(res[0]));

function save() {
    fetch("http://localhost:1024/home/fanfiction/stories/edit/save", {
        method: "PUT",
        body: JSON.stringify({ id: _id.value, name: n_id.value, image: i_id.value, chapters: c_id.value, words: w_id.value, link: sc_id.value, authorId: a_id.value, fandom1: f1_id.value, fandom2: f2_id.value, summary: su_id.value }),
        headers: { "Content-Type": "application/json" }
    }
    )
        ;

    window.location.href = "/home/fanfiction/stories/view?id=" + id;
};

function load(data) {
    _id.value = data.id;
    n_id.value = data.name;
    i_id.value = data.image;
    c_id.value = data.chapters;
    w_id.value = data.words;
    a_id.value = data.authorId;
    f1_id.value = data.fandom1;
    f2_id.value = data.fandom2;
    sc_id.value = data.link;
    su_id.value = data.summary;
}