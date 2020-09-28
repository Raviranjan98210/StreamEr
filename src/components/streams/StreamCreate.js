import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return <div style={{ color: "red" }}>{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    const error = `${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={`field ${error}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title " />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "You must enter the title";
  }
  if (!formValues.description) {
    error.description = "You must enter the description";
  }
  return error;
};
const wrappedForm = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(wrappedForm);
