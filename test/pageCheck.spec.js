let chai = require("chai");
let chaihttp = require("chai-http");
let app = require("../server/server");

chai.use(chaihttp);

describe("navigation testing", () => {
    it("nowhere", (done) => {
        chai.request(app)
            .get("/break")
            .end((err, res) => {
                chai.expect(res.status).to.eq(404);
                done();
            })
    });

    it("home", (done) => {
        chai.request(app)
            .get("/home")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("music", (done) => {
        chai.request(app)
            .get("/home/music")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("music add", (done) => {
        chai.request(app)
            .get("/home/music/add")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("music search", (done) => {
        chai.request(app)
            .get("/home/music/search")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("music view", (done) => {
        chai.request(app)
            .get("/home/music/view?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("music edit", (done) => {
        chai.request(app)
            .get("/home/music/edit?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("fanfiction", (done) => {
        chai.request(app)
            .get("/home/fanfiction")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("authors", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("authors add", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/add")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("authors search", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/search")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("authors view", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/view?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("authors edit", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/edit?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("stories", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("stories add", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/add")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("stories search", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/search")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("stories view", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/view?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("stories edit", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/edit?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});


