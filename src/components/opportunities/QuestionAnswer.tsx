import React, { useState } from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'

const QuestionAnswer = () => {
    const [openContainer, SetOpenContainer] = useState(false)

    const handleClick = () => {
      SetOpenContainer(!openContainer)
    }
    
  return (
    <div>
      {openContainer ? (
        <MdArrowUpward />
      ): (
        <MdArrowDownward />
      )}
    </div>
  )
}

export default QuestionAnswer
