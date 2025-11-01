export const personal = {
  name: 'Revati Anirudha Ponkshe',
  title: 'Aspiring Software Developer',
  location: 'Pune, India',
  email: 'revati.ponkshe@gmail.com',
  phone: '+91 9405340780',
  github: 'https://github.com/revatip-20',
  linkedin: 'https://www.linkedin.com/in/revati-ponkshe-3889911b1/'
};

export const summary = `Aspiring software developer with strong foundations in programming, problem-solving, full-stack development, automation, data science, and deep learning. Skilled in multiple programming languages, databases, and frameworks with hands-on experience through academic and industrial projects.`;

export const skills = [
  'Python', 'FastAPI', 'PostgreSQL', 'Java', 'C++', 'JavaScript', 'React', 'Node.js', 'Machine Learning', 'Deep Learning', 'Git'
];

export const experience = [
  {
    company: 'Shakham Inc.',
    role: 'Backend Developer',
    range: 'June 2025 - Present',
    bullets: ['Working as a backend developer in Python, FastAPI, PostgreSQL.']
  }
];

export const education = [
  { degree: 'MCA', institute: "M.E Society's IMCC, Pune", year: '2023 - 2025', grade: '7.88' },
  { degree: 'BBA-CA', institute: 'ACBCS, Nashik', year: '2020 - 2023', grade: '9.20' }
];

export const projects = [
  // ---------------- SOFTWARE PROJECTS ----------------
  {
    title: 'File Packer & Unpacker with Encryption',
    desc: 'Built a file archiving utility with integrated encryption/decryption, metadata preservation, and Swing-based GUI for user-friendly interaction.',
    tech: ['Java', 'Encryption'],
    github: 'https://github.com/revatip-20/Packer_Unpacker.git'
  },
  {
    title: 'Chat Messenger with Log Facility',
    desc: 'Implemented a peer-to-peer chat system using Java sockets with real-time messaging and timestamped log maintenance.',
    tech: ['Java', 'Socket Programming'],
    github: 'https://github.com/revatip-20/Chat_messenger.git'
  },
  {
    title: 'Customized Virtual File System (CVFS)',
    desc: 'Simulated Linux-like file system operations with custom shell and implemented system calls like open, read, write, lseek, and delete.',
    tech: ['C Programming', 'OS Internals'],
    github: 'https://github.com/revatip-20/CVFS.git'
  },
  {
    title: 'Jarvis AI',
    desc: 'Voice assistant built using Python and Streamlit capable of performing multiple tasks with speech interaction.',
    tech: ['Python', 'Streamlit'],
    github: 'https://github.com/revatip-20/Jarvis_AI.git'
  },
  {
    title: 'Yoga AI',
    desc: 'Real-time detection and correction of yoga poses using Flask and OpenCV. Includes a dashboard to track user progress.',
    tech: ['Python', 'Flask', 'OpenCV'],
    github: 'https://github.com/revatip-20/Yoga_AI.git'
  },

  // ---------------- PYTHON AUTOMATION ----------------
  {
    title: 'System Process Logger with Scheduling',
    desc: 'Automated logging of running processes (PID, name, user, memory usage) with timestamped files and periodic execution via schedule library.',
    tech: ['Python', 'psutil', 'Schedule'],
    github: 'https://github.com/revatip-20/System_Process_Logger_with_scheduling.git'
  },

  // ---------------- MACHINE LEARNING ----------------
  {
    title: 'Machine Learning Case Studies',
    desc: 'Implemented multiple ML projects including Titanic Survival, Diabetes Detection, Breast Cancer Detection, Wine & Iris Classifiers, Advertisement Predictor, Movie Recommendation (K-means), and Sentiment Analysis Enhancement using ensemble models.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Pandas'],
    github: 'https://github.com/revatip-20/ML_case_studies.git'
  },

  // ---------------- DEEP LEARNING ----------------
  {
    title: 'Image Classification using CNN (MNIST Dataset)',
    desc: 'Built and trained CNN to classify handwritten digits with >98% accuracy. Implemented convolutional, pooling, dropout, and dense layers using TensorFlow & Keras.',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/revatip-20/Image_Classification_using_CNN.git'
  },

  // ---------------- GENERATIVE AI ----------------
  {
    title: 'FLAN-T5 Summarizer & Q&A Assistant',
    desc: 'Built CPU-friendly CLI app for text summarization and Q&A using google/flan-t5-small with prompt engineering, offline inference, and SentencePiece tokenization.',
    tech: ['Python', 'Hugging Face', 'PyTorch', 'FLAN-T5', 'SentencePiece'],
    github: 'https://github.com/revatip-20/FLAN-T5_Summarizer_QA_Assistant.git'
  }
];
