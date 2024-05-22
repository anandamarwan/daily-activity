interface Activity {
  id: number;
  title: string;
  description: string;
  date: Date;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "breakfast",
    description: "breakfast with bread",
    date: new Date(),
  },
  {
    id: 2,
    title: "take shower",
    description: "take shower in bathroom",
    date: new Date(),
  },
  {
    id: 3,
    title: "go study",
    description: "go study in bedroom",
    date: new Date(),
  },
];
