type Token = {
  token: string
  expires_in: number
}

type UserProfile = {
  language: string
  nickname: string
  dob: string // ISO date string
  gender: string
  nationality: string
  profilePicture: string
}

type DoctorProfile = {
  specialisation: string
  address: string
  workingHours: string
  bio: string
  isListed: boolean
}

type Doctor = {
  role: string
  isEmailVerified: boolean
  userProfile: UserProfile
  doctorProfile: DoctorProfile
  name: string
  email: string
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
  id: string
}

type Appointment = {
  status: string
  user: string
  doctor: Doctor
  date: string // ISO date string
  startTime: string // HH:mm:ss
  endTime: string // HH:mm:ss
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
  id: string
  consultationType: string
}
