import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../colors.js'
import Member from '../components/Member';
import Project from '../components/Project';
const members = require('../member.js').members;
const management = require('../member.js').management;

const styles = {
  title: {
    color: colors.b1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: 0,
    padding: 0,
  },
  header: {
    color: colors.g2,
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0
  },
  flatText: {
    color: colors.g1,
    fontFamily: "Lora",
    fontSize: 20,
  },
  accentText: {
    backgroundColor: colors.g4,
    color: colors.b1,
    fontFamily: "Lora",
    textDecoration: "bold",
    padding: "5%",
    margin: "5% 0",
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

const About = () => (
  <div>
    <Header/>
      <div style={{margin: "5% 10%", paddingTop: 80}}>
        <div className="has-text-centered" style={{padding: "1%"}}>
          <b className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>ABOUT US</b>
          <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.flatText}>Read about the history, mission, and vision of The Mindbank.</p>
        </div>
        <b className="is-size-3-desktop is-size-4-tablet is-size-5-mobile" style={styles.header}>HISTORY</b>
        <div className="is-flex" style={{flexDirection: "row"}}>
          <div style={styles.redBar}></div>
          <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.flatText}>
            The MindBank is the result of the frustrations a student felt when working on a startup at the University of Pennsylvania.
            Whenever he asked for feedback or advice from industry leaders he received contradictory opinions, making decisions even
            more confusing. At its core, The MindBank’s founding goal was to provide a place where these contrasting opinions could be
            raised in dialogue together, in the hope this would result in a clearer path forward for many student startups and other
            organizations that seek advice.
          </p>
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
          <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.flatText}>
            Since it’s inception, The MindBank has grown quickly and found a particular niche in the heart of the college campus, where
            our team, which consists only of students, can provide the most value. Whether working with multinational corporations on
            strategies to better market to students, or teaming up with a campus based startup to help them better structure their
            organization, The MindBank is always able to use its unique and diverse insight to help our clients obtain their intended results.
          </p>
        </div>

        <div style={{padding: '10% 0'}}>
          <b className="is-size-3-desktop is-size-4-tablet is-size-5-mobile" style={styles.header}>MISSION</b>
          <div className="is-flex" style={{flexDirection: "row"}}>
            <div style={styles.redBar}></div>
            <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.flatText}>sexy mission statement</p>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
);

export default About;
