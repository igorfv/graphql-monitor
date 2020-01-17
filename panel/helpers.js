const e = React.createElement

const isGraphql = (data) => (
  data && !!data.extensions
)


const hasTracingData = (data) => {
  if (!isGraphql(data)) return false

  const extensions = data.extensions
  const tracing = extensions.tracing

  if (!tracing) return false
  return tracing.execution.resolvers.length > 0
}


const formatTime = (time) => {
  let formatedTime = time
  if (formatedTime < 1000) return `${formatedTime} ns`

  formatedTime = parseInt(formatedTime / 1000, 0)
  if (formatedTime < 1000) return `${formatedTime} µs`

  formatedTime = parseInt(formatedTime / 1000, 0)
  return `${formatedTime} ms`
}


const lightenDarkenColor = (col, amt) => {
    let usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    const num = parseInt(col,16);

    let r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    let b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    let g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
