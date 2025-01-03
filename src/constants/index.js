import project1 from "../assets/projects/prot1.png";
import project2 from "../assets/projects/proj2.png";
import project3 from "../assets/projects/proj5.png";
import project4 from "../assets/projects/proj4.png";

export const HERO_CONTENT = `I am a passionate Software Engineer | QA Engineer with a knack for crafting robust and scalable web applications while ensuring their quality through rigorous testing. With over a year of hands-on experience, I have honed my skills in front-end technologies like React, HTML, and Tailwind CSS, as well as back-end technologies like Node.js, MongoDB, and Express. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences, all while maintaining a strong focus on testing to ensure product excellence.`;

export const ABOUT_TEXT = `I am a passionate Software Engineer and QA Engineer currently in my final year of pursuing a Bachelor's degree in Software Engineering. With over a year of hands-on experience, I specialize in designing, developing, and testing robust, scalable web applications. Proficient in front-end technologies like React, HTML, and Tailwind CSS, as well as back-end frameworks such as Node.js, Express, and MongoDB, I focus on delivering innovative solutions that drive business growth and exceptional user experiences.`

export const ABOUT_TWO = `My expertise extends to test design, execution, and various testing methodologies, ensuring software quality and reliability. Seamlessly managing UAT and production releases, I have also taken on the role of Scrum Master, where I honed my leadership and project management skills. By facilitating agile processes, enhancing team collaboration, and driving continuous improvement, I consistently deliver high-quality software solutions that exceed project goals and stakeholder expectations.

With a strong foundation in both development and quality assurance, I am committed to balancing technical precision with strategic planning to create impactful and reliable software products.`;

export const EXPERIENCES = [
  {
    year: "MAR 2024 - Present",
    role: "Associate QA Engineer",
    company: "BISTEC Global",
    description: `As a Quality Assurance Engineer, I developed comprehensive test cases to validate software functionality and usability, ensuring coverage of diverse scenarios and edge cases. I actively participated in Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives, fostering seamless team collaboration. My role involved front-end and back-end testing, defect management, and performance assessments using tools like K6. I also implemented test automation frameworks, writing and executing automated test scripts to enhance efficiency and accuracy in regression testing. Additionally, I managed UAT and production releases, providing final QA sign-offs to certify software quality and readiness. Leveraging tools such as Azure DevOps, TestLink, Jira, Confluence, and VS Code, I streamlined QA processes and ensured the delivery of reliable software solutions.`,
    technologies: ["Azure Devops", "Selenium", "Postman","Jmeter","Playwright","K6","Cypress"],
  },
  {
    year: "OCT 2023 - FEB 2024",
    role: "QA Intern",
    company: "Virtusa",
    description: `I conducted thorough analyses of business requirements to design effective test strategies and ensure alignment with project objectives. My responsibilities included executing smoke, regression, and integration tests to validate business requirements, as well as tracking and reporting defects to maintain software quality. By adhering to Agile methodologies, I streamlined testing processes, improved team communication, and enhanced overall project efficiency, contributing to the successful delivery of high-quality software solutions.`,
    technologies: ["Azure Devops", "SalesForce", "PowerBi", "mySQL"],
  }
];

export const PROJECTS = [
  {
    title: "Food-Delivery-WebApp",
    image: project1,
    description:
      "The Food Delivery Web App allows users to browse menus, place orders, track deliveries, and make payments. It also includes an admin panel for managing restaurant listings, orders, and delivery status.",
    technologies: ["React", "TailwindCss", "Express", "Node.js", "MongoDB","Git"],
  },
  {
    title: "Notes Management App",
    image: project2,
    description:
      "A responsive and user-friendly app for organizing notes. Users can securely sign up or log in, create, edit, delete, and pin notes for quick access. Designed for seamless use across all devices.",
    technologies: ["TailwindCss", "Node.js", "React", "MongoDB", "Express","Git"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCss", "Framer Motion","Git"],
  },
  {
    title: "Appointment Booking Web-App",
    image: project4,
    description:
      "I developed a secure and user-friendly appointment booking web app that enables users to register, book, cancel appointments, and make payments. The admin portal includes a dashboard for managing doctor profiles and appointments.",
    technologies: ["React", "TailwindCss", "Express", "MongoDB","Node.js","Git"],
  },
];

export const CONTACT = {
  address: "Colombo, Sri Lanka ",
  phoneNo: "+94 76 272 2093 ",
  email: "adnaanjanees0@gmail.com",
};
