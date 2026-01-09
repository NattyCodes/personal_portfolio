import Image from "next/image";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlFill } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiOpenapiinitiative } from "react-icons/si";

import C from '../../../public/C_Logo.png';
import CPP from '../../../public/CPP_Logo.png';

const technologies = [
    {
        name: "Next",
        icon: <RiNextjsFill size={50}/>
    },
    {
        name: "React",
        icon: <FaReact size={50}/>
    },
    {
        name: "Javascript",
        icon: <IoLogoJavascript size={50}/>
    },
    {
        name: "SQL",
        icon: <PiFileSqlFill size={50}/>
    },
    {
        name: "Python",
        icon: <FaPython size={50}/>
    },
    {
        name: "OpenAPI",
        icon: <SiOpenapiinitiative size={50} />
    },
    {
        name: "C",
        icon: <Image src={C} alt="C" width={50}/>
    },
    {
        name: "C++",
        icon: <Image src={CPP} alt="C++" width={60}/>
    }
]

export default technologies