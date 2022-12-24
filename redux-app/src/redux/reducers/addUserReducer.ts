const inititalState = { name: "User 1", age: 23 };

export const addUserReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload };
    }
    case 'CHANAGEAGE':{
      return {...state, age: action.payload};
    }
  }
  return state;
};

export const userReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload };
    }
  }
  return state;
};
