import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import  Layout  from "../components/Layout";

const Home = () => {
  return(
    <Layout>
      <div>
        <StaticImage
          src='../images/children.png'
          width={1300}
          alt="children in preschool learning"
        />
      </div>
    </Layout>

  )

}
export default Home;