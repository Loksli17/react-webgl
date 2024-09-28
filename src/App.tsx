import Button from "./ui/Button";
import Header from "./ui/Header";

import KeydownManager from "./services/KeydownService";
import { HotkeysEvent } from "hotkeys-js";

function App() {
    const createShader: () => void = () => {
        console.log("create Shader");
    };

    const removeShader: () => void = () => {
        console.log("remove shader");
    };

    const keydownManager = new KeydownManager();

    //start component
    //? unbind? bind

    keydownManager.addContext("tool-menu");
    keydownManager.setCurrentContent("tool-menu");

    keydownManager.blockEvent("r");

    keydownManager.addEvent(
        "enter",

        (args: HotkeysEvent) => {
            console.log(args);
        },

        "tool-menu"
    );

    keydownManager.addEvent(
        "ctrl+z",

        (args: HotkeysEvent) => {
            console.log(args);
        },

        "tool-menu"
    );

    //finish component
    keydownManager.unBlockEvent("r");
    keydownManager.setCurrentContent("default");
    keydownManager.removeContext("tool-menu");

    return (
        <div className="app py-10 grid gap-14">
            <div className="px-10 w-full border-box">
                <Header content="Webgl2 react app" />
            </div>

            <div className="px-10 flex gap-6 flex-wrap w-full border-box">
                <Button
                    className="text-lg font-medium
                        px-4 
                        py-4 
                        bg-cyan-500 
                        hover:bg-cyan-600 
                        transition
                        rounded-md
                        text-white
                    "
                    onClick={createShader}
                    content={"Add shader"}
                />

                <Button
                    className="px-4 py-4 bg-cyan-200 hover:bg-cyan-300 text-lg rounded-md"
                    content="Hotkeys list"
                />
            </div>
        </div>
    );
}

export default App;
