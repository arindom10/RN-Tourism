import { useState } from "react";

const Certificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = (e) => {
    e.preventDefault();

    const validIds = ["12345", "23456"];
    if (validIds.includes(certificateId)) {
      setVerificationResult("success");
    } else {
      setVerificationResult("failure");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-screen-md w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-[#a12326] text-center mb-4">
          Verify Certificate
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Enter the certificate ID below to verify its authenticity.
        </p>

        <form onSubmit={handleVerification} className="space-y-6">
          <div>
            <label
              htmlFor="certificateId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Certificate ID
            </label>
            <input
              type="text"
              id="certificateId"
              name="certificateId"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Enter certificate ID"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#a12326] text-white font-medium text-sm uppercase rounded-md hover:bg-[#871d1f] transition duration-300"
            >
              Verify
            </button>
          </div>
        </form>

        {/* Verification Result */}
        {verificationResult === "success" && (
          <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-md">
            ✅ The certificate is valid and authentic!
          </div>
        )}
        {verificationResult === "failure" && (
          <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-md">
            ❌ Invalid certificate ID. Please check and try again.
          </div>
        )}
      </div>

      {/* Additional Info */}
      <div className="mt-8 max-w-screen-md text-center text-gray-600">
        <p>
          If you have any issues verifying a certificate, please{" "}
          <a
            href="/contact"
            className="text-[#a12326] font-medium hover:underline"
          >
            contact us
          </a>{" "}
          for assistance.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
