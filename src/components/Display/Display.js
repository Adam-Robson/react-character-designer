import './Display.css';

export default function Display({ title, caption, head, torso, legs }) {
  return (
    <section className="displayContainer">

      <div className="titleDisplayWrap">
        <span className="titleDisplay">{ title }</span>
      </div>
      <div className="captionDisplayWrap">
        <span className="captionDisplay">{ caption }</span>
      </div>
      <div className="headDisplayWrap">
        <span className="headDisplay">{ head }</span>
      </div>
      <div className="torsoDisplayWrap">
        <span className="torsoDisplay">{ torso }</span>
      </div>
      <div className="legsDisplayWrap">
        <span className="legsDisplay">{ legs }</span>
      </div>
      
    </section>
  );
}
