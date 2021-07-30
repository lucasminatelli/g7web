import React, { useEffect, useState } from 'react';
import './styles.scss';

interface WebMIDIProps {
    WebMidi: any,
    isConnected: boolean
}

interface IOProps {
    connection?: string,
    id?: string,
    manufacturer?: string,
    name?: string,
    state?: string,
    type?: string
}

export function Display(mprops: WebMIDIProps) {
    const [inputs, setInputs] = useState<IOProps>({});

    useEffect(() => {
        if (mprops.isConnected === true) {
            setInputs(mprops.WebMidi.inputs[0]);
        }
    }, [mprops.isConnected, mprops.WebMidi.inputs])

    return (
        <>
            <div className="Display-container">
                <p className="Display-words">
                    Device: {inputs.name}
                    <br />
                    Status: {inputs.state}
                </p>
            </div>
        </>
    )
}
