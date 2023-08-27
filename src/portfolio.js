const header = {
  // homepage: 'https://',
  // title: 'Satyadivya Maddipudi',
};

const about = {
  name: "Satyadivya Maddipudi",
  role: "Full Stack Developer",
  description:
    "Innovative software engineering intern at Amazon skilled in developing scalable web applications with AWS technologies, coupled with advanced studies in computer software engineering. Proficient in diverse languages, frameworks, and tools, committed to crafting user-centric solutions for real-world challenges. Seeking software development opportunities from December 2023 to contribute expertise and drive continuous growth.",
  resume:
    "https://drive.google.com/file/d/1A22lXxMJEJtr9oU6BBWqmzFSmklGV4iO/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/satyadivya-maddipudi/",
    github: "https://github.com/DivyaMaddipudi",
  },
};

const education = [
  {
    name: "San Jose State University",
    degree: "Master's Degree",
    branch: "Software Engineering",
    gpa: "3.8/4",
    courseWork:
      "Enterprise Distributed Systems, Design Patterns, Cloud and Virtualization Technologies, Software System Platforms, Internet of Thing, Data Mining",
  },
  {
    name: "Sathyabama Institute of Science and Technology",
    degree: "Bachelor's Degree",
    branch: "Computer Science and Engineering",
    gpa: "9.61/10",
    courseWork:
      "Data Structures and Algorithms, Operating Systems, Design and Analysis of Algorithms, Machine Learning, Compiler Design",
  },
];

const experience = [
  {
    companyName: "Amazon.com",
    role: "Software Development Engineer Intern",
    jobDescription:
      "Orchestrated a cutting-edge throttling solution, rerouting 90% of restricted requests to SQS for deferred handling, culminating in a 50% drop in sev-2 incidents and heightened system robustness.",
    jobDescription1:
      "Pioneered end-to-end alert systems for throttled queues, leveraging Infrastructure as Code (IaC) methods, elevating system visibility by 40% and ensuring early issue identification.",
    jobDescription2:
      "Elevated AWS AppConfig migration via IaC, amplifying configuration management by 50% and bolstering code performance monitoring by 25% via precise CPU usage assessment.",
  },
  {
    companyName: "eDiligence",
    role: "Software Development Engineer Intern",
    jobDescription:
      "Engineered and integrated innovative caching algorithms within React JS, driving a 20% reduction in page load durations, enhancing satisfaction for 1M+ daily users.",
    jobDescription1:
      "Leveraged ChartJS and Django to craft engaging dashboards, offering stakeholders a 40% clearer insight into lending club data, elevating comprehension of loan dynamics.",
  },
  {
    companyName: "HCL Technologies",
    role: "Software Engineer",
    jobDescription:
      "Engineered a top-tier banking app in Java, Spring Boot, Hibernate, and MySQL, driving a 20% rise in user adoption and trimming transaction processing time by 15%.",
    jobDescription1:
      "Collaborated across teams to elevate ING banking apps, rectifying 400 crucial issues, boosting reliability by 25%, and markedly enhancing customer contentment.",
    jobDescription2:
      "Implemented ironclad security protocols for the app, culminating in zero breaches or data leaks, ensuring utmost user data protection.",
  },
];

const projects = [
  {
    name: "StackOverflow Clone",
    description:
      "Engineered an interactive chat platform with modular components like posts and bookmarks, bolstering security by 50% through NGINX integration. Orchestrated a robust 3-tier application with message queues, adeptly scaling for 10,000 concurrent inquiries. Leveraged Kafka across 3 servers, elevating response speed by 40% under rigorous JMeter testing. Utilized Redis for prompt page responses, backed by a tech stack including React.js, Node.js, Redux, AWS RDS for databases, JUnit testing, and seamless AWS deployment.",
    stack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Apache Kafka",
      "Redux",
      "AWS",
      "Rest API",
      "Mocha",
      "Redis",
    ],
    sourceCode: "https://github.com/truptilokhande/CMPE273-Group12",
  },
  {
    name: "Simulation of Etsy",
    description:
      "Crafted a scalable prototype of an Etsy-like marketplace, designed for over 10,000 users and products. Orchestrated the AWS-hosted setup with MongoDB replica sets, ensuring fault tolerance during database partitioning, and implemented robust load balancing using AWS ELB. Engineered the backend with Express and Node.js, enhancing efficiency with Kafka messaging queues for request-response flow, and fortified authentication using Passport.js.",
    stack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Apache Kafka",
      "Redux",
      "AWS",
      "Rest API",
      "GraphQL",
      "Redis",
    ],
    sourceCode: "https://github.com/DivyaMaddipudi/Etsy_lab_2",
  },
  {
    name: "Twitter Sentiment Analysis",
    description:
      "Developed and executed a Twitter sentiment analysis project to gauge public sentiment towards various topics. Leveraged natural language processing techniques and machine learning models to analyze and categorize tweets as positive, negative, or neutral, providing valuable insights into online sentiment trends.",
    stack: ["Python", "NLTK", "Seaborn", "Tensorflow", "Keras", "CNN"],
    sourceCode:
      "https://github.com/DivyaMaddipudi/TwitterApp/blob/main/Bonus2.ipynb",
  },
  {
    name: "Toxic Comment Detection",
    description:
      "Executed a data-driven project involving dataset collection, preprocessing, visualization, and model development. Extracted data from Kaggle, transformed it into CSV format, and performed thorough preprocessing including null value analysis, feature extraction, and text processing. Visualized key metrics and compared models including LSTM, BERT, and Naive Bayes with traditional SVM, Logistic Regression, and KNN methods, highlighting a versatile skillset in data analysis and machine learning.",
    stack: [
      "Python",
      "Kaggle",
      "Pandas",
      "Numpy",
      "NLTK",
      "Matplotlib",
      "Seaborn",
      "LSTM",
      "BERT",
      "Naive Bayes",
      "SVM",
      "Logistic Regression",
      "KNN",
    ],
    sourceCode: "https://github.com/DivyaMaddipudi/255-Final",
  },
  {
    name: "Image classification Web Application",
    description:
      "Developed an end-to-end REST API service using Flask, integrating a TensorFlow model trained on CIFAR10 dataset for image classification. Leveraged React in the frontend for enhanced user experience. Successfully orchestrated model serving and user interface, showcasing seamless integration of machine learning and web technologies.",
    stack: [
      "OpenVINO",
      "TensorFlow",
      "Flask",
      "React",
      "Python",
      "TensorFlow Model Optimizer",
      "REST APIs",
    ],
    sourceCode:
      "https://github.com/DivyaMaddipudi/CMPE-255/tree/main/BonusWork",
  },
  {
    name: "Expense Tracker",
    description:
      "Designed and developed a feature-rich web application with a strong emphasis on backend engineering. Engineered a resilient backend architecture that seamlessly manages expense calculations, data storage, and tracking functionalities. Empowered users to effortlessly compute and monitor their monthly data, fostering a user-friendly experience while gaining valuable insights for well-informed decisions.",
    stack: ["Java", "SpringBoot", "Hibernate", "Servlets", "JSP"],
    sourceCode: "https://github.com/DivyaMaddipudi/ExpenseTracker",
  },
];

const skills = [
  "Apache Kafka",
  "AWS Services - EC2, S3, RDS, ECR, Cloudwatch, ASG, AppConfig, CodeDeploy, IAM, SQS, SNS",
  "C++",
  "Cloud Formation",
  "C Programming",
  "CSS",
  "Docker",
  "Express.js",
  "Git",
  "GraphQL",
  "Hibernate",
  "HTML",
  "Infrastructure as a Code",
  "Java",
  "JavaScript",
  "JIRA",
  "JMeter",
  "JUnit",
  "Mocha",
  "MongoDB",
  "MySQL",
  "Node.js",
  "Passport.js",
  "Python",
  "React.js",
  "Redis",
  "Redux",
  "Rest API",
  "SpringBoot",
];

const contact = {
  email: "satyadivya.maddipudi@sjsu.edu",
  phone: "+1 669-369-9841",
  address: "101 E San Fernando St, San Jose, CA",
};

export { header, about, education, experience, projects, skills, contact };
