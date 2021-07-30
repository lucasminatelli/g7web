import React, { useState } from 'react';
import Display from '../Display';
import WebMidi from 'webmidi';
import './styles.scss';

function G7() {
    const [isConnected, setIsConnected] = useState<boolean>(false);

    return (
        <section className="G7-container">
            <div className="G7-body">
                <Display WebMidi={WebMidi} isConnected={isConnected} />
            </div>
        </section>
    )
}

export default G7;
