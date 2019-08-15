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
          <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}>Read about the history, mission, and vision of The Mindbank.</p>
        </div>
        <br/>
        <b className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>MISSION</b>
        <div style={{padding: "5%"}}>
          <p className="is-size-2-fullhd is-size-3-desktop is-size-5-tablet is-size-6-mobile" style={styles.bannerText}>
            As a student run organization at the University of Pennsylvania, The MindBank strives <b style={{color: colors.r1}}>to educate its members about the consulting industry</b> through the delivery of innovative, strategic solutions for businesses involved in the campus environment.
          </p>
        </div>
        <b className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>HISTORY</b>
        <div className="is-flex" style={{flexDirection: "row"}}>
          <div style={styles.redBar}></div>
          <div className="content" style={{paddingLeft: "3%"}}>
            <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-6-mobile" style={styles.text}>
              The MindBank began as the result of the frustrations a student felt when working on a startup at the University of Pennsylvania.
              Whenever he asked for feedback or advice he received contradictory opinions, making decisions even
              more confusing. At its core, The MindBank’s founding goal was to provide a place where these contrasting opinions could be
              raised in dialogue together, in the hope this would result in a clearer path forward for many student startups and other
              organizations that seek advice.
              <br/><br/>
              Since it’s inception, The MindBank has grown quickly and found a particular niche in the heart of the college campus, where
              our team of students can provide the most value. Whether working with multinational corporations to generate an
              effective marketing strategy or teaming up with a campus based startup to improve organizational structure,
              The MindBank is able to use its unique and diverse insight to help our clients obtain their intended results.
            </p>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
);

export default About;
