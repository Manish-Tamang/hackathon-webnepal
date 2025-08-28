export interface LeaderboardUser {
  id: string;
  image: string;
  name: string;
  username: string;
  xp: number;
  rank: number;
  coursesCompleted: number;
  achievements: number;
  avatar?: string;
  streak: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  xpReward: number;
  earned: boolean;
  earnedDate?: Date;
}

export const mockLeaderboardUsers: LeaderboardUser[] = [
  {
    id: "1",
    image: "/img/11.jpg",
    name: "Imohang Rai",
    username: "admin",
    xp: 2850,
    rank: 1,
    coursesCompleted: 9,
    achievements: 20,
    streak: 15,
  },
  {
    id: "2",
    image:"/img/12.jpg",
    name: "Nux Gajurel",
    username: "sarahc",
    xp: 2640,
    rank: 2,
    coursesCompleted: 8,
    achievements: 18,
    streak: 12,
  },
  {
    id: "3",
    image:"/img/144.jpg",
    name: "Adimin Imo",
    username: "alexk",
    xp: 2520,
    rank: 3,
    coursesCompleted: 7,
    achievements: 15,
    streak: 8,
  },
  {
    id: "4",
    image:"/img/19.jpg",
    name: "Abhi Karki",
    username: "mayap",
    xp: 2380,
    rank: 4,
    coursesCompleted: 9,
    achievements: 20,
    streak: 10,
  },
  {
    id: "5",
    image:"/img/20.jpg",
    name: "David Wilson",
    username: "davidw",
    xp: 2240,
    rank: 5,
    coursesCompleted: 8,
    achievements: 18,
    streak: 6,
  },
  {
    id: "6",
    image:"/img/15.jpg",
    name: "Lisa Rodriguez",
    username: "lisar",
    xp: 2100,
    rank: 6,
    coursesCompleted: 8,
    achievements: 16,
    streak: 9,
  },
  {
    id: "7",
    image:"/img/14.jpg",
    name: "James Park",
    username: "jamesp",
    xp: 1980,
    rank: 7,
    coursesCompleted: 7,
    achievements: 15,
    streak: 5,
  },
  {
    id: "8",
    image:"/img/16.jpg",
    name: "Emma Thompson",
    username: "emmat",
    xp: 1850,
    rank: 8,
    coursesCompleted: 6,
    achievements: 14,
    streak: 7,
  },
  {
    id: "9",
    image:"/img/17.jpg",
    name: "Michael Brown",
    username: "michaelb",
    xp: 1720,
    rank: 9,
    coursesCompleted: 6,
    achievements: 12,
    streak: 4,
  },
  {
    id: "10",
    image:"/img/18.jpg",
    name: "Sophie Davis",
    username: "sophied",
    xp: 1590,
    rank: 10,
    coursesCompleted: 5,
    achievements: 11,
    streak: 3,
  },
];

export const achievements: Achievement[] = [
  {
    id: "first-steps",
    name: "First Steps",
    description: "Complete your first lesson",
    icon: "🎯",
    color: "bg-blue-100",
    xpReward: 50,
    earned: true,
    earnedDate: new Date("2024-01-15"),
  },
  {
    id: "html-master",
    name: "HTML Master",
    description: "Complete HTML Fundamentals course",
    icon: "🏆",
    color: "bg-orange-100",
    xpReward: 200,
    earned: true,
    earnedDate: new Date("2024-02-01"),
  },
  {
    id: "streak-master",
    name: "Streak Master",
    description: "Maintain a 7-day learning streak",
    icon: "🔥",
    color: "bg-red-100",
    xpReward: 150,
    earned: true,
    earnedDate: new Date("2024-02-10"),
  },
  {
    id: "code-ninja",
    name: "Code Ninja",
    description: "Complete 50 coding challenges",
    icon: "⚡",
    color: "bg-purple-100",
    xpReward: 300,
    earned: true,
    earnedDate: new Date("2024-02-20"),
  },
  {
    id: "quick-learner",
    name: "Quick Learner",
    description: "Complete a lesson in under 5 minutes",
    icon: "⚡",
    color: "bg-yellow-100",
    xpReward: 100,
    earned: false,
  },
  {
    id: "marathon-learner",
    name: "Marathon Learner",
    description: "Study for 2+ hours in a single session",
    icon: "🏃",
    color: "bg-green-100",
    xpReward: 250,
    earned: false,
  },
  {
    id: "social-butterfly",
    name: "Social Butterfly",
    description: "Help 10 other learners in the community",
    icon: "🦋",
    color: "bg-pink-100",
    xpReward: 200,
    earned: false,
  },
  {
    id: "perfectionist",
    name: "Perfectionist",
    description: "Complete 10 lessons with 100% accuracy",
    icon: "💎",
    color: "bg-cyan-100",
    xpReward: 400,
    earned: false,
  },
];

export function getUserRank(userId: string): number {
  const user = mockLeaderboardUsers.find((u) => u.id === userId);
  return user?.rank || 0;
}

export function calculateXPForNextLevel(currentXP: number): {
  currentLevel: number;
  xpForNext: number;
  progress: number;
} {
  const baseXP = 100;
  const multiplier = 1.5;

  let level = 1;
  let totalXPForLevel = baseXP;

  while (currentXP >= totalXPForLevel) {
    level++;
    totalXPForLevel += Math.floor(baseXP * Math.pow(multiplier, level - 1));
  }

  const xpForCurrentLevel =
    totalXPForLevel - Math.floor(baseXP * Math.pow(multiplier, level - 2));
  const xpInCurrentLevel =
    currentXP -
    (totalXPForLevel - Math.floor(baseXP * Math.pow(multiplier, level - 1)));
  const progress = (xpInCurrentLevel / xpForCurrentLevel) * 100;

  return {
    currentLevel: level - 1,
    xpForNext: xpForCurrentLevel - xpInCurrentLevel,
    progress: Math.max(0, progress),
  };
}
