import './Stats.css';

export default function Stats({ headCount, torsoCount, legsCount }) {
  return (
    <div className="statsContainer">
      <p>You have changed the head { headCount } times.</p>
      <p>You have changed the torso { torsoCount } times.</p>
      <p>You have changed the legs {legsCount} times.</p>
    </div>
  );
}