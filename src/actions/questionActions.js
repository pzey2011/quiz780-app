export function setUserAnswer(id,answer) { 
    return { 
      type: "SET_USER_ANSWER", 
      data: {id:id,answer:answer}
    } 
} 
export function resetUserAnswers() { 
    return { 
      type: "RESET_USER_ANSWERS"
    } 
}
