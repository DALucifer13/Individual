let chai = require("chai");
let chaihttp = require("chai-http");
let app = require("../server/server");

chai.use(chaihttp);

describe("Music", () => {
    it("create", (done) => {
        chai.request(app)
            .post('/home/music/add/save')
            .type('json')
            .send({ name: "Zelda Main Theme Marimba", image: "pic.jpg", album: "Zelda", artist: "Zelda", genre: "Game", length: "4:00", location: "/home/music/ZeldaMtm.mp3" })
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("read", (done) => {
        chai.request(app)
            .get("/home/music/search/select/id/1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.body[0].id).to.eq(1);
                chai.expect(res.body[0].name).to.eq("Zelda Main Theme Marimba");
                chai.expect(res.body[0].genre).to.eq("Game");
                done();
            })
    });

    it("update", (done) => {
        chai.request(app)
            .put('/home/music/edit/save')
            .type('json')
            .send({ id: 1, name: "Zelda Main Theme Marimba", image: "pic.jpg", album: "Zelda", artist: "Zelda", genre: "Orchestra", length: "4:00", location: "/home/music/ZeldaMtm.mp3" })
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("readupdate", (done) => {
        chai.request(app)
            .get("/home/music/search/select/id/1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.body[0].id).to.eq(1);
                chai.expect(res.body[0].name).to.eq("Zelda Main Theme Marimba");
                chai.expect(res.body[0].genre).to.eq("Orchestra");
                done();
            })
    });

    it("delete", (done) => {
        chai.request(app)
            .delete('/home/music/view/delete/1')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

});

describe("Authors", () => {
    it("create", (done) => {
        chai.request(app)
            .post('/home/fanfiction/authors/add/save')
            .type('json')
            .send({ name: "Sakurademonalchemist", image: "sda.jpg", nation: "American", bio: "writer", code: "912889"})
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("create2", (done) => {
        chai.request(app)
            .post('/home/fanfiction/authors/add/save')
            .type('json')
            .send({ name: "Sakurademonalchemist", image: "sda.jpg", nation: "American", bio: "writer", code: "912889"})
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("read", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/search/select/id/2")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.body[0].id).to.eq(2);
                chai.expect(res.body[0].name).to.eq("Sakurademonalchemist");
                chai.expect(res.body[0].code).to.eq("912889");
                done();
            })
    });

    it("update", (done) => {
        chai.request(app)
            .put('/home/fanfiction/authors/edit/save')
            .type('json')
            .send({ id: 2, name: "SDA", image: "sda.jpg", nation: "American", bio: "writer", code: "912889"})
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("readupdate", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/search/select/id/2")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.body[0].id).to.eq(2);
                chai.expect(res.body[0].name).to.eq("SDA");
                chai.expect(res.body[0].code).to.eq("912889");
                done();
            })
    });

    it("delete", (done) => {
        chai.request(app)
            .delete('/home/fanfiction/authors/view/delete/2')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

});

describe("Authors", () => {
    it("create", (done) => {
        chai.request(app)
            .post('/home/fanfiction/stories/add/save')
            .type('json')
            .send({ name: "Future", image: "pic.img", chapters: 30, words: "Many", link: "https://www.fanfiction.net/s/12724051", authorId: "1", fandom1: "Boku no Hero Academia", fandom2: "Touhou Project", summary: "Gap Youkai" })
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });


    it("read", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/search/select/id/1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.body[0].id).to.eq(1);
                chai.expect(res.body[0].name).to.eq("Future");
                chai.expect(res.body[0].authorId).to.eq(1);
                done();
            })
    });

    it("update", (done) => {
        chai.request(app)
            .put('/home/fanfiction/stories/edit/save')
            .type('json')
            .send({ id: 1, name: "Future After Failed Realms", image: "pic.img", chapters: 30, words: "Many", link: "https://www.fanfiction.net/s/12724051", authorId: "1", fandom1: "Boku no Hero Academia", fandom2: "Touhou Project", summary: "Gap Youkai" })
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("readupdate", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/search/select/id/1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.body[0].id).to.eq(1);
                chai.expect(res.body[0].name).to.eq("Future After Failed Realms");
                chai.expect(res.body[0].authorId).to.eq(1);
                done();
            })
    });

    it("delete", (done) => {
        chai.request(app)
            .delete('/home/fanfiction/stories/view/delete/1')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

});