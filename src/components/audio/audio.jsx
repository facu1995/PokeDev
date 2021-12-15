import React from 'react';
import Intro from "./intro.mp3";
import { Howl, Howler } from "howler";


const Audio = () => {
    const sound = new Howl({
        src: Intro,
        loop: true,
    });
    Howler.volume(1.0);
    return (
        <>
            <button onClick={() => sound.play()} >Play</button>
            <button onClick={() => sound.pause()} >Pause</button>
            <button onClick={() => sound.stop()} >Stop</button>
        </>

    )
}

export default Audio;