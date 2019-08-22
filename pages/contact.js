import posed from 'react-pose';
import * as emailjs from 'emailjs-com';

import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../colors.js';
import styles from '../styles.js';

const Square = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.01 }
});

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            h: false,
            name: '',
            email: '',
            message: '',
            listServ: false,
            successAlert: false,
            errorAlert: false
        }
        emailjs.init('user_EjB6lEHEOdkqInAOT0u59');
    }

    submit() {
        let { name, email, message, listServ } = this.state;
        listServ = listServ ? 'Y' : 'N';
        emailjs.send('default_service', 'template_8hm8wudW', { name, email, message, listServ }, 'user_EjB6lEHEOdkqInAOT0u59')
        .then((response) => {
            this.setState({name: '', email: '', message: '', listServ: '', successAlert: true});
        }, (err) => {
            this.setState({name: '', email: '', message: '', listServ: '', errorAlert: true});
        });
    }

    render() {
        const { name, email, message, listServ } = this.state;
        return(
            <div>
                <Header/>
                <div style={styles.page}>
                    <div className="has-text-centered" style={{padding: "5%"}}>
                        <p className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>CONTACT US</p>
                        <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}> We'd love to hear from you! </p>
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
                                    <input value={name} onChange={(e) => this.setState({name: e.target.value})} className="input" type="text"/>
                                </div>
                            </div>
                            <div className="field" style={{width:"100%"}}>
                                <p className="label has-text-left" style={styles.subtitle}>Email</p>
                                <div className="control">
                                    <input value={email} onChange={(e) => this.setState({email: e.target.value})} className="input" type="email"/>
                                </div>
                            </div>
                            <div className="field" style={{width:"100%"}}>
                                <p className="label has-text-left" style={styles.subtitle}>Message</p>
                                <div className="control">
                                    <textarea value={message} onChange={(e) => this.setState({message: e.target.value})} className="textarea"></textarea>
                                </div>
                            </div>
                            <div className="field" style={{width:"100%"}}>
                                <div className="control">
                                    <input value={listServ} onClick={(e) => this.setState({listServ: !listServ})} type="checkbox"/>
                                    <label className="checkbox" style={{padding: 10}}>Add me to the MindBank ListServ.</label>
                                </div>
                                {this.state.successAlert ? <label style={{color: colors.r1}}> Thank you for your message! We will get back to you soon. </label> : ""}
                                {this.state.errorAlert ? <label style={{color: colors.r1}}> There was an error sending your message, please try again. If error persists, please contact info@themindbank.net </label> : ""}
                                <div className="control is-flex" style={{flexDirection: "column"}}>
                                    <Square
                                        pose={this.state.h ? "hovered" : "idle"}
                                        onMouseEnter={() => this.setState({ h: true })}
                                        onMouseLeave={() => this.setState({ h: false })}>
                                        <div onClick={(e) => this.submit()} className="button is-size-5-desktop is-size-6-tablet is-size-6-mobile" style={styles.cardButton}>
                                            <b>Submit</b>
                                            <i className="fas fa-angle-double-right" style={{padding: "4px 4px"}}></i>
                                        </div>
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
