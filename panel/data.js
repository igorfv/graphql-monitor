class TracingData {
  requests = []
  callbacks = []

  add(request) {
    this.requests.push(this.formatRequest(request))
    this.hasChanged()
  }

  remove(index) {
    this.requests.splice(index, 1)
    this.hasChanged()
  }

  clear() {
    this.requests = []
    this.hasChanged()
  }

  formatRequest(request) {
    const { duration, execution, startTime, endTime } = request
    const { resolvers } = execution

    const name = resolvers
      .filter(({ path }) => path.length === 1)
      .map(({ path }) => path.join(''))
      .join(', ')

    return {
      name,
      duration,
      startTime,
      endTime,
      resolvers,
    }
  }

  onChange(callback) {
    this.callbacks.push(callback)
  }

  hasChanged() {
    this.callbacks.forEach((callback) => callback())
  }
}

const tracingData = new TracingData()


chrome.devtools.network.onRequestFinished.addListener((request) => {
  if (request.response.status !== 200) return
  if (request.response.content.mimeType !== "application/json") return

  request.getContent((content) => {
    const data = JSON.parse(content)
    if (!hasTracingData(data)) return

    tracingData.add(data.extensions.tracing)
  })
})
