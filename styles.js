import colors from './colors.js';

export default {
  page: {
    padding: "0 10% 3% 10%",
    marginTop: 100,
  },
  banner: {
    backgroundImage: "url(/static/img/banner.png)",
    backgroundColor: colors.g4,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "6rem",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: colors.b1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: 0,
    padding: 0,
    fontWeight: 600,
  },
  subtitle: {
    color: colors.g1,
    fontFamily: "Open Sans",
  },
  header: {
    color: colors.g2,
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0
  },
  text: {
    color: colors.g1,
    fontFamily: "Lora",
  },
  bigText: {
    color: colors.g1,
    fontFamily: "Lora",
    fontSize: "50px"
  },
  accentText: {
    color: colors.b1,
    fontFamily: "Montserrat",
    fontWeight: 600
  },
  bannerText: {
    color: colors.g1,
    fontFamily: "Lato",
    fontWeight: 600
  },
  card: {
    boxShadow: `0px 0px 20px 0px rgba(0, 0, 0, .1)`,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "3% 5%",
  },
  cardTitle: {
    color: colors.b1,
    fontFamily: "Open Sans",
    margin: 0,
    fontWeight: 600
  },
  cardText: {
    color: colors.g1,
    fontFamily: "Lora",
    padding: "3% 3% 0 3%"
  },
  cardButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    padding:0,
    backgroundColor: "white",
    color: colors.r1,
    borderWidth: 0,
    float: "right",
    fontFamily: "Lato",
    textDecoration: "none",
    fontWeight: 600
  },
  dropdown: {
    padding: 0,
    margin: 0,
    textDecoration: "none",
  },
  bar: {
    color: colors.g4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
    textDecoration: "none",
  },
  dropdownItem: {
    color: colors.b1,
    textDecoration: "none",
    padding: 10,
    fontFamily: "Open Sans",
    fontWeight: 400
  },
  barItem: {
    textDecoration: "none",
    padding: 15,
    color: "white",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: 400
  },
  redBar: {
    minHeight: "100%",
    minWidth: ".4rem",
    maxWidth: 8,
    backgroundColor: colors.r1,
    color: colors.r1,
  },
  redBarHoriz: {
    minHeight: ".4rem",
    minWidth: "100%",
    backgroundColor: colors.r1,
    color: colors.r1,
  },
  item: {
    textDecoration: "none",
    padding: 10,
    color: colors.g1,
    fontFamily: "Open Sans",
    textDecoration: "none"
  },
  numberContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5% 5%"
  },
  number: {
    fontSize: "50px",
    color: colors.r1,
    fontFamily: "Open Sans",
    fontWeight: "600"
  },
  subNumber: {
    fontSize: "14px",
    color: colors.g2
  }
}
