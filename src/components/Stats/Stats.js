import './Stats.css';

export default function Stats({ headCount, torsoCount, legsCount }) {
  return (
    <div className="count">
      <p className="headCount">You have changed the head { headCount } times.</p>
      <p className="torsoCount">You have changed the torso { torsoCount } times.</p>
      <p className="legsCount">You have changed the legs {legsCount} times.</p>
    </div>
  );
}