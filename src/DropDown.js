import React from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const CountriesList = [
  { label: "India", value: 1 },
  { label: "Australia", value: 2 },
  { label: "Singapore", value: 3 },
  { label: "Indonesia", value: 4 },
  { label: "Thailand", value: 5 },
  { label: "Phillipines", value: 6 },
];
class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: "",
    };
  }

  handleChange = (e) => {
    console.log("Selected value : " + e.label);
    alert("Selected value : " + e.label);
    this.setState({ selectedCountry: e.label });
  };

  render() {
    const { classes } = this.props;
    const selectedValue = "Test";
    // alert("data" + this.props.countries);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select
              placeholder="Select Contry"
              value={this.state.selectedCountry}
              options={CountriesList}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
export default DropDown;
