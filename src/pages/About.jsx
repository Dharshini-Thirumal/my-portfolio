import { Card, Icon } from 'semantic-ui-react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title">About Me <i class="id card outline icon"></i></h1>
        <p className="about-description">
          I’m a Computer Science graduate who likes exploring new concepts, travelling to new places, picking up new ideas, and occasionally confusing myself with projects that turn into learning experiences.
        </p>

        <div className="cards-grid">
          <Card className="custom-card" raised>
            <Card.Content textAlign="center">
              <Icon name="graduation cap" size="big" className="card-icon" />
              <Card.Header className="card-header">Education</Card.Header>
              <Card.Meta className="card-meta">
                Toronto Metropolitan University
              </Card.Meta>
              <Card.Description className="card-description">
                Bachelors (Hons) in Computer Science (2025)
              </Card.Description>
            </Card.Content>
          </Card>

          <Card className="custom-card" raised>
            <Card.Content textAlign="center">
              <Icon name="trophy" size="big" className="card-icon" />
              <Card.Header className="card-header">Acheivements</Card.Header>
              <Card.Meta className="card-meta">
                1st Place Winner - Halt the Hack - Cybersecurity Hackathon (2023)
              </Card.Meta>
              <Card.Description className="card-description">
                Second Runner Up - Terrahacks (2024)
              </Card.Description>
            </Card.Content>
          </Card>

          <Card className="custom-card" raised>
            <Card.Content textAlign="center">
              <Icon name="code" size="big" className="card-icon" />
              <Card.Header className="card-header">Experience</Card.Header>
              <Card.Description className="card-description">
                Full-stack Developer at Phenogenomic Imaging Centre of Saskatchewan (May 2025)
              </Card.Description>
              <Card.Description className="card-description">
                Web Developer (Volunteer) at Biosphere Eco-cities Canada (July 2025)
              </Card.Description>
              <Card.Description className="card-description">
                Python Instructor at Vaaru Academy (August 2024).
              </Card.Description>
            </Card.Content>
          </Card>

          <Card className="custom-card" raised>
            <Card.Content textAlign="center">
              <Icon name="heart" size="big" className="card-icon" />
              <Card.Header className="card-header">Hobbies</Card.Header>
              <Card.Description className="card-description">
                Reading a good crime thriller/murder mystery, Crocheting, Baking, Playing badminton, Going on long walks, Journaling (Highly recommended)
              </Card.Description>
              <Card.Description className="card-description">
                I also enjoy working with kids!
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;