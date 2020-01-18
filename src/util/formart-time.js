export default (time) => {
  let formatedTime = time
  if (formatedTime < 1000) return `${formatedTime} ns`

  formatedTime = parseInt(formatedTime / 1000, 0)
  if (formatedTime < 1000) return `${formatedTime} µs`

  formatedTime = parseInt(formatedTime / 1000, 0)
  return `${formatedTime} ms`
}
