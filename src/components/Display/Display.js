import './Display.css';

export default function Display({ title, caption, head, torso, legs }) {
  return (
    <section className="displayContainer">
      <div id="titleEl" >{title}</div>
      <div id="captionEl">{ caption }</div>
      <img id="headEl" style={ { display: `${ head }` ? 'block' : 'none' }} src={ process.env.PUBLIC_URL + `/images/${ head }.png` } />
      <img id="torsoEl" style={ { display: `${ torso }` ? 'block' : 'none' }} src={process.env.PUBLIC_URL + `/images/${ torso }.png`} />
      <img id="legsEl" style={ { display: `${ legs }` ? 'block' : 'none' }} src={process.env.PUBLIC_URL + `/images/${ legs }.png`} />
    </section>
  );
}