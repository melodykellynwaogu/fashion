import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Collection from "./Collection.js";


export default function Home() {
    return `
        ${Navbar()}
        ${Hero()}
        ${About()}
        ${Collection()}
        
    `;
}