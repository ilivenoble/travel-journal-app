import React from "react"

export default function Journal(props) {
    return (
      <section className="journal-section">
        <div className="journal-img-container">
          <img src={props.imageUrl} className="journal-img" />
        </div>

        <div className="journal-text">
            <p className="location-name">{props.location}
            <span className="map-link">
              {" "}
              <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>{" "}
            </span>
            </p>

          <h1 className="journal-title">{props.title}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </section>
    );
}