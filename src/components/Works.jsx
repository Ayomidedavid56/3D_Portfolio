import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import image from "../constants/image";
import { sectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
            >
              <Link to={props.source_code_link} className="flex justify-center items-center">
                <img
                  src={image.github}
                  className="w-1/2 h-1/2 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{props.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{props.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>my projects</p>
        <h1 className={`${styles.sectionHeadText}`}>projects.</h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary tex-[17px] max-w-3xl leading-[30px] first-letter:capitalize"
        >
          the following projects showcase example of my work. Each project is
          briefly described with links to my github repositories and live demo
          in it. It reflects my ability to work with different technologies,
          write neat codes and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Works, "");
