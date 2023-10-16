import React from 'react';

const Checkbox = (props) => {
    const isChecked = props.checked === props.name; // Determine if this radio button should be checked

    const handleChange = () => {
        if (props.onClick) {
            props.onClick({ target: { value: props.name } });
        }
    };

    return (
        <div className="flex items-center mx-5">
            <input
                onChange={handleChange}
                type="radio"
                value={props.name}
                checked={isChecked} // Set the checked prop based on whether this option is selected
                name={`question-${props.questionId}`}
                className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label className="ml-2 text-sm font-medium">{props.name}</label>
        </div>
    );
};

export default Checkbox;
