export function increaseTimer(num) { 
    return { 
      type: "INCREMENT_TIMER"
    } 
} 
export function resetTimer(num) { 
    return { 
      type: "RESET_TIMER"
    } 
} 
export function resetThisTimer(num) { 
    return { 
      type: "RESET_THIS_TIMER"
    } 
} 
