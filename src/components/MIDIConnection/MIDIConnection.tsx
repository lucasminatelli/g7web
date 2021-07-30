import React, { useEffect, useState } from 'react';
import WebMidi from 'webmidi';
import G7 from '../G7';
import './styles.scss';

function MIDIConnection() {
    const [isSysexEnabled, setIsSysexEnabled] = useState<boolean>(false);
    const [isConnected, setIsConnected] = useState<boolean>(false);

    // Hooks
    useEffect(() => {
        enableSysex();
        checkConnection();
    })

    // Functions
    function enableSysex() {
        WebMidi.enable(function (err) {
            if (err) {
                console.warn(err);
            } else {
                setIsSysexEnabled(true);
            }
        }, true);
    }

    function checkConnection() {
        if (isSysexEnabled === true) {
            WebMidi.addListener("connected", function (e) {
                setIsConnected(true);
            });
            WebMidi.addListener("disconnected", function (e) {
                setIsConnected(false);
            });
        } else {
            setIsSysexEnabled(false);
        }
    }

    // Return
    return (
        <div className="MIDIConnection-container">
            <header className="MIDIConnection-body" >
                {isConnected === true ?
                    <G7 WebMidi={WebMidi} isConnected={isConnected} />
                    :
                    <>
                        <img className="MIDIConnection-logo" src="midiconnector.png" alt="MIDI Connect" />
                        please connect your MIDI Adpater
                        <div className="MIDIConnection-disconnected">disconnected</div>
                        <div className="MIDIConnection-loading" />
                    </>
                }
            </header>
        </div>
    )
}

export default MIDIConnection;