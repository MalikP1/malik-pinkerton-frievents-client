import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <h1 className="home__title">Current events organised</h1>
      <section className="events">
        <article className="event-attendees">
          <p className="event-attendees__event">Event: Bowling</p>
          <p className="event-attendees__going">Friends going: 4</p>
          <p className="event-attendees__unconf">Friends unconfirmed: 2</p>
          <p className="event-attendees__unavail">Friends unavailable: 0</p>
        </article>
        <article className="event-specifics">
          <p className="event-specifics__date">Date of event: 05/02/2024</p>
          <p className="event-specifics__location">
            Location of event: Shoreditch
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
