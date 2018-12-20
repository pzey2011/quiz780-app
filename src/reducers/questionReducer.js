const initialState = {
  datas: [
    {
      answers:["مجرد","متاهل"],
      title:'متاهلید یا مجرد؟',
      user_answer:''
    },
    {
      answers:["مرد","زن"],
      title:'جنسیت شما؟',
      user_answer:''
    },
    {
      answers:["آبی","قرمز"],
      title:'آبی یا قرمز؟',
      user_answer:''
    }
  ]
};
const questionReducer = (state = initialState, action) => { 
    switch (action.type) { 
      case "SET_USER_ANSWER": 
        let tmp_questions = state.datas;
        tmp_questions[action.data.id].user_answer=action.data.answer;

        state = {
          datas: tmp_questions
        }
        
      break;
      case "RESET_USER_ANSWERS": 
        let tmp_questions1 = state.datas;
        for (var i = 0; i < tmp_questions1.length; i++) {
          tmp_questions1[i].user_answer="";
        }
          

        state = {
          datas: tmp_questions1
        }
        
      break;
      default:
  
      break;
    } 
    return state 
};
export default questionReducer;