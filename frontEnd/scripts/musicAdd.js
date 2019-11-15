n_id = document.getElementById("nid");
i_id = document.getElementById("iid");
al_id = document.getElementById("alid");
ar_id = document.getElementById("arid");
g_id = document.getElementById("gid");
le_id = document.getElementById("leid");
lo_id = document.getElementById("loid");

i_id.value = "pic.jpg";

function save() {
    fetch("http://localhost:1024/home/music/add/save", {
        method: "POST",
        body: JSON.stringify({ name: n_id.value, image: i_id.value, album: al_id.value, artist: ar_id.value, genre: g_id.value, length: le_id.value, location: lo_id.value }),
        headers: { "Content-Type": "application/json" }
    }).then(() => {
        window.location.href = "/home/music";
    });
}