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

i_id.value = "pic.jpg";

function save() {

    let link = cb_id.value + sc_id.value;

    fetch("http://localhost:1024/home/fanfiction/stories/add/save", {
        method: "POST",
        body: JSON.stringify({ name: n_id.value, image: i_id.value, chapters: c_id.value, words: w_id.value, link: link, authorId: a_id.value, fandom1: f1_id.value, fandom2: f2_id.value, summary: su_id.value }),
        headers: { "Content-Type": "application/json" }
    }
    )
        .then(() => {
            window.location.href = "/home/fanfiction/stories";
        });


}