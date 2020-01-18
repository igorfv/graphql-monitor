import React from 'react'

import './style.scss'


const docUrl = 'https://github.com/apollographql/apollo-server/tree/master/packages/apollo-tracing'

const Empty = () => (
  <div className="empty">
    <p className="empty__paragraph">
      No traceble requests were made until now, make sure you have tracing enabled in your
      Apollo server.
    </p>
    <p className="empty__paragraph">
      {'Check '}
      <a href={docUrl} target="_blank" rel="noopener noreferrer" className="empty__anchor">
        Apollo Tracing
      </a>
      {' doc for more info.'}
    </p>
  </div>
)

export default Empty
