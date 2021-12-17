import React, { useState } from 'react';
import Intro from "./intro.mp3";
import { Howl, Howler } from "howler";

import "../../styles/components/Audio.css";
const Audio = () => {
    const [music, setMusic] = useState(0);
    let sound = new Howl({
        src: Intro,
        autoplay: false
    });
    const prender = () => {
        if (music === 0) {
            sound.play();
            setMusic(1);
        }
    }

    Howler.volume(0.6);
    const apagar = () => {
        sound.stop();
    }

    return (
        <>

            {music === 0 && <button className=" on" onClick={() => { prender() }}><i className="fas fa-music"></i></button>}
            <button className="btn-music off" onClick={() => apagar()}><i className="fas fa-music"></i></button>
        </>
    )
}

export default Audio;