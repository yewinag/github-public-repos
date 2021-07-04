export default (state = {}, action) => {
    switch (action.type) {
     case 'FETCH_REPO':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }