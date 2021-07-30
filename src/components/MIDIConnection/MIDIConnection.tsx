import React from 'react';
import './styles.scss';

function MIDIConnection() {
    return (
        <div className="MIDIConnection-container">
            <header className="MIDIConnection-header" >
                <img className="MIDIConnection-logo" src="midiconnector.png" alt="MIDI Connect" />
                please connect your MIDI Adpater
                <div className="MIDIConnection-loading" />
            </header>
        </div>
    )
}

export default MIDIConnection
