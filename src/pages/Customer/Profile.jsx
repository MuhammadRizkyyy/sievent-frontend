import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [fullName, setFullName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();

  if (!isLoaded || !isSignedIn) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const handleNameChange = async () => {
    if (fullName.trim() === "") return;
    await user.update({ fullName });
    alert("Nama berhasil diperbarui!");
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    setTimeout(() => {
      setUploading(false);
      alert("Foto profil berhasil diperbarui (simulasi)!");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">Profil Saya</h2>
          <nav className="flex flex-col space-y-2">
            {["dashboard", "verification", "tickets", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`text-left px-4 py-2 rounded ${
                  selectedTab === tab ? "bg-blue-100" : "hover:bg-gray-200"
                }`}
              >
                {tab === "dashboard" && "Dashboard Profil"}
                {tab === "verification" && "Verifikasi Identitas"}
                {tab === "tickets" && "Tiket Saya"}
                {tab === "settings" && "Pengaturan Akun"}
              </button>
            ))}
          </nav>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-[#00ADB5] text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-blue-400 active:scale-90"
        >
          Kembali ke Beranda
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {selectedTab === "dashboard" && (
          <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-semibold mb-4">Dashboard Profil</h3>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={previewImage || user.imageUrl}
                alt="Foto Profil"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <label className="inline-flex items-center gap-2 text-sm cursor-pointer text-blue-600 hover:underline">
                  <Upload className="w-4 h-4" />
                  <span>Ganti Foto</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
                {uploading && <p className="text-xs text-gray-500 mt-1">Mengunggah...</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={user.fullName}
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleNameChange}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Simpan Nama
              </button>
            </div>

            <p className="mb-2">
              <strong>Email:</strong> {user.primaryEmailAddress.emailAddress}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {user.publicMetadata.verified ? "Terverifikasi" : "Belum Terverifikasi"}
            </p>
          </div>
        )}

        {selectedTab === "verification" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Verifikasi Identitas</h3>
            <p className="mb-2">Unggah KTP / SIM / Paspor:</p>
            <input type="file" accept="image/*,.pdf" className="mb-4" />

            <p className="mb-2">NIK (jika perlu):</p>
            <input type="text" placeholder="Masukkan NIK" className="w-full p-2 border rounded mb-4" />

            <p className="mb-2">Tanggal Lahir:</p>
            <input type="date" className="w-full p-2 border rounded mb-4" />

            <button className="bg-[#00ADB5] text-white px-4 py-2 rounded hover:bg-blue-600">
              Kirim Verifikasi
            </button>

            <div className="mt-6 text-sm text-gray-600">
              ⚠️ Untuk mengakses event 18+, silakan verifikasi identitas terlebih dahulu.
            </div>
          </div>
        )}

        {selectedTab === "tickets" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tiket Saya</h3>
            <p>(Daftar tiket yang dibeli akan ditampilkan di sini)</p>
          </div>
        )}

        {selectedTab === "settings" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pengaturan Akun</h3>
            <p>(Pengaturan akun seperti email, password, dll.)</p>
          </div>
        )}
      </main>
    </div>
  );
}
