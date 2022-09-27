import './Editor.css';

export default function Editor({ title, setTitle, caption, setCaption, head, torso, legs, handleChange }) {
  return (
    <section className="editor">
      <div className="titleContainer">
        <label htmlFor="titleInput">title
          <input name="titleInput" className="titleInput" type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        </label>
      </div>
      <div className="captionContainer">
        <label htmlFor="captionInput">caption
          <input name="captionInput" className="captionInput" type="text" default="none" value={ caption } onChange={ (e) => setCaption(e.target.value) } />
        </label>
      </div>
      <div className="headContainer">
        <label htmlFor="headInput">
          <select name="headInput" id="headInput" value={ head } onChange={ (e) => { handleChange('headCount', e.target.value); } }>
            <option value="" selected disabled>choose head</option>
            <option value="wolf">wolf</option>
            <option value="squirrel">squirrel</option>
            <option value="dog">dog</option>
          </select>
        </label>
      </div>
      <div className="torsoContainer">
        <label htmlFor="torsoInput">
          <select name="torsoInput" id="torsoInput" value={ torso } onChange={ (e) => { handleChange('torsoCount', e.target.value); } }>
            <option value="" selected disabled>choose chest</option>
            <option value="fleetwood-mac">fleetwood-mac</option>
            <option value="flowers">flowers</option>
            <option value="gecko">gecko</option>
          </select>
        </label>
      </div>
      <div className="legsContainer">
        <label htmlFor="legsInput">
          <select name="legsInput" id="legsInput" value={ legs } onChange={ (e) => { handleChange('legsCount', e.target.value); } }>
            <option value="" selected disabled>choose legs</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="jeans">jeans</option>
          </select>
        </label>
      </div>
    </section>
  );
}
