import './Display.css';

export default function Display({ title, caption, head, torso, legs, count }) {
  return (
    <section className="displayContainer">
     
      <div className="titleDisplayWrap">
        <p className="titleDisplay">{ title }</p>
      </div>
      <div className="captionDisplayWrap">
        <p className="captionDisplay">{ caption }</p>
      </div>
      <div className="headDisplayWrap">
        <p className="headDisplay">{ head }</p>
      </div>
      <div className="torsoDisplayWrap">
        <p className="torsoDisplay">{ torso }</p>
      </div>
      <div className="legsDisplayWrap">
        <p className="legsDisplay">{ legs }</p>
      </div>
      <div className="countDisplayWrap">
        <p className="countDisplay">There have been { count } changes to { title }.</p>
      </div>
    </section>
  );
}
