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
      <div className="column is-one-quarter-desktop is-one-third-tablet is-one-half-mobile is-flex" style={{padding: 20, flexDirection: "column", alignItems: "center", fontFamily: "Open Sans"}}>
        <Square
          pose={this.state.hTeam ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ h: true })}
          onMouseLeave={() => this.setState({ h: false })}>
          <div className="is-flex" style={{flexDirection: "column", alignItems: "center"}}>
            {(this.state.h ? (
              <div className="has-text-white has-text-centered is-flex" style={{flexDirection: "column", justifyContent: "center", minHeight: 200, width: 200, borderRadius: "100%", backgroundColor: colors.g2, padding: 10, boxShadow: `0px 0px 15px 7px ${colors.g3}`}}>
                <p className="is-size-7">
                  <b className="is-size-6">{this.props.member.firstName} {this.props.member.lastName}</b>
                  <br/>
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
                this.props.member.img ? <img src={`/static/img/headshots/${this.props.member.img}.jpg`} style={{height: 200, width: 200, borderRadius: 100, padding: 10, }}/> : (
                  <div className="is-flex" style={{justifyContent: "center", alignItems: "center", height: 200, width: 200, borderRadius: 100, padding: 10, backgroundColor: colors.g3}}>
                    <span className="icon is-large" style={{height: 100, width: 100}}>
                      <i className="fas fa-user"/>
                    </span>
                  </div>
                )
            ))}
            <p className="is-size-5" style={{color: colors.g1}}> <b> {this.props.member.firstName} </b> </p>
            <p className="is-size-6 has-text-centered" style={{color: colors.g1, width: 200}}> <em> {this.props.member.role} </em> </p>
          </div>
        </Square>
      </div>
    );
  }
}

export default Member;
