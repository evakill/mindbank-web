import Link from 'next/link';
import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

const CSS = () => (
  <section>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
  </section>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    }
  }
  render() {
    return(
    <div>
      <CSS/>
      <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation" style={{backgroundColor: "#00275A", height: 80, borderRadius: 0}}>
        <div className="navbar-brand" style={{color: "#00275A"}}>
          <div href="/" style={{padding:5}}>
          <Square
            pose={this.state.hovering ? "hovered" : "idle"}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}>
          <img
            src="/static/img/favicon.io"
            alt="The MindBank"
            width="45"
            height="45"/>
            </Square>
          </div>

          <div className="button navbar-burger is-info" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <a className="navbar-item" href="/team">
              About Us
            </a>
            <a className="navbar-item" href="/products">
              For Clients
            </a>
            <a className="navbar-item" href="/guides">
              For Consultants
            </a>
            <a className="navbar-item" href="/documentation">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
}

export default Header;
