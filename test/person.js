//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import Person from '../models/person';

let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Persons', () => {
    beforeEach((done) => { //Before each test we empty the database
        Person.remove({}, (err) => {
           done();
        });
    });
/*
  * Test the /GET route
  */
  describe('/GET person', () => {
      it('it should GET all the persons', (done) => {
        chai.request(server)
            .get('/api/person')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});