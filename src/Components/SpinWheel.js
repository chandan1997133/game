import React from 'react'
import "../style1.css";
import WheelComponent from 'react-wheel-of-prizes';
import {  useNavigate } from 'react-router-dom';
import song from '../audio/Winning-sound.mp3'
import tone from '../audio/Car Spinning Out-SoundBible.com-737522950.mp3'
function SpinWheel() {
    const audio =new Audio(song);
    const click = new Audio(tone);
    

    const segments = [
        "RS.500 Voucher",
        "Flate 50% off",
        "Nair RS. 500",
        "Free Git Box",
        "Blancr 50ml 499",
        "Flate 20% off",
    ];
    const segColors = ["#EE4040", "#F0CF50", "#EE4040", "#F0CF50", "#EE4040", "#F0CF50"];
    const navigate = useNavigate();
    const handleClick=()=>{
        click.play()
    }
    const onFinished = (winner) => {
        
        if (winner === "RS.500 Voucher") {
            sessionStorage.setItem("cupon", "PRYZE500V");
            sessionStorage.setItem("prize", "RS.500 Voucher");
        }
        else if (winner === "Flate 50% off") {
            sessionStorage.setItem("cupon", "PRYZE50%P");
            sessionStorage.setItem("prize", "Flate 50% off");
        }
        else if (winner === "Nair RS. 500") {
            sessionStorage.setItem("prize", "PRYZE500RS");
            sessionStorage.setItem("prize", "Flate 50% off");
        }
        else if (winner === "Free Git Box") {
            sessionStorage.setItem("cupon", "PRYZEBOX");
            sessionStorage.setItem("prize", "Free Git Box");
        }
        else if (winner === "Blancr 50ml 499") {
            sessionStorage.setItem("cupon", "PRYZE4990RS");
            sessionStorage.setItem("prize", "Blancr 50ml 499");
        }
        else if (winner === "Flate 20% off") {
            sessionStorage.setItem("cupon", "PRYZE20%OFF");
            sessionStorage.setItem("prize", "Flate 20% off");
        }
       audio.play()
       navigate('/winner');
    };
    return (
        <div className="App" onClick={handleClick}>
            <div>
                <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor="Golden"
                    contrastColor="white"
                    buttonText="Spin"
                    isOnlyOnce={false}
                    size={150}
                    upDuration={500}
                    downDuration={600}
                    fontFamily="Arial"
                />
            </div>
           
        </div>
    );
}

export default SpinWheel
