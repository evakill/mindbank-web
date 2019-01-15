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
      <div style={{margin: "2rem 6rem", paddingTop: 80}}>
        <div className="has-text-centered" style={{padding: 20}}>
          <b className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>ABOUT US</b>
          <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}>Read about the history, mission, and vision of The Mindbank.</p>
        </div>
        <br/>
        <b className="is-size-3-desktop is-size-4-tablet is-size-5-mobile" style={styles.header}>HISTORY</b>
        <div className="is-flex" style={{flexDirection: "row"}}>
          <div style={styles.redBar}></div>
          <div className="content" style={{paddingLeft: "3%"}}>
            <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.text}>
              The MindBank is the result of the frustrations a student felt when working on a startup at the University of Pennsylvania.
              Whenever he asked for feedback or advice from industry leaders he received contradictory opinions, making decisions even
              more confusing. At its core, The MindBank’s founding goal was to provide a place where these contrasting opinions could be
              raised in dialogue together, in the hope this would result in a clearer path forward for many student startups and other
              organizations that seek advice.
            </p>
          </div>
        </div>
      </div>

      <div className="is-size-4-desktop is-size-5-tablet is-size-6-mobile" style={styles.accentText}>
        <p>
          To this day, that starting principle remains steadfast. The MindBank does not have one culture, worldview, or opinion - it
          has countless. Every problem is assessed from a multitude of perspectives and insights from our team that can only arise
          when people disagree and challenge each other, ultimately forming a clearer path forward.
        </p>
      </div>

      <div style={{margin: "0 10%"}}>
        <div className="is-flex" style={{flexDirection: "row"}}>
          <div style={styles.redBar}></div>
          <div className="content" style={{paddingLeft: "3%"}}>
            <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.text}>
              Since it’s inception, The MindBank has grown quickly and found a particular niche in the heart of the college campus, where
              our team, which consists only of students, can provide the most value. Whether working with multinational corporations on
              strategies to better market to students, or teaming up with a campus based startup to help them better structure their
              organization, The MindBank is always able to use its unique and diverse insight to help our clients obtain their intended results.
            </p>
          </div>
        </div>

        <div style={{padding: '10% 0'}}>
          <b className="is-size-3-desktop is-size-4-tablet is-size-5-mobile" style={styles.header}>MISSION</b>
          <div className="is-flex" style={{flexDirection: "row"}}>
            <div style={styles.redBar}></div>
            <div className="content" style={{paddingLeft: "3%"}}>
              <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.text}>
              sexy mission statement
              </p>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
);

export default About;
