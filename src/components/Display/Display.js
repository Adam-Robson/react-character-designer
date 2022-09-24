import './Display.css';

export default function Display({ title, caption }) {
  return (
    <section className="displayContainer">
      <div className="titleDisplayWrap">
        <div className="titleDisplay">{ title }</div>
      </div>
      <div className="captionDisplayWrap">
        <div className="captionDisplay">{ caption }</div>
      </div>
    </section>
  );
}
