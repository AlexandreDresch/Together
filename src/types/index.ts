export interface CreateEventProps {
    destination: string;
    starts_at: string;
    ends_at: string;
    emails_to_invite: string[];
    owner_name: string;
    owner_email: string;
}