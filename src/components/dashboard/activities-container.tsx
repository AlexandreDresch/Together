import ActivityItem, { Activity } from "./activity-item";

interface ActivitiesContainerProps {
  activities: Activity[];
}

export default function ActivitiesContainer({
  activities,
}: ActivitiesContainerProps) {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <ActivityItem key={index} {...activity} />
      ))}
    </div>
  );
}
