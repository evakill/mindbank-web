import colors from './colors.js';

export default {
  title: {
    color: colors.b1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: 0,
    padding: 0,
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
  accentText: {
    backgroundColor: colors.g4,
    color: colors.b1,
    fontFamily: "Lora",
    textDecoration: "bold",
    padding: "5%",
    margin: "5% 0",
  },
  card: {
    boxShadow: `0px 0px 15px 7px ${colors.g3}`,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "5%",
  },
  cardTitle: {
    color: colors.b1,
    fontFamily: "Open Sans",
    margin: 0
  },
  cardText: {
    color: colors.g1,
    fontFamily: "Lora",
    padding: 10
  },
  cardButton: {
    marginTop: 10,
    marginRight: 20,
    backgroundColor: "white",
    color: colors.r1,
    borderWidth: 0,
    float: "right",
    fontFamily: "Open Sans",
    textDecoration: "none",
  },
  redBar: {
    minHeight: "100%",
    minWidth: 8,
    maxWidth: 8,
    backgroundColor: colors.r1,
    color: colors.r1,
  },
  redBarHoriz: {
    minHeight: 10,
    minWidth: "100%",
    backgroundColor: colors.r1,
    color: colors.r1,
  },
}
