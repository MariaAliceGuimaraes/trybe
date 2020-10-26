const INITIAL_STATE = [];
// definimos um estado inicial

function formReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SAVEFORM':
      return[...state, action.value];
      // aqui usamos o spreadoperator para criarmos uma copia do state adicionando a nova info
      // se for um objeto dentro do estado, podemos usar por exemplo: "...state.cart", cart sendo o objeto.
    default:
      return state;
  }
}

export default formReducer;
