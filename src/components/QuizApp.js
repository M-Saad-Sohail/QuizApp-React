import React, { useContext, useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { Link } from 'react-router-dom'
import { QuizContext } from './QuizContext';

const QuizApp = () => {
    const [array, setArray] = useState([
        {
            id: 1,
            question: "What temperature does water boil at?",
            options: ["50°C", "25°C", "100°C", "150°C"],
            answer: "100°C"
        },
        {
            id: 2,
            question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
            options: ["Wole Soyinka", "William Shakespeare", "Ngozi Chimamanda Adichie", "Dan Brown"],
            answer: "William Shakespeare"
        },
        {
            id: 3,
            question: "What did the crocodile swallow in Peter Pan?",
            options: ["A Book", "A Computer", "Alarm Clock", "A pair of shoes"],
            answer: "Alarm Clock"
        },
        {
            id: 4,
            question: "Which is the only mammal that can’t jump?",
            options: ["Dog", "Elephant", "Goat", "Lion"],
            answer: "Elephant"
        },
        {
            id: 5,
            question: "Who lived at 221B, Baker Street, London?",
            options: ["Tony Stark", "Morgan Freeman", "Sherlock Holmes", "Samuel L. Jackson"],
            answer: "Sherlock Holmes"
        },
    ])
    const { queArr } = useContext(QuizContext);
    const [id, setId] = useState(0)
    const [boxStyle, setBoxStyle] = useState("block")
    const [resultStyle, setResultStyle] = useState("hidden")
    const [option, setOption] = useState("")
    const [num, setNum] = useState(0)
    useEffect(() => {
        setArray(prevArray => [...prevArray, ...queArr]); // Set localArray with queArr from context when queArr updates
    }, [queArr]);
    // useEffect(() => {
    //     setArray([...array, ...queArr]); // Set localArray with queArr from context when queArr updates
    // }, [queArr]);
    const handleNextBtn = () => {
        setOption(""); // Reset the option before processing the next question

        if (option === array[id].answer) {
            setNum(prevNum => prevNum + 1);
        }
        if (id < array.length - 1) {
            setId(id + 1);
        } else {
            setBoxStyle("hidden");
            setResultStyle("block");
        }
    };


    const handleOption = (e) => {
        setOption(e.target.value);

    }
    return (
        <div className="bg-purple-300 min-h-screen flex flex-col items-center justify-center">
            <h1 className={`${boxStyle} text-3xl font-bold mb-6`}>Quiz Application</h1>
            {/* Box */}
            <div id='box' className={`bg-white ${boxStyle} w-1/2 p-8 rounded-lg shadow-lg mb-8`}>
                <div className="py-4 mx-4">
                    <h1 className='text-xl font-semibold'>Q{id + 1}. {array[id].question}</h1>
                </div>
                <div className='space-y-4'>
                    <Checkbox onClick={((e) => handleOption(e)

                    )} name={array[id].options[0]} questionId={array[id].id} checked={option} />
                    <Checkbox onClick={((e) => handleOption(e))} name={array[id].options[1]} questionId={array[id].id} checked={option} />
                    <Checkbox onClick={((e) => handleOption(e))} name={array[id].options[2]} questionId={array[id].id} checked={option} />
                    <Checkbox onClick={((e) => handleOption(e))} name={array[id].options[3]} questionId={array[id].id} checked={option} />

                </div>
                <div className="buttons p-4">
                    <button onClick={handleNextBtn} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Next</button>
                </div>
            </div>
            {/* Box */}
            <div className={`mt-8 ${resultStyle} sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/4 text-center absolute top-10 space-y-4 bg-white rounded-2xl p-6`}>
                <h1 className='text-3xl font-bold'>Result:</h1>
                <div className='flex justify-between'>
                    <h1 className="text-xl font-semibold">Marks: {num} out of  {array.length} </h1>
                    <h1 className="text-xl font-semibold">Percentage: {(num / array.length) * 100}%</h1>
                </div>
            </div>

            <div className="mt-8 text-center space-y-4">
                <h1 className='text-3xl font-semibold'>Do you want to add more questions in the quiz?</h1>
                <Link to='/add'>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Add</button>
                </Link>
            </div>
        </div>
    )
}

export default QuizApp
