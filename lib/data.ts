export interface Listing {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  gallery?: string[];
  type: string;
  gender: string;
  distance: string;
  food: boolean;
  wifi: boolean;
  water: boolean;
  attachedBathroom: boolean;
  safety: number;
  verified: boolean;
  available: boolean;
  furnished: boolean;
  badge: "verified" | "premium" | "discount" | null;
  amenities: string[];
  description?: string;
  host?: {
    name: string;
    responseRate: number;
    responseTime: string;
    avatar: string;
    verified: boolean;
  };
  aiMatch?: number;
}

export interface Review {
  name: string;
  college: string;
  rating: number;
  text: string;
  avatar: string;
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "Modern Studio Apartment near Pulchowk Campus",
    location: "Pulchowk, Lalitpur",
    price: 15000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    ],
    type: "Studio",
    gender: "Boys & Girls",
    distance: "0.5 km",
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 92,
    verified: true,
    available: true,
    furnished: true,
    badge: "verified",
    amenities: ["Food", "WiFi", "Water", "Attached Bathroom", "Furnished"],
    description:
      "A premium studio apartment designed for students who value privacy and convenience. Located within walking distance of Pulchowk Engineering Campus, this fully furnished unit includes meals, high-speed WiFi, and 24/7 water supply.",
    host: {
      name: "Ramesh Sharma",
      responseRate: 98,
      responseTime: "5 min",
      avatar: "RS",
      verified: true,
    },
    aiMatch: 96,
  },
  {
    id: 2,
    title: "Girls Hostel - Affordable & Safe - Near TU",
    location: "Kirtipur, Kathmandu",
    price: 8000,
    image: "https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg",
    gallery: [
      "https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg",
      "https://images.pexels.com/photos/6895695/pexels-photo-6895695.jpeg",
      "https://images.pexels.com/photos/7694985/pexels-photo-7694985.jpeg",
    ],
    type: "Hostel",
    gender: "Girls Only",
    distance: "1.2 km",
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: false,
    safety: 88,
    verified: true,
    available: true,
    furnished: false,
    badge: "verified",
    amenities: ["Food", "WiFi", "Water", "Laundry", "Study Room"],
    description:
      "A secure and budget-friendly girls' hostel near Tribhuvan University Kirtipur. Features home-cooked meals, dedicated study rooms, laundry facilities, and warden supervision.",
    host: {
      name: "Sita Adhikari",
      responseRate: 95,
      responseTime: "12 min",
      avatar: "SA",
      verified: true,
    },
    aiMatch: 91,
  },
  {
    id: 3,
    title: "Premium 1BHK Flat - New Baneshwor",
    location: "New Baneshwor, Kathmandu",
    price: 25000,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    ],
    type: "Flat",
    gender: "Family/Any",
    distance: "2.0 km",
    food: false,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 95,
    verified: true,
    available: false,
    furnished: true,
    badge: "premium",
    amenities: ["WiFi", "Water", "Attached Bathroom", "Furnished", "Parking"],
    description:
      "Spacious 1BHK flat in the heart of New Baneshwor, ideal for families or small groups. Comes with modern furnishings, reserved parking, and proximity to major transit hubs.",
    host: {
      name: "Bikash Gurung",
      responseRate: 92,
      responseTime: "20 min",
      avatar: "BG",
      verified: true,
    },
    aiMatch: 87,
  },
  {
    id: 4,
    title: "Budget Room - Shared Kitchen - Near KU",
    location: "Dhulikhel, Kavre",
    price: 5000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    ],
    type: "Room",
    gender: "Boys Only",
    distance: "0.3 km",
    food: false,
    wifi: false,
    water: true,
    attachedBathroom: false,
    safety: 75,
    verified: false,
    available: true,
    furnished: false,
    badge: "discount",
    amenities: ["Water", "Shared Kitchen", "Common Room"],
    description:
      "An affordable room perfect for Kathmandu University students on a tight budget. Shared kitchen and common room create a friendly community atmosphere.",
    host: {
      name: "Hari Prasad",
      responseRate: 85,
      responseTime: "1 hour",
      avatar: "HP",
      verified: false,
    },
    aiMatch: 72,
  },
  {
    id: 5,
    title: "Cozy Hostel - Walking Distance to PAS",
    location: "Chhauni, Kathmandu",
    price: 7000,
    image: "https://images.unsplash.com/photo-1555852105-64f1f5e8b2f1?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1555852105-64f1f5e8b2f1?w=800",
      "https://images.pexels.com/photos/6895695/pexels-photo-6895695.jpeg",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    ],
    type: "Hostel",
    gender: "Girls Only",
    distance: "0.8 km",
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 90,
    verified: true,
    available: true,
    furnished: true,
    badge: "verified",
    amenities: ["Food", "WiFi", "Water", "Attached Bathroom", "AC", "Study Room"],
    description:
      "A cozy, well-maintained girls' hostel within walking distance of the Police Academy School. Includes AC, nutritious meals, and a quiet study environment.",
    host: {
      name: "Maya Lama",
      responseRate: 97,
      responseTime: "8 min",
      avatar: "ML",
      verified: true,
    },
    aiMatch: 94,
  },
  {
    id: 6,
    title: "Fully Furnished Flat - Jawalakhel",
    location: "Jawalakhel, Lalitpur",
    price: 30000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg",
    ],
    type: "Flat",
    gender: "Family",
    distance: "1.5 km",
    food: false,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 96,
    verified: true,
    available: true,
    furnished: true,
    badge: "premium",
    amenities: ["WiFi", "Water", "Attached Bathroom", "Furnished", "Parking", "Generator"],
    description:
      "Elegant fully furnished flat in Jawalakhel with backup generator, reserved parking, and premium fittings. Ideal for families seeking a comfortable long-term stay.",
    host: {
      name: "Anita Joshi",
      responseRate: 94,
      responseTime: "15 min",
      avatar: "AJ",
      verified: true,
    },
    aiMatch: 89,
  },
  {
    id: 7,
    title: "Boys PG - Near Kantipur Engineering College",
    location: "Dhapakhel, Lalitpur",
    price: 6500,
    image: "https://images.pexels.com/photos/7694985/pexels-photo-7694985.jpeg",
    gallery: [
      "https://images.pexels.com/photos/7694985/pexels-photo-7694985.jpeg",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1555852105-64f1f5e8b2f1?w=800",
    ],
    type: "PG",
    gender: "Boys Only",
    distance: "0.4 km",
    food: true,
    wifi: true,
    water: true,
    attachedBathroom: false,
    safety: 82,
    verified: false,
    available: true,
    furnished: false,
    badge: null,
    amenities: ["Food", "WiFi", "Water", "Common Room"],
    description:
      "Convenient boys' PG near Kantipur Engineering College. Offers meals, WiFi, and a common room for studying and socializing.",
    host: {
      name: "Dinesh K.C.",
      responseRate: 88,
      responseTime: "30 min",
      avatar: "DK",
      verified: false,
    },
    aiMatch: 78,
  },
  {
    id: 8,
    title: "Luxury Apartment with Valley View",
    location: "Budhanilkantha, Kathmandu",
    price: 45000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    ],
    type: "Apartment",
    gender: "Family",
    distance: "5.0 km",
    food: false,
    wifi: true,
    water: true,
    attachedBathroom: true,
    safety: 98,
    verified: true,
    available: true,
    furnished: true,
    badge: "premium",
    amenities: ["WiFi", "Water", "Attached Bathroom", "Furnished", "Parking", "AC", "Gym"],
    description:
      "Luxury apartment with panoramic Kathmandu Valley views. Features a gym, AC, reserved parking, and premium furnishings for discerning residents.",
    host: {
      name: "Prakash Maharjan",
      responseRate: 99,
      responseTime: "3 min",
      avatar: "PM",
      verified: true,
    },
    aiMatch: 93,
  },
];

export const reviews: Review[] = [
  {
    name: "Anjali Sharma",
    college: "Pulchowk Engineering College",
    rating: 5,
    text: "Found my perfect hostel through RoomSathi. No broker fee, completely transparent process! The AI match was spot on.",
    avatar: "AS",
  },
  {
    name: "Rahul Thapa",
    college: "TU Kirtipur",
    rating: 5,
    text: "I was struggling to find a room in Kirtipur. RoomSathi made it so easy. The map feature helped me find places near my college.",
    avatar: "RT",
  },
  {
    name: "Priya Gurung",
    college: "Kathmandu University",
    rating: 4,
    text: "The digital rental agreement feature is a lifesaver. Everything was done online, no paperwork hassle. Highly recommend!",
    avatar: "PG",
  },
  {
    name: "Suman Adhikari",
    college: "St. Xavier's College",
    rating: 5,
    text: "Verified properties only means no scams. I moved into my room within 2 days of searching. The virtual tour saved me so much time.",
    avatar: "SA",
  },
  {
    name: "Nisha K.C.",
    college: "Padma Kanya College",
    rating: 5,
    text: "Safety was my biggest concern. RoomSathi's safety scores and verified badges helped me choose the perfect girls hostel.",
    avatar: "NK",
  },
  {
    name: "Bibek Lama",
    college: "Himalaya College",
    rating: 4,
    text: "Landlord dashboard is great for property owners too. I listed my flat and got tenants within a week. No middleman needed!",
    avatar: "BL",
  },
];

export const colleges = [
  "Any College",
  "Pulchowk Engineering Campus",
  "Tribhuvan University",
  "Kathmandu University",
  "St. Xavier's College",
  "Padma Kanya College",
  "Kantipur Engineering College",
  "Himalaya College",
];

export const locations = [
  "All Kathmandu Valley",
  "Kirtipur",
  "Pulchowk, Lalitpur",
  "New Baneshwor",
  "Jawalakhel",
  "Dhulikhel",
  "Budhanilkantha",
  "Chhauni",
  "Dhapakhel",
  "Baluwatar",
  "Kalimati",
];

export const propertyTypes = [
  "All Types",
  "Studio",
  "Hostel",
  "Flat",
  "Room",
  "PG",
  "Apartment",
];

export const genderOptions = [
  "Boys & Girls",
  "Boys Only",
  "Girls Only",
  "Family",
  "Any",
];

export const amenities = [
  "Food Included",
  "WiFi",
  "Water 24/7",
  "Attached Bathroom",
  "Furnished",
  "AC",
  "Parking",
  "Generator",
  "Study Room",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Rooms", href: "/search" },
  { label: "List Property", href: "/dashboard/landlord" },
  { label: "Dashboard", href: "/dashboard/student" },
];
