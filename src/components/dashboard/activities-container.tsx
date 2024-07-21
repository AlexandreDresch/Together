import { useEffect, useState } from "react";
import ActivityItem from "./activity-item";
import { useParams } from "react-router-dom";
import { getActivitiesByEventId } from "../../services/events-api";
import { Activity } from "../../types";

export default function ActivitiesContainer() {
  const { eventId } = useParams();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function getEventActivities() {
      if (!eventId) return;
      const request = await getActivitiesByEventId(eventId);

      if (request) {
        setActivities(request);
      }
    }

    getEventActivities();
  }, [eventId]);
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <ActivityItem key={index} {...activity} />
      ))}
    </div>
  );
}
