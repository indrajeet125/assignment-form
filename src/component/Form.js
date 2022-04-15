import React, { Component } from "react";

class Form extends Component {
  state = {
    salutation: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
    comment: "",
  };
  clearAll = () => {
    this.setState({
      salutation: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      comment: "",
    });
  };
  // inputHandler=(e)=>{
  //   this.setState

  // }
  Validate= (e) => {
    e.preventDefault();
    // if (
    //   this.state.salutation === "" ||
    //   this.state.salutation === "No.selected"
    // ) {
    //   alert("please select Mr. or Miss.");
    //   return;
    // }
    // if (this.state.fname === null || this.state.fname === "") {
    //   alert("Please Enter first name ");
    //   return false;
    // } else if (this.state.fname.length > 30 || this.state.lname.length > 30) {
    //   alert("First Name should be no more than 30 characters");
    //   return false;
    // } else if (this.state.lname.length > 30) {
    //   alert("Last Name should be no more than 30 characters");
    //   return false;
    // }

    this.props.addcommenthandler(this.state);
    this.clearAll();
  };
  render() {
    return (
      <>
        <form
          className="feedback"
          method="get"
          name="myform"
          onSubmit={this.Validate}
        >
          <h2 className="form-heading"> Please Fill Feedback Form </h2>  
          <div className="form-group">
            <label htmlFor="salutation"> select</label>
            <select
              name="salutation"
              id="salutation"
              value={this.state.salutation}
              onChange={(e) => this.setState({ salutation: e.target.value })}
            >
              <option>{"No.selected"}</option>
              <option>{" Mr."}</option>
              <option>{"Mrs. "}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="username">First Name :</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              value={this.state.fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              placeholder="Enter last Name "
              name="lastname"
              id="lastname"
              value={this.state.lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="mobile number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          {/* <div className="form-radio">
    <label htmlFor="gender">Gender:</label>
    <input type="radio" name="gender" value="mr" id="male" />
    <label htmlFor="male">Male</label>
    <input type="radio" value="miss" name="gender" id="female" />
    <label htmlFor="female">Fe male</label>
  </div> */}
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div><label > Comment: </label></div>
            <textarea
              name="comment"
              id="comment"
              
              rows="8"
              placeholder="write something ...."
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            ></textarea>
          </div>
          <div className="button">
            <input type="submit" className="submit" value="submit" />
            <input
              type="reset"
              className="reset"
              value="Reset"
              onClick={(e) =>
                this.setState({
                  salutation: "",
                  fname: "",
                  lname: "",
                  phone: "",
                  email: "",
                  comment: "",
                })
              }
            />
          </div>
        </form>
      </>
    );
  }
}
export default Form;
