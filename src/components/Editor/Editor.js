import './Editor.css';

export default function Editor({ title, setTitle, caption, setCaption }) {
  return (
    <section className="editor">
      <div className="titleInput">
        <label htmlFor="titleInput">
          <input name="titleInput" type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        </label>
      </div>
      <div className="captionInput">
        <label htmlFor="captionInput">
          <input name="captionInput" type="text" value={ caption } onChange={ (e) => setCaption(e.target.value) } />
        </label>
      </div>
    </section>
  );
}
