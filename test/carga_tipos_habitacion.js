var expect = require("chai").expect;
var request = require("request");


describe("Prueba carga de pagina tipos habitacion",function () {
        it("probando envio",function (done) {
            request.('http://localhost:3000',function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                    done();
            });

        });
        
    });