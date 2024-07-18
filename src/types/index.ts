export interface CreateEventProps {
  destination: string;
  starts_at: string;
  ends_at: string;
  emails_to_invite: string[];
  owner_name: string;
  owner_email: string;
}

export interface CreateEventResponse {
  eventId: string;
}

export interface Event {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export interface Guest {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}
