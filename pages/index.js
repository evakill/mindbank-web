import posed from "react-pose";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FacebookProvider, EmbeddedPost, Page } from 'react-facebook';
import colors from '../colors.js'
import styles from '../styles.js'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.03 }
});

const Index = () => (
  <div>
    <RecruitmentModal />
    <Header />
      <div className="hero is-fullheight is-flex" style={styles.banner}>
        <img src="/static/img/full_logo_subtitle.png" width="70%"/>
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

class RecruitmentModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  render() {
    return(
      <div class={this.state.open ? " modal is-active" : "modal"} style={{height: "100%", width: "100%"}}>
        <div class="modal-background"></div>
        <div class="modal-content" style={{width: "60%", padding: "5%", textAlign: "center"}}>
          <h1 class="is-size-2" style={styles.title}> MindBank is recruiting! </h1>
          <div style={styles.redBarHoriz}></div>
          <br/>
          <p style={styles.text}>
          To apply for a position, please complete <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfEot_2u0KhHSp2jyQmHTg1Zu7NB667rzyBq8TUFxARRBczFQ/viewform">this form</a>. Our recruitment process will include a resume review and two short coffee-chat style interviews. If you have any questions about  MindBank or our recruiting process, please feel free to send us a message on <a target="_blank" href="https://www.facebook.com/pennmindbank/">our Facebook</a>.
          <br/><br/>
  We look forward to receiving your application!

          </p>
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={(e)=>this.setState({open:false})}></button>
      </div>
    )
  }
}



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
          <div className="column is-12" style={styles.card}>
            <b className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.cardTitle}>
              WHO WE ARE
              <div style={styles.redBarHoriz}></div>
            </b>
            <p className="is-size-2-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardText}>
              MindBank is a bright, diverse group of Penn students. We are young women and men studying
              liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different
              political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving
              and a desire to learn and engage.
            </p>
            <Square
              pose={this.state.hTeam ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hTeam: true })}
              onMouseLeave={() => this.setState({ hTeam: false })}>
                  <a href="/team" className="button is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardButton}>
                    <p>Meet the team</p>
                    <i className="fas fa-angle-double-right" style={{padding: "2px"}}></i>
                  </a>
              </Square>
            </div>
        </div>
      </div>
      <div className="columns is-gapless is-mobile">
        <div className="column is-half is-flex" style={{backgroundColor: colors.g4, alignItems:"center"}}>
          <div style={{padding: "8%"}}>
            <p className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-6-mobile" style={styles.bannerText}>
              We promote <b style={{color: colors.r1}}>experiential learning</b> with <b style={{color: colors.r1}}>tangible impact.</b>
            </p>
          </div>
          <div style={styles.redBar}></div>
        </div>
        <div className="column is-half">
          <img width="100%" src="/static/img/gabe.jpg"/>
        </div>
      </div>
      <div style={{margin: "0 10%"}}>
        <div className="columns" style={{margin: "10% 0"}}>
          <div className="column is-12" style={styles.card}>
            <b className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.cardTitle}>
              WHAT WE DO
              <div style={styles.redBarHoriz}></div>
            </b>
            <p className="is-size-2-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardText}>
              MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative
              and iterative project cycle, we identify business needs then use our expertise to propose original and informed
              advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions.
            </p>
            <Square
              pose={this.state.hProjects ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hProjects: true })}
              onMouseLeave={() => this.setState({ hProjects: false })}>
                <a href="/projects" className="button is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardButton}>
                  <b>See past projects</b>
                  <i className="fas fa-angle-double-right" style={{padding: "2px"}}></i>
                </a>
            </Square>
          </div>
        </div>
        </div>
        <div className="columns is-gapless is-mobile">
          <div className="column is-half">
            <img  src="/static/img/locust.png" width="100%"/>
          </div>
          <div className="column is-half is-flex" style={{backgroundColor: colors.g4, alignItems:"center"}}>
            <div style={styles.redBar}></div>
            <div style={{padding: "8%"}}>
              <p className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-6-mobile" style={styles.bannerText}>
                We deliver value by <b style={{color: colors.r1}}>uncovering insights</b> only available to <b style={{color: colors.r1}}>campus insiders.</b>
              </p>
            </div>

          </div>
        </div>
      </section>
    );
  }
}


export default Index;
