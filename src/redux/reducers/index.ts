// alla prma invocazione di mainReducer, lo state è undefined, come valore di default del parametro state
// diamo il nostro initialState




const mainReducer = (state = initialSatae, action) => {
  //calcola lo stato nuovo
  //quindi ritornerà semre un oggetto di nuovo stato nell'app

  const initialSatae = {
    //dividiamo lo stato in fette
    user: {
      //informazioni utente
    },

    likeList: {
      // i like ai post
      like: [], //all'inizio non abbiamo i like ai post
    },
    postList: {
      //i post salvati
    },
  };

  switch (action.type) {
    //quì inseriamo tutte le possibili casistiche

    //caso 1
    //caso 2
    default:
      // se l'action type non corrisponde a nessuno dei case stabiliti precedentemente
      return state;
    //nel peggiore dei casi, ritorniamo lo stato esattamente come lo abbiamo trovato
  }
};

export default mainReducer;
