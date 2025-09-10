export interface VideoAppointment {
  id: string
  streamChannelId?: string
  doctor?: {
    name?: string
    userProfile?: {
      profilePicture?: string
    }
  }
  status?: AppointmentStatus
  consultationType?: "video" | "chat" | "voice"
  date?: string
  time?: string
  startTime?: string
  endTime?: string
}

export enum AppointmentStatus {
  PENDING = "pending",
  COMPLETE = "complete",
  CANCELLED = "cancelled",
}
