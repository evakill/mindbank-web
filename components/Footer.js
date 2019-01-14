import colors from '../colors.js'
import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

const styles = {
  item: {
    textDecoration: "none",
    padding: 10,
    marginBottom: 10,
    color: colors.g1,
    fontFamily: "Open Sans"
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: false,
      h2: false,
      h3: false,
      h4: false,
    }
  }

  render() {
    return(
      <section>
        <div className="hero is-small" style={{backgroundColor: colors.g4}}>
          <div className="hero-body">
            <div className="container has-text-centered" style={{display: "flex", justifyContent: "center", alignItems: "bottom"}}>
              <b className="is-size-5" style={{color: colors.b1, fontFamily: "Montserrat"}}> The Mindbank </b>
            </div>
            <div className="container" style={{display:"flex", justifyContent:"center", fontFamily: "Open Sans", color: colors.g1}}>
            <Square
              pose={this.state.h1 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h1: true })}
              onMouseLeave={() => this.setState({ h1: false })}>
              <a href="/about" style={styles.item}>
                <b>ABOUT</b>
              </a>
             </Square>
             <Square
               pose={this.state.h2 ? "hovered" : "idle"}
               onMouseEnter={() => this.setState({ h2: true })}
               onMouseLeave={() => this.setState({ h2: false })}>
                <a href="/team" style={styles.item}>
                  <b>TEAM</b>
                </a>
             </Square>
             <Square
               pose={this.state.h3 ? "hovered" : "idle"}
               onMouseEnter={() => this.setState({ h3: true })}
               onMouseLeave={() => this.setState({ h3: false })}>
              <a href="/projects" style={styles.item}>
                <b>PROJECTS</b>
              </a>
            </Square>
            <Square
              pose={this.state.h4 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h4: true })}
              onMouseLeave={() => this.setState({ h4: false })}>
              <a href="/contact" style={styles.item}>
                <b>CONTACT</b>
              </a>
           </Square>
            </div>
            <div className="container" style={{display:"flex", justifyContent:"center"}}>
              <span className="icon" style={{color: colors.g1}}>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span className="icon" style={{color: colors.g1}}>
                <i className="fa fa-envelope-square"></i>
              </span>
              <span className="icon" style={{color: colors.g1}}>
                <i className="fab fa-linkedin"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
