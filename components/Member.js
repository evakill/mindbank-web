import colors from '../colors'
import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: false,
    }
  }

  render() {
    return(
      <div className="columns is-2 is-flex" style={{padding: 20, flexDirection: "column", alignItems: "center"}}>
        <Square
          pose={this.state.hTeam ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ h: true })}
          onMouseLeave={() => this.setState({ h: false })}>
          <div className="is-flex" style={{flexDirection: "column", alignItems: "center"}}>
            {(this.state.h ? (
              <div className="has-text-white has-text-centered is-flex" style={{flexDirection: "column", justifyContent: "center", height: 200, width: 200, borderRadius: 100, backgroundColor: colors.b4, padding: 10}}>
                <p className="is-size-7">
                  <i className="fas fa-graduation-cap" style={{padding: "3px 4px"}}></i>
                  {this.props.member.year}
                </p>
                <p className="is-size-7">
                  <i className="fas fa-map-pin" style={{padding: "3px 4px"}}></i>
                  {this.props.member.hometown}
               </p>
                <p className="is-size-7">
                  <i className="fas fa-book-open" style={{padding: "3px 4px"}}></i>
                  {this.props.member.major}
                </p>
              </div>) : (
                <div className="is-flex" style={{flexDirection: "column", alignItems: "center", height: 200, width: 200, borderRadius: 100, backgroundColor: colors.b3, padding: 10}}>
                </div>
            ))}
            <p className="is-size-5" style={{color: colors.g1}}> <b> {this.props.member.firstName} </b> </p>
            <p className="is-size-6" style={{color: colors.g1}}> <em> {this.props.member.role} </em> </p>
          </div>
        </Square>
      </div>
    );
  }
}

export default Member;
