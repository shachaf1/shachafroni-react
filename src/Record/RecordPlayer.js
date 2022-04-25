import useRecorder from "../Record/record";
export default function RecordPlayer({massages,doSearch,closeWindow}) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

    const newMassageAudio = function(){
        var today = new Date();
        const zeroPad = (num, places) => String(num).padStart(places, '0')
        const massage = {author: "message-data float-right",authort: "message other-message float-right",clock:(zeroPad(today.getHours(),2) + ':' + zeroPad(today.getMinutes(),2))+' Today'
        ,massageValue: audioURL ,type:'audio'};
        console.log(massages);
        massages.push(massage);
        console.log(massages);
        doSearch("");
        closeWindow();
    }
       
        
    return (
        <div>
            <button onClick={startRecording} disabled={isRecording}>start</button>
            <button onClick={stopRecording} disabled={!isRecording}>stop</button>
            <audio src={audioURL} controls />
            <button onClick={newMassageAudio}>send</button>
        </div>
    )
}