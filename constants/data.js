const Paris = 'Paris, France';

export const experiencesData = [
  {
    jobTitle: 'machineLearningEngineer',
    employer: 'Freelance',
    location: Paris,
    dates: 'timeFreelancing',
    status: 'freelance',
    time: 'partTime',
    description: 'descriptionFreelancing'
  },
  {
    jobTitle: 'modelingConsultant',
    employer: 'Willis Towers Watson',
    location: Paris,
    dates: 'timeWtw',
    status: 'cdi',
    time: 'fullTime',
    logo: 'wtw',
    description: 'descriptionWtw'
  },
  {
    jobTitle: 'modelingActuary',
    employer: 'CNP Assurances',
    location: Paris,
    dates: 'timeCnp',
    status: 'workStudyContract',
    time: 'partTime',
    logo: 'cnp',
    description: 'descriptionCnp'
  },
  {
    jobTitle: 'dataAnalyst',
    employer: 'Predica',
    location: Paris,
    dates: 'timePredica',
    status: 'internship',
    time: 'fullTime',
    logo: 'ca',
    description: 'descriptionPredica'
  },
];

const Montpellier = 'Montpellier, France';

export const studiesData = [
  {
    title: 'mleBootcamp',
    dates: '2021',
    location: Paris,
    logo: 'yotta',
    school: 'Yotta Academy'
  },
  {
    title: 'mastersActuarialScience',
    dates: '2012 - 2015',
    location: Paris,
    logo: 'isup',
    school: "Institut de Statistique de l'Université de Paris"
  },
  {
    title: 'cpge',
    dates: '2010 - 2012',
    location: Montpellier,
    logo: 'lamerci',
    school: 'Lycée Notre-Dame de la Merci'
  }
];

export const skillsData = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'NLP',
  'Python',
  'Bash',
  'SQL',
  'R',
  'C++',
  'VBA',
  'Git',
  'Microsoft Office',
  'Pandas',
  'Scikit-Learn',
  'XGBoost',
  'Spark',
  'Dask',
  'PyTorch',
  'TensorFlow',
  'CI/CD',
  'Docker',
  'Kubernetes',
  'AWS',
  'GCP',
  'Azure',
  'Terraform',
  'MLflow',
  'Airflow',
  'Weights & Biases',
  'FastApi',
  'Flask',
  'Django',
  'Streamlit',
];

export const languagesData = ['french', 'english'];

export const portfolioData = [
  {
    id: 'gzoo',
    year: '2023',
    title: 'gzoo',
    subtitle: 'personalProject',
    description: 'gzooDescription',
    stack: ['Python', 'PyTorch', 'Weights & Biases'],
    github: 'https://github.com/aliberts/galaxy-zoo',
    // youtubeId: '_hg3WvRdmUU',
    imageSrc: '/gzoobanner.jpeg',
    alt: 'Galaxy Zoo illustration',
    // link: 'https://wandb.ai/aliberts/galaxy-zoo?workspace=user-aliberts',
    wandb: 'https://wandb.ai/aliberts/galaxy-zoo?workspace=user-aliberts',
    cta: 'readMore'
  },
  {
    id: 'inews',
    year: '2023',
    title: 'inews',
    subtitle: 'personalProject',
    description: 'inewsDescription',
    stack: ['Python', 'ChatGPT'],
    github: 'https://github.com/aliberts/intergalactic-news',
    imageSrc: '/inewsbanner.jpeg',
    alt: 'Intergalactic News illustration',
    // link: 'https://wandb.ai/aliberts/galaxy-zoo?workspace=user-aliberts',
    // wandb: 'https://wandb.ai/aliberts/galaxy-zoo?workspace=user-aliberts',
    cta: 'readMore'
  }
];
