export function increaseStep(num) { 
    return { 
      type: "INCREASE_STEP", 
      data: num
    } 
} 
export function resetStep() { 
    return { 
      type: "RESET_STEP"
    } 
} 