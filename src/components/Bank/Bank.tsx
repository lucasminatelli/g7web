import banks from '../../data/banks.json';
import './styles.scss';

interface MIDIProps {
    WebMidi: any,
    isConnected: boolean
}

export default function Bank(mprops: MIDIProps) {

    const handleChange = (e: any) => {
        if (mprops.isConnected === true) {
            var output = mprops.WebMidi.getOutputById(mprops.WebMidi.inputs[0].id);
            output = mprops.WebMidi.getOutputByName(mprops.WebMidi.inputs[0].name);
            output.sendProgramChange(Number(e), ["all"], "all");
        }
    };

    return (
        <div>
            <div className="Bank-container">
                <select className="Bank-select"
                    onChange={(e) => handleChange(e.target.value)}>
                    {banks.map(b => (
                        <option key={b.value} value={b.value}>{b.name} [{b.position}]</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
