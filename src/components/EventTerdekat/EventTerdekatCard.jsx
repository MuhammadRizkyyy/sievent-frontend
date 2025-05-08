import React from "react";

const EventTerdekatCard = ({ event }) => {
  const ratings = event.eventRatings || [];
  const averageRating = ratings.length
    ? (ratings.reduce((sum, val) => sum + val, 0) / ratings.length).toFixed(1)
    : "0.0";
  const stars = Math.floor(averageRating);

  return (
    <div className="border border-gray-400 pb-6 overflow-hidden rounded-lg transition duration-300 active:scale-90 hover:shadow-lg hover:bg-gray-200 bg-white">
      <img
        className="w-full h-40 object-cover"
        src={event.eventThumbnail}
        alt="Event Thumbnail"
      />

      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{event.EventTitle}</h3>
        <p className="text-gray-500 text-sm">{event.SiCreator?.name || "Unknown"}</p>

        <div className="flex items-center space-x-2 mt-1 mb-2">
          <p>{averageRating}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                {i < stars ? "★" : "☆"}
              </span>
            ))}
          </div>
          <p className="text-gray-500">({ratings.length})</p>
        </div>

        <div className="text-sm text-gray-600 mb-2">
          <p>
            <strong>Tanggal:</strong> {event.eventDate || "TBA"}
          </p>
          <p>
            <strong>Tipe:</strong> {event.eventType === "online" ? "Online" : "Offline"}
          </p>
        </div>

        <p className="text-base font-semibold text-gray-800">
          {event.eventPrice === 0 ? (
            <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold px-2 py-1 rounded">
              Free
            </span>
          ) : (
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-2 py-1 rounded">
              Rp {event.eventPrice.toLocaleString()}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default EventTerdekatCard;
