export function setUserAnswer(id,answer,timer) { 
    return { 
      type: "SET_USER_ANSWER", 
      data: {id:id,answer:answer,timer:timer}
    } 
} 
export function resetUserAnswers() {
    return { 
      type: "RESET_USER_ANSWERS"
    } 
}
