import useRecorder from "../Record/record";
import userContacts from "../userContacts";
export default function RecordPlayer({massages,doSearch,closeWindow}) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

    const newMassageAudio = function(){
        if(userContacts.length == 0){
            doSearch("");
            closeWindow();
            return;
        }
        var today = new Date();
        const zeroPad = (num, places) => String(num).padStart(places, '0')
        const massage = {author: "message-data float-right",authort: "message other-message float-right",clock:(zeroPad(today.getHours(),2) + ':' + zeroPad(today.getMinutes(),2))+' Today'
        ,massageValue: audioURL ,type:'audio'};
        massages.push(massage);
        doSearch("");
        closeWindow();
    }


    return (
        <div>
            <p>
                <button class="btn btn-danger" onClick={startRecording} disabled={isRecording}>start</button>
                <button class="btn btn-danger" onClick={stopRecording} disabled={!isRecording}>stop</button>
            </p>
            <p>
                <audio class="btn btn-danger" src={audioURL} controls />
            </p>
            <p>
                <button class="btn btn-primary" onClick={newMassageAudio}>send</button>
            </p>
        </div>
    )
}