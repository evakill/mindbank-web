import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../colors.js'
import styles from '../styles.js'

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
      <Header/>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 100, padding: "0 3% 3%"}}>
        <div className="has-text-centered" style={{padding: "5%"}}>
          <p className="is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={styles.title}>NEWS</p>
          <p className="is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile" style={styles.subtitle}>Follow us on Facebook for updates, events, and original content.</p>
        </div>
        <div className="columns" style={{padding: "0 5% 5%"}}>
          <div className="column">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F2043312005790391&width=500&show_text=true&appId=1730719700366447&height=490" width="500" height="490" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1981189738669285&width=500&show_text=true&appId=1730719700366447&height=530" width="500" height="530" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1625975954190667&width=500&show_text=true&appId=1730719700366447&height=570" width="500" height="570" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div className="column">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F2036134663174792&width=500&show_text=true&appId=1730719700366447&height=690" width="500" height="690" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1970569109731348&width=500&show_text=true&appId=1730719700366447&height=540" width="500" height="540" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1938400149614911&width=500&show_text=true&appId=1730719700366447&height=490" width="500" height="490" style={{border: "none", overflow:"hidden", margin: "5%"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
    <Footer/>
  </section>);

  }
}

export default News;
