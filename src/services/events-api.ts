import { CreateEventProps } from "../types";
import { api } from "./api";

export async function postEvent(createEventData: CreateEventProps) {
  const response = await api.post("/events", { createEventData });

  return response.data;
}
