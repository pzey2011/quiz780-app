
import Cookies from 'js-cookie';
let datas= [
    {
      answers:["مجرد","متاهل"],
      title:'متاهلید یا مجرد؟',
      user_answer:'',
      time_elapsed:''
    },
    {
      answers:["مرد","زن"],
      title:'جنسیت شما؟',
      user_answer:'',
      time_elapsed:''
    },
    {
      answers:["آبی","قرمز"],
      title:'آبی یا قرمز؟',
      user_answer:'',
      time_elapsed:''
    }
  ];
let json_str_datas = JSON.stringify(datas);
if(Cookies.get('questions')=== "undefined")
  Cookies.set('questions', json_str_datas, { expires: 7 });

let data_array=JSON.parse(Cookies.get('questions'));

const initialState = {
  datas: data_array
};
const questionReducer = (state = initialState, action) => { 
    switch (action.type) { 
      case "SET_USER_ANSWER": 
        let tmp_questions = state.datas;
        tmp_questions[action.data.id].user_answer=action.data.answer;
        tmp_questions[action.data.id].time_elapsed=action.data.timer;

        state = {
          datas: tmp_questions
        }
        Cookies.set('questions', state.datas, { expires: 7 });

      break;
      case "RESET_USER_ANSWERS": 
        let tmp_questions1 = state.datas;
        for (var i = 0; i < tmp_questions1.length; i++) {
          tmp_questions1[i].user_answer="";
          tmp_questions1[i].time_elapsed="";
        }
        
        state = {
          datas: tmp_questions1
        }
        Cookies.set('questions', state.datas, { expires: 7 });

      break;
      default:
  
      break;
    } 
    return state 
};
export default questionReducer;