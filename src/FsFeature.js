import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import { createInstance } from "@optimizely/optimizely-sdk";

const FsFeature = ({userId}) => {
    const [decision, setDecision] = useState(null);
    const [theUser, setTheUser] = useState(null);

    useEffect(() => {
        const optiClientInst = createInstance({sdkKey: '5N15MLqGf1iLAGWJ11sxU'}); 
        optiClientInst.onReady().then(() => {
            const user = optiClientInst.createUserContext(userId);
            setTheUser(user);
            setDecision(user.decide("promo_button"));
        });

    }, [userId]);

    const handleButonClick = () => {
        if(decision){
            if(decision.variables.freeShipping){
                alert("You get free shipping!");
            } else if(decision.variables.isSale){
                alert("You get 10% off!");
            } else alert("No pormotions!");
            theUser.trackEvent('promoButtonClicked');
        };
    }

    return ( 
        <div className="feature">
            <h2>FX Example Feature</h2>
            <div>User ID is: {userId}</div>
            {decision && decision.enabled && <AnimatedButton handleButonClick={handleButonClick} 
                textColor="black"
                backColor="lightgray"
                scaleAmount={3}
                buttonText={decision.variables.buttonText} />}
        </div>
     );
}
 
export default FsFeature;