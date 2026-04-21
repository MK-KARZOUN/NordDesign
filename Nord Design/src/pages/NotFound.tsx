import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <p className="not-found-kicker">404</p>
        <h1>Page not found</h1>
        <p className="body-xl muted-text-white">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="not-found-actions">
          <Link className="button-lg button-accent" to="/">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
