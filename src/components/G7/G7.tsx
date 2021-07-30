import React from 'react';
import Display from '../Display';
import './styles.scss';

interface WebMIDIProps {
    WebMidi: any,
    isConnected: boolean
}


function G7(mprops: WebMIDIProps) {
    return (
        <>
            <section className="G7-container">
                <div className="G7-body">
                    <Display WebMidi={mprops.WebMidi} isConnected={mprops.isConnected} />
                    <section className="G7-expression">
                        <span>ZOOM</span>
                    </section>
                </div>
            </section>
        </>
    )
}

export default G7;
