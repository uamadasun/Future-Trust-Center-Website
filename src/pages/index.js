import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="hero-banner">
        <div className="opaque"></div>
        <StaticImage
          src="../images/children.png"
          alt="children in preschool learning"
          className="bannerImg"
        />
        <h1 className="fade-in">Future Trust Center</h1>
        <h2>
          <span>Nurturing</span> young hearts and minds
        </h2>

        
      </div>
      <section className="intro">
          <p>
            At Future Trust Center, we're passionate about
            providing a safe and nurturing environment where children can learn,
            grow, and play. Our team of experienced caregivers is dedicated to
            ensuring that each child in our care receives individual attention
            and care tailored to their unique needs.
          </p>
        </section>

        <section className="reviews">
          <h2>Hear From Our Parents</h2>

        </section>
    </Layout>
  );
};
export default Home;
