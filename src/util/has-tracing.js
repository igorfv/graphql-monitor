import { get } from 'lodash'

const isGraphql = (data) => !!get(data, 'extensions', null)


const hasTracing = (data) => {
  if (!isGraphql(data)) return false

  const tracing = get(data, 'extensions.tracing', null)

  if (!tracing) return false
  return get(tracing, 'execution.resolvers', []).length > 0
}

export default hasTracing
