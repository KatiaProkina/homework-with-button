import React from "react";

const MyInput = (props)=>{
    return(
        <div>
            <label>

            Поле ввода:
                <input {...props}/>
            </label>

        </div>
    )
}
export default MyInput