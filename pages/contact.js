import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../colors.js'

const styles = {
  card: {
    boxShadow: `0px 0px 15px 7px ${colors.g3}`,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "5%",
  },
  title: {
    color: colors.b1,
    fontFamily: "Montserrat",
    fontStyle: 600,
    margin: 0,
    padding: 0,
  },
  header: {
    color: colors.g1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: 0,
    padding: 0
  },
  flatText: {
    color: colors.g1,
    fontFamily: "Lora",
    fontSize: 20,
  },
  redBar: {
    minHeight: "100%",
    minWidth: 10,
    backgroundColor: colors.r1,
    color: colors.r1,
    margin: "0px 20px"
  },
}

class Contact extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
      <Header/>
      <div style={{margin: "2rem 6rem", paddingTop: 80}}>
        <div className="has-text-centered" style={{padding: 20}}>
          <b className="is-size-1" style={styles.title}>CONTACT US</b>
          <p className="is-size-5" style={styles.flatText}>
            We'd love to hear from you. Complete this form with any general questions, concerns, or feedback.
            We'll be sure to respond promptly.
          </p>
        </div>

        <div className="is-flex" style={{flexDirection: "row", minWidth: "100%", justifyContent: "center"}}>
            <div style={styles.redBar}></div>
            <div className="is-flex" style={{flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Open Sans", minWidth: "60%"}}>
              <div className="field" style={{width:"100%"}}>
                <p className="label has-text-left">Name</p>
                <div className="control">
                  <input className="input" type="text"/>
                </div>
              </div>

              <div className="field" style={{width:"100%"}}>
                <p className="label has-text-left">Email</p>
                <div className="control">
                  <input className="input" type="email"/>
                </div>
              </div>

              <div className="field" style={{width:"100%"}}>
                <p className="label has-text-left">Message</p>
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
                <button className="button is-rounded" style={{width: 100, backgroundColor: colors.g2, color: "white", borderWidth: 0, alignSelf: "flex-end"}}>Submit</button>
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
