import React, {useEffect} from 'react'

export const EmptyEditor: React.FC = () => {

  useEffect(() => {
    const emptyEditor = document.querySelector('.empty-editor')

    if (emptyEditor) {
      emptyEditor.focus()
    }
  }, [])

  return (
    <React.Fragment>
      <div className="empty-editor v-center" data-testid="empty-editor">
        <div className="text-center">
          <p>
            <strong>Create a note</strong>
          </p>
          <p>
            <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>N</kbd>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}
