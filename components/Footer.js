const Footer = (props) => (
  <section>
    <div className="hero is-small" style={{backgroundColor: '#e5e5e5'}}>
      <div className="hero-body">
        <div className="container has-text-centered" style={{display: "flex", justifyContent: "center", alignItems: "bottom"}}>
          <p className="title is-size-5" style={{color: '#00275a'}}> The MindBank </p>
        </div>
        <div className="container has-text-white" style={{display:"flex", justifyContent:"center"}}>
          <a style={{paddingLeft: 10}}>About Us</a>
          <a style={{paddingLeft: 10}}>For Clients</a>
          <a style={{paddingLeft: 10}}>For Consultants</a>
          <a style={{paddingLeft: 10, paddingRight: 10}}>Contact</a>
        </div>
        <div className="container" style={{display:"flex", justifyContent:"center"}}>
          <span class="icon" style={{color: '#00275a'}}>
            <i class="fab fa-facebook-square"></i>
          </span>
          <span class="icon" style={{color: '#00275a'}}>
            <i class="fa fa-envelope-square"></i>
          </span>
          <span class="icon" style={{color: '#00275a'}}>
            <i class="fab fa-linkedin"></i>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
