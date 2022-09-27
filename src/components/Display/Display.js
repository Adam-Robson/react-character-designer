import './Display.css';

export default function Display({ title, caption, head, torso, legs }) {
  return (
    <section className="displayContainer">
      <div id="titleEl" className="unhiddenTitle">{title}</div>
      <div id="captionEl" className="unhiddenCaption">{ caption }</div>
      <img id="headEl" className="unhiddenHead" src={process.env.PUBLIC_URL + `/images/${ head }.png`} />
      <img id="torsoEl" className="unhiddenTorso" src={process.env.PUBLIC_URL + `/images/${ torso }.png`} />
      <img id="legsEl" className="unhiddenLegs" src={process.env.PUBLIC_URL + `/images/${ legs }.png`} />
    </section>
  );
}



// className="hidden" onChange={(e) => { (e.target.className.remove.hidden); }}