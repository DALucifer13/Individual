let chai = require("chai");
let chaihttp = require("chai-http");
let app = require("../server/server");

chai.use(chaihttp);

describe("Music", () => {
    it("create", (done) => {
        chai.request(app)
            .post('http://localhost:1024/home/music/add/save')
            .type('json')
            .send({ name: "Zelda Main Theme Marimba", image: "pic.jpg", album: "Zelda", artist: "Zelda", genre: "Game", length: "4:00", location: "/home/music/ZeldaMtm.mp3" })
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

});

