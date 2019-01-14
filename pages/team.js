import Footer from '../components/Footer';
import Header from '../components/Header';
import Member from '../components/Member';
import colors from '../colors.js'
const members = require('../member.js').members;
const management = require('../member.js').management;

const styles = {
  title: {
    color: colors.b1,
    fontFamily: "Montserrat",
    fontStyle: 600,
    margin: 0,
    padding: 0,
  },
  header: {
    color: colors.g2,
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
    minHeight: 10,
    minWidth: "100%",
    backgroundColor: colors.r1,
    color: colors.r1,
    margin: "0px 0px 30px 0px"
  },
}
const Team = () => (
  <div>
    <Header/>
    <div style={{margin: "2rem 6rem", paddingTop: 80}}>
    <div className="has-text-centered" style={{padding: 20}}>
      <b className="is-size-1" style={styles.title}>OUR TEAM</b>
      <p className="is-size-5" style={styles.flatText}>
      Meet the creative, innovative, enterprising brains that make up The Mindbank.
      </p>
    </div>
    <br/>
      <b className="is-size-3" style={styles.header}>MANAGEMENT</b>
      <div style={styles.redBarHoriz}></div>
      <div className="columns is-multiline is-mobile">
        {management.map((member) => (
          <Member member={member} />
        ))}
      </div>
      <b className="is-size-3" style={styles.header}>CONSULTANTS</b>
      <div style={styles.redBarHoriz}></div>
      <div className="columns is-multiline is-mobile">
        {members.map((member) => (
          <Member member={member} />
        ))}
      </div>
    </div>
    <Footer/>
  </div>

);

export default Team;
