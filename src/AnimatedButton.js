import { motion } from "framer-motion"
import { useState } from "react"

const AnimatedButton = ({ handleButonClick, scaleAmount, textColor, backColor, buttonText }) => {

    function buttonClicked(){
        handleButonClick();
    }

    return (
        <div>
            <motion.button whileHover={{ scale: scaleAmount, color: textColor, backgroundColor: backColor }} 
                onClick={ () => buttonClicked() }>
                {buttonText}</motion.button>
        </div>
    )
}
export default AnimatedButton