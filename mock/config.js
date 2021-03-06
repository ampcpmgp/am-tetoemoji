import mock from 'am-mocktimes'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as textAction from '../src/state/text'
import Path from '../src/const/path'

const mockAdapter = new MockAdapter(axios, { delayResponse: 500 })
mockAdapter.onGet(Path.TEST).reply(200, {
  successed: true
})

// TODO: 削除
console.clear = () => {}

mock({
  setText (text) {
    window.history.replaceState(null, null, `#text/${text}`)
  }
})

require('../src/app') // for hot reload
