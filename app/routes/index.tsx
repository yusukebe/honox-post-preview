import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Preview from '../islands/preview'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  return c.render(
    <div class={className}>
      <h1>Preview</h1>
      <Preview />
    </div>
  )
})
