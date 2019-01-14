import colors from '../colors'
import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1 }
});

const styles = {
  card: {
    boxShadow: `0px 0px 15px 7px ${colors.g3}`,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "5%",
    height: 450,
    alignItems: "center",
    justifyContent: "center"
  },
  cardBack: {
    boxShadow: `0px 0px 15px 7px ${colors.g3}`,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.g4,
    padding: "5%",
    height: 450,
    alignItems: "center",
    justifyContent: "center"
  },
}


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: false,
    }
  }

  render() {
    return(
      <div className="column is-4 is-flex" style={{padding: 20}}>
        <Square
          pose={this.state.h ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ h: !this.state.h })}
          onMouseLeave={() => this.setState({ h: !this.state.h })}>
          {(this.state.h ? (
            <div style={ styles.cardBack}>
              <p className="is-size-4"> <b> {this.props.name} </b> </p>
              <p className="is-size-6"> <b>The Company: </b>{this.props.company} </p>
              <p className="is-size-6"> <b>Their Question: </b>{this.props.proposal} </p>
              <p className="is-size-6"> <b>Our Answer: </b>{this.props.results} </p>
              <p className="is-size-6"> {this.props.impact} </p>
            </div>) : (
            <div style={styles.card}>
              <div className="is-flex" style={{alignItems: "center", justifyContent: "center", height: 250, width: 250, padding: 20}}>
                  <img src={this.props.src}/>
              </div>
              <br/>
              <p className="is-size-4"> <b> {this.props.name} </b> </p>
              <p className="is-size-6"> <em> {this.props.date} </em> </p>
              <p className="is-size-5 has-text-centered"> {this.props.tagline} </p>
            </div>))}
        </Square>
      </div>
      );
  }
}

export default Project;
