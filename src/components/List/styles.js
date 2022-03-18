import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
    marginBottom: "10px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "10px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "50vh",
    overflow: "auto",
    direction: "column",
  },
}));
