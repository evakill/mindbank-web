import posed from "react-pose";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FacebookProvider, EmbeddedPost, Page } from 'react-facebook';
import { Button } from 'react-bootstrap'
import colors from '../colors.js'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.03 }
});

const Index = () => (
  <div>
    <Header />
    <Banner />
    <InfoBox />
    <Footer/>
  </div>
);

const styles = {
  card: {
    boxShadow: `0px 0px 15px 7px ${colors.g3}`,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "5%",
  },
  redBar: {
    minHeight: "100%",
    minWidth: 8,
    maxWidth: 8,
    backgroundColor: colors.r1,
    color: colors.r1,
  },
  redBarHoriz: {
    minHeight: 10,
    minWidth: "100%",
    backgroundColor: colors.r1,
    color: colors.r1,
  },
  cardTitle: {
    color: colors.b1,
    fontFamily: "Open Sans",
    margin: 0
  },
  cardText: {
    color: colors.g1,
    fontFamily: "Lora",
    padding: 10
  },
  cardButton: {
    marginTop: 10,
    marginRight: 20,
    backgroundColor: "white",
    color: colors.r1,
    borderWidth: 0,
    float: "right",
    fontFamily: "Open Sans",
    textDecoration: "none",
  }

}

const Banner = () => (
  <section>
    <div className="hero is-primary is-small" style={{backgroundColor: colors.g4, padding: "10% 10% 3% 10%", backgroundImage: "url(/static/img/convoOutline2.png)"}}>
      <div className="hero-body is-flex" style={{flexDirection: "column"}}>
        <div className="is-flex" style={{flexDirection: "row", justifyContent: "flex-end"}}>
          <img src="/static/img/fullLogo.png" width="80%" style={{alignSelf: "flex-end", padding: '0 5%', maxHeight: 500}}/>
          <div style={styles.redBar}></div>
        </div>
        <div className="is-flex" style={{flexDirection: "row", paddingTop: "3%"}}>
          <div style={styles.redBar}></div>
          <div className="content" style={{paddingLeft: '5%'}}>
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
        <div className="columns" style={{padding: "10% 0 5% 10%", backgroundImage: "url(/static/img/peopleOutline.png)"}}>
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
                  <a href="/about" className="button is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardButton}>
                    <b>Meet the team</b>
                    <i className="fas fa-angle-double-right" style={{padding: "4px 4px"}}></i>
                  </a>
              </Square>
            </div>
          <div className="column is-5">
          </div>
        </div>
        <div className="columns" style={{padding: "5% 10% 10% 0", backgroundImage: "url(/static/img/handshakeOutline.png)"}}>
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
                <a href="/about" className="button is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.cardButton}>
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

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hAbout: false,
      hClient: false,
      hConsult: false,
      hContact: false,
    }
  }

  render() {
    return (
      <div className="hero" style={{padding: '5rem', backgroundColor: colors.g4}}>
        <div className="columns">
          <div className="column">
            <Square
              pose={this.state.hAbout ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hAbout: true })}
              onMouseLeave={() => this.setState({ hAbout: false })}>
              <div style={styles.card}>
                <a href="/about" style={{textDecoration: "none"}}>
                  <div className="is-flex has-text-centered" style={{flexDirection: "column", padding: 25, alignItems: "center"}}>
                    <span className="icon" style={{color: colors.b4, margin: 20}}>
                      <i className="fas fa-3x fa-users"></i>
                    </span>
                    <p className="title is-4" style={{color: colors.g1}}>About Us</p>
                    <p className="subtitle is-5" style={{color: "#686868"}}>Learn more.</p>
                    <p className="has-text-grey is-6" style={{color: colors.g1}}>  Read about our history, mission, and vision, meet our talented members, and learn about our past projects.</p>
                  </div>
                </a>
              </div>
            </Square>
          </div>
          <div className="column">
            <Square
              pose={this.state.hClient ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hClient: true })}
              onMouseLeave={() => this.setState({ hClient: false })}>
                <div style={styles.card}>
                  <a href="/clients" style={{textDecoration: "none"}}>
                    <div className="is-flex has-text-centered" style={{flexDirection: "column", padding: 25, alignItems: "center"}}>
                      <span className="icon" style={{color: colors.b4, margin: 20}}>
                        <i className="fas fa-3x fa-handshake"></i>
                      </span>
                      <b className="title is-4 is-5-desktop" style={{color: colors.g1}}>For Clients</b>
                      <p className="subtitle is-5" style={{color: "#686868"}}>Work with us.</p>
                      <p className="has-text-grey is-size-6" style={{color: colors.g1}}> We work with companies, businesses, and start-ups which target the campus environment.</p>
                    </div>
                  </a>
                </div>
              </Square>
            </div>
            <div className="column">
              <Square
                pose={this.state.hConsult ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hConsult: true })}
                onMouseLeave={() => this.setState({ hConsult: false })}>
                 <div style={styles.card}>
                  <a href="/consultants" style={{textDecoration: "none"}}>
                    <div className="is-flex has-text-centered" style={{flexDirection: "column", padding: 25, alignItems: "center"}}>
                      <span className="icon" style={{color: colors.b4, margin: 20}}>
                        <i className="fas fa-3x fa-user-tie"></i>
                      </span>
                      <b className="title is-4" style={{color: colors.g1}}>For Consultants</b>
                      <p className="subtitle is-5" style={{color: "#686868"}}>Get involved. </p>
                      <p className="has-text-grey is-size-6" style={{color: colors.g1}}> We recruit bright, driven, and creative Penn students to join our group.</p>
                    </div>
                  </a>
                </div>
              </Square>
            </div>
        </div>
      </div>
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
    this.state = {
      posts: ["https://www.facebook.com/pennmindbank/photos/a.1120616514726616/1938399516281641/?type=3&theater",
      "https://www.facebook.com/pennmindbank/photos/a.1120616514726616/2036130063175252/?type=3&theater",
              "https://www.facebook.com/pennmindbank/photos/a.1120616514726616/2043311475790444/?type=3&theater"],
      index: 1,
    }
  }

  render() {
    return (
      <div className="hero" style={{padding: "5rem 20rem"}}>
        <div style={styles.card}>
          <p className="title is-size-1" style={{color: colors.r1}}>News</p>
          <p className="subtitle is-6"> Connect with us on Facebook to follow our latest updates and content. </p>
          <div style={{alignSelf:"center"}}>
            <FacebookProvider appId="1730719700366447">
              <Page href="https://www.facebook.com/pennmindbank/" tabs="timeline" />
            </FacebookProvider>
          </div>
        </div>
      </div>);
  }
}

export default Index;
