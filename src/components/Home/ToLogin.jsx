import React, { useState } from "react";
import { SignIn, useUser } from "@clerk/clerk-react";

const ToLogin = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded || isSignedIn) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-t from-blue-200 via-white to-blue-20">
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Masuk untuk memudahkan booking
      </h2>
      <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
        Silahkan Klik Tombol di bawah ini
      </p>

      <button
        onClick={() => setOpenSignIn(true)}
        className="mt-5 bg-[#00ADB5] text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium transition duration-300 hover:bg-blue-400 active:scale-90"
      >
        Masuk
      </button>

      {/* Clerk Sign In Modal */}
      {openSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-4 rounded-xl shadow-xl relative max-w-md w-full">
            <button
              onClick={() => setOpenSignIn(false)}
              className="absolute top-2 right-2 text-black text-xl font-bold"
            >
              ✕
            </button>
            <SignIn
              afterSignInUrl="/"
              appearance={{ elements: { formButtonPrimary: "bg-[#00ADB5]" } }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToLogin;
