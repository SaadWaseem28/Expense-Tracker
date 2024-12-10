import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SignupValidationSchema } from "../validations/SignupValidationSchema";

function Signup() {
  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-bg p-3">
      <div className="p-6 sm:p-8 w-full sm:w-[500px] bg-[hsl(214,_32%,_91%)] rounded-lg shadow-lg">
        <h2 className="text-center text-[#007BFF] text-2xl sm:text-3xl font-semibold mb-4">
          CREATE ACCOUNT
        </h2>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={SignupValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {/* First Name Field */}
              <div className="w-full sm:w-1/2">
                <label
                  className="text-[#1a202c] block mb-2"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <Field
                  id="firstname"
                  name="firstname"
                  type="text"
                  className="w-full font-light px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First Name"
                />
                <ErrorMessage
                  name="firstname"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Last Name Field */}
              <div className="w-full sm:w-1/2">
                <label className="text-[#1a202c] block mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <Field
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="w-full font-light px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Last Name"
                />
                <ErrorMessage
                  name="lastname"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* Email Address Field */}
            <div>
              <label className="text-[#1a202c] block mb-2" htmlFor="email">
                Email Address
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

            {/* Confirm Password Field */}
            <div>
              <label
                className="text-[#1a202c] block mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <Field
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                className="w-full font-light px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="confirmpassword"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-[#007BFF] text-white py-3 rounded-md hover:bg-[#66A9FF]"
              >
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
