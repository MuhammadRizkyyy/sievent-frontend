import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const events = [
  {
    title: "SOUND WAVE FEST 2025",
    date: "16 May 2025",
    location: "Batu",
    price: "Rp.175.000",
    image: "src/assets/samplegambarcaraousel1.jpg",
  },
  {
    title: "Deliwafa Fest Vol.5 | Ramadhan",
    date: "27 Mar 2025",
    location: "Surabaya",
    price: "Rp.125.000",
    image: "src/assets/samplegambarcaraousel1.jpg",
  },
  // Tambah event lainnya...
];

const lokasiOptions = [
  { value: "", label: "-- Semua Lokasi --" },
  { value: "Jakarta", label: "Jakarta" },
  { value: "Surabaya", label: "Surabaya" },
  { value: "Bandung", label: "Bandung" },
  { value: "Bali", label: "Bali" },
  { value: "Batu", label: "Batu" },
];

const Event = () => {
  const [selectedLocation, setSelectedLocation] = useState(lokasiOptions[0]);

  const filteredEvents = selectedLocation.value
    ? events.filter((event) => event.location === selectedLocation.value)
    : events;

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16 py-10 gap-8 bg-gray-50 min-h-screen">
      {/* Sidebar Filter */}
      <aside className="w-full md:w-1/4 bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filter Event</h2>

        {/* Nama Event */}
        <div className="mb-3">
          <label htmlFor="searchTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Cari nama event
          </label>
          <input
            id="searchTitle"
            type="text"
            placeholder="Misal: Konser Musik"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Lokasi Dropdown */}
        <div className="mb-5">
          <label htmlFor="locationSelect" className="block text-sm font-medium text-gray-700 mb-1">
            Cari berdasarkan lokasi
          </label>
          <Select
            inputId="locationSelect"
            options={lokasiOptions}
            placeholder="Pilih lokasi"
            isSearchable
            value={selectedLocation}
            onChange={setSelectedLocation}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.5rem",
                borderColor: "#d1d5db",
                boxShadow: "none",
                "&:hover": { borderColor: "#3b82f6" },
              }),
            }}
          />
        </div>

        {/* Jenis Event */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Jenis Event</h3>
          <label className="flex items-center gap-2 mb-2">
            <input type="checkbox" className="accent-blue-500" />
            Online Events
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            Offline Events
          </label>
        </div>

        {/* Tombol Kembali */}
        <div className="mt-10">
          <Link to="/">
            <button className="w-full bg-[#00ADB5] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-500 transition active:scale-90">
              Kembali ke Beranda
            </button>
          </Link>
        </div>
      </aside>

      {/* Event Cards */}
      <main className="w-full md:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 active:scale-90 overflow-hidden">
              <img
                src={`${event.image}`}
                alt={event.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-bold mb-2 line-clamp-2">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  {event.location}
                </div>
                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {event.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition-all duration-200 border ${
                page === 1
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Event;
