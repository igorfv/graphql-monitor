const isGraphql = (data) => (
  data && !!data.extensions
)


const hasTracing = (data) => {
  if (!isGraphql(data)) return false

  const extensions = data.extensions
  const tracing = extensions.tracing

  if (!tracing) return false
  return tracing.execution.resolvers.length > 0
}

export default hasTracing
