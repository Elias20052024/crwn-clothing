import { useState } from "react";

import FormInput from "../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASSES} from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setErrorMessage("");
  };

  const signInWithGoogle = async () => {
   await signInWithGooglePopup();
   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect email or password.");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("No user associated with this email.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
      console.log("Sign-in error:", error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        {errorMessage && (
          <p style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>
            {errorMessage}
          </p>
        )}
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
