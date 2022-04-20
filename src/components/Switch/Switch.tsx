import { useState } from "react";
import "./styles.scss";
interface MIDIProps {
  WebMidi: any,
  isConnected: boolean,
  name: string,
  controller: number,
  enabled: boolean,
}

function Switch(mprops: MIDIProps) {
  const [isEnabled, setIsEnabled] = useState<boolean>();
  const handleChange = (e: any, c: number) => {
    setIsEnabled(e);
    if (mprops.isConnected === true) {
            var output = mprops.WebMidi.getOutputById(mprops.WebMidi.inputs[0].id);
            output = mprops.WebMidi.getOutputByName(mprops.WebMidi.inputs[0].name);
            e === true ? output.sendControlChange(c, 127, "all") : output.sendControlChange(c, 0, "all");
    }
  };
  return (
    <div className='Switch-container'>
      <p>{mprops?.name}</p>
      <div className='Switch-circle' onClick={() => handleChange(mprops.enabled, mprops.controller)}></div>
    </div>
  )
}

export default Switch;