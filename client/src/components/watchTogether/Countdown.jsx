import { useEffect, useState} from "react";
import dahmer from '../../img/dahmer.mp4'
import Stream from "./Stream";

function Countdown(){
   
    const getTime=()=> {
        const Time=new Date();
        const seconds = Time.getSeconds();
        const minutes = Time.getMinutes();
        let hours = Time.getHours();
        const addminutes=minutes +1;
        const year=Time.getFullYear();
        const month=Time.getMonth() ;
        const day=Time.getDate();
    
        localStorage.setItem('time',`${day} ${'nov'} ${year} ${hours}:${addminutes}:${seconds} `)
       
      }
      useEffect(()=> {
        getTime();
      },[]);
    
   const [expiryTime, setExpiryTime] = useState(localStorage.getItem('time'));
   const [countdownTime, setCountdownTime]= useState(
       {
           countdownlMinutes:'',
           countdownSeconds:''
       }
   );
   
    const countdownTimer=()=>{
    
        const timeInterval= setInterval(() => {

          const countdownDateTime = new Date(expiryTime).getTime(); 
          const currentTime = new Date().getTime();
          const remainingDayTime = countdownDateTime - currentTime;
          const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
          const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
     
          const runningCountdownTime={
             countdownMinutes: totalMinutes,
             countdownSeconds: totalSeconds
          }
       
          setCountdownTime(runningCountdownTime);
     
          if (remainingDayTime < 0) {
             clearInterval(timeInterval);
             setExpiryTime(false);
            }
     
         }, 1000);
    }
     
    useEffect(() => {
      countdownTimer();
    });
   
    return(
        <div className="row">
            <div className="col-sm-6">
            <div className="btn-group my-3">
            {expiryTime!==false?
                <>
                <button type="button" className="btn btn-outline-success">{countdownTime.countdownMinutes} <sub>Minutes</sub></button>
                <button type="button" className="btn btn-success">:</button>
                <button type="button" className="btn btn-outline-success">{countdownTime.countdownSeconds} <sub>Seconds</sub></button>
                </>
                :<Stream/>}
         </div>
            </div>
        </div>
    )

}
export default Countdown;