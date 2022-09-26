import './Stats.css';

export default function Stats({ headCount, torsoCount, legsCount }) {
  return (
    <div className="statsContainer">
      <p className="headContainer">You have changed the head { headCount } times.</p>
      <p className="torsoContainer">You have changed the torso { torsoCount } times.</p>
      <p className="legsContainer">You have changed the legs {legsCount} times.</p>
    </div>
  );
}