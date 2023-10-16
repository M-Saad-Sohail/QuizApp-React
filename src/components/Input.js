import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input value={props.value} className={`rounded-xl outline-0 border-[3px] border-[#0d6efd] px-2 py-1.5 ${props.width}`} placeholder={props.placeholder} type="text" onChange={props.onChange} />
        </div>
    )
}

export default Input