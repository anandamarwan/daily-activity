export type Activity = {
  id: number;
  title: string;
  description: string;
  date: Date;
  isMust: boolean;
};

export const activities: Activity[] = [
  {
    id: 1,
    title: "breakfast",
    description: "breakfast with bread",
    date: new Date(),
    isMust: true,
  },
  {
    id: 2,
    title: "take shower",
    description: "take shower in bathroom",
    date: new Date(),
    isMust: true,
  },
  {
    id: 3,
    title: "go study",
    description: "go study in bedroom",
    date: new Date(),
    isMust: false,
  },
];
