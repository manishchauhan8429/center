import Hero from "./hero";
import Layout from "../layout";
import Category from "./category";
import Course from "./course";
import Skills from "./skill";
import Trand from "./tranding";
import Clints from "./clints";
import Balaji from "./balaji";
import Feadback from "./feadback";
import Blog from "./blog";
const Home = ()=>{
  return(
    <>
      <Layout>
        <Hero />
        <Category />
        <Course />
        <Skills />
        <Trand />
        <Clints />
        <Balaji />
        <Feadback />
        <Blog />
      </Layout>
    </>
  )
}
export default Home;
