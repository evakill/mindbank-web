import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../colors.js'
import styles from '../styles.js'
import Member from '../components/Member';
import Project from '../components/Project';
const members = require('../member.js').members;
const management = require('../member.js').management;


const About = () => (
  <div>
    <Header/>
      <div style={styles.page}>
        <div className="has-text-centered" style={{padding: "5%"}}>
          <p className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>ABOUT US</p>
          <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}>Read about the history, mission, and vision of MindBank.</p>
        </div>
        <br/>
        <b className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>MISSION</b>
        <div style={{padding: "5%"}}>
          <p className="is-size-2-fullhd is-size-3-desktop is-size-5-tablet is-size-6-mobile" style={styles.bannerText}>
            As a student run organization at the University of Pennsylvania, MindBank strives <b style={{color: colors.r1}}>to educate its members about the consulting industry</b> through the delivery of innovative, strategic solutions for businesses involved in the campus environment.
          </p>
        </div>
        <b className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>HISTORY</b>
        <div className="is-flex" style={{flexDirection: "row"}}>
          <div style={styles.redBar}></div>
          <div className="content" style={{paddingLeft: "3%"}}>
            <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-6-mobile" style={styles.text}>
            MindBank was formed by a group of Penn students looking for ways to broaden their academic experience and develop their real-world problem solving skills. They realized that a diverse and interdisciplinary group of students could provide unique value to startups, campus groups, and even established companies looking for advice on how to engage and compete in a collegiate environment. Our focus on the campus environment is the core of MindBank’s pitch and our niche in the consulting space.
            <br/><br/>
            Since it’s inception, MindBank has grown quickly. We have completed over 32 projects and now have a team of over 20 student consultants. Whether working with large corporations to generate new marketing strategies or teaming up with a campus based startup to improve their business model, MindBank is able to use its unique and diverse insight to help our clients obtain their intended results.
            </p>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
);

export default About;
