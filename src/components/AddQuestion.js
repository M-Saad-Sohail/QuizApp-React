import React, { useState } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import { Link } from 'react-router-dom'
import { useQuizContext } from './QuizContext';
const AddQuestion = () => {
    const { addQuestion } = useQuizContext();
    const [question, setQuestion] = useState("")
    const [option, setOption] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")
    const [option4, setOption4] = useState("")
    const [checked, setChecked] = useState("")
    const [id, setId] = useState(6)

    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };
    const handleOption = (e) => {
        setOption(e.target.value);
        setChecked(e.target.value);
    };
    const handleOption1 = (e) => {
        setOption1(e.target.value);
    };
    const handleOption2 = (e) => {
        setOption2(e.target.value);
    };
    const handleOption3 = (e) => {
        setOption3(e.target.value);
    };
    const handleOption4 = (e) => {
        setOption4(e.target.value);
    };
    const add = () => {
        setId(id + 1);
        let obj = {
            id: id,
            question: `${question}`,
            options: [`${option1}`, `${option2}`, `${option3}`, `${option4}`],
            answer: `${option}`,
        }
        addQuestion(obj);
        setChecked("");
        setQuestion("");
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        console.log(`Q${id} added to the Quiz App`);
    }

    return (
        <div className="bg-[#fd8a8a] min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold mb-8">Add Questions In Quiz</h2>
            <div className="bg-[#f5edce] sm:11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 p-16 rounded-3xl shadow-lg mb-8 flex flex-col items-center">

                <div className="mb-4">
                    <h4 className="text-2xl font-semibold mb-2">Enter Question To Add In Quiz:</h4>
                    <Input onChange={((e) => handleQuestion(e))} value={question} placeholder="Enter Question" width="w-full" />
                </div>

                <div className="my-8 text-center">
                    <h4 className="text-2xl font-semibold mb-2">Enter Four Options Below:</h4>
                    <div className="flex items-center space-x-4">
                        <Input onChange={((e) => handleOption1(e))} value={option1} placeholder="Option1" width="w-48" />
                        <Input onChange={((e) => handleOption2(e))} value={option2} placeholder="Option2" width="w-48" />
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                        <Input onChange={((e) => handleOption3(e))} value={option3} placeholder="Option3" width="w-48" />
                        <Input onChange={((e) => handleOption4(e))} value={option4} placeholder="Option4" width="w-48" />
                    </div>
                </div>

                <div className="mb-4 text-center">
                    <h4 className="text-2xl font-semibold mb-2">Select The Correct Option Below:</h4>
                    <div className="text-secondary my-4 flex items-center space-x-4">
                        <Checkbox name="Option1" onClick={((e) => handleOption(e))} checked={checked} />
                        <Checkbox name="Option2" onClick={((e) => handleOption(e))} checked={checked} />
                        <Checkbox name="Option3" onClick={((e) => handleOption(e))} checked={checked} />
                        <Checkbox name="Option4" onClick={((e) => handleOption(e))} checked={checked} />
                    </div>
                </div>

                <div className="mt-6">
                    <button onClick={add} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Add Question
                        </span>
                    </button>
                    <Link to='/'>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Back To Quiz
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion
