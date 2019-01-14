import Link from 'next/link';
import posed from "react-pose";
import colors from '../colors.js';

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

const pages = [
  "/",
  "About",
  "Team",
  "Projects",
  "Contact",
]

const styles = {
  dropdown: {
    padding: 0,
    margin: 0,
  },
  bar: {
    color: colors.b1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  },
  dropdownItem: {
    color: colors.b1,
    textDecoration: "none",
    padding: 10,
    fontFamily: "Open Sans"
  },
  barItem: {
    textDecoration: "none",
    padding: 10,
    color: "white",
    fontFamily: "Open Sans"
  }
}

const CSS = () => (
  <section>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css?family=Lora|Montserrat:400,600|Open+Sans" rel="stylesheet"/>
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
      <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation" style={{backgroundColor: colors.b1, height: 80, borderRadius: 0, boxShadow: `0px 0px 7px 3px ${colors.g2}`}}>
       <div className="navbar-brand" style={{color: colors.b1}}>
         <a href="/" style={{padding:5}}>
           <Square
             pose={this.state.h1 ? "hovered" : "idle"}
             onMouseEnter={() => this.setState({ h1: true })}
             onMouseLeave={() => this.setState({ h1: false })}>
             <img
               src="/static/img/iconWhite.png"
               alt="The MindBank"
               width="45"
               height="45"/>
             </Square>
          </a>

       </div>
       <div className="navbar-burger is-info" onClick={this.toggleNav} style={{color: "white", float:"right", padding: 10, marginTop:10, alignSelf: "center"}}>
         <span></span>
         <span></span>
         <span></span>
       </div>

      <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
         <div className="navbar-start"></div>
         <div className="navbar-end"
          style={ this.state.isActive ? styles.dropdown : styles.bar}>
           <Square
             pose={this.state.h2 ? "hovered" : "idle"}
             onMouseEnter={() => this.setState({ h2: true })}
             onMouseLeave={() => this.setState({ h2: false })}>
             <a href="/about" style={ this.state.isActive ? styles.dropdownItem : styles.barItem}>
               <b>ABOUT</b>
             </a>
            </Square>
            <Square
              pose={this.state.h3 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h3: true })}
              onMouseLeave={() => this.setState({ h3: false })}>
               <a href="/team" style={ this.state.isActive ? styles.dropdownItem : styles.barItem}>
                 <b>TEAM</b>
               </a>
            </Square>
            <Square
              pose={this.state.h4 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ h4: true })}
              onMouseLeave={() => this.setState({ h4: false })}>
             <a href="/projects" style={ this.state.isActive ? styles.dropdownItem : styles.barItem}>
               <b>PROJECTS</b>
             </a>
           </Square>
           <Square
             pose={this.state.h5 ? "hovered" : "idle"}
             onMouseEnter={() => this.setState({ h5: true })}
             onMouseLeave={() => this.setState({ h5: false })}>
             <a href="/contact" style={ this.state.isActive ? styles.dropdownItem : styles.barItem}>
               <b>CONTACT</b>
             </a>
          </Square>
         </div>
       </div>
      </nav>


    </div>
  );
}
}




export default Header;
