import { skills } from '../data/portfolio'

function Skills() {
  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        <h2>
          <span className="section-number">02.</span>
          Habilidades Técnicas
        </h2>
        <div className="skills-container">
          {skills.map((group) => (
            <div className="skill-category fade-in" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-icons">
                {group.items.map((skill) => (
                  <div className="skill-icon-item" key={skill.name}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
