import { Activity, CreateActivity, CreateEventProps, CreateEventResponse, Event, Guest } from "../types";
import { api } from "./api";

export async function postEvent(
  createEventData: CreateEventProps,
): Promise<CreateEventResponse> {
  const response = await api.post("/events", { createEventData });

  return response.data;
}

export async function getEventById(id: string): Promise<Event> {
  const response = await api.get(`/events/${id}`);

  return response.data;
}

export async function getGuestsByEventId(eventId: string): Promise<Guest[]> {
  const response = await api.get(`/events/${eventId}/participants`);

  return response.data;
}

export async function postActivity(createActivityData: CreateActivity, eventId: string) {
  const response = await api.post(`/events/${eventId}/activities`, createActivityData)

  return response.data;
}

export async function getActivitiesByEventId(eventId: string): Promise<Activity[]> {
  const response = await api.get(`/events/${eventId}/activities`);

  return response.data;
}