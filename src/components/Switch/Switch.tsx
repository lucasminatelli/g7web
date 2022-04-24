import "./styles.scss";
interface MIDIProps {
  WebMidi: any,
  isConnected: boolean,
  name: string,
  controller: number,
  enabled: boolean,
  efx: any,
  setEfx: any,
}

function Switch(mprops: MIDIProps) {
  const handleChange = (e: any, c: number, n: string) => {
    const eff = mprops.efx.filter((item: { name: string; }) => item.name === n);
    const update = mprops.efx.filter((item: { name: string, }) => item.name !== n);
    update.push({
      name: eff[0].name,
      controller: eff[0].controller,
      enabled: !eff[0].enabled,
    })
    mprops.setEfx(update)
    if (mprops.isConnected === true) {
      var output = mprops.WebMidi.getOutputById(mprops.WebMidi.inputs[0].id);
      output = mprops.WebMidi.getOutputByName(mprops.WebMidi.inputs[0].name);
      e === true ? output.sendControlChange(c, 127, "all") : output.sendControlChange(c, 0, "all");
    }
  };
  return (
    <div className='Switch-container'>
      <p>{mprops?.name}</p>
      {mprops?.enabled ? <div className='Switch-circle' onClick={() =>
        handleChange(mprops.enabled, mprops.controller, mprops.name)}>
      </div> : <div className='Switch-circle enabled' onClick={() =>
        handleChange(mprops.enabled, mprops.controller, mprops.name)}>
      </div>}

    </div>
  )
}

export default Switch;