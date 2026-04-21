import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/UI/Button";
import ApproachCard from "../components/ApproachCard";
import InsightCard from "../components/InsightCard";
import ServiceMainCard from "../components/ServiceMainCard";
import ServiceStackCard from "../components/ServiceStackCard";
import { approachCards, insightCards, services } from "../constants";
import "../styles/Home.css";

const Home = () => {
  const [mainCardIndex, setMainCardIndex] = useState(0);
  const [stackedCardIndexes, setStackedCardIndexes] = useState([1, 2, 3]);

  const mainCard = services[mainCardIndex];

  const handleServiceCardClick = (nextMainCardIndex: number) => {
    setStackedCardIndexes((currentStack) => [
      ...currentStack.filter((cardIndex) => cardIndex !== nextMainCardIndex),
      mainCardIndex,
    ]);
    setMainCardIndex(nextMainCardIndex);
  };

  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Thoughtful web design for <br /> modern businesses
          </h1>
          <p className="body-xl muted-text-white">
            Clear, conversion-focused websites for businesses that want a
            stronger <br /> digital presence without the noise.
          </p>
          <Button
            className="button-lg button-light"
            name="Start a project"
            rightIcon="bi bi-arrow-right-short"
          />
        </div>
      </section>

      <section className="approach">
        <div className="approach-cards">
          {approachCards.map((card) => (
            <ApproachCard card={card} key={card.title} />
          ))}
        </div>

        <div className="approach-copy">
          <h2>A clearer approach to web design</h2>
          <p className="body-lg muted-text-white">
            Nord Design Studio helps small and medium-sized businesses create
            websites that feel professional, easy to use, and built with
            purpose.
          </p>
          <p className="body-lg muted-text-white">
            Our approach combines thoughtful design, strong user experience, and
            performance-minded decisions to create digital experiences that
            support both users and business goals.
          </p>
          <p className="body-lg muted-text-white">
            We focus on clarity, structure, and purposeful digital
            choices-building websites that feel modern, refined, and easier to
            navigate.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="section-header">
          <h2>Our Services</h2>
          <a href="/services"> Explore all our services </a>
        </div>

        <div className="services-grid">
          <ServiceMainCard card={mainCard} />

          <div className="service-stack">
            {stackedCardIndexes.map((cardIndex) => {
              const card = services[cardIndex];

              return (
                <ServiceStackCard
                  card={card}
                  key={card.title}
                  onSelect={() => handleServiceCardClick(cardIndex)}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="insights">
        <div className="insights-header">
          <div>
            <h2>Latest Insights</h2>
            <p className="body-lg muted-text-white">
              Thoughts on design, performance, and building better digital
              experiences.
            </p>
          </div>
          <a href="/insights">View all</a>
        </div>

        <div className="insights-grid">
          {insightCards.map((card) => (
            <InsightCard card={card} key={card.title} />
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-content">
          <img
            className="star-1"
            src="../../public/images/Star 1.svg"
            alt="star"
          />
          <img
            className="star-2"
            src="../../public/images/Star 1.svg"
            alt="star"
          />
          <h2>Ready To Build Your Site</h2>
          <p className="body-xl muted-text-dark">
            Let&apos;s talk about your project and how we can help you create a
            website that&apos;s both beautiful and effective.
          </p>
          <Button
            className="button-dark button-lg"
            name="Start a conversation"
            rightIcon="bi bi-arrow-right-short"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Home;
