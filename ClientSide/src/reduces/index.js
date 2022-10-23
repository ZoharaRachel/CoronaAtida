const initialState = {
  customers: [],
  selectedCustomer: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ALL_CUSTOMERS":
      //console.log(action.payload);
      return {
        ...state,
        customers: action.payload,
      };
    case "SAVE_CUSTOMER_DETAILS":
      //console.log(action.payload);
      return {
        ...state,
        selectedCustomer: action.payload,
      };
    case "ADD_CUSTOMER":
      //console.log(action.payload);
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case "CUSTOMER_DELETED":
      //console.log(action.payload);
      let c = [...state.customers];
      c.splice(action.payload, 1);
      return {
        ...state,
        customers: [...c],
      };
    case "CUSTOMER_UPDATED":
      let item = [...state.customers];
      for (let index = 0; index < item.length; index++) {
        if (item.find((x) => x.Id == action.payload.Id)) {
          item[index] = action.payload;
          break;
        }
      }
      return {
        ...state,
        customers: [...item],
      };
  }
  return state;
};
export default reducer;
