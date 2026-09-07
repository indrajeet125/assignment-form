import React, { Component } from "react";

class Form extends Component {
  state = {
    salutation: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
    comment: "",
    error: "",
  };
  clearAll = () => {
    this.setState({
      salutation: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      comment: "",
      error: "",
    });
  };
  Validate = async (e) => {
    e.preventDefault();
    const { fname, comment, email } = this.state;
    if (!fname.trim() || !comment.trim()) {
      this.setState({ error: "Please add your name and a comment before sending." });
      return;
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      this.setState({ error: "Please enter a valid email address." });
      return;
    }

    try {
      await this.props.addcommenthandler({
        salutation: this.state.salutation,
        fname: fname.trim(),
        lname: this.state.lname.trim(),
        phone: this.state.phone.trim(),
        email: email.trim(),
        comment: comment.trim(),
      });
      this.clearAll();
    } catch (requestError) {
      this.setState({ error: "Your feedback could not be sent. Please try again." });
    }
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
          <div className="form-title">
            <p className="eyebrow">A QUICK NOTE</p>
            <h2 className="form-heading">Tell us what you think</h2>
            <p>It takes less than a minute.</p>
          </div>
          {this.state.error && <p className="form-error" role="alert">{this.state.error}</p>}
          <div className="form-group">
            <label htmlFor="salutation"> select</label>
            <select
              name="salutation"
              id="salutation"
              value={this.state.salutation}
              onChange={(e) => this.setState({ salutation: e.target.value })}
            >
              <option value="">Choose one</option>
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
              required
              maxLength="40"
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
              maxLength="40"
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
              inputMode="tel"
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
              type="email"
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
              maxLength="500"
              required
              rows="8"
              placeholder="write something ...."
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            ></textarea>
            <div className="field-meta">{this.state.comment.length}/500</div>
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
