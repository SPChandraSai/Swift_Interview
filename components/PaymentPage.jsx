import React from "react";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-[#2f2f38] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-start mb-6">
          <p className="text-gray-300 text-sm">Paying to</p>
          <h1 className="text-orange-500 text-xl font-semibold">
            homefood
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 relative">

          <h2 className="text-lg font-semibold mb-1">
            Hi Prasad Naik,
          </h2>
          <p className="text-gray-500 mb-4">9999999999</p>

          <div className="border-t pt-4">

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Order Order12312 orderNumber</span>
              <button className="text-blue-500 text-sm">
                View order ⌄
              </button>
            </div>

            <div className="flex justify-between mt-4">
              <span>Order Value</span>
              <span className="font-medium">₹5,00,000.00</span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Discount</span>
              <span>₹2,000.00</span>
            </div>

            <div className="mt-3 inline-flex items-center bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
              % Total saving of 0.4% on this order
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">
              <span>Payable Amount</span>
              <span>₹4,98,000.00</span>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="bg-white rounded-xl shadow-md mt-6 p-4 space-y-4">

          <p className="text-sm text-gray-500 mb-2">
            Select Payment Method
          </p>

          {[
            "UPI",
            "Wallet",
            "Debit / Credit Card",
            "Net Banking",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:shadow"
            >
              <span className="font-medium">{item}</span>
              <span>⌄</span>
            </div>
          ))}

          <div className="text-center text-sm text-gray-400 mt-4">
            Powered by{" "}
            <span className="font-semibold text-black">
              SWIFT PAY
            </span>
          </div>

          {/* Footer button */}
          <button className="w-full bg-gray-600 text-white py-4 rounded-lg mt-6 hover:bg-gray-700 transition">
            PROCEED TO PAY
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentPage;
