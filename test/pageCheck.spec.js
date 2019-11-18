let chai = require("chai");
let chaihttp = require("chai-http");
let app = require("../server/server");

chai.use(chaihttp);

describe("break testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/break")
            .end((err, res) => {
                chai.expect(res.status).to.eq(404);
                done();
            })
    });

});

describe("home testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

});

describe("music main testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/music")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("music add testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/music/add")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("music search testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/music/search")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("music view testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/music/view?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("music edit testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/music/edit?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("fanfiction testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("authors main testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});


describe("authors add testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/add")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("authors search testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/search")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("authors view testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/view?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("authors edit testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/authors/edit?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("stories main testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});


describe("stories add testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/add")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("stories search testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/search")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("stories view testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/view?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});

describe("stories edit testing", () => {
    it("Go To", (done) => {
        chai.request(app)
            .get("/home/fanfiction/stories/edit?id=1")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });
});
