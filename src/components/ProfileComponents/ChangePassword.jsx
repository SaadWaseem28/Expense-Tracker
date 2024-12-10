import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ChangePasswordSchema } from "../../validations/ChangePasswordSchema";

function ChangePassword() {
  return (
    <Formik
      initialValues={{
        oldpassword: "",
        newpassword: "",
        confirmyassword: "",
      }}
      validationSchema={ChangePasswordSchema}
      onSubmit={(values) => {
        console.log(values); // handle form submission
      }}
    >
      <Form className="w-full flex-1 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label
            htmlFor="oldpassword"
            className="w-full sm:w-60 font-normal text-[#1a202c]"
          >
            Old Password
          </label>
          <Field
            type="password"
            id="oldpassword"
            name="oldpassword"
            className="mt-1 text-black font-light block w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter old password"
          />
          <ErrorMessage
            name="oldpassword"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label
            htmlFor="new-password"
            className="w-full sm:w-60 font-normal text-[#1a202c]"
          >
            New Password
          </label>
          <Field
            type="password"
            id="newpassword"
            name="newpassword"
            className="mt-1 font-light text-black block w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter new password"
          />
          <ErrorMessage
            name="newpassword"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label
            htmlFor="confirmpassword"
            className="w-full sm:w-60 font-normal text-[#1a202c]"
          >
            Confirm Password
          </label>
          <Field
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            className="mt-1 font-light text-black block w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm new password"
          />
          <ErrorMessage
            name="confirmpassword"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="flex flex-1">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-4 rounded-lg min-w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            {" "}
            Change Password
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ChangePassword;
