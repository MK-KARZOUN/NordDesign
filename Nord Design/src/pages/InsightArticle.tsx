import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FiveEasyWaysToReduceDigitalImpactArticleBody from "../components/Articles/FiveEasyWaysToReduceDigitalImpactArticleBody";
import { insightCards } from "../constants";
import "../styles/InsightArticle.css";

const articleBodies = {
  "5-easy-ways-to-reduce-the-digital-impact-of-your-website":
    FiveEasyWaysToReduceDigitalImpactArticleBody,
};

const InsightArticle = () => {
  const { slug } = useParams();
  const article = insightCards.find((card) => card.slug === slug);
  const ArticleBody = slug ? articleBodies[slug as keyof typeof articleBodies] : undefined;

  if (!article) {
    return (
      <>
        <Header />
        <main className="article-page article-page--empty">
          <p className="insight-label">Article not found</p>
          <h1>We could not find that insight.</h1>
          <Link to="/">Back to home</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="article-page">
        <article className="article">
          <Link className="article-back-link" to="/insights">
            <i className="bi bi-arrow-left-short" aria-hidden="true"></i>
            Back to Insights
          </Link>

          <div className="article-header">
            <p className="insight-label">{article.label}</p>
            <h1>{article.title}</h1>
            <p className="body-xl muted-text-white">{article.description}</p>
          </div>

          <img className="article-hero-image" src={article.img} alt="" />

          <div className="article-body">
            {ArticleBody ? (
              <ArticleBody />
            ) : (
              <p>Article body content has not been added yet.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default InsightArticle;
