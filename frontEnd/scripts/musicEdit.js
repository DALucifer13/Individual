document.getElementById("saveme").addEventListener("click", (event) => save());
_id = document.getElementById("id")
n_id = document.getElementById("nid");
i_id = document.getElementById("iid");
al_id = document.getElementById("alid");
ar_id = document.getElementById("arid");
g_id = document.getElementById("gid");
le_id = document.getElementById("leid");
lo_id = document.getElementById("loid");

let id = new URLSearchParams(window.location.search).get('id');

fetch("http://localhost:1024/home/music/search/select/id/" + id)
    .then(res => res.json())
    .then(res => load(res[0]));

function save() {
    fetch("http://localhost:1024/home/music/edit/save", {
        method: "PUT",
        body: JSON.stringify({ id: _id.value, name: n_id.value, image: i_id.value, ablum: al_id.value, artist: ar_id.value, genre: g_id.value, length: le_id.value, location: lo_id.value }),
        headers: { "Content-Type": "application/json" }
    }
    )
        ;

    window.location.href = "/home/music/view?id=" + id;
};

function load(data) {
    _id.value = data.id;
    n_id.value = data.name;
    i_id.value = data.image;
    al_id.value = data.album;
    ar_id.value = data.artist;
    g_id.value = data.genre;
    le_id.value = data.length;
    lo_id.value = data.location;

}