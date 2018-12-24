import posed from "react-pose";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FacebookProvider, EmbeddedPost, Page } from 'react-facebook';
import { Button } from 'react-bootstrap'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

const Index = () => (
  <div>
    <Header />
    <Banner />
    <InfoBox />
    <Links />
    <News />
    <Footer/>
  </div>
);

const Banner = () => (
  <section>
    <div className="hero is-primary is-small" style={{backgroundImage: "url(/static/img/consulting.jpg)", backgroundColor: "#00396D", opacity: "90%", height: "35rem", padding: "1rem"}}>
      <div className="hero-body">
          <div className="columns">
            <div className="column is-half" style={{display: "flex", justifyContent: "center", flexDirection:"column"}}>
              <div style={{height:100}}></div>
              <img src="/static/img/fullLogo.png" width="90%" />
            </div>
            <div className="column is-half" style={{display: "flex", justifyContent: "center", flexDirection:"column"}}>
              <div style={{height:100}}></div>
              <div className="content">
                <p className="is-size-3">We are a <b >student consulting group</b> at the <b style={{color: "#DB504A"}}>University of Pennsylvania</b>. </p>
                <p className="is-size-3"> We work with <b >student-led startups</b>, <b>campus organizations</b>, and <b>established companies</b> focused on the <b style={{color: "#DB504A"}}>collegiate environment.</b> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
);


const InfoBox = () => (
  <div className="columns" style={{padding: "5rem"}}>
    <div className="column" style={{marginBottom: 0, border: "3px solid #DB504A", borderRadius: 15, padding: 30, display: "flex", flexDirection: "column"}}>
      <p className="is-size-1 title" style={{color: "#DB504A"}}>Who We Are</p>
      <p className="is-size-5" style={{color: "#434343"}}>
      The MindBank is a bright, diverse group of Penn students. We are young women and men studying
      liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different
      political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving
      and a desire to learn and engage.</p>
      <a className="button has-text-white is-rounded" style={{marginRight: 30, backgroundColor: "#b9b9b9", borderWidth: 0, alignSelf: "flex-end"}}>
        <b>Meet the team</b>
        <i className="fas fa-angle-double-right" style={{padding: "3px 4px"}}></i>
      </a>
    </div>
    <div className="column is-1">
    </div>
    <div className="column" style={{marginBottom: 0, border: "3px solid #DB504A", borderRadius: 15, padding: 30, display: "flex", flexDirection: "column"}}>
      <p className="is-size-1 title" style={{color: "#DB504A"}}>What We Do</p>
      <p className="is-size-5" style={{color: "#434343"}}>
      The MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative
      and iterative project cycle, we identify business needs and problems then use our expertise to propose original and informed
      advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions.
      </p>
      <a className="button has-text-white is-rounded" style={{marginRight: 30, backgroundColor: "#b9b9b9", borderWidth: 0, alignSelf: "flex-end"}}>
        <b>See past projects</b>
        <i className="fas fa-angle-double-right" style={{padding: "3px 4px"}}></i>
      </a>
    </div>
  </div>
);

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
      <div className="hero" style={{padding: '5rem', backgroundColor: "#e2e2e2"}}>
        <div className="columns">
          <div className="column" style={{backgroundColor: "#fff", borderRadius: 10, margin: 10, padding: 30, boxShadow: "5px 5px 1px grey"}}>
            <Square
              pose={this.state.hAbout ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hAbout: true })}
              onMouseLeave={() => this.setState({ hAbout: false })}>
                <div className="has-text-centered" style={{paddingTop:25}}>
                  <span className="icon" style={{color: "#6688a7"}}>
                    <i className="fas fa-4x fa-users"></i>
                  </span>
                </div>
                <div className="content has-text-centered" style={{padding: 5}}>
                  <p className="title is-2" style={{color: "#434343"}}>About Us</p>
                  <p className="subtitle is-4" style={{color: "#686868"}}>Learn more.</p>
                  <p className="has-text-grey is-size-6" style={{color: "#434343"}}> Read about the history, mission and vision of The MindBank.</p>
                </div>
            </Square>
          </div>
          <div className="column" style={{backgroundColor: "#fff", margin: 10, borderRadius: 10, padding: 30, boxShadow: "5px 5px 1px grey"}}>
            <Square
              pose={this.state.hClient ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hClient: true })}
              onMouseLeave={() => this.setState({ hClient: false })}>
                <div className="has-text-centered" style={{paddingTop:25}}>
                  <span className="icon" style={{color: "#6688a7"}}>
                    <i className="fas fa-4x fa-handshake"></i>
                  </span>
                </div>
                <div className="content has-text-centered">
                <p className="title is-2" style={{color: "#434343"}}>For Clients</p>
                <p className="subtitle is-4" style={{color: "#686868"}}>Work with us.</p>
                <p className="has-text-grey is-size-6" style={{color: "#434343"}}> We work with companies, businesses, and start-ups which target the campus environment.</p>
                </div>
              </Square>
            </div>
            <div className="column" style={{backgroundColor: "#fff", margin: 10, borderRadius: 10, padding: 30, boxShadow: "5px 5px 1px grey"}}>
              <Square
                pose={this.state.hConsult ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hConsult: true })}
                onMouseLeave={() => this.setState({ hConsult: false })}>
                <div className="has-text-centered" style={{paddingTop:25}}>
                  <span className="icon" style={{color: "#6688a7"}}>
                    <i className="fas fa-4x fa-user-tie"></i>
                  </span>
                </div>
                <div className="content has-text-centered">
                <p className="title is-2" style={{color: "#434343"}}>For Consultants</p>
                <p className="subtitle is-4" style={{color: "#686868"}}>Get involved. </p>
                <p className="has-text-grey is-size-6" style={{color: "#434343"}}> We recruit bright, driven, and creative Penn students to join our group.</p>
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
      <div className="hero" style={{padding: "5rem"}}>
          <p className="title is-size-1" style={{color: "#DB504A"}}>News</p>
          <p className="subtitle is-6"> Connect with us on FaceBook to follow our latest updates and content. </p>
          <div className="container" style={{display: "flex", flexDirection: "row", alignitems: "center", justifyContent: "center"}}>
            <FacebookProvider appId="1730719700366447">
              <Page href="https://www.facebook.com/pennmindbank/" tabs="timeline" width="1000"/>
            </FacebookProvider>
          </div>
        </div>);
  }
}

export default Index;
