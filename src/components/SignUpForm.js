import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50),
  surname: Yup.string().min(2).max(50),
  username: Yup.string().min(5).max(100),
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string()
    .min(7, "Password has at least 7 characters!")
    .required("Required!"),
  confirmationPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3 mx-auto color-bckg">
        <h1 className="p-4">Start be a better version of yourself!</h1>
        <fieldset className="border p-4">
          <legend className="w-auto">Join us</legend>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              username: "",
              email: "",
              password: "",
              confirmationPassword: "",
            }}
            validationSchema={signUpSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (!this.state.submitted) {
                this.props.handleSignup(values, resetForm);
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
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    aria-label="Name"
                    autoComplete={"off"}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <div className="alert alert-danger" role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className={"form-group"}>
                  <label htmlFor="surname">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    name="surname"
                    aria-label="Surname"
                    autoComplete={"off"}
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.surname && touched.emsurnameail && (
                    <div className="alert alert-danger" role="alert">
                      {errors.surname}
                    </div>
                  )}
                </div>
                <div className={"form-group"}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    aria-label="Username"
                    autoComplete={"off"}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username && (
                    <div className="alert alert-danger" role="alert">
                      {errors.username}
                    </div>
                  )}
                </div>
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
                <div className={"form-group"}>
                  <label htmlFor="confirmation-password">
                    Confirmation password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmationPassword"
                    aria-label="Confirmation password"
                    autoComplete={"off"}
                    value={values.confirmationPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirmationPassword && touched.confirmationPassword && (
                    <div className="alert alert-danger" role="alert">
                      {errors.confirmationPassword}
                    </div>
                  )}
                </div>
                {this.props.badCredentials && (
                  <div>
                    <h1>
                      {"This email address is already being used. Try again!"}
                    </h1>
                  </div>
                )}
                <div className="form-group">
                  <button
                    disabled={!(isValid && dirty)}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={() => this.props.changeForm("home")}
                    className="btn btn-secondary ml-1"
                  >
                    Cancel
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

export default SignUpForm;
