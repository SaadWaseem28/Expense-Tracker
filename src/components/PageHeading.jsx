import React from "react";

function PageHeading({ headingName }) {
  return (
    <div className="flex justify-end md:justify-start">
      <p className="text-xl text-[#007BFF] font-bold tracking-wide uppercase mb-4">
        {headingName}
      </p>
    </div>
  );
}

export default PageHeading;
