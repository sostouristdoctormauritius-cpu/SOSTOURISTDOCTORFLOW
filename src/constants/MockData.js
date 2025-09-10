export const DOCTORS = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "10 years",
    fee: 200,
    image: require('../assets/images/profile.png'), // Placeholder
  },
  {
    id: 2,
    name: "Dr. Emily Johnson",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "8 years",
    fee: 150,
    image: require('../assets/images/profile.png'), // Placeholder
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialty: "Dermatologist",
    rating: 4.7,
    experience: "12 years",
    fee: 180,
    image: require('../assets/images/profile.png'), // Placeholder
  },
];

export const MOCK_APPOINTMENTS = [
  {
    id: '1',
    doctor: 'Dr. John Smith',
    date: '2023-06-15',
    time: '10:30 AM',
    status: 'Confirmed',
  },
  {
    id: '2',
    doctor: 'Dr. Emily Johnson',
    date: '2023-06-20',
    time: '2:15 PM',
    status: 'Completed',
  },
];

export const MOCK_SYMPTOMS = [
  { id: '1', name: 'Fever' },
  { id: '2', name: 'Headache' },
  { id: '3', name: 'Cough' },
  { id: '4', name: 'Stomach Pain' },
  { id: '5', name: 'Allergies' },
];

export const MOCK_OFFERS = [
  {
    id: '1',
    title: '20% Off on General Consultation',
    description: 'Get 20% discount on your next general consultation',
    expiry: '2023-07-31',
  },
  {
    id: '2',
    title: 'Free Follow-up Within 7 Days',
    description: 'Get a free follow-up consultation within 7 days of your appointment',
    expiry: '2023-06-30',
  },
];