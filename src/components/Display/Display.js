import './Display.css';

export default function Display({ title }) {
  return (
    <section className="displayContainer">
      <div className="titleDisplay">{title}</div>
    </section>
  );
}
