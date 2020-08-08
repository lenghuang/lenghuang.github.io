import { nanoid } from 'nanoid';
import preview from '../images/profile_wide.png';
import profile from '../images/profile.jpg';
import banner from '../images/banner.png';
import cmuimage from '../images/cmuimage.png';

// HEAD DATA
export const headData = {
  title: 'Len Huang', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Carnegie Mellon School of Computer Science. My personal who, what, when, where, and why.', // e.g: Welcome to my website
  preview,
};

// HERO DATA
export const heroData = {
  title: 'My name is ',
  name: 'Len Huang',
  subtitle: 'and this is my story.',
  cta: [
    { name: 'Who' },
    { name: 'What' },
    { name: 'When', offset: 82 },
    { name: 'Where', offset: 82 },
    { name: 'Why' },
  ],
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  img1: profile,
  paragraphOne:
    'I was born and raised in Holmdel, New Jersey. Having graduated from high school in 2019, I began moving past my days of athletics / advocacy and started looking to find my place in the world.',
  paragraphTwo:
    'The next summer, I found myself studying computer science at Carnegie Mellon University. Here, I would make life-long friendships, challenge myself academically like never before, and channel my creativity through projects.',
  paragraphThree:
    "This website is my personal story. I've told you who I am. Now let me tell you what I can do, when I've done these things, where I've done them, and finally why we should connect.",
  resume:
    'https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2FHuang_Len_Resume.pdf?alt=media&token=e31b9257-cdd6-49d1-b270-bb35d2318037', // if no resume, the button will not show up
};
// Node.js, React, Redux, Gatsby, PyTorch, scikit-Learn, Pandas, Jupyter, Git, Jenkins

// WHAT I CAN DO DATA
export const whatData = [
  {
    id: nanoid(),
    title: 'AWS',
    content: ['S3 Storage', 'DynamoDB', 'Lambda', 'ALB', 'Route 53'],
  },
  {
    id: nanoid(),
    title: 'GCP',
    content: ['Storage', 'Run', 'Firestore', 'Authentication', 'Functions'],
  },
  {
    id: nanoid(),
    title: 'Data Science',
    content: ['PyTorch', 'scikit-Learn', 'Pandas', 'Jupyter'],
  },
  {
    id: nanoid(),
    title: 'Frameworks',
    content: ['React', 'Redux', 'Express', 'JenkinsCI'],
  },
  {
    id: nanoid(),
    title: 'Languages',
    content: ['Python', 'C', 'Java', 'SMLNJ', 'Javascript', 'Terraform', 'HTML/CSS'],
  },
];

// WHEN HAVE I DONE THIS DATA
export const whenData = [
  {
    id: nanoid(),
    company: 'Capital One',
    emoji: '💸',
    position: 'Software Engineering Intern',
    time: 'Summer 2020',
    desc: '#ChangeBankingForGood',
    img: `https://www.ilmcorp.com/wp-content/uploads/2018/05/Capital-One-Logo-square.jpg`,
  },
  {
    id: nanoid(),
    company: 'Carnegie Mellon',
    emoji: '📚',
    position: '15-150 Teaching Assistant',
    time: 'Summer, Fall Semesters 2020',
    desc: '#FunctionsAreValues',
    img: 'https://avatars3.githubusercontent.com/u/53090894?s=280&v=4',
  },
  {
    id: nanoid(),
    company: 'Change Ethic LLC',
    emoji: '🥰',
    position: 'Change Management Intern',
    time: 'Summer 2019',
    desc: '#FailureResilience',
    img:
      'https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2FScreen%20Shot%202020-07-17%20at%2011.09.03%20PM.png?alt=media&token=4674fe0f-cdd5-4fce-96a1-f284c6870a5f',
  },
  {
    id: nanoid(),
    company: 'Snapology',
    emoji: '🐊',
    position: 'STEAM Assistant Teacher',
    time: 'Summer 2018 to Summer 2019',
    desc: '#EducationalPlay',
    img: 'https://hulafrog2.com/uploads/5ba3e8be5405d.png',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'banner.png',
    img1: banner,
    title: 'MLforALL: Machine Learning for ALL',
    info:
      'MLforALL guides you in learning about and experimenting with machine learning without coding experience. This is done by providing an accessible all-in-one platform for machine learning education.',
    info2:
      'Our tech stack includes a React-Redux front end, Google Cloud back end, and a Flask RestAPI that utilizes Sklearn and Pandas.',
    url: 'https://www.pralent.com/projects/1439dd81-55de-4b08-a58b-8a4555145890',
    repo: 'https://github.com/mlforall-app/mlforall', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cmuimage.png',
    img1: cmuimage,
    title: 'CMU Image Share',
    info:
      'Our academic advisor wanted to foster community during quaratine by having us email her photos everyday. To streamline this process, I created this web app that allows anyone to upload photos and have it update for everyone in realtime.',
    info2:
      'I challenged myself by learning React/Firebase and finishing this project within the span of four days in order to deploy this platform in a timely manner.',
    url: 'https://lenghuang.github.io/cmu-imageshare/',
    repo: 'https://github.com/lenghuang/cmu-imageshare', // if no repo, the button will not show up
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/len-huang',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lenghuang',
    },
    {
      id: nanoid(),
      name: 'files-o',
      url:
        'https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2FHuang_Len_Resume.pdf?alt=media&token=e31b9257-cdd6-49d1-b270-bb35d2318037',
    },
  ],
};
