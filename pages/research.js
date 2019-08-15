import Footer from '../components/Footer';
import Header from '../components/Header';
import ResearchProject from '../components/ResearchProject';
import colors from '../colors.js'
import styles from '../styles.js'

const Research = () => (
  <div>
    <Header/>
      <div style={styles.page}>
        <div className="has-text-centered" style={{padding:"5%"}}>
          <p className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>OUR RESEARCH</p>
          <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile"  style={styles.subtitle}>
            Learn about our research initiatives that drive our data-driven insights.
          </p>
        </div>
        <div style={styles.numberContainer}>
          <div style={{textAlign: "center"}}>
            <div style={styles.number}>4,200+</div>
            <div style={styles.subNumber}>DATAPOINTS COLLECTED</div>
          </div>
          <div style={{textAlign: "center"}}>
            <div style={styles.number}>9</div>
            <div style={styles.subNumber}>COMPREHENSIVE STUDIES</div>
          </div>
          <div style={{textAlign: "center"}}>
            <div style={styles.number}>800+</div>
            <div style={styles.subNumber}>STUDENTS SURVEYED</div>
          </div>
        </div>
        <b className="is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile" style={styles.header}>FEATURED STUDIES</b>
        <div style={{marginBottom: "10%", paddingTop: "2%"}}>
          <ResearchProject
            src="/static/img/penn-market.png"
            name="THE PENN MARKET"
            date="Fall 2018"
            question="How and why do Penn students spend?"
            insights={["Determining how students allocate their spending money", "The most influential factors that differentiate providers in each market", "How these results are correlated to demographic segments by gender, age, and social environment"]}
          />
        </div>
        <div style={{marginBottom: "10%"}}>
          <ResearchProject
            src="/static/img/advertising.png"
            name="ADVERTISING AT PENN"
            date="Fall 2018"
            question="What is the most efficient and effective way to advertise to Penn students?"
            insights={["The most effective forms of communication that translate into consumer action", "How different targeting tactics effects degree of responsivity"]}
            />
        </div>
        <div style={{marginBottom: "10%"}}>
          <ResearchProject
            src="/static/img/events.png"
            name="EVENTS AT PENN"
            date="Fall 2018"
            question="How can you premote event attendance at Penn?"
            insights={["Determining the optimal time to host events for students", "Investigating the factors that compell students to attend events", "How these temporal and behavioral factors differ for differnt types paid and free events"]}
            />
        </div>
      </div>
    <Footer/>
  </div>
);

export default Research;
