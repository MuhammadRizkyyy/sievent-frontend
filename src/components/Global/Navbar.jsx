import { useState } from "react";
import SearchBar from "../Navbar/SearchBar";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { SignIn, useUser } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <>
      <nav className="bg-[#222831] shadow text-sm text-white relative">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/">
            <button className="p-0 bg-transparent border-0 cursor-pointer duration-200 active:scale-90">
              <img
                src="/images/NavLogo.png"
                alt="Eventbrite Logo"
                className="h-10 transform transition-transform duration-200 ease-in-out"
              />
            </button>
            </Link>
          </div>

          {/* SearchBar (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-4 text-gray-400">
            <div className="w-[400px] lg:w-[450px] xl:w-[500px]">
              <SearchBar />
            </div>
          </div>

          {/* Right Buttons (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-2 relative">
            <button className="bg-[#393E46] hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium duration-200 active:scale-90">
              Jadi SiCreator
            </button>
            <button className="bg-[#393E46] hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium duration-200 active:scale-90">
              Bantuan
            </button>
            <div className="w-px h-7 bg-gray-400" />
            {!isLoaded ? null : isSignedIn ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 bg-[#00ADB5] hover:bg-blue-600 px-4 py-2 rounded-full text-white font-medium duration-200 active:scale-90"
                >
                  <img
                    src={user?.imageUrl}
                    alt="User Avatar"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <span>Hi, {user?.firstName || user?.username || "User"}</span>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        window.location.href = "/profile";
                        setUserMenuOpen(false);
                      }}
                    >
                      Dashboard
                    </button>
                    <SignOutButton>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Logout
                      </button>
                    </SignOutButton>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setOpenSignIn(true)}
                className="bg-[#00ADB5] hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium duration-200 active:scale-90"
              >
                Masuk
              </button>
            )}
          </div>

          {/* Hamburger (Mobile Only) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none transition-transform duration-200 active:scale-90"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Dropdown Mobile Menu */}
        <div
          className={clsx(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#222831]",
            menuOpen ? "max-h-96 opacity-100 py-4 px-6 space-y-4" : "max-h-0 opacity-0 px-6"
          )}
        >
          <div className="text-gray-400">
            <SearchBar />
          </div>

          {/* Jika sudah login (Mobile) */}
          {!isLoaded ? null : isSignedIn ? (
            <>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src={user?.imageUrl}
                  alt="User"
                  className="w-8 h-8 rounded-full border object-cover"
                />
                <span className="text-white font-medium">
                  Hi, {user?.firstName || user?.username || "User"}
                </span>
              </div>
              <button
                className="w-full text-left text-white px-4 py-2 rounded hover:bg-[#393E46] transition"
                onClick={() => {
                  window.location.href = "/profile";
                  setMenuOpen(false);
                }}
              >
                Dashboard
              </button>
              <SignOutButton>
                <button
                  className="w-full text-left text-white px-4 py-2 rounded hover:bg-[#393E46] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Logout
                </button>
              </SignOutButton>
            </>
          ) : (
            <button
              onClick={() => setOpenSignIn(true)}
              className="w-full bg-[#00ADB5] hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium active:scale-90 transition"
            >
              Masuk
            </button>
          )}

          <div className="w-full h-px bg-gray-400" />

          <button className="w-full bg-[#393E46] hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium active:scale-90 transition">
            Jadi SiCreator
          </button>
          <button className="w-full bg-[#393E46] hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium active:scale-90 transition">
            Bantuan
          </button>
        </div>
      </nav>

      {/* Sign In Modal */}
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
              signInUrl="/sign-in"
              appearance={{ elements: { formButtonPrimary: "bg-[#00ADB5]" } }}
            />
          </div>
        </div>
      )}
    </>
  );
}
