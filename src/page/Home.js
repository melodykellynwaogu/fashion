import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Collection from "./Collection.js";
import Services from "../components/Services.js";


export default function Home() {
    return `
        ${Hero()}
        ${About()}
        ${Collection(false)}
        ${Services()}
        
    `;
}
