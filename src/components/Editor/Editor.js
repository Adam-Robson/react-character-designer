import './Editor.css';

export default function Editor({ title, setTitle, caption, setCaption, head, setHead, torso, setTorso }) {
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
      <div className="headInput">
        <label htmlFor="headInput">
          <select name="headInput" id="headInput" value={ head } onChange={ (e) => setHead(e.target.value) }>
            <option value="wolf">wolf</option>
            <option value="squirrel">squirrel</option>
            <option value="ram">ram</option>
          </select>
        </label>
      </div>
      <div className="torsoInput">
        <label htmlFor="torsoInput">
          <select name="torsoInput" id="torsoInput" value={ torso } onChange={ (e) => setTorso(e.target.value) }>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </label>
      </div>

    </section>
  );
}
