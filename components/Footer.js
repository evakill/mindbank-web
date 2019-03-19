import colors from '../colors.js'
import posed from "react-pose";
import styles from '../styles.js'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: false,
      h2: false,
      h3: false,
      h4: false,
      h5: false,
    }
  }

  render() {
    return(
      <section>
        <div className="hero is-small" style={{backgroundColor: colors.g4, marginTop: "5%"}}>
          <div className="hero-body">
            <div className="container has-text-centered" style={{padding: 10}}>
              <img width="15%" src="/static/img/full_logo.png" />
            </div>
            <div className="container is-size-6" style={{display:"flex", justifyContent:"center", fontFamily: "Open Sans", color: colors.g1, padding: 10}}>
            <Square
              pose={this.state.h1 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h1: true })}
              onMouseLeave={() => this.setState({ h1: false })}>
              <a href="/about" style={styles.item}>ABOUT</a>
             </Square>
             <Square
               pose={this.state.h2 ? "hovered" : "idle"}
               onMouseEnter={() => this.setState({ h2: true })}
               onMouseLeave={() => this.setState({ h2: false })}>
                <a href="/team" style={styles.item}>TEAM</a>
             </Square>
             <Square
               pose={this.state.h3 ? "hovered" : "idle"}
               onMouseEnter={() => this.setState({ h3: true })}
               onMouseLeave={() => this.setState({ h3: false })}>
              <a href="/projects" style={styles.item}>PROJECTS</a>
            </Square>
            <Square
              pose={this.state.h4 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h4: true })}
              onMouseLeave={() => this.setState({ h4: false })}>
              <a href="/news" style={styles.item}>NEWS</a>
           </Square>
            <Square
              pose={this.state.h5 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h5: true })}
              onMouseLeave={() => this.setState({ h5: false })}>
              <a href="/contact" style={styles.item}>CONTACT</a>
           </Square>
            </div>
            <div className="container" style={{display:"flex", justifyContent:"center"}}>
            <a href="https://www.facebook.com/pennmindbank/">
              <span className="icon" style={{color: colors.g1, margin: 10}}>
                <i className="fab fa-lg fa-facebook-square"></i>
              </span>
            </a>
            <a href="mailto:info@themindbank.net">
              <span className="icon" style={{color: colors.g1, margin: 10}}>
                <i className="fa fa-lg fa-envelope-square"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/company/the-mindbank/about/">
              <span className="icon" style={{color: colors.g1, margin: 10}}>
                <i className="fab fa-lg fa-linkedin"></i>
              </span>
            </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
