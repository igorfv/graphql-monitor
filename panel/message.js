const MessagePanel = e(
  'div',
  { className: 'message-box' },
  'No traceble requests until now, make sure Apollo is configured with `tracing: true` or check the ',
  e(
    'a',
    {
      className: 'link',
      target:"_blank",
      href: 'https://github.com/apollographql/apollo-server/tree/master/packages/apollo-tracing'
    },
    'Apollo documentation'
  ),
  ' for more information.'
)
