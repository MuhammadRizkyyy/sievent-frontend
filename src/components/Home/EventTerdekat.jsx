import React from "react";
import EventTerdekatCard from "../EventTerdekat/EventTerdekatCard";

const dummyEvents = [
  {
    _id: "1",
    EventTitle: "Festival Musik Jakarta 2025",
    SiCreator: { name: "Event Organizer A" },
    eventRatings: [5, 4, 4, 5],
    eventPrice: 100000,
    discount: 20,
    eventThumbnail: "/images/samplegambarcaraousel1.jpg",
    eventDate: "2025-07-12",
    eventType: "offline",
    eventLocation: "Jakarta",
  },
  {
    _id: "2",
    EventTitle: "Tech Conference Surabaya",
    SiCreator: { name: "Tech Co" },
    eventRatings: [4, 5, 5, 4],
    eventPrice: 150000,
    discount: 10,
    eventThumbnail: "/images/samplegambarcaraousel1.jpg",
    eventDate: "2025-08-01",
    eventType: "online",
    eventLocation: "Zoom Meeting",
  },
  {
    _id: "3a",
    EventTitle: "Workshop UI/UX",
    SiCreator: { name: "Design Studio" },
    eventRatings: [3, 4, 4, 4],
    eventPrice: 0,
    discount: 0,
    eventThumbnail: "/images/samplegambarcaraousel1.jpg",
    eventDate: "2025-06-20",
    eventType: "offline",
    eventLocation: "Yogyakarta",
  },
  {
    _id: "3b",
    EventTitle: "Workshop UI/UX",
    SiCreator: { name: "Design Studio" },
    eventRatings: [3, 4, 4, 4],
    eventPrice: 0,
    discount: 0,
    eventThumbnail: "/images/samplegambarcaraousel1.jpg",
    eventDate: "2025-06-20",
    eventType: "offline",
    eventLocation: "Jakarta",
  },
  {
    _id: "3c",
    EventTitle: "Workshop UI/UX",
    SiCreator: { name: "Design Studio" },
    eventRatings: [3, 4, 4, 4],
    eventPrice: 0,
    discount: 0,
    eventThumbnail: "/images/samplegambarcaraousel1.jpg",
    eventDate: "2025-06-20",
    eventType: "offline",
    eventLocation: "Medan",
  },
];

const EventTerdekat = () => {
  return (
    <div className="bg-gradient-to-t from-blue-200 via-white to-blue-20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Event Terdekat</h2>
          <button className="ml-4 border bg-[#00ADB5] border-blue-600 rounded-md px-4 py-2 font-medium text-white text-sm transition hover:bg-blue-600 hover:text-white active:scale-90 duration-300">
            Selengkapnya
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {dummyEvents.map((event) => (
            <EventTerdekatCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTerdekat;
