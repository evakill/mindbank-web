import Footer from '../components/Footer';
import Header from '../components/Header';
import Project from '../components/Project';
import colors from '../colors.js'
import styles from '../styles.js'

const Projects = () => (
  <div>
    <Header/>
      <div style={styles.page}>
        <div className="has-text-centered" style={{padding:"5%"}}>
          <p className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>OUR PROJECTS</p>
          <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile"  style={styles.subtitle}>
            Learn about our past work: our clients, their problems, and our solutions.
          </p>
        </div>

        <div className="columns" style={{margin: "5% 0 10% 0"}}>
          <div className="column is-11">
            <Project
              src="/static/img/crimson.png"
              name="CRIMSON EDUCATION"
              tagline="Strategic advertising for targeted market entry."
              company="Crimson is an large, international consulting agency focused on guiding applicants to admission into elite schools and programs."
              date="Spring 2018"
              proposal="How should we pitch our product to successfully enter the New York City market?"
              results="We identified non-working mothers as target demographic for this product and developed a marketing strategy that leverages word-of-mouth effects."
              impact=""
            />
          </div>
          <div className="column is-1"></div>
        </div>

        <div className="columns" style={{margin: "10% 0"}}>
          <div className="column is-1"></div>
          <div className="column is-11">
            <Project
              src="/static/img/adventis.png"
              name="ADVENTIS"
              tagline="Integrating services into the Penn market."
              company="Adventis is a small business which provides financial modeling certification programs to students and professionals."
              date="Spring 2017"
              proposal="How can we more effectively penetrate the Penn market?"
              results="We created a marketing approach that leverages Penn's core classes and generated incentive systems to instantiate a brand ambassador program."
              impact=""
              />
          </div>
        </div>

        <div className="columns" style={{margin: "10% 0"}}>
          <div className="column is-11">
            <Project
              src="/static/img/kayvon2.png"
              name="KAYVON ENERPRISES"
              tagline="Orangizational management for sustained growth."
              company="Kayvon Enterprises is a student startup with multifaceted abmitions in the music, fashion, technology, and real estate industries."
              date="Fall 2018"
              proposal="How can we structure our company to make growth more controlled and stable?"
              results="We determined methods to retain staff without using a traditional salary approach and developed an organizational structure to better implement decision making processes."
              impact=""
            />
          </div>
        <div className="column is-1"></div>
      </div>

      </div>
    <Footer/>
  </div>
);

export default Projects;
