import posed from "react-pose";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FacebookProvider, EmbeddedPost, Page } from 'react-facebook';
import { Button } from 'react-bootstrap'
import colors from '../colors.js'
import styles from '../styles.js'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.03 }
});

const Index = () => (
  <div>
    <Header />
      <div className="hero is-primary is-small" style={styles.banner}>
        <div className="hero-body is-flex" style={{flexDirection: "column"}}>
          <div className="is-flex" style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <img src="/static/img/fullLogo.png" width="80%" style={{alignSelf: "flex-end", padding: '0 3%', maxHeight: 450}}/>
            <div style={styles.redBar}></div>
          </div>
          <div className="is-flex" style={{flexDirection: "row", paddingTop: "3%"}}>
            <div style={styles.redBar}></div>
            <div className="content" style={{paddingLeft: '3%'}}>
              <p className="is-size-3-desktop is-size-4-tablet is-size-7-mobile" style={styles.bannerText}>
                We are a student consulting group at the <b style={{color: colors.r1}} >University of Pennsylvania</b>.
              </p>
              <p className="is-size-3-desktop is-size-4-tablet is-size-7-mobile" style={styles.bannerText}>
                We work with campus organizations, startups, and established companies focused on the <b style={{color: colors.r1}}>campus environment</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    <InfoCards />
    <Footer/>
  </div>
);

// Through targeted research projects and comprehensive surveying we have aggregated a base of data and foundation of understanding of
// our environment, which we use to make informed and original solutions.
// Students are best motivated when engaged with real-life challenges and love seeing the
// impact of their work. So why not immerse them directly into situations with the potential
// for real impact?



class InfoCards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hProjects: false,
      hTeam: false,
    }
  }

  render() {
    return(
      <section>
      <div style={{padding: "0 10%"}}>
        <div className="columns" style={{margin: "10% 0"}}>
          <div className="column is-9" style={styles.card}>
            <b className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.cardTitle}>
              WHO WE ARE
              <div style={styles.redBarHoriz}></div>
            </b>
            <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardText}>
              The Mindbank is a bright, diverse group of Penn students. We are young women and men studying
              liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different
              political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving
              and a desire to learn and engage.
            </p>
            <Square
              pose={this.state.hTeam ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hTeam: true })}
              onMouseLeave={() => this.setState({ hTeam: false })}>
                  <a href="/team" className="button is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardButton}>
                    <p>Meet the team</p>
                    <i className="fas fa-angle-double-right" style={{padding: "2px"}}></i>
                  </a>
              </Square>
            </div>
        </div>
        <div className="column is-3" style={{padding:0}}></div>
      </div>
      <div className="columns is-gapless is-mobile" style={{maxHeight: 400}}>
        <div className="column is-narrow is-flex" style={{backgroundColor: colors.g4, maxWidth: "50%", alignItems:"center"}}>
          <div style={{padding: "10%"}}>
            <p className="is-size-3-desktop is-size-4-tablet is-size-7-mobile" style={styles.accentText}>
              We believe in the power of impactful, experiential learning.
            </p>
          </div>
        </div>
        <div className="column">
          <img  src="/static/img/gabe.jpg" style={{maxHeight: 400}}/>
        </div>
      </div>
      <div style={{margin: "0 10%"}}>
        <div className="columns" style={{margin: "10% 0"}}>
          <div className="column is-3" style={{padding:0}}></div>
          <div className="column is-9" style={styles.card}>
            <b className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.cardTitle}>
              WHAT WE DO
              <div style={styles.redBarHoriz}></div>
            </b>
            <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardText}>
              The MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative
              and iterative project cycle, we identify business needs then use our expertise to propose original and informed
              advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions.
            </p>
            <Square
              pose={this.state.hProjects ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hProjects: true })}
              onMouseLeave={() => this.setState({ hProjects: false })}>
                <a href="/projects" className="button is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardButton}>
                  <b>See past projects</b>
                  <i className="fas fa-angle-double-right" style={{padding: "2px"}}></i>
                </a>
            </Square>
          </div>
        </div>
        </div>
        <div className="columns is-gapless is-mobile" style={{maxHeight: 400, marginBottom: "10%"}}>
          <div className="column">
            <img  src="/static/img/locust.png" style={{maxHeight: 400}}/>
          </div>
          <div className="column is-narrow is-flex" style={{backgroundColor: colors.g4, maxWidth: "50%", alignItems:"center"}}>
            <div style={{padding: "10%"}}>
              <p className="is-size-3-desktop is-size-4-tablet is-size-7-mobile" style={styles.accentText}>
                We deliver value to our clients by uncovering insights only available to campus insiders.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Index;
