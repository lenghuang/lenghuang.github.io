import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Len Huang', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Len Huang is a computer science student at Carengie Mellon University', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is ',
  name: 'Len Huang',
  subtitle: 'and this is my story.',
  cta: ['Who', 'What', 'When', 'Where', 'Why'],
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I was born and raised in Holmdel, New Jersey. Having graduated from high school in 2019, I began moving past my days of athletics / advocacy and started looking to find my place in the world.',
  paragraphTwo:
    'The next summer, I found myself studying computer science at Carnegie Mellon University. Here, I would make life-long friendships, challenge myself academically like never before, and channel my creativity through projects.',
  paragraphThree:
    'This website is a testament to my personal story. Stay for a little bit... it gets better.',
  resume: 'https://www.linkedin.com/in/len-huang', // if no resume, the button will not show up
};
//Node.js, React, Redux, Gatsby, PyTorch, scikit-Learn, Pandas, Jupyter, Git, Jenkins

// WHAT I CAN DO DATA
export const whatData = [
  {
    id: nanoid(),
    title: 'Languages',
    content: ['Python', 'C', 'Java', 'SMLNJ', 'Javascript', 'Terraform', 'HTML/CSS'],
  },
  {
    id: nanoid(),
    title: 'Frameworks',
    content: ['React', 'Redux', 'Express', 'PyTorch', 'scikit-Learn', 'Jupyter', 'JenkinsCI'],
  },
  {
    id: nanoid(),
    title: 'Google Cloud',
    content: ['Storage', 'Run', 'Firestore', 'Authentication', 'Functions'],
  },
  {
    id: nanoid(),
    title: 'AWS',
    content: ['S3 Storage', 'DynamoDB', 'Lambda', 'ALB', 'Route 53'],
  },
];

// WHEN HAVE I DONE THIS DATA
export const whenData = [
  {
    id: nanoid(),
    company: 'Capital One Financial Corporation',
    position: 'Software Engineering Intern',
    time: 'Summer 2020',
    desc: 'Changed banking for Good',
  },
  {
    id: nanoid(),
    company: 'Carnegie Mellon',
    position: '15-150 Teaching Assistant',
    time: 'Summer, Fall Semesters 2020',
    desc:
      'Taught 15-150, Principles of Functional Programming, the third course in the core computer science curriculum.',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'banner.png',
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
    title: 'CMU Image Share',
    info:
      'Our academic advisor wanted to foster community during quaratine by having us email her photos everyday. To streamline this process, I created this web app that allows anyone to upload photos and have it update for everyone in realtime.',
    info2:
      'I challenged myself by learning React/Firebase and finishing this project within the span of four days in order to deploy this platform in a timely manner.',
    url: 'https://lenghuang.github.io/cmu-imageshare/',
    repo: 'https://github.com/lenghuang/cmu-imageshare', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};
