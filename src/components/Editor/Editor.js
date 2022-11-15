import './Editor.css';

export default function Editor({ title, setTitle, caption, setCaption, head, torso, legs, handleChange }) {
  return (
    <section className="editor">
      <div className="titleContainer">
        <label htmlFor="titleInput">title
          <input name="titleInput" className="titleInput" type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        </label>
      </div>
      <div className="container">
        <label htmlFor="captionInput">caption
          <input name="captionInput" className="captionInput" type="text" value={ caption } onChange={ (e) => setCaption(e.target.value) } />
        </label>
      </div>
      <div className="container">
        <label htmlFor="headInput">head
          <select name="headInput" id="headInput" value={ head } onChange={ (e) => { handleChange('headCount', e.target.value); } }>
            <option value="sarah">sarah</option>
            <option value="sammy">sammy</option>
            <option value="jerome">jerome</option>
          </select>
        </label>
      </div>
      <div className="container">
        <label htmlFor="torsoInput">chest
          <select name="torsoInput" id="torsoInput" value={ torso } onChange={ (e) => { handleChange('torsoCount', e.target.value); } }>
            <option value="gecko">gecko</option>
            <option value="fleetwoodmac">fleetwoodmac</option>
            <option value="flowers">flowers</option>
          </select>
        </label>
      </div>
      <div className="container">
        <label htmlFor="legsInput">legs
          <select name="legsInput" id="legsInput" value={ legs } onChange={ (e) => { handleChange('legsCount', e.target.value); } }>
            <option value="black">black</option>
            <option value="lightblue">lightblue</option>
            <option value="shorts">shorts</option>
          </select>
        </label>
      </div>
    </section>
  );
}
