import Footer from '../components/Footer';
import Header from '../components/Header';
import Member from '../components/Member';
import colors from '../colors.js'
import styles from '../styles.js'
const members = require('../member.js').members;
const management = require('../member.js').management;

const Team = () => (
  <div>
    <Header/>
    <div style={{margin: "2rem 6rem", paddingTop: 80}}>
    <div className="has-text-centered" style={{padding: 20}}>
      <b className="is-size-1" style={styles.title}>OUR TEAM</b>
      <p className="is-size-5" style={styles.subtitle}>
      Meet the creative, innovative, enterprising students that make up The Mindbank.
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
