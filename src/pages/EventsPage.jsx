// /src/pages/EventsPage.js
import React from 'react';
import EventCard from '../components/EventCard'; // Assumi che questo componente gestisca la visualizzazione di un singolo evento

const EventsPage = () => {
  // Assumi che tu abbia una lista di eventi caricata da uno stato globale o da un API
  const events = [
    { id: 1, title: "English Workshop", date: "2024-04-22", description: "Join us for an intensive English workshop focusing on conversational skills." },
    { id: 2, title: "Literature Evening", date: "2024-05-05", description: "Explore classic English literature in our monthly literature evening." }
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
