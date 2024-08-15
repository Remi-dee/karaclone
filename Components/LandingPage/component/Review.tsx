import React from "react";

interface ReviewProps {
  name: string;
  occupation: string;
  avatarUrl: string;
  message: string;
}

const Review: React.FC<ReviewProps> = ({
  name,
  occupation,
  avatarUrl,
  message,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg  flex items-center space-x-4 w-fit">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="w-12 h-12 rounded-full"
      />
      <div className="text-white">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-400 w-fit">{occupation}</p>
        <p className="mt-2 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Review;
