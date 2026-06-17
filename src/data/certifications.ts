export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    issueDate: "Jul 29, 2024",
    credentialUrl: "https://badges.parchment.com/public/assertions/L3V-nTy9QxiiusEgt6yqJQ"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Infosys Springboard",
    issueDate: "Aug 2024",
    credentialUrl: "https://www.linkedin.com/in/ayushmay/overlay/Certifications/1161885639/treasury/?profileId=ACoAADt-DdwBVIc7drswVzqvLO15so3gZ1qlTQk",
    description: "AWS-DGL-SS-AWS Cloud Practitioner Essentials"
  },
  {
    title: "Java Course - Mastering the Fundamentals",
    issuer: "Scaler",
    issueDate: "Aug 8, 2024",
    credentialUrl: "https://moonshot.scaler.com/s/sl/C01LXTuwSP"
  }
];
