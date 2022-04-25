import useRecorder from "../Record/record";
export default function RecordPlayer() {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
       
        
    return (
        <div>
            <button onClick={startRecording} disabled={isRecording}>start</button>
            <button onClick={stopRecording} disabled={!isRecording}>stop</button>
            <audio src={audioURL} controls />
            <button>send</button>
        </div>
    )
}