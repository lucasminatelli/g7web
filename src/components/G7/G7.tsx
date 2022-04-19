import React, { useState } from 'react';
import Display from '../Display';
import Switch from '../Switch';
import './styles.scss';
import effects from "../../data/effects.json";

interface WebMIDIProps {
    WebMidi: any,
    isConnected: boolean
}

function G7(mprops: WebMIDIProps) {
    const [efx, setEfx] = useState(effects);

    return (
        <>
            <section className="G7-container">
                <div className="G7-body">
                    <section>
                        <Display WebMidi={mprops.WebMidi} isConnected={mprops.isConnected} />
                        <div className="G7-efx-chain">
                            {
                                efx.map(e => {
                                    return (
                                        <Switch
                                            WebMidi={mprops?.WebMidi}
                                            isConnected={mprops?.isConnected}
                                            name={e?.name}
                                            controller={e?.controller}
                                            enabled={e?.enabled} />
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className="G7-expression">
                        <span>ZOOM</span>
                    </section>
                </div>
            </section>
        </>
    )
}

export default G7;
