import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, "Password has at least 7 characters!")
    .required("Required!"),
  email: Yup.string().email("Invalid email!").required("Required!"),
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false,
    };
    this.resetSubmittedState = this.resetSubmittedState.bind(this);
  }

  resetSubmittedState() {
    this.setState({
      submitted: false,
    });
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3 mx-auto color-bckg">
        <h1 className="p-4">Welcome back traveler!</h1>
        <fieldset className="border p-4">
          <legend className="w-auto">Ready? </legend>
          <Formik
            initialValues={{
              password: "",
              email: "",
            }}
            validationSchema={signInSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (!this.state.submitted) {
                this.props.handleLogin(
                  values,
                  resetForm,
                  this.resetSubmittedState
                );
                this.setState({ submitted: true });
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              dirty,
            }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <div className={"form-group"}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    aria-label="Email"
                    autoComplete={"off"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="alert alert-danger" role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className={"form-group"}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    aria-label="Password"
                    autoComplete={"off"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="alert alert-danger" role="alert">
                      {errors.password}
                    </div>
                  )}
                </div>
                {this.props.badCredentials && (
                  <div>
                    <h1>Credentials are bad! Try again</h1>
                  </div>
                )}
                <div className="form-group">
                  <button
                    disabled={!(isValid && dirty)}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => this.props.changeForm("home")}
                    className="btn btn-secondary ml-1"
                  >
                    Cancel
                  </button>
                </div>
                <div className="form-group">
                  <button
                    onClick={() => this.props.changeForm("signup")}
                    className="btn btn-link"
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </fieldset>
      </div>
    );
  }
}

export default LoginForm;
