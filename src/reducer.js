const initialState = {
  students: [
    {id:"1", name: "Jeerawuth", score: 99},
    {id:"2", name: "Sombat", score: 89},
    {id:"3", name: "Worrawan", score: 73}
  ]
}

const reducer = (state = initialState,action) => {
  const allStudents = [...state.students];
  switch(action.type){
    case 'DEL_STUDENT':
      const newState = {
        ...state,
        students: state.students.filter(item => item.id !== action.payload)
      }
      return newState;
    case 'ADD_STUDENT':
      const addState = {
        ...state,
        students: [action.payload, ...state.students]
      }
    case 'EDIT_STUDENT':
      const indexForEdit = allStudents.findIndex((item) => {
        return item.id === action.payload.id
      })
      allStudents[indexForEdit] = {
        id: action.payload.id,
        name: action.payload.name,
        score: action.payload.score
      }
      const editState = {
        ...state,
        students: allStudents
      }
      return editState;
    default:
      break;
  }
  return state;
}
export default reducer;