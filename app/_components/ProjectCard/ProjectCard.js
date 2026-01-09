import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./projectCard.module.scss";

const ProjectCard = ({flipped=false, project: {title, 
                                image, 
                                description, 
                                skills, 
                                githubLink, 
                                websiteLink}, 
                    }) => 
{
    return(
        <div className={styles.projectConatiner}>
            <div className={styles.projectInfoContainer}>
                <div className={styles.projectTitle}>{title}</div>
                <div className={styles.projectSkillsContainer}>
                    {Array.isArray(skills) && skills.map(skill=>
                        <div key={skill} className={styles.skill}>
                            {skill}
                        </div>
                    )}
                </div>
                <div className={styles.projectDescription}>{description}</div>
                <div className={styles.links}>
                    <div>{githubLink !== "" && <FaGithub size={20} onClick={() => window.open(githubLink)}/>}</div>
                    <div>{websiteLink !== "" && <FaExternalLinkAlt size={20} onClick={() => window.open(websiteLink)}/>}</div>
                </div>
            </div>
            <div className={`${styles.projectImage} ${flipped ? styles.flipped : styles.normal}`}>
                <Image src={image} alt={title} width={600} sizes="(max-width: 1000px) 100vw, (min-width: 1000px) 33vw" style={{borderRadius: "10px", width: "100%"}}/>
            </div>
        </div>
    )
}

export default ProjectCard;