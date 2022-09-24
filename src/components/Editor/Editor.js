import './Editor.css';

export default function Editor({ title, setTitle }) {
  return (
    <section className="editor">
      <div className="titleInput">
        <label htmlFor="titleInput">
          <input name="titleInput" type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        </label>
      </div>
    </section>
  );
}
