/* eslint-env mocha */

const {expect} = require('chai')
const history = require('../lib/history')

//
// Test for username history
//
describe('mojang.history()', () => {
  beforeEach(function (done) {
    this.timeout(1000 * 60)
    setTimeout(done, 1000 * 30)
  })

  it('with a valid uuid should resolve with json response', (done) => {
    history('47c49720c9ee42009ef05e1c4cd2760c')
      .then((history) => {
        console.log(history)
        expect(history).to.not.be.null
        expect(history).to.have.length.of.at.least(1)
        done()
      })
      .catch((err) => {
        expect(err).to.be.null
        done()
      })
  })

  it('with an invalid uuid should reject with error', (done) => {
    history('123')
      .then((history) => {
        expect(history).to.be.null
        done()
      })
      .catch((err) => {
        console.log(err)
        expect(err).to.not.be.null
        done()
      })
  })
})
