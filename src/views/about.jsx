import '../index.css';

export default function About() {
  return (
    <section className="index-page">
      <div className="index-section">
        <div className="about-hero">
          <h1 className="about-title">About Flowerplant</h1>
          <p className="about-subtitle">
            Flowerplant is a tiny, opinionated plant-care companion built for curious home growers.
          </p>
        </div>

        <div className="about-stack">
          <article className="about-card">
            <div className="about-card-label">Why we built this</div>
            <div className="about-card-body">
              <p>
                Flowerplant started as a weekend project after we realised how many friends were losing
                plants to vague care labels and conflicting advice online. We wanted something calmer:
                a small, focused space that translates plant care into clear, practical routines you can
                actually follow in a real apartment.
              </p>
              <p>
                Instead of trying to catalogue every plant on earth, Flowerplant encourages you to build
                a thoughtful library of the plants you actually live with – and to keep that library up to
                date as your home, light, and routines change.
              </p>
            </div>
          </article>

          <article className="about-card">
            <div className="about-card-label">How Flowerplant helps you</div>
            <div className="about-card-body">
              <ul className="about-list">
                <li>
                  <strong>Guided templates</strong> for light, watering, soil and difficulty, so you are
                  never starting from an empty form.
                </li>
                <li>
                  <strong>Predefined reference plants</strong> you can browse on the home page to learn
                  how classic houseplants are typically cared for.
                </li>
                <li>
                  <strong>Personal care plans</strong> stored in your browser, so your notes always reflect
                  your room, your climate, and your habits.
                </li>
                <li>
                  <strong>A gentle visual design</strong> with calm greens and cyans, built to feel more
                  like a desk notebook than a dashboard.
                </li>
              </ul>
            </div>
          </article>

          <article className="about-card">
            <div className="about-card-label">Our philosophy</div>
            <div className="about-card-body">
              <p>
                We believe good plant care is about observation, not perfection. When you log your plants
                in Flowerplant, you are creating a snapshot of how they look and what they need right now.
                Over time you can adjust those details – moving a plant to a brighter window, changing its
                soil mix, or easing up on watering – and see your collection respond.
              </p>
              <p>
                Flowerplant will always stay small, fast and privacy-friendly. Your care plans live locally
                in your browser, and there are no accounts, notifications or streaks to maintain. Just you,
                your plants, and a clear set of care notes.
              </p>
              <p>
                If this app helps you rescue even one plant from the brink, we&apos;ll consider it a success.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}