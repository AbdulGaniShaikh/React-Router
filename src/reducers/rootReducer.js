const initialState = {
    cards: [
        {id:1,title:'alex',body:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',},
        {id:2,title:'john',body:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        {id:3,title:'joe',body:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
    ],
    users: []
}
const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_CARD':
            return {
              ...state,
                // cards: [...state.cards,action.payload]
            }
        case 'DELETE_CARD':
            let newCard = state.cards.filter(c => c.id !== action.id)
            return {
             ...state,
             cards: newCard
            }
        case 'FETCH_USERS':
            return{
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;