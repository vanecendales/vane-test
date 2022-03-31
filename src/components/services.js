import React from "react";
import Card from "../modules/Card";
import "../styles/services.scss";

export default function Services(props) {
  const eventsList = props.data.map((event) => (
    <Card id={event.id} image={event.image} title={event.title} description={event.description} />
  ));

  return <div className="services-list">{eventsList}</div>;
}