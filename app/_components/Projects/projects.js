import Hockey from '../../../public/BlueLineHockey.jpg'
import ML from '../../../public/MachieneLearningProjectImage.jpg'
import MLLabs from '../../../public/MLLabs.jpg'
import Sumobots from '../../../public/sumobots.jpg'
const projects = [
    {
        title: "Blueline Hockey",
        image: Hockey,
        description: "A simple website to keep up with all of the action around the NHL",
        skills: ["Next.js", "Javascript", "MUI", "APIs"],
        githubLink: "https://github.com/NattyCodes/NHLTracker",
        websiteLink: "https://nhl-tracker-eta.vercel.app/"
    },
    {
        title: "Machiene Learning Algorithms",
        image: MLLabs,
        description: "A collection of machine learning algorithm labs spanning classification, autoassociators, and pattern recognition",
        skills: ["Python", "numpy", "matplotlib"],
        githubLink: "https://github.com/NattyCodes/Machine-Learning-Labs",
        websiteLink: ""
    },
    {
        title: "Sumobots",
        image: Sumobots,
        description: "Programmed an arduino to control a robot with the goal of staying in the ring while pushing our opponent out (Came in 2nd place)",
        skills: ["Embedded Systems", "C++", "Sensor & Motor Control"],
        githubLink: "",
        websiteLink: ""
    }
]

export default projects