import {useState, useEffect, useRef} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useGlobalContext } from '../context/UserContext'

import NewQuiz from "../components/create/NewQuiz"
import QuestionList from '../components/create/QuestionList'
import SubmitModal from '../components/create/SubmitModal'


function Create() {
  const pageRef = useRef()

  const [formData, setFormData] = useState({})
  const [ showSubmitModal, setShowSubmitModal ] = useState(false)
  const [ bgModalHeight , setBgModalHeight ]  = useState(window.innerHeight)

useEffect(() => {
  window.onresize = () => {
    const pageHeight = document.body.scrollHeight
    setBgModalHeight(pageHeight)
  }
  window.onscroll = () => {
    const pageHeight = document.body.scrollHeight    
    setBgModalHeight(pageHeight)
  }
},[])

  return (
    <div ref={pageRef}>
      { showSubmitModal &&
        <SubmitModal 
        formData={formData}
        setFormData={setFormData}
        setShowSubmitModal={setShowSubmitModal}
        bgModalHeight={bgModalHeight}
      />
      }
      <div className='container md:flex md:flex-row'>
        <NewQuiz 
          formData={formData} 
          setFormData={setFormData}
          setShowSubmitModal={setShowSubmitModal}
        />
        <QuestionList 
          formData={formData} 
          setFormData={setFormData}
        />
      </div>      
      <div className='text-xl bg-yellow-100 px-2 py-1 rounded-lg shadow-md drop-shadow-md w-fit mx-auto mt-8 mb-4 hover:scale-110 active:scale-95 transition-all duration-100'>
        <Link to="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default Create