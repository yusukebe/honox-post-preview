import { css } from 'hono/css'
import { useState } from 'hono/jsx'
import { marked } from 'marked'

const classContentTextarea = css`
  padding: 0.5rem;
  border-color: rgb(209 213 219);
  border-width: 1px;
  border-radius: 0.375rem;
  width: 80%;
  resize: vertical;
`

export default function Preview() {
  const [content, setContent] = useState('')
  const [preview, setPreview] = useState(false)

  return (
    <div>
      <div>
        <label>Preview</label>
        <input type="checkbox" checked={preview} onInput={() => setPreview((preview) => !preview)} />
      </div>
      {preview ? (
        <div
          id="contents"
          dangerouslySetInnerHTML={{
            __html: marked(content) as string
          }}
        />
      ) : (
        <textarea
          class={classContentTextarea}
          rows={10}
          value={content}
          onInput={(e) => {
            if (e.target instanceof HTMLTextAreaElement) {
              setContent(e.target.value)
            }
          }}
        />
      )}
    </div>
  )
}
