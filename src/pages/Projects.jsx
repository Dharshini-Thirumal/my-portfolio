import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Personal Portfolio",
      intro: "Yes… this website that you're looking at right here 👀",
      details:
        "Built to showcase my work, personality, and my slight obsession with making things look cute and clean. Hope you had fun exploring :) Feel free to leave some feedback on the contact page (or even just pop in to say hi!)",
      points: [
        "Smooth animations (because who doesn't like a little animation?)",
        "Nebula-inspired UI with soft glows and a cosmic feel (because I love space)",
        "Fully responsive (we respect mobile users here)",
      ],
      tech: ["React", "Vite", "CSS"],
      github: "https://github.com/Dharshini-Thirumal/my-portfolio",
    },
    {
      title: "Career Clone",
      intro:
        "Ever wanted to talk to me… without actually talking to me? 😌",
      details:
        "This AI chatbot is designed to mimic my professional profile, answering questions about my skills, experience, and projects. Built and tested locally using LLM integration.",
      points: [
        "Basically me, but 24/7 and slightly more patient",
        "Uses the Pushover API to record your email (if you’re interested), or if you try something it doesn’t recognize",
        "An experimental prototype built to learn and understand AI behaviour",
      ],
      tech: ["Python", "Ollama", "Pushover API"],
      github: "https://github.com/Dharshini-Thirumal/CareerClone",
    },
    {
      title: "Lost and Found Platform",
    intro:
      "Because losing things is a personality trait at this point 🙂",
    details:
      "A centralized platform designed to simplify the process of reporting, searching for, and recovering lost items, eliminating the chaos of group chats and scattered posts.",
    points: [
      "Makes your “I lost my stuff 😭” moments a little less stressful and more manageable",
      "Clean and simple interface designed so anyone can navigate it easily",
      "Built with real-world usefulness in mind, helping people actually find lost items quickly",
      ],
    tech: ["React", "Supabase", "Figma"],
    github: "https://github.com/Karen033/CPS731-Digital-Lost-and-Found-System",
    },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Projects <i class="laptop icon"></i></h1>
      <p>
        I like building things that are equal parts useful and fun. While I continue to build more, here are some of my favorites✨.
      </p>

      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <h2>{proj.title}</h2>

            <p><strong>{proj.intro}</strong></p>
            <p>{proj.details}</p>

            <ul className="project-points">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;