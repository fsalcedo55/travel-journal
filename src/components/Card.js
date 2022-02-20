import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

export default function Card(props) {
  return (
    <div className="flex gap-6 mx-16 my-20">
      <img
        src={props.cardData.photo}
        alt="travelphoto"
        className="h-72 rounded-lg"
      />
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex gap-5">
          <div className="flex gap-1">
            <LocationMarkerIcon className="h-5" fill="#dc2626" />
            <h4 className="text-gray-700">{props.cardData.location}</h4>
          </div>
          <a
            href={props.cardData.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="font-bold text-3xl text-gray-800">
          {props.cardData.name}
        </h1>
        <p>
          <b className="text-gray-700">
            {props.cardData.dateStart} - {props.cardData.dateEnd}
          </b>
        </p>
        <p className="text-gray-700">{props.cardData.description}</p>
      </div>
    </div>
  );
}
