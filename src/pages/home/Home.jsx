import "./Home.css";
import profile from "../../assets/profile.jpg";
import Experience from "../../components/experience/Experience";

const Home = () => {
  return (
    <main className="home">
      <div className="home__container">
        <section className="home__resume">
          <figure className="resume__figure">
            <img src={profile} alt="" className="resume__img" />
            <p className="resume__paragraph">
              I am a Petroleum Engineer from the Universidad Industrial de
              Santander. I consider myself a sociable person with high
              capacities for leadership and teamwork, always in constant
              learning, open to constructive criticism, to improve as a person
              and in this way to be an integral professional.
            </p>
          </figure>
        </section>
        <section className="home__education">
          <h2 className="home__title">Education</h2>
          <div className="home__container">
            <Experience position={"High School"} company={"Corporacion Trigal del norte"} start={"dic 2016"}/>
            <Experience position={"Accounting Technician"} company={"Corporacion Trigal del norte"} start={"dic 2016"}/>
            <Experience position={"Petroleum Engineering"} company={"Universidad Industrial de Santander"} start={"abr 2023"}/>
          </div>
        </section>
        <section className="home__experience">
          <h2 className="home__title">Experience</h2>
          <div className="home__container">
            <Experience
              position={"Asistant Web Developer"}
              company={"Corporacion Trigal del Norte"}
              start={2022}
              end="2016"
            />
            <Experience
              position={"Social Service"}
              company={"Corporacion Trigal del Norte"}
              start={2022}
              end="2016"
            />
            <Experience
              position={"Asistant Accountant"}
              company={"Veterinaria Campeón"}
              start={2016}
            />
            <Experience
              position={"Frontend Developer"}
              company={"SPE UIS"}
              start={2021}
              end="2022"
            />
            <Experience
              position={"Drilling Intern"}
              company={"Frontera Energy Corp"}
              start={2022}
            />
            <Experience
              position={"Jr. Software Developer"}
              company={"AC Ingeniería Virtual"}
              start={2021}
              end="2023"
            />
          </div>
        </section>
      </div>
    </main>
  );
};
export default Home;
