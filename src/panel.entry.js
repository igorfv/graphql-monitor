import React from 'react'
import { render } from 'react-dom'

import App from './components/app'

import { TracingData } from './store'
import hasTracing from './util/has-tracing'


const tracingData = new TracingData()

const addEntry = (request) => {
  if (request.response.status !== 200) return
  if (request.response.content.mimeType !== 'application/json') return

  request.getContent((content) => {
    const data = JSON.parse(content)
    if (!hasTracing(data)) return

    tracingData.add(data.extensions.tracing)
  })
}

// Add previous entries
chrome.devtools.network.getHAR(({ entries }) => {
  entries.forEach(addEntry)
})

// Add new entries
chrome.devtools.network.onRequestFinished.addListener(addEntry)


render(
  <App tracing={tracingData} />,
  document.getElementById('root'),
)
