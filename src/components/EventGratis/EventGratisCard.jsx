import React from "react";

const EventGratisCard = ({ event }) => {
  const ratings = event.eventRatings || [];
  const averageRating = ratings.length
    ? (ratings.reduce((sum, val) => sum + val, 0) / ratings.length).toFixed(1)
    : "0.0";
  const stars = Math.floor(averageRating);

  return (
    <div className="border border-gray-300 pb-4 overflow-hidden rounded-lg transition duration-300 active:scale-95 hover:shadow-md hover:bg-gray-100 bg-white">
      <img
        className="w-full h-36 object-cover sm:h-40 md:h-44 lg:h-48"
        src={event.eventThumbnail}
        alt="Event Thumbnail"
      />

      <div className="p-3 text-left text-sm sm:text-base">
        <h3 className="text-sm font-semibold leading-tight">{event.EventTitle}</h3>
        <p className="text-gray-500 text-xs mb-1">{event.SiCreator?.name || "Unknown"}</p>

        <div className="flex items-center space-x-1 mt-1 mb-2 text-xs text-gray-700">
          <p>{averageRating}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">
                {i < stars ? "★" : "☆"}
              </span>
            ))}
          </div>
          <p className="text-gray-500">({ratings.length})</p>
        </div>

        <div className="text-xs text-gray-600 leading-snug">
          <p><strong>Tanggal:</strong> {event.eventDate || "TBA"}</p>
          <p><strong>Tipe:</strong> {event.eventType === "online" ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
};

export default EventGratisCard;
