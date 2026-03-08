import React from "react";

const Portfolio = () => {
  const experiences = [
    {
      role: "Human Resources Executive",
      company: "Pazino Infotech Private Limited",
      duration: "Apr 2025 - Present",
      type: "Full-time",
      skills: "Payroll, People Management"
    },
    {
      role: "Human Resources Executive",
      company: "Maijo Moto - Maruti Suzuki Arena",
      duration: "May 2024 - Apr 2025",
      type: "Full-time",
      skills: "People Management, HR Operations"
    },
    {
      role: "Human Resources Intern",
      company: "Eden Business School",
      duration: "Dec 2023 - May 2024",
      type: "Internship",
      skills: "Microsoft Excel, HR Solutions"
    },
    {
      role: "Human Resources Intern",
      company: "Apollo Hospitals Karnataka",
      duration: "Apr 2023 - May 2023",
      type: "Internship",
      skills: "Recruiting, People Management"
    }
  ];

  const skills = [
    "Human Resources",
    "Talent Acquisition",
    "People Management",
    "Payroll",
    "Employee Engagement",
    "HR Strategy",
    "Recruitment",
    "HR Operations"
  ];

  return (
    <div className="portfolio">

      {/* HERO */}
      <section className="hero">
        <h1>Jesvin Shaji</h1>
        <h3>HR Executive</h3>
        <p>Idukki, Kerala, India</p>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Retail HR Executive with 2+ years of experience helping organizations
          build strong and engaged teams. Skilled in talent acquisition,
          employee engagement, and HR strategy aligned with business goals.
        </p>

        <p>
          Passionate about building inclusive workplace cultures and improving
          employee experience through effective HR practices.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="experience">
        <h2>Experience</h2>

        {experiences.map((exp, index) => (
          <div className="card" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.duration} | {exp.type}</p>
            <p><strong>Skills:</strong> {exp.skills}</p>
          </div>
        ))}

      </section>

      {/* EDUCATION */}
      <section className="education">
        <h2>Education</h2>

        <div className="card">
          <h3>MBA - Marketing & HR</h3>
          <p>Santhigiri College</p>
          <p>2022 - 2024</p>
        </div>

        <div className="card">
          <h3>BBA - General</h3>
          <p>NSS College Rajakumari</p>
          <p>2019 - 2022</p>
        </div>

      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>

        <div className="skill-list">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Let’s connect to build strong teams and impactful HR strategies.</p>
      </section>

    </div>
  );
};

export default Portfolio;