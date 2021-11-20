import { Geoposition, Geolocation } from "@ionic-native/geolocation";
import React from "react";

const getPosition = async (
  position: Geoposition | undefined,
  setPosition: React.Dispatch<React.SetStateAction<Geoposition | undefined>>
) => {
  try {
    if (!position) {
      const currentPosition = await Geolocation.getCurrentPosition();
      setPosition(currentPosition);
      console.log(currentPosition);
    }
  } catch (error: any) {
    // present(error.message, 3000);
    console.log("Error getting location", error);
  }
};

export default getPosition;
