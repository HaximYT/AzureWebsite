import Cardbox from "./components/Cardbox";

import dex from "./assets/dex.png";
import valiant from "./assets/valiant.png";
import shindo from "./assets/shindo.png";
import jailbreak from "./assets/jailbreak.png";

function Scripts() {
    return (
        <section id="scripts">
          <div className="flex flex-flow-col auto-cols-auto flex-wrap justify-center pb-9">
              <Cardbox 
                image={dex} // 705 x 396
                name="Dex Explorer"
                description="A powerful game explorer GUI which shows every instance of the game and all their properties. Useful for developers and for where certain items are located in the game."
                link="https://pastebin.com/raw/5Pv7F1mN"
              />
              <Cardbox 
                image="https://user-images.githubusercontent.com/55494819/102700847-49a0ef00-4251-11eb-9011-a11c83e21b86.png"
                name="Dark Hub"
                description="Dark Hub supports over 22 games and includes features like aimbot, hitbox expander, etc. It is OP in shooter games and works in games like Arsenal and Counter Blox."
                link="https://pastebin.com/raw/NQ2B8iie"
              />
              <Cardbox 
                image={valiant}
                name="Valiant Da Hood"
                description="Valiant is a script for Da Hood and contains many features for the game, such as auto farm and kill all. It also has features like headless and hide avatar to prevent people from reporting you."
                link="https://pastebin.com/raw/4ryM2EHG"
              />
              <Cardbox 
                image={shindo}
                name="Shindo Life GUI"
                description="A GUI for Shindo Life which allows you to autofarm, auto war, auto spink/infinite spins, auto rank, anti afk, esps, and many other features! Overall, it's a very feature-rich script for Shindo Life. "
                link="https://pastebin.com/raw/5Pv7F1mN"
              />
              <Cardbox 
                image={jailbreak}
                name="Jailbreak GUI"
                description="This script for Jailbreak is one of the best out there - it's packed with dope features and an OP customizable autorob with server hop. Made by alohabeach#3448 & _Shadow_#6398"
                link="https://pastebin.com/raw/5Pv7F1mN"
              />
          </div>
        </section>
    );
  }
  
  export default Scripts;
  