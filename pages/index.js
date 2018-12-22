import Link from 'next/link';
import posed from "react-pose";
const Konva = require('konva');
import { Stage, Layer, Rect, Text } from 'react-konva';
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
    <div className="hero is-primary is-medium" style={{backgroundImage: "url(/static/img/consulting.jpg)", backgroundColor: "#00396D", opacity: "90%"}}>
      <div className="hero-body">
          <div className="columns">
            <div className="column is-half has-text-center" style={{display: "flex", alignItems: "flex-end", paddingBottom: 50, justifyContent: "center"}}>
              <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <img src="/static/img/logoTransparentBlue.png" width="200" height="200" />
                <h1 className="title has-text-left" style={{fontSize: 80, alignSelf: "left"}}>
                  The MindBank
                </h1>
                <h2 className="subtitle is-size-4 has-text-gray has-text-left" style={{alignSelf: "flex-start"}}>
                  Consulting for campus environments.
                </h2>
              </div>
            </div>
            <div class="column is-half" style={{display: "flex", justifyContent: "flex-end", flexDirection:"column"}}>
              <div className="content">
                <p className="is-size-3">We are a <b >student consulting group</b> at the <b style={{color: "#DB504A"}}>University of Pennsylvania</b>. </p>
                <p class="is-size-3"> We work with <b >student-led startups</b>, <b>campus organizations</b>, and <b>established companies</b> focused on the <b style={{color: "#DB504A"}}>collegiate environment.</b> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
);


const InfoBox = () => (
  <div class="columns" style={{padding: "5rem"}}>
    <div class="column" style={{marginBottom: 0, border: "3px solid #DB504A", borderRadius: 15, padding: 30, display: "flex", flexDirection: "column"}}>
      <p class="is-size-1 title" style={{color: "#DB504A"}}>Who We Are</p>
      <p class="is-size-5 has-text-grey">
      The MindBank is a bright, diverse group of Penn students. We are young women and men studying
      liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different
      political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving
      and a desire to learn and engage.</p>
      <a class="button has-text-white is-rounded" style={{marginRight: 30, backgroundColor: "#b3b3b3", borderWidth: 0, alignSelf: "flex-end"}}>Meet the team</a>
    </div>
    <div class="column is-1">
    </div>
    <div class="column" style={{marginBottom: 0, border: "3px solid #DB504A", borderRadius: 15, padding: 30, display: "flex", flexDirection: "column"}}>
      <p class="is-size-1 title" style={{color: "#DB504A"}}>What We Do</p>
      <p class="is-size-5 has-text-grey">
      The MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative
      and iterative project cycle, we identify business needs and problems then use our expertise to propose original and informed
      advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions.
      </p>
      <a class="button has-text-white is-rounded" style={{marginRight: 30, backgroundColor: "#b3b3b3", borderWidth: 0, alignSelf: "flex-end"}}>See past projects</a>
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
        <div class="hero" style={{backgroundColor: "#00396d", padding: '5rem'}}>
          <div class="columns">
            <div class="column" style={{backgroundColor: "#fff", borderRadius: 10, margin: 10, padding: 30}}>
              <Square
                pose={this.state.hAbout ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hAbout: true })}
                onMouseLeave={() => this.setState({ hAbout: false })}>
                  <div class="has-text-centered" style={{paddingTop:25}}>
                    <span class="icon" style={{color: "#6688a7"}}>
                      <i class="fas fa-4x fa-users"></i>
                    </span>
                  </div>
                  <div class="content has-text-centered" style={{padding: 5}}>
                    <p class="title is-2">About Us</p>
                    <p class="subtitle is-4">Learn more.</p>
                    <p class="has-text-grey is-size-6"> Read about the history, mission and vision of The MindBank.</p>
                  </div>
              </Square>
            </div>
            <div class="column" style={{backgroundColor: "#fff", margin: 10, borderRadius: 10, padding: 30}}>
              <Square
                pose={this.state.hClient ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hClient: true })}
                onMouseLeave={() => this.setState({ hClient: false })}>
                  <div class="has-text-centered" style={{paddingTop:25}}>
                    <span class="icon" style={{color: "#6688a7"}}>
                      <i class="fas fa-4x fa-handshake"></i>
                    </span>
                  </div>
                  <div class="content has-text-centered">
                  <p class="title is-2">For Clients</p>
                  <p class="subtitle is-4">Collaborate with us.</p>
                  <p class="has-text-grey is-size-6"> We work with companies, businesses, and start-ups which target the campus environment.</p>
                  </div>
                </Square>
              </div>
              <div class="column" style={{backgroundColor: "#fff", margin: 10, borderRadius: 10, padding: 30}}>
                <Square
                  pose={this.state.hConsult ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ hConsult: true })}
                  onMouseLeave={() => this.setState({ hConsult: false })}>
                  <div class="has-text-centered" style={{paddingTop:25}}>
                    <span class="icon" style={{color: "#6688a7"}}>
                      <i class="fas fa-4x fa-user-tie"></i>
                    </span>
                  </div>
                  <div class="content has-text-centered">
                  <p class="title is-2">For Consultants</p>
                  <p class="subtitle is-4">Get involved. </p>
                  <p class="has-text-grey is-size-6"> We recruit bright, driven, and creative Penn students to join our group.</p>
                  </div>
                </Square>
              </div>
          </div>
        </div>
      );
    }
  }

// <div class="tile is-child notification has-text-white has-text-left" style={{backgroundColor: "#00396d", borderRadius: 4}}>
//   <p class="title is-size-2" style={{color: "#e5e5e5"}}>Our Value</p>
//   <p style={{color: "#e5e5e5"}}> We deliver value to our clients by leveraging our reach across Penn’s student communities and uncovering insights only available to campus insiders.</p>
// </div>
//
//   <div class="tile is-child notification has-text-white has-text-right" style={{backgroundColor: "#00396d", borderRadius: 4}}>
//     <p class="title is-size-2" style={{color: "#e5e5e5"}}>Experiential Learning</p>
//     <p style={{color: "#e5e5e5"}}> Students are best motivated when engaged with real-life challenges and love seeing the
//         impact of their work. So why not immerse them directly into situations with the potential
//         for real impact?
//         The MindBank was formed to give students the opportunity to practice teamwork and
//         develop their problem-solving skills. </p>
//   </div>
// <div class="column" style={{backgroundColor: "#fff", margin: 10, borderRadius: 10}}>
//   <Square
//     pose={this.state.hContact ? "hovered" : "idle"}
//     onMouseEnter={() => this.setState({ hContact: true })}
//     onMouseLeave={() => this.setState({ hContact: false })}>
//       <div class="has-text-centered" style={{paddingTop:25}}>
//         <span class="icon" style={{color: "#fff"}}>
//           <i class="fas fa-4x fa-envelope"></i>
//         </span>
//       </div>
//       <div class="content has-text-centered">
//         <p class="title is-size-2">Contact</p>
//         <p class="subtitle">Please reach out with any inquiries.</p>
//         <p class="subtitle"></p>
//       </div>
//   </Square>
// </div>


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
      <div class="hero" style={{padding: "5rem"}}>
          <p class="title is-size-1" style={{color: "#DB504A"}}>News</p>
          <p class="subtitle is-6"> Connect with us on FaceBook to follow our latest updates and content. </p>
          <div class="container" style={{display: "flex", flexDirection: "row", alignitems: "center", justifyContent: "center"}}>
            <FacebookProvider appId="1730719700366447">
              <Page href="https://www.facebook.com/pennmindbank/" tabs="timeline" width="1000"/>
            </FacebookProvider>
          </div>
        </div>);
  }
}
  //
  // <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
  //   <Button style={{color: "#DB504A", borderWidth: 0}} onClick={(e)=>this.setState({ index: this.state.index + 1 })}>
  //     <span class="icon is-small">
  //       <i class="fas fa-chevron-right"></i>
  //     </span>
  //   </Button>
  // </div>

class Contact extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
      <div class="hero" style={{padding: '4rem'}}>
        <p class="title is-1" style={{color: "#DB504A"}}>Contact Us</p>
        <p class="subtitle is-6"> We'd love to hear from you. Complete this form with any general questions, concerns, or feedback you have for us.
        We'll be sure to respond promptly. </p>
          <div class="container" style={{width: "80%", padding: 20}}>
            <div class="field">
              <label class="label has-text-left">Name</label>
              <div class="control">
                <input class="input" type="text"/>
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">Email</label>
              <div class="control">
                <input class="input" type="email"/>
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">Message</label>
              <div class="control">
                <textarea class="textarea"></textarea>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input type="checkbox"/>
                <label class="checkbox" style={{padding: 10}}>
                  Add me to the MindBank ListServ.
                </label>
              </div>
            </div>

            <div class="control">
              <button class="button ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default Index;
