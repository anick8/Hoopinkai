import Card from '../common/Card';
import Button from '../common/Button';
import './CircleCard.css';

export default function CircleCard({ name, schedule, description, topics, image }) {
  return (
    <Card image={image} title={name} className="circle-card">
      <p className="circle-schedule">{schedule}</p>
      <p className="circle-description">{description}</p>
      <div className="circle-topics">
        <h4>Topics Explored</h4>
        <ul>
          {topics.map((topic, idx) => (
            <li key={idx}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className="circle-actions">
        <Button
          href="tel:+919970256379"
          variant="primary"
          size="md"
        >
          Save My Spot
        </Button>
      </div>
    </Card>
  );
}
