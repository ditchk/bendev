import { useState } from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'

const QuestionAnswer = () => {
    const [openContainer, SetOpenContainer] = useState(false)

    const handleClick = () => {
      SetOpenContainer(!openContainer)
    }
    
  return (
    <div onClick={handleClick}>
      {openContainer ? (
        <MdArrowUpward />
      ): (
        <MdArrowDownward />
      )}
    </div>
  )
}

export default QuestionAnswer
