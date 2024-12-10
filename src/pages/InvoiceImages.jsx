import React from "react";
import Sidebar from "../components/Sidebar";

function InvoiceImages() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1732640452152-8cca8e1d68ef?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727258720973-fefc6360944d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731582618594-4c084339d8d2?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1731955647580-26479eb21065?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1732528577133-343b2a515839?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1706022626447-00c598315c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1732649124686-3bab54f79aa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1732624697703-c5b0d3110cb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1732295160378-78fbd97fbf83?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 px-4 py-2  lg:ml-64 mt-8 md:mt-0">
        {/* heading div */}
        <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-xl text-[#007BFF] font-semibold mb-2 sm:mb-0">
            INVOICE IMAGES
          </h1>

          <p className="text-[#007BFF] hover:text-white h-10 w-full sm:w-40 border-2 border-[#007BFF] rounded-md hover:bg-[#007BFF] hover:cursor-pointer transition-all flex items-center justify-center">
            + Upload Invoice
          </p>
        </div>

        {/* Images div */}
        <div className="justify-end grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className=" bg-[hsl(214,_32%,_91%)] gap-4 flex justify-center items-center "
            >
              <img src={url} alt="Image" className="object-contain max-h-48" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvoiceImages;
