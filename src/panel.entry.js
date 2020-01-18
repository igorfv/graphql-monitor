import App from './components/app'

import { TracingData } from './store'
import hasTracing from './util/has-tracing'


const tracingData = new TracingData()


chrome.devtools.network.onRequestFinished.addListener((request) => {
  if (request.response.status !== 200) return
  if (request.response.content.mimeType !== "application/json") return

  request.getContent((content) => {
    const data = JSON.parse(content)
    if (!hasTracing(data)) return

    tracingData.add(data.extensions.tracing)
  })
})


ReactDOM.render(
  <App tracing={tracingData} />,
  document.getElementById('root')
)
