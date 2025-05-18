export type ProjectType = {
  title: string;
  imagePath: string;
  // If we have more than one description, we
  // diasplay each description in bullet form
  // else we display in full text
  description: string[];
  techStack: string[];

  appleLink: null | string;
  googleLink: null | string;
  gitHubLink: null | string;
  websiteLink: null | string;
};

const projectsData: ProjectType[] = [
  {
    title: "ChoirSync",
    imagePath: "./png/choir-sync.png",
    description: [
      "A React Native app that help choir members rehearse anytime, anywhere. Currently testing the app to evaluate itʼs effectiveness on choir's performance.",
    ],
    techStack: ["Reactnative", "Redux", "MongoDB", "youtube api"],
    appleLink: "https://apps.apple.com/us/app/choirsync/id6744724433",
    googleLink: null,
    gitHubLink: null,
    websiteLink: "https://choirsync.info",
  },
  {
    title: "AudioSound",
    imagePath: "./png/audio-sound.png",
    description: [
      "An IOS social media app for posting and sharing audio. Users can easily post and share captivating audio clips on an activity feed, creating a dynamic platform for expression and connection. They can also comment, like, and share posts.",
    ],
    techStack: ["Swift", "Firebase"],
    appleLink: null,
    googleLink: null,
    gitHubLink: "https://github.com/oliseonwu/AudioSound",
    websiteLink: null,
  },

  // Add more projects as needed
];

export default projectsData;
