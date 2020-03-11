import React from "react";

import { Gallery } from "../../components/gallery";
import { Overview } from "../../components/overview";
import { Details } from "../../components/details";
import { Cta } from "../../components/cta";

export const HotelPage = props => {
  return (
    <main className="hotel-view">
      <Gallery />
      <Overview />
      <Details />
      <Cta />
    </main>
  );
};
