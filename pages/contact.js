import Footer from '../components/Footer';
import Header from '../components/Header';

class Contact extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
      <Header/>
      <div className="container is-flex" style={{flexDirection: "column", padding: "4rem", width: "70%"}}>
        <p className="title is-1" style={{color: "#434343", paddingTop: "4rem"}}>Contact Us</p>
        <p className="subtitle is-6"> We'd love to hear from you. Complete this form with any general questions, concerns, or feedback you have for us.
        We'll be sure to respond promptly. </p>
            <div className="field">
              <label className="label has-text-left">Name</label>
              <div className="control">
                <input className="input" type="text"/>
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">Email</label>
              <div className="control">
                <input className="input" type="email"/>
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">Message</label>
              <div className="control">
                <textarea className="textarea"></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input type="checkbox"/>
                <label className="checkbox" style={{padding: 10}}>
                  Add me to the MindBank ListServ.
                </label>
              </div>

            <div className="control is-flex" style={{flexDirection: "column"}}>
              <button className="button" style={{width: 100, backgroundColor: "#b9b9b9", color: "#fff", borderWidth: 0, alignSelf: "flex-end"}}>Submit</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Contact;
