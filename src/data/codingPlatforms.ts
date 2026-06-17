export interface CodingPlatform {
  name: string;
  username: string;
  profileUrl: string;
  totalSolved: number;
  instituteRank?: string | number;
}

export const codingPlatforms: CodingPlatform[] = [
  {
    name: "LeetCode",
    username: "ayushsharma014may",
    profileUrl: "https://leetcode.com/u/ayushsharma014may/",
    totalSolved: 185
  },
  {
    name: "GeeksforGeeks",
    username: "ayushsharma014may",
    profileUrl: "https://www.geeksforgeeks.org/profile/ayushsharma014may",
    totalSolved: 144,
    instituteRank: 3
  }
];
