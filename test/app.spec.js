let chai = require("chai");
let chaihttp = require("chai-http");
let app = require("../server/server");

chai.use(chaihttp);

describe("server", () => {
    it("200", (done) => {
        chai.request(app)
            .get("/home")
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
            })
    });

    it("404", (done) => {
        chai.request(app)
            .get("/break")
            .end((err, res) => {
                chai.expect(res.status).to.eq(404);
                done();
            })
    });

});
