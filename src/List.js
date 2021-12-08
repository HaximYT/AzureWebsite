import "./styles/globals.css";
import Cardbox from "./components/Cardbox";

import eternity from "./assets/eternity.png";
import nihon from "./assets/nihon.png"
import krnl from "./assets/krnl.png";
import oxygenu from "./assets/oxygen.png";
import electron from "./assets/electron.png";
import dansploit from "./assets/dansploit.png";

function Exploits() {
  return (
      <section id="exploits">
        <div className="flex flex-flow-col auto-cols-auto flex-wrap justify-center pb-9">
        <Cardbox
            image={eternity}
            name="Eternity"
            description="No key system, multiple APIs, settings, a custom script hub with HttpGet and GetObjects, and many other features! We have many competent developers and update very quickly"
            link="https://cdn.discordapp.com/attachments/841444891157594152/849079371041734656/Eternity_Bootstrapper.zip"
          />
          <Cardbox
            image={krnl}
            name="KRNL"
            description="WORKING NOW, 24 HOUR KEYS, GETCONNECTIONS, LUAU DECOMPILER, GETHIDDENPROPERTY, SETHIDDENPROPERTY, FULL DEBUG LIBRARY, AND MANY MORE"
            link="https://cdnwrd2.com/r/54921/1627891997980/KRNLWRD.rar"
          />
          <Cardbox
            image={nihon}
            name="Nihon"
            description="3 Day Keys, High Quality Executor, Custom Lua Bytecode Interpreter, A Lot Of Features And More! Level 7 premium quality exploit with multiple APIs and a custom DLL"
            link="https://cdn.discordapp.com/attachments/857405268882882563/870787736406216764/Nihon.zip"
          />
          <Cardbox
            image={oxygenu}
            name="Oxygen U"
            description="WORKING NOW, 24 HOUR KEYS, Bytecode Transpiler, Full debug lib, Hookfunction, getconnections, No crashes, and many other functions! OWL HUB and saveinstance supported!"
            link="https://cdn.discordapp.com/attachments/841081002629529632/859489844605878292/OXY_Installer.exe"
          />
          <Cardbox
            image={electron}
            name="Electron"
            description="Electron is an OP Roblox exploit which uses protoconversion and LuaU. 5 HOUR KEYS, SUPPORTS OWL HUB, ZYREX HUB, Full debug lib, hookfunction, and so much more!"
            link="https://cache.ryos.best/a/Electron.zip"
          />
          <Cardbox
            image={dansploit}
            name="Dansploit"
            description="WORKING EXCLUSIVE NEW Dansploit Offers, Superior Execution, New Functions, New Scripts, New Interface With brand Gamehub The Ultimate Hack for your game Owlhub Support!"
            link="https://cdnwrd2.com/r/49991/1627569757832/Dansploit%2029-7.rar"
          />
        </div>
      </section>
  );
}

export default Exploits;
