export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}


export const events: Event[] = [
  {
    title: "React Summit 2024",
    image: "/images/event1.png",
    slug: "react-summit-2024",
    location: "Amsterdam, Netherlands",
    date: "November 15-16, 2024",
    time: "9:00 AM - 6:00 PM CET",
  },
  {
    title: "Next.js Conf",
    image: "/images/event2.png",
    slug: "nextjs-conf-2024",
    location: "San Francisco, CA",
    date: "October 24, 2024",
    time: "10:00 AM - 5:00 PM PST",
  },
  {
    title: "GitHub Universe",
    image: "/images/event3.png",
    slug: "github-universe-2024",
    location: "San Francisco, CA",
    date: "October 29-30, 2024",
    time: "9:00 AM - 6:00 PM PST",
  },
  {
    title: "AWS re:Invent",
    image: "/images/event4.png",
    slug: "aws-reinvent-2024",
    location: "Las Vegas, NV",
    date: "December 2-6, 2024",
    time: "8:00 AM - 8:00 PM PST",
  },
  {
    title: "DevOps Days London",
    image: "/images/event5.png",
    slug: "devops-days-london-2024",
    location: "London, UK",
    date: "September 26-27, 2024",
    time: "9:00 AM - 5:00 PM BST",
  },
  {
    title: "KubeCon + CloudNativeCon",
    image: "/images/event6.png",
    slug: "kubecon-2024",
    location: "Salt Lake City, UT",
    date: "November 12-15, 2024",
    time: "9:00 AM - 6:00 PM MST",
  },
];
