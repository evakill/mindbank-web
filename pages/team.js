import Footer from '../components/Footer';
import Header from '../components/Header';
import Member from '../components/Member';
import colors from '../colors.js'
import styles from '../styles.js'
const { members, management, board } = require('../member.js');

const Team = () => (
  <div>
    <Header/>
    <div style={styles.page}>
      <div className="has-text-centered" style={{padding: "5%"}}>
        <p className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>OUR TEAM</p>
        <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}>
        Meet the creative, innovative, enterprising students that make up The Mindbank.
        </p>
      </div>
      <div style={styles.numberContainer}>
        <div style={{textAlign: "center"}}>
          <div style={styles.number}>19</div>
          <div style={styles.subNumber}>COURSES OF STUDY</div>
        </div>
        <div style={{textAlign: "center"}}>
          <div style={styles.number}>15</div>
          <div style={styles.subNumber}>AREAS OF THE WORLD</div>
        </div>
        <div style={{textAlign: "center"}}>
          <div style={styles.number}>52%</div>
          <div style={styles.subNumber}>MEMBER GROWTH PER YEAR</div>
        </div>
      </div>
      <b className="is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>MANAGEMENT</b>
      <div className="columns is-multiline is-mobile" style={{padding: "3% 0"}}>
        {management.map((member) => (
          <Member member={member} />
        ))}
      </div>
      <b className="is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>CONSULTANTS</b>
      <div className="columns is-multiline is-mobile" style={{padding: "3% 0"}}>
        {members.map((member) => (
          <Member member={member} />
        ))}
      </div>
      <b className="is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>BOARD OF DIRECTORS</b>
      <div style={{textAlign: "center", paddingTop: "5%"}}>
        {board.map((member) => (
          <div style={{padding: 5}}>
            <p className="is-size-6" style={styles.text}>
              {member.name}{member.role ? <em>, {member.role}</em> : ''}
            </p>
          </div>
        ))}
      </div>

    </div>
    <Footer/>
  </div>

);

export default Team;
