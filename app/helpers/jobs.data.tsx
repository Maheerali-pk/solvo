export interface IJobPosition {
  id: string;
  title: string;
  employmentType: string;
  workType: string;
  location: string;
  reqId: string;
  team: string;
  introduction: string;
  keyResponsibilities: string[];
  qualifications: string[];
  whyJoinUs: string[];
  readyToApply: string;
  link: string;
}

export const allJobPositions: IJobPosition[] = [
  {
    id: "cfd-engineer",
    title: "CFD Engineer",
    employmentType: "Full-Time",
    workType: "Onsite/Hybrid/Remote",
    location: "Islamabad",
    reqId: "CFD[78651]",
    team: "R&D / Product Development / Design Engineering",
    introduction:
      "We are looking for a highly skilled and motivated CFD Engineer to join our dynamic engineering team. If you're passionate about fluid dynamics, thrive in a problem solving environment and are meticulous about documentation, we want to hear from you!",
    keyResponsibilities: [
      "CAD Modeling: Prepare high quality, simulation ready CAD models based on design inputs.",
      "Meshing: Generate structured and unstructured meshes using best practices to ensure accurate results.",
      "CFD Simulations: Set up, execute and validate CFD simulations across various fluid flow and thermal problems.",
      "Post-Processing: Analyze and interpret results using visualization tools and extract actionable engineering insights.",
      "Documentation: Create clear, detailed reports of methodologies, assumptions, results, and recommendations for stakeholders.",
      "Collaboration: Work closely with design, product, and R&D teams to support product development and performance improvements.",
    ],
    qualifications: [
      "Bachelor's or Master's degree in Mechanical Engineering, Aerospace Engineering, or related field.",
      "2-3 Years of Proven experience with CFD tools such as ANSYS Fluent, STAR-CCM+, OpenFOAM, or similar.",
      "Proficiency in CAD software (SolidWorks, CATIA, or equivalent).",
      "Strong understanding of fluid mechanics, heat transfer, numerical methods, Multiphase and HVAC.",
      "Excellent written and verbal communication skills for clear technical documentation.",
      "A proactive attitude and ability to manage multiple projects and deadlines.",
    ],
    whyJoinUs: [
      "Work on cutting edge projects in a supportive, innovative environment.",
      "Collaborate with passionate professionals who value quality and creativity.",
      "Competitive salary and benefits package.",
      "Opportunities for career growth and skill development.",
    ],
    readyToApply:
      "Please fill the next form also attach the Resume with portfolio. Thanks!",
    link: "/careers/cfd-engineer",
  },
  {
    id: "fea-engineer",
    title: "FEA Engineer",
    employmentType: "Full-Time",
    workType: "Onsite/Hybrid/Remote",
    location: "Islamabad",
    reqId: "FEA[78652]",
    team: "R&D / Product Development / Design Engineering",
    introduction:
      "We are seeking a talented FEA Engineer to join our engineering team. If you have expertise in structural analysis and enjoy solving complex engineering challenges, we'd love to hear from you!",
    keyResponsibilities: [
      "Perform finite element analysis on various structural components and assemblies.",
      "Develop and validate simulation models for stress, vibration, and thermal analysis.",
      "Collaborate with design teams to optimize product performance and reliability.",
      "Prepare detailed technical reports documenting analysis methodologies and results.",
      "Support product development through simulation-driven design recommendations.",
    ],
    qualifications: [
      "Bachelor's or Master's degree in Mechanical Engineering or related field.",
      "2-3 years of experience with FEA software such as ANSYS, Abaqus, or similar.",
      "Strong understanding of structural mechanics and material properties.",
      "Experience with CAD software and model preparation for simulation.",
      "Excellent problem-solving and analytical skills.",
    ],
    whyJoinUs: [
      "Work on innovative projects with cutting-edge simulation tools.",
      "Collaborate with experienced engineers in a supportive environment.",
      "Competitive compensation and benefits.",
      "Continuous learning and professional development opportunities.",
    ],
    readyToApply:
      "Please fill the next form also attach the Resume with portfolio. Thanks!",
    link: "/careers/fea-engineer",
  },
  {
    id: "business-developer",
    title: "Business Developer",
    employmentType: "Full-Time",
    workType: "Onsite/Hybrid/Remote",
    location: "Islamabad",
    reqId: "BD[78653]",
    team: "Business Development / Sales",
    introduction:
      "We are looking for a strategic Business Developer to drive growth and expand our market presence. If you're passionate about building relationships and identifying new opportunities, join our team!",
    keyResponsibilities: [
      "Identify and pursue new business opportunities in target markets.",
      "Build and maintain relationships with potential clients and partners.",
      "Develop and execute sales strategies to achieve revenue targets.",
      "Prepare proposals and presentations for client meetings.",
      "Collaborate with technical teams to understand and communicate our service offerings.",
    ],
    qualifications: [
      "Bachelor's degree in Business, Engineering, or related field.",
      "2-3 years of experience in business development or sales.",
      "Strong communication and negotiation skills.",
      "Ability to understand technical concepts and communicate them effectively.",
      "Proven track record of meeting or exceeding sales targets.",
    ],
    whyJoinUs: [
      "Opportunity to work with innovative engineering solutions.",
      "Competitive commission structure and base salary.",
      "Supportive team environment with growth opportunities.",
      "Work with diverse clients across multiple industries.",
    ],
    readyToApply:
      "Please fill the next form also attach the Resume with portfolio. Thanks!",
    link: "/careers/business-developer",
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    employmentType: "Full-Time",
    workType: "Onsite/Hybrid/Remote",
    location: "Islamabad",
    reqId: "SMM[78654]",
    team: "Marketing / Communications",
    introduction:
      "We're seeking a creative Social Media Manager to lead our digital presence and engage with our audience. If you're passionate about storytelling and digital marketing, we want you on our team!",
    keyResponsibilities: [
      "Develop and execute social media strategies across multiple platforms.",
      "Create engaging content including posts, graphics, and videos.",
      "Manage social media accounts and respond to audience interactions.",
      "Analyze social media metrics and adjust strategies for optimal performance.",
      "Collaborate with marketing team to align social media with overall brand strategy.",
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field.",
      "2-3 years of experience managing social media for brands or organizations.",
      "Proficiency with social media management tools and analytics platforms.",
      "Strong creative and content creation skills.",
      "Excellent written and verbal communication skills.",
    ],
    whyJoinUs: [
      "Creative freedom to shape our digital brand presence.",
      "Work with a dynamic team in a fast-growing company.",
      "Competitive salary and benefits package.",
      "Opportunities to learn and grow in digital marketing.",
    ],
    readyToApply:
      "Please fill the next form also attach the Resume with portfolio. Thanks!",
    link: "/careers/social-media-manager",
  },
];
