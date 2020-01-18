export class TracingData {
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
    const {
      duration, execution, startTime, endTime,
    } = request

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

export default {}
