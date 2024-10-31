import Navbar from "../../components/Navbar";
import "./index.css";
import "../../components/Navbar/index.css";
import img from "../../assets/media/img/8C85BF82-6003-4767-A820-067FE5159536.png";
import cv from "../../assets/media/pdf/cv.pdf";
import CardContainer from "../../components/cardContainer";
const Home = () => {
  return (
    <>
      <Navbar />
      <header></header>
      <section className="box">
        <section className="w-100 d-flex justify-content-center">
          <div className="content">
            <div className="about d-lg-flex">
              <div className="d-flex align-items-center align-items-lg-start imgContainer">
                <img src={img} alt="emoji" />
                <div className="d-lg-none">
                  <h1>Jonathan L.</h1>
                  <h2>Développeur front-end</h2>
                </div>
              </div>
              <div className="rgt">
                <h1 className="d-none d-lg-block">
                  Jonathan.L
                  <br />
                  Développeur front-end
                </h1>
                <p>
                  En tant que développeur web passionné par les technologies de
                  l'information et de la communication, je me suis spécialisé
                  dans le développement fullstack, maîtrisant aussi bien le
                  front-end que le back-end. Grâce à des formations
                  enrichissantes et des recherches approfondies sur des
                  plateformes comme OpenClassrooms par exemple. J'ai ainsi
                  acquis une solide expertise des langages et outils essentiels
                  tels que HTML, CSS, JavaScript, ainsi que des frameworks
                  front-end comme React. Mon parcours m'a également permis de
                  développer de fortes compétences dans le back-end, avec PHP,
                  SQL, Express et MongoDB, notamment. Ces technologies me
                  permettent de concevoir des applications web complètes,
                  dynamiques et robustes, adaptées aux besoins de chaque projet.{" "}
                  <br />
                  Toujours à l'affût des dernières tendances et innovations dans
                  le domaine, je suis capable de proposer des solutions
                  techniques optimales, innovantes et sur mesure. Si vous
                  recherchez un développeur web fullstack compétent, capable de
                  mener un projet du concept à la mise en ligne, je suis à votre
                  disposition pour discuter de vos besoins et y apporter des
                  solutions adaptées.
                </p>
              </div>
            </div>
            <a href={cv} download className="cvLink">
              Voir mon CV
            </a>
            <cardContainer />
            <div>
              <h1>contact</h1>
              <form>
                <input type="text" placeholder="Email :" />
                <br></br>
                <textarea name="" id=""></textarea>
              </form>
            </div>
          </div>
        </section>

        {
          <div className="filter">
            <span>
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        }
      </section>
    </>
  );
};

export default Home;
