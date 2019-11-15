n_id = document.getElementById("nid");
i_id = document.getElementById("iid");
na_id = document.getElementById("naid");
b_id = document.getElementById("bid");
c_id = document.getElementById("cid");
cb_id = document.getElementById("searchops");

i_id.value = "pic.jpg";

function save() {

    let link = cb_id.value + c_id.value;

    fetch("http://localhost:1024/home/fanfiction/authors/add/save", {
        method: "POST",
        body: JSON.stringify({ name: n_id.value, image: i_id.value, nation: na_id.value, bio: b_id.value, code: link }),
        headers: { "Content-Type": "application/json" }
    }
    ).then(() => {
        window.location.href = "/home/fanfiction/authors";
    });


}

