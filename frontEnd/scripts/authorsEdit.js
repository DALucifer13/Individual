document.getElementById("saveme").addEventListener("click", (event) => save());
_id = n_id = document.getElementById("id");
n_id = document.getElementById("nid");
i_id = document.getElementById("iid");
na_id = document.getElementById("naid");
b_id = document.getElementById("bid");
c_id = document.getElementById("cid");
let id = new URLSearchParams(window.location.search).get('id');

fetch("http://localhost:1024/home/fanfiction/authors/search/select/id/" + id)
    .then(res => res.json())
    .then(res => load(res[0]));

function save() {
    fetch("http://localhost:1024/home/fanfiction/authors/edit/save", {
        method: "PUT",
        body: JSON.stringify({ id: _id.value, name: n_id.value, image: i_id.value, nation: na_id.value, bio: b_id.value, code: c_id.value }),
        headers: { "Content-Type": "application/json" }
    }
    )
        ;

    window.location.href = "/home/fanfiction/authors/view?id=" + id;
};

function load(data) {
    _id.value = data.id;
    n_id.value = data.name;
    i_id.value = data.image;
    na_id.value = data.nation;
    b_id.value = data.bio;
    c_id.value = data.code;
}