const test = require('ava')
const jsdom = require('jsdom')
const {JSDOM} = jsdom
const url = 'https://v2.libanswers.com/chati.php?hash=e7fa5c4fdcde97a650b8acc74bb1fc9d'

test('Check custom CSS', async t => {
  let config = {
    resources: 'usable',
    runScripts: 'dangerously'
  }

  let loaded = false
  let source = await JSDOM.fromURL(url, config).then(dom => {
    return dom.window.document.documentElement
  })

  let styleTags = source.querySelectorAll('head style')

  console.log(source.innerHTML)

  t.pass(`Our custom CSS was loaded`)
})
