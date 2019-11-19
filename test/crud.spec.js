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

