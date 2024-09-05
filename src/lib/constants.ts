import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/Hodges5252',
  linkedin: 'https://www.linkedin.com/in/ethanhodges52/',
  mail: 'mailto:ethanhodges5252@gmail.com@gmail.com',
  game: 'https://salchworks.itch.io/in-the-shadow-of-stars'
}

// Global
export const SITE: Site = {
  TITLE: 'Ethan Hodges Portfolio',
  DESCRIPTION:
    'A portfolio for Ethan Hodges, his work and accomplishments.',
  AUTHOR: 'Ethan Hodges',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const EDUCATION = [
  {
    title: 'Software Engineering',
    institution: 'BYU-Idaho',
    link: 'https://www.byui.edu',
    date: '2019 - 2023',
  }
]

export const PORTFOLIO = [
  {
    name: 'AI-Integrated Control Panel Design Web App',
    languages: ['JavaScript ', 'PHP '],
    description: [
      "During my tenure as a team lead at the Research and Business Development Center, I spearheaded the advancement of a cutting-edge control panel design application tailored for electrical engineers, enriched with AI integration. \n\n",
      "I facilitated seamless collaboration with our client, ensuring alignment with project objectives and industry regulations. My responsibilities included onboarding and mentoring team members, crafting sophisticated code, and orchestrating smooth integration with existing frameworks, culminating in the resolution of any encountered issues."
    ],
    link: ''
  },
  {
    name: 'In the Shadow of Stars - 2D Roguelite Game Jam Project',
    languages: ['GDScript '],
    description: [
      "As lead developer, I spearheaded the creation of In the Shadow of Stars, a 2D roguelite developed in Godot during a two-week game jam. \n\n",
      "I managed all programming and narrative design, delivering a polished game that ranked in the top 20% of submissions and achieved top 10% in several categories. I plan to expand and publish the game on Steam."
    ],
    link: 'https://salchworks.itch.io/in-the-shadow-of-stars'
  },
  {
    name: 'AI Integrated Email Manager Web App',
    languages: ['JavaScript ', 'HTML ', 'CSS ', 'Python '],
    description: [
      "For my Senior Project, I conceptualized and developed a sophisticated web application leveraging Gmail API, OpenAI API, and a proprietary spam detection model. \n\n",
      "This platform streamlines email management by filtering spam, generating tone-appropriate responses, and facilitating draft saving or direct sending. Ongoing discussions for further enhancements include heightened email security and in-app email editing capabilities."
    ],
    link: 'https://youtu.be/r1XjWGyn83s'
  },
  {
    name: 'Game Development with Godot',
    languages: ['GDScript '],
    description: [
      "As an experienced game developer, I’ve created classic games like Pong, Jetpack Joyride, Flappy Bird, Space Invaders, and Asteroids using the Godot engine. \n\n",
      "My expertise includes UI/UX design, sprite animation, sound integration, and optimizing gameplay mechanics. I have participated in multiple Game Jams, enhancing my problem-solving abilities and adaptability."
    ],
    link: 'https://github.com/Hodges5252/PacMan'
  },
  {
    name: 'DisneyBot Ride Prediction Application',
    languages: ['Python ', 'SQL ', 'JavaScript '],
    description: [
      "I am creating a machine learning algorithm employing a neural network to forecast ride wait times at Disneyland and California Adventures, leveraging historical ride data, seasonal trends, and real-time weather conditions. \n\n",
      "I am meticulously structuring a vast database with ride wait times at five-minute intervals over the past year. Once data compilation is complete, I will train the neural network and develop a web-based application using React."
    ],
    link: ''
  },
];


export const EXPERIENCE = [
  {
    company: 'Research and Business Development Center',
    location: 'Rexburg, Idaho',
    position: 'Team Lead',
    start: 'Mar 2023',
    end: 'Jun 2023',
    tasks: [
      'Orchestrated and supervised a team of six interns in the development of a web application infused with AI functionalities. \n\n',
      'Spearheaded the project delivery, navigating steep learning curves and enhancing the codebase. \n\n',
      'Seamlessly integrated contributions to exceed client demands and ensure flawless functionality. ',
    ],
    link: 'https://rbdcenter.org'
  },
  {
    company: 'Pedersen Whitehead & Hanby',
    location: 'Twin Falls, Idaho',
    position: 'AI Integration Consultant',
    start: 'Apr 2024',
    end: 'Current',
    tasks: [
      'Specialized in streamlining legal workflows through AI integration using tools like Copilot and Microsoft 365. \n\n',
      'Provided tailored training to legal professionals for effective adoption of AI technologies. \n\n',
      'Optimized processes and enhanced productivity, improving client service. ',
    ],
    link: ''
  },
  {
    company: 'Meg Construction',
    location: 'Twin Falls, Idaho',
    position: 'Web Developer',
    start: 'May 2024',
    end: 'Current',
    tasks: [
      'Created and refined webpages tailored to client needs, enhancing Meg Construction’s digital presence. \n\n',
      'Engaged in extensive client interaction and outreach to third-party companies for asset integration. \n\n',
      'Delivered customized web solutions that are visually compelling and functionally robust. ',
    ],
    link: 'https://megcohomes.com'
  },
  {
    company: 'DataAnnotation',
    location: 'Remote',
    position: 'AI Model Trainer (Contract)',
    start: 'Jun 2024',
    end: 'Current',
    tasks: [
      'Trained AI models through meticulous data annotation across diverse subject areas. \n\n',
      'Interpreted complex requirements, ensuring accurate ranking of responses and high-quality annotations. \n\n',
      'Worked efficiently in a self-directed environment, adapting to varying project specifications. ',
    ],
    link: 'https://www.dataannotation.tech/?worker_source=G&utm_source=google&utm_medium=display&utm_campaign=20429741244&utm_adgroup=153001519820&utm_content=695853277331&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfBX8ZJcuzJQzPqoQcS2Neqcn1ItUGiSlDY2bXc5Uit92FYQWM3GZ2hoCoHIQAvD_BwE'
  },
  {
    company: 'Academic Support Center',
    location: 'Rexburg, Idaho',
    position: 'Call / Email Specialist',
    start: 'Nov 2021',
    end: 'Nov 2023',
    tasks: [
      'Managed daily interactions ranging from fifteen to thirty calls, catering to diverse queries. \n\n',
      'Surpassed email engagement targets by 300%. \n\n',
      'Provided expert assistance across various subjects, ensuring timely resolution and community satisfaction. ',
    ],
    link: 'https://www.byui.edu'
  },
]
