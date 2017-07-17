const expect = require('chai').expect
const config = require('./config.js')
const loadDocument = require('./loadDocument.js').loadDocument

describe('Custom stylesheet', function () {
  it('needs to load', function () {
    return loadDocument().then(
      function (dom) {
        let customStylesheetImport = dom.window.document.querySelectorAll('head style')[2].innerHTML
        expect(customStylesheetImport).to.be.equal(config.stylesheetImport)
      },
      function (err) {
        console.error(err)
      }
    )
  })
})

describe('Their stylesheet', function () {
  it('should be this version', function () {
    return loadDocument().then(
      function (dom) {
        let theirActualCSSURL = dom.window.document.querySelectorAll('head link')[1].href
        expect(theirActualCSSURL).to.be.equal(config.theirCSSURL)
      },
      function (err) {
        console.error(err)
      }
    )
  })
})
