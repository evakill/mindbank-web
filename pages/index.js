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
    <Banner />
    <InfoBox />
    <News />
    <Footer/>
  </div>
);

const Banner = () => (
  <section>
    <div className="hero is-primary is-small" style={{backgroundColor: colors.g4, padding: "10% 10% 3% 10%"}}>
      <div className="hero-body is-flex" style={{flexDirection: "column"}}>
        <div className="is-flex" style={{flexDirection: "row", justifyContent: "flex-end"}}>
          <img src="/static/img/fullLogo.png" width="80%" style={{alignSelf: "flex-end", padding: '0 5%', maxHeight: 500}}/>
          <div style={styles.redBar}></div>
        </div>
        <div className="is-flex" style={{flexDirection: "row", paddingTop: "3%"}}>
          <div style={styles.redBar}></div>
          <div className="content" style={{paddingLeft: '3%'}}>
            <b className="is-size-4-desktop is-size-4-tablet is-size-6-mobile" style={{fontFamily: 'Open Sans', color: colors.g1}}>
            We are a student consulting group at the <b style={{color: colors.r1}} >University of Pennsylvania</b>. <br/>
            We work with campus organizations, startups, and established companies focused on the <b style={{color: colors.r1}}>campus environment.</b> </b>
          </div>
        </div>
      </div>
    </div>
  </section>
);


class InfoBox extends React.Component {
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
        <div className="columns" style={{padding: "10% 0 5% 10%"}}>
          <div className="column is-7" style={styles.card}>
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
                    <b>Meet the team</b>
                    <i className="fas fa-angle-double-right" style={{padding: "4px 4px"}}></i>
                  </a>
              </Square>
            </div>
          <div className="column is-5">
          </div>
        </div>
        <div className="columns" style={{padding: "5% 10% 5% 0"}}>
        <div className="column is-5"></div>
          <div className="column is-7" style={styles.card}>
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
                  <i className="fas fa-angle-double-right" style={{padding: "4px 4px"}}></i>
                </a>
              </Square>
          </div>
        </div>
      </section>
    );
  }
}


//We deliver value to our clients by leveraging our reach across Penn’s student communities and uncovering insights only available to campus insiders.</p>
//Students are best motivated when engaged with real-life challenges and love seeing the
//         impact of their work. So why not immerse them directly into situations with the potential
//         for real impact?
//         The MindBank was formed to give students the opportunity to practice teamwork and
//         develop their problem-solving skills.



class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding: "3%"}}>
        <div className="has-text-centered" style={{padding: 20}}>
          <b className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>NEWS</b>
          <p className="is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}>Follow us on Facebook for updates, events, and original content.</p>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F2043312005790391&width=350&show_text=true&appId=1730719700366447&height=372" width="350" height="372" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1625975954190667&width=350&show_text=true&appId=1730719700366447&height=490" width="350" height="490" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

          </div>

          <div className="column is-one-third">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F2036134663174792&width=350&show_text=true&appId=1730719700366447&height=670" width="350" height="670" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1970569109731348&width=350&show_text=true&appId=1730719700366447&height=471" width="350" height="471" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

          </div>
          <div className="column is-one-third">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1981189738669285&width=350&show_text=true&appId=1730719700366447&height=471" width="350" height="471" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1938400149614911&width=350&show_text=true&appId=1730719700366447&height=391" width="350" height="391" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

          </div>
        </div>
      </div>);

  }
}

export default Index;
