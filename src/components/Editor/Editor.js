import './Editor.css';

export default function Editor({ title, setTitle, caption, setCaption, head, torso, legs, handleChange }) {
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
          <select name="headInput" id="headInput" value={ head } onChange={ (e) => { handleChange('head', e.target.value); } }>
            <option value="wolf">wolf</option>
            <option value="squirrel">squirrel</option>
            <option value=""></option>
          </select>
        </label>
      </div>
      <div className="torsoInput">
        <label htmlFor="torsoInput">
          <select name="torsoInput" id="torsoInput" value={ torso } onChange={ (e) => { handleChange('torso', e.target.value); } }>
            <option value="fleetwoodmac">fleetwood mac</option>
            <option value="flower">flower</option>
            <option value="gecko">gecko</option>
          </select>
        </label>
      </div>
      <div className="legsInput">
        <label htmlFor="legsInput">
          <select name="legsInput" id="legsInput" value={ legs } onChange={ (e) => { handleChange('legs', e.target.value); } }>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value=""></option>
          </select>
        </label>
      </div>
    </section>
  );
}
