import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
// import GalleryImages from "../components/GalleryImages";

const about = () => {
  return (
    <Layout>
      <div className="aboutPage">
      <section >
        <h1>THE FUTURE TRUST WAY</h1>
        <StaticImage
          src="../images/facility4.jpg"
          alt="ftc classroom"
          className="classroomBanner"
        />
        <p>
          We are a level 3 early achiever daycare center licensed in Seattle, WA
          specializing in toddler and preschool care for over 21 years!{" "}
        </p>

        <p>
          We serve <span>12 month old</span> to <span>5 year old</span>{" "}
          children, utilizing three classroom areas, two outdoor play areas and
          one general area. </p>
        <p>We provide nutritional meals and snacks for the
          children to give them energy for a day packed with age appropriate
          activities, which include dramatic play, music, games, stories,
          reading, basic concepts (alphabet, shapes, etc.), outdoor play and
          nature walks.</p> 
        <p>We ensure a cozy, safe, healthy and inclusive
          environment that nurtures each child's emotional, intellectual, and
          social growth.
        </p>
      </section>

      <section className="facility">
        <h2 className="gallery">Our Facility</h2>
        <div className="facilityImages">
        {/* <StaticImage 
            src="../images/facility.jpg"
            alt='facility'
            className = "flexImage"
        /> */}
        <StaticImage 
            src="../images/facility2.jpg"
            alt='facility'
            className = "flexImage"
        />
        {/* <StaticImage 
            src="../images/facility3.jpg"
            alt='facility'
            className = "flexImage"
        /> */}
        <StaticImage 
            src="../images/facility5.jpg"
            alt='facility'
            className = "flexImage"
        />
        <StaticImage 
            src="../images/facility6.jpg"
            alt='facility'
            className = "flexImage"
        />
        <StaticImage 
            src="../images/facility7.jpg"
            alt='facility'
            className = "flexImage"
        />
        <StaticImage 
            src="../images/facility8.jpg"
            alt='facility'
            className = "flexImage"
        />
        <StaticImage 
            src="../images/facility10.jpg"
            alt='facility'
            className = "flexImage"
        />
        <StaticImage 
            src="../images/facility11.jpg"
            alt='facility'
            className = "flexImage"
        />

        </div>
      </section>

      <section className="hours">
        <h2>Hours of Operation</h2>
        <p>We are open 6am to 6pm, Monday - Friday with <span>full/part time</span> openings currently available!  </p>
      </section>
      </div>

    </Layout>
  );
};

export default about;
