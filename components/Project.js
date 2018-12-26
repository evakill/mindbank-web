import colors from '../colors'
import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1 }
});

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: false,
    }
  }

  render() {
    return(
      <div className="columns is-4 is-flex" style={{padding: 20}}>
        <Square
          pose={this.state.h? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ h: !this.state.h })}
          onMouseLeave={() => this.setState({ h: !this.state.h })}>
          {(this.state.h ? (
            <div className="has-text-white has-text-centered is-flex" style={{flexDirection: "column", justifyContent: "center", borderRadius: 15, backgroundColor: colors.b3, padding: 10, height: 400, width: 300}}>
              <p className="is-size-5"> <b> Project Name </b> </p>
              <p className="is-size-6"> company desc </p>
              <p className="is-size-6"> project proposal </p>
              <p className="is-size-6"> deliverables </p>
              <p className="is-size-6"> impact </p>
            </div>) : (
            <div className="is-flex" style={{flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 15, backgroundColor: colors.g3,  height: 400, width: 300, padding: 30}}>
              <img src='/static/img/crimson.png' style={{width: 200}}/>
              <br/>
              <p className="is-size-5"> <b> Project Name </b> </p>
              <p className="is-size-6"> <em> year </em> </p>
              <p className="is-size-6"> Project tagline </p>
            </div>))}
        </Square>
      </div>
      );
  }
}

export default Project;
