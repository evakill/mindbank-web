import Footer from '../components/Footer';
import Header from '../components/Header';
import Project from '../components/Project';
import colors from '../colors.js'

const styles = {
  card: {
    boxShadow: `0px 0px 15px 7px ${colors.g3}`,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "5%",
  },
  title: {
    color: colors.b1,
    fontFamily: "Montserrat",
    fontStyle: 600,
    margin: 0,
    padding: 0,
  },
  header: {
    color: colors.g1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: 0,
    padding: 0
  },
  flatText: {
    color: colors.g1,
    fontFamily: "Lora",
    fontSize: 20,
  },
  redBar: {
    minHeight: "100%",
    minWidth: 10,
    backgroundColor: colors.r1,
    color: colors.r1,
    margin: "0px 20px"
  },
  redBarHoriz: {
    minHeight: 3,
    minWidth: "100%",
    backgroundColor: colors.r1,
    color: colors.r1,
    margin: "0px 0px 10px 0px"
  },
}

const Projects = () => (
  <div>
    <Header/>
      <div style={{margin: "2rem 6rem", paddingTop: 80}}>
        <div className="has-text-centered" style={{padding: 20}}>
          <b className="is-size-1" style={styles.title}>OUR PROJECTS</b>
          <p className="is-size-5" style={styles.flatText}>
          Learn about our past work and clients.
          </p>
        </div>
            <div className="columns">
              <Project
                src="/static/img/crimson.png"
                name="Crimson Education"
                tagline="Strategic advertising for targeted market entry."
                company="Crimson is an large, international consulting agency focused on guiding applicants to admission into elite schools and programs."
                date="Spring 2018"
                proposal="How should we pitch our product to successfully enter the New York City market?"
                results="We identified non-working mothers as target person for this premium product and developed a marketing strategy that leverages word-of-mouth effects."
                impact=""
              />
              <Project
                src="/static/img/adventis.png"
                name="Adventis"
                tagline="Integrating services into the Penn market."
                company="Adventis is a small business which provides financial modeling certification programs to students and professionals."
                date="Spring 2017"
                proposal="How can we more effectively penetrate the Penn campus and sell to students?"
                results="We created a campus marketing approach, leveraging core classes, and generated incentive systems to develop a brand ambassador program."
                impact=""
              />
              <Project
                src="/static/img/kayvon2.png"
                name="Kayvon Enterprises"
                tagline="Orangizational management for sustained growth."
                company="Kayvon Enterprises is a student startup with multifaceted abmitions in the music, fashion, tech, and real estate industries."
                date="Fall 2018"
                proposal="How can we structure our group to make growth more controlled and stable?"
                results="We determined methods to retain staff without using a traditional salary approach, and developed an organizational structure to better implement decisions."
                impact=""
              />
            </div>
          </div>
    <Footer/>
  </div>
);

export default Projects;
