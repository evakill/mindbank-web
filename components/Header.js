import posed from "react-pose";
import colors from '../colors.js';
import styles from '../styles.js';

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

const CSS = () => (
  <section>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css?family=Lora|Montserrat|Open+Sans:400,600,800|Lato|Song+Myung|Raleway|Playfair+Display" rel="stylesheet"/>
    </head>
  </section>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: false,
      h2: false,
      h3: false,
      h4: false,
      h5: false,
      h6: false,
      h7: false,
      isActive: false,
    }
  }

  toggleNav = () => {
    console.log(!this.state.isActive);
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return(
    <div>
      <CSS/>
      <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation" style={{backgroundColor: colors.b1, height: "5rem", borderRadius: 0, boxShadow: `0px 0px 7px 3px ${colors.g2}`}}>
       <div className="navbar-brand">
         <a href="/" style={{padding: 4}}>
           <Square
             pose={this.state.h1 ? "hovered" : "idle"}
             onMouseEnter={() => this.setState({ h1: true })}
             onMouseLeave={() => this.setState({ h1: false })}>
             <img
               src="/static/img/icon_white.png"
               alt="The MindBank"
               width="40"
               height="40"
               />
             </Square>
          </a>

       </div>
       <div className="navbar-burger is-info" onClick={this.toggleNav} style={{color: "white", float:"right", padding: 10, marginTop:10, alignSelf: "center"}}>
         <span></span>
         <span></span>
         <span></span>
       </div>
       {this.state.isActive ? (
           <div className='navbar-menu is-active' style={styles.dropdownContainer}>
                <div className="navbar-end" style={styles.dropdown}>
                    <a href="/about" style={styles.dropdownItem}>ABOUT</a>
                    <a href="/team" style={styles.dropdownItem}>TEAM</a>
                    <a href="/projects" style={styles.dropdownItem}>PROJECTS</a>
                    <a href="/research" style={styles.dropdownItem}>RESEARCH</a>
                    <a href="/news" style={styles.dropdownItem}>NEWS</a>
                    <a href="/contact" style={styles.dropdownItem}>CONTACT</a>
                </div>
            </div>
       ) : (
           <div className='navbar-menu'>
              <div className="navbar-end" style={styles.bar}>
                <Square
                  pose={this.state.h2 ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ h2: true })}
                  onMouseLeave={() => this.setState({ h2: false })}>
                  <a href="/about" style={styles.barItem}>ABOUT</a>
                 </Square>
                 <Square
                   pose={this.state.h3 ? "hovered" : "idle"}
                   onMouseEnter={() => this.setState({ h3: true })}
                   onMouseLeave={() => this.setState({ h3: false })}>
                    <a href="/team" style={styles.barItem}>TEAM</a>
                 </Square>
                 <Square
                   pose={this.state.h4 ? "hovered" : "idle"}
                   onMouseEnter={() => this.setState({ h4: true })}
                   onMouseLeave={() => this.setState({ h4: false })}>
                  <a href="/projects" style={styles.barItem}>PROJECTS</a>
                </Square>
                <Square
                  pose={this.state.h5 ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ h5: true })}
                  onMouseLeave={() => this.setState({ h5: false })}>
                 <a href="/research" style={styles.barItem}>RESEARCH</a>
               </Square>
                <Square
                  pose={this.state.h6 ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ h6: true })}
                  onMouseLeave={() => this.setState({ h6: false })}>
                  <a href="/news" style={styles.barItem}>NEWS</a>
               </Square>
                <Square
                  pose={this.state.h7 ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ h7: true })}
                  onMouseLeave={() => this.setState({ h7: false })}>
                  <a href="/contact" style={styles.barItem}>CONTACT</a>
               </Square>
              </div>
            </div>
       )}
      </nav>
    </div>
  );
}
}




export default Header;
