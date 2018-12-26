import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../colors.js'
import Member from '../components/Member';
import Project from '../components/Project';

const management = [
  {
    firstName: "Eva",
    lastName: "Killenberg",
    hometown: "Little Compton, Rhode Island, USA",
    major: "Computer Science",
    year: "Sophomore",
    role: "President",
  },
  {
    firstName: "Alyssa",
    lastName: "Furukawa",
    hometown: "Los Angeles, California, USA",
    major: "Networks and Data Analytics",
    year: "Sophomore",
    role: "Director of Internal",
  }
]
const members = [
  {
    firstName: "Eddie",
    lastName: "Hammond",
    hometown: "London, England",
    major: "Mechanical Engineering",
    year: "Junior",
  },
  {
    firstName: "Gabe",
    lastName: "Barnett",
    hometown: "New York, New York, USA",
    major: "Political Science",
    year: "Junior",
  },
]

const About = () => (
  <div>
    <Header/>
    <div className="container" style={{padding: '2rem', paddingTop: '6rem'}}>
      <section style={{paddingTop: '2rem'}}>
        <p className="is-size-1 title" style={{color: colors.r1}}>History</p>
        <div className="container">
          <p> paragraph about how the mindbank came to be </p>
        </div>
      </section>

      <section style={{paddingTop: '2rem'}}>
        <p className="is-size-1 title" style={{color: colors.r1}}>Mission</p>
        <div className="container">
          <p> sexy mission statement </p>
        </div>
      </section>

      <section style={{paddingTop: '2rem'}}>
        <p className="is-size-1 title is-spaced" style={{color: colors.r1}}>Team</p>
        <div className="container">
          <p className="subtitle is-4"> Management </p>
          <div className="columns">
            {management.map((member) => (
              <Member member={member} />
            ))}
          </div>
          <p className="subtitle is-4"> Consultants </p>
          <div className="columns">
            {members.map((member) => (
              <Member member={member} />
            ))}
          </div>
        </div>
      </section>

      <section style={{paddingTop: '2rem'}}>
      <p className="is-size-1 title is-spaced" style={{color: colors.r1, paddingBottom: '1rem'}}>Projects</p>
        <div className="container">
          <div className="container">
            <div className="columns">
              <Project />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
);

export default About;
