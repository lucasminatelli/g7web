import "./styles.scss";
interface MIDIProps {
  WebMidi: any,
  isConnected: boolean,
  name: string,
  controller: number,
  enabled: boolean,
}


function Switch(mprops: MIDIProps) {
  const handleChange = (e: any, c: number) => {
    if (mprops.isConnected === true) {
            var output = mprops.WebMidi.getOutputById(mprops.WebMidi.inputs[0].id);
            output = mprops.WebMidi.getOutputByName(mprops.WebMidi.inputs[0].name);
            e === true ? output.sendControlChange(c, 127, "all") : output.sendControlChange(c, 0, "all");
    }
  };
  return (
    <div className='Switch-container'>
      <p>{mprops?.name}</p>
      <div className='Switch-circle'></div>
    </div>
  )
}

export default Switch;