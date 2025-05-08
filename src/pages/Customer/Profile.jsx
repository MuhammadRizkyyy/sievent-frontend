import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const navigate = useNavigate();

  if (!isLoaded || !isSignedIn) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const handlePasswordReset = () => {
    window.location.href = "https://clerk.com/reset-password";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md px-4 py-4 flex flex-col gap-4 md:gap-6">
        <h2 className="text-xl font-bold">Dashboard</h2>

        <div className="flex flex-col md:space-y-2 space-y-2 md:flex-col">
          {[
            { key: "dashboard", label: "Informasi Akun" },
            { key: "tickets", label: "Tiket Saya" },
            { key: "settings", label: "Reset Kata" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              className={`text-left w-full px-4 py-2 rounded-md text-sm font-medium ${
                selectedTab === tab.key
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              } transition`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 md:mt-auto">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#00ADB5] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-500 transition active:scale-90"
          >
            Kembali ke Beranda
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        {selectedTab === "dashboard" && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-4">Informasi Akun</h3>
            <div className="text-sm space-y-2">
              <p>
                <strong>Nama:</strong> {user.fullName || "Tidak tersedia"}
              </p>
              <p>
                <strong>Email:</strong> {user.primaryEmailAddress.emailAddress}
              </p>
            </div>
          </div>
        )}

        {selectedTab === "tickets" && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-4">Tiket Saya</h3>
            <p className="text-sm text-gray-600">(Daftar tiket yang dibeli akan ditampilkan di sini)</p>
          </div>
        )}

        {selectedTab === "settings" && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-4">Reset Kata Sandi Saya</h3>
            <p className="text-sm mb-4 text-gray-700">
              Klik tombol di bawah ini untuk mereset kata sandi akun Anda.
            </p>
            <button
              onClick={handlePasswordReset}
              className="bg-[#00ADB5] text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Reset Kata Sandi
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
