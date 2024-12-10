import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginValidationSchema } from "../validations/LoginValidationSchema";

function Login() {
  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-bg p-3">
      <div className="p-6 sm:p-8 w-full sm:w-[500px] bg-[hsl(214,_32%,_91%)] rounded-lg shadow-lg">
        <h2 className="text-center text-[#007BFF] text-2xl sm:text-3xl font-semibold mb-4">
          SIGN IN
        </h2>

        {/* Formik Component */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="text-[#1a202c] block mb-2" htmlFor="email">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full font-light px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="text-[#1a202c] block mb-2" htmlFor="password">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="w-full font-light px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Sign Up Link */}
            <div className="mt-4">
              <p className="text-[#1a202c]">
                Don't have an account?{" "}
                <a href="/signup" className="text-[#007BFF] hover:underline">
                  Sign Up
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-[#007BFF] text-white py-3 rounded-md hover:bg-[#66A9FF]"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
