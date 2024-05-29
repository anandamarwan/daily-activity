export type Activity = {
  id: number;
  title: string;
  category?: string;
  description: string;
  isRequired: boolean;
  timeStart?: Date;
  timeEnd?: Date;
};

export const dataActivities: Activity[] = [
  {
    id: 1,
    title: "Jogging",
    category: "#Sport 🏃‍♂️‍➡️",
    description: "Jogging arround 10-15 minutes",
    isRequired: false,
    timeStart: new Date("2024-05-23 05:00"),
    timeEnd: new Date("2024-05-23 06:00"),
  },
  {
    id: 2,
    title: "Breakfast",
    category: "#Food 🍲",
    description: "breakfast with yellow rice",
    isRequired: false,
    timeStart: new Date("2024-05-23 06:00"),
    timeEnd: new Date("2024-05-23 07:00"),
  },
  {
    id: 3,
    title: "Take Shower",
    description: "take shower in bathroom",
    isRequired: false,
    timeStart: new Date("2024-05-23 07:00"),
    timeEnd: new Date("2024-05-23 07:30"),
  },
  {
    id: 4,
    title: "Go Study",
    description: "go study in bedroom",
    isRequired: true,
    timeStart: new Date("2024-05-23 08:00"),
    timeEnd: new Date("2024-05-23 11:00"),
  },
  {
    id: 5,
    title: "Sholat Zuhur",
    category: "#Pray 🙏",
    description: "-",
    isRequired: true,
    timeStart: new Date("2024-05-23 11:45"),
    timeEnd: new Date("2024-05-23 12:00"),
  },
  {
    id: 6,
    title: "Lunch",
    category: "#Food 🍲",
    description: "lunch with Rendang from Padang Bahagia",
    isRequired: true,
    timeStart: new Date("2024-05-23 12:30"),
    timeEnd: new Date("2024-05-23 13:00"),
  },
  {
    id: 7,
    title: "Go Sleep",
    description: "learn video from Bearmentor",
    isRequired: true,
    timeStart: new Date("2024-05-23 13:00"),
    timeEnd: new Date("2024-05-23 15:00"),
  },
  {
    id: 8,
    title: "Sholat Ashar",
    category: "#Pray 🙏",
    description: "-",
    isRequired: true,
    timeStart: new Date("2024-05-23 15:15"),
    timeEnd: new Date("2024-05-23 15:30"),
  },
  {
    id: 9,
    title: "Sholat Maghrib",
    category: "#Pray 🙏",
    description: "-",
    isRequired: true,
    timeStart: new Date("2024-05-23 17:50"),
    timeEnd: new Date("2024-05-23 18:00"),
  },
  {
    id: 10,
    title: "Dinner",
    category: "#Food 🍲",
    description: "dinner with fried chicken from Dapur Rai Raka",
    isRequired: false,
    timeStart: new Date("2024-05-23 18:00"),
    timeEnd: new Date("2024-05-23 18:30"),
  },
  {
    id: 11,
    title: "Sholat Isya",
    category: "#Pray 🙏",
    description: "-",
    isRequired: true,
    timeStart: new Date("2024-05-23 19:15"),
    timeEnd: new Date("2024-05-23 19:30"),
  },
];
