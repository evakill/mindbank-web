import colors from '../colors'
import styles from '../styles'
import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1 }
});


class ResearchProject extends React.Component {

  render() {
    return(
        <div style={styles.card}>
          <div className="columns">
            <div className="column is-4 is-flex" style={{alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 20}}>
              <img src={this.props.src} style={{maxHeight: 300}}/>
              <br/>
              <p className="is-size-3-fullhd is-size-5-desktop is-size-6-mobile has-text-centered" style={styles.accentText}> {this.props.tagline} </p>
              <p className="is-size-5-fullhd is-size-6-desktop is-size-7-mobile" style={styles.subtitle}>{this.props.date} </p>
            </div>
            <div style={styles.redBar}></div>
            <div className="column is-8" style={{padding: "3%"}}>
              <div>
                <p className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}> <b> {this.props.name} </b> </p> <br/>
                <p className="is-size-3-fullhd is-size-5-desktop is-size-6-mobile" style={styles.text}>
                  <b>Our Question: </b>{this.props.question} <br/><br/>
                  <b>Key Insights: </b>
                    <ul style={{listStyleType: "disc", paddingLeft: 20}}>
                      {this.props.insights.map(insight => <li>{insight}</li>)}
                    </ul>
                  <br/><br/>
                </p>
              </div>
            </div>
          </div>
        </div>);
  }
}

export default ResearchProject;
