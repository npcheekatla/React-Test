import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  grid: {
    spacing: "150",
    // justifyItems: "center",
    // justify: "center",
    // alignContent: "space-between",
    // alignItems: "center"
    marginRight: "0px",
    display: "flex",
  },
  years: {
    // spacing: "10",
    marginRight: "0px",
    display: "flex",
    width: "70px",
  },
  caption: {
    marginLeft: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    top: `${50}%`,
    left: `${50}%`,
    margin: "auto",
    outline: "none",
  },
  placeholder: {
    height: 40,
    outline: "none",
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

//const classes = useStyles();

class SmartDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false, age: "" };
  }

  handleChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleOpen = () => {
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button className={classes.button} onClick={this.handleOpen}>
          Open the select
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Countries
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(SmartDropDown);
