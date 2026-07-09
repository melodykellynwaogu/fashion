import Hero from "../components/Hero.js";
import About from "../components/About.js";
import NativeDress from "../components/NativeDress.js";
import Services from "../components/Services.js";

export default function Home() {
    return `
        ${Hero()}
        ${About()}
        ${NativeDress()}
        ${Services()}
    `;
}