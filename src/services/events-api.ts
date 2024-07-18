import { CreateEventProps, CreateEventResponse, Event, Guest } from "../types";
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
