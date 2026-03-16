export const projects = [
  {
    id: 1,
    title: "Corporate Training Video Narration",
    description: "Need a professional voice for our employee onboarding video series. Should sound friendly yet authoritative.",
    language: "English (US)",
    wordCount: 850,
    budget: 425,
    deadline: "2026-03-20",
    licenseType: "Non-Broadcast",
    usage: "Internal",
    region: "National",
    duration: "12 months",
    status: "open",
    clientName: "TechCorp Inc"
  },
  {
    id: 2,
    title: "YouTube Product Review",
    description: "Upbeat and energetic voice needed for tech product review channel.",
    language: "English (UK)",
    wordCount: 450,
    budget: 315,
    deadline: "2026-03-18",
    licenseType: "Non-Broadcast",
    usage: "YouTube",
    region: "Worldwide",
    duration: "In perpetuity",
    status: "open",
    clientName: "TechReviews"
  },
  {
    id: 3,
    title: "Radio Commercial - Car Dealership",
    description: "High-energy voice for 30-second radio spot. Must convey excitement and urgency.",
    language: "English (US)",
    wordCount: 75,
    budget: 1200,
    deadline: "2026-03-15",
    licenseType: "Broadcast",
    usage: "Radio",
    region: "Local",
    duration: "3 months",
    status: "hired",
    clientName: "Metro Motors",
    artistName: "Sarah Johnson"
  },
  {
    id: 4,
    title: "E-Learning Course Narration",
    description: "Professional and clear voice for online course about digital marketing.",
    language: "English (US)",
    wordCount: 2500,
    budget: 1875,
    deadline: "2026-03-25",
    licenseType: "Non-Broadcast",
    usage: "Website",
    region: "Worldwide",
    duration: "In perpetuity",
    status: "open",
    clientName: "EduTech Academy"
  },
  {
    id: 5,
    title: "TV Commercial - Healthcare",
    description: "Warm and trustworthy voice for healthcare brand TV commercial.",
    language: "English (US)",
    wordCount: 100,
    budget: 3500,
    deadline: "2026-03-22",
    licenseType: "Broadcast",
    usage: "TV",
    region: "National",
    duration: "12 months",
    status: "in-progress",
    clientName: "HealthPlus",
    artistName: "Michael Chen"
  }
];

export const licenses = [
  {
    id: 1,
    projectId: 3,
    projectName: "Radio Commercial - Car Dealership",
    artistName: "Sarah Johnson",
    clientName: "Metro Motors",
    licenseType: "Broadcast",
    usage: "Radio",
    region: "Local",
    status: "Active",
    effectiveDate: "2026-03-01",
    expirationDate: "2026-06-01"
  },
  {
    id: 2,
    projectId: 5,
    projectName: "TV Commercial - Healthcare",
    artistName: "Michael Chen",
    clientName: "HealthPlus",
    licenseType: "Broadcast",
    usage: "TV",
    region: "National",
    status: "Active",
    effectiveDate: "2026-02-15",
    expirationDate: "2027-02-15"
  },
  {
    id: 3,
    projectId: 8,
    projectName: "Podcast Intro & Outro",
    artistName: "Emma Rodriguez",
    clientName: "Business Insights Podcast",
    licenseType: "Non-Broadcast",
    usage: "Website",
    region: "Worldwide",
    status: "Active",
    effectiveDate: "2026-01-10",
    expirationDate: "In perpetuity"
  }
];

export const voiceStyles = [
  "Friendly",
  "Energetic",
  "Corporate",
  "Cinematic",
  "Warm",
  "Professional",
  "Conversational",
  "Authoritative"
];

export const languages = [
  "English (US)",
  "English (UK)",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Japanese",
  "Mandarin"
];

export const usageTypes = [
  { value: "internal", label: "Internal", multiplier: 1 },
  { value: "website", label: "Website", multiplier: 1.2 },
  { value: "youtube", label: "YouTube", multiplier: 1.3 },
  { value: "paid-ads", label: "Paid Ads", multiplier: 2 },
  { value: "tv", label: "TV", multiplier: 3.5 },
  { value: "radio", label: "Radio", multiplier: 3 }
];

export const regions = [
  { value: "local", label: "Local", multiplier: 1 },
  { value: "national", label: "National", multiplier: 1.5 },
  { value: "worldwide", label: "Worldwide", multiplier: 2 }
];

export const durations = [
  { value: "3-months", label: "3 months", multiplier: 1 },
  { value: "12-months", label: "12 months", multiplier: 1.5 },
  { value: "perpetuity", label: "In perpetuity", multiplier: 2.5 }
];
