
class Contact extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
      <div className="hero" style={{padding: '4rem', backgroundColor: "#e2e2e2"}}>
        <p className="title is-1" style={{color: "#434343"}}>Contact Us</p>
        <p className="subtitle is-6"> We'd love to hear from you. Complete this form with any general questions, concerns, or feedback you have for us.
        We'll be sure to respond promptly. </p>
          <div className="container" style={{width: "80%", padding: 20}}>
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
            </div>

            <div className="control">
              <button className="button ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
