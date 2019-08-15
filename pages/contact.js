import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../colors.js'
import styles from '../styles.js'
import posed from "react-pose";

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.03 }
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: false,
    }
  }

  render() {
    return(
      <div>
      <Header/>
      <div style={styles.page}>
        <div className="has-text-centered" style={{padding: "5%"}}>
          <p className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>CONTACT US</p>
          <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}>
            We'd love to hear from you!
          </p>
        </div>

        <div className="is-flex" style={{flexDirection: "row", minWidth: "100%", justifyContent: "center", paddingBottom: "5%"}}>
            <div style={styles.redBar}></div>

            <div className="is-flex" style={{flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Open Sans", minWidth: "60%", paddingLeft: "3%"}}>
              <p className="is-size-4-fullhd is-size-6-desktop is-size-7-mobile" style={styles.subtitle}>
                Complete this form with any general questions, concerns, or feedback.
                We'll be sure to respond promptly.
              </p>
              <br/>
              <div className="field" style={{width:"100%"}}>
                <p className="label has-text-left" style={styles.subtitle}>Name</p>
                <div className="control">
                  <input className="input" type="text"/>
                </div>
              </div>

              <div className="field" style={{width:"100%"}}>
                <p className="label has-text-left" style={styles.subtitle}>Email</p>
                <div className="control">
                  <input className="input" type="email"/>
                </div>
              </div>

              <div className="field" style={{width:"100%"}}>
                <p className="label has-text-left" style={styles.subtitle}>Message</p>
                <div className="control">
                  <textarea className="textarea"></textarea>
                </div>
              </div>

              <div className="field" style={{width:"100%"}}>
                <div className="control">
                  <input type="checkbox"/>
                  <label className="checkbox" style={{padding: 10}}>
                    Add me to the MindBank ListServ.
                  </label>
                </div>

              <div className="control is-flex" style={{flexDirection: "column"}}>
                <Square
                  pose={this.state.h ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ h: true })}
                  onMouseLeave={() => this.setState({ h: false })}>
                      <a href="/team" className="button is-size-5-desktop is-size-6-tablet is-size-6-mobile" style={styles.cardButton}>
                        <b>Submit</b>
                        <i className="fas fa-angle-double-right" style={{padding: "4px 4px"}}></i>
                      </a>
                  </Square>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
    );
  }
}

export default Contact;
