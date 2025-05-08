import React from 'react';
import EventGratisCard from '../EventGratis/EventGratisCard';

const dummyFreeEvents = [
  {
    _id: "free-1",
    EventTitle: "Seminar Karir Digital",
    SiCreator: { name: "Komunitas Startup Indonesia" },
    eventRatings: [5, 4, 5, 4],
    eventThumbnail: "src/assets/samplegambarcaraousel1.jpg",
    eventDate: "2025-06-10",
    eventType: "online",
  },
  {
    _id: "free-2",
    EventTitle: "Pelatihan Desain Gratis",
    SiCreator: { name: "Creative School" },
    eventRatings: [4, 4, 4, 5],
    eventThumbnail: "src/assets/samplegambarcaraousel1.jpg",
    eventDate: "2025-07-05",
    eventType: "offline",
  },
  {
    _id: "free-3",
    EventTitle: "Webinar Mental Health",
    SiCreator: { name: "Health Community" },
    eventRatings: [5, 5, 5],
    eventThumbnail: "src/assets/samplegambarcaraousel1.jpg",
    eventDate: "2025-08-01",
    eventType: "online",
  },
  {
    _id: "free-4",
    EventTitle: "Workshop Coding Dasar",
    SiCreator: { name: "Tech Academy" },
    eventRatings: [3, 4, 3],
    eventThumbnail: "src/assets/samplegambarcaraousel1.jpg",
    eventDate: "2025-09-12",
    eventType: "offline",
  },
];

const EventGratis = () => {
  return (
    <div className="max-w-[100%] sm:max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-blue-100 shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Event Gratis</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {dummyFreeEvents.map((event) => (
          <EventGratisCard key={event._id} event={event} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="border border-blue-600 bg-[#00ADB5] px-6 py-3 rounded-md text-white text-sm font-medium transition duration-300 hover:bg-blue-600 active:scale-90">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default EventGratis;
