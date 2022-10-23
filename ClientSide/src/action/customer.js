import axios from "axios";

export const getAllCustomers = () => {
  return (dispatch) => {
    axios.get("http://localhost:8080/Customers").then(
      (response) => {
        console.log(response.data);
        dispatch(saveAllCustomers(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const getCustomerDetails = (Id) => {
  return (dispatch) => {
    axios.get("http://localhost:8080/getCustomerDetails/" + Id).then(
      (response) => {
        console.log(response.data[0]);
        dispatch(saveCustomerDetails(response.data[0]));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};

export const addCustomer = (customer) => {
  return (dispatch) => {
    axios.post("http://localhost:8080/addCustomer", customer).then(
      (response) => {
        console.log(response);
        dispatch(addCustomerAction(customer));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const deleteCustomer = (Id) => {
  return (dispatch) => {
    axios.delete("http://localhost:8080/deleteCustomer/" + Id)
    .then((response) => {
        console.log(response);
        dispatch(deleteCustomerAction(response.data));
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      }
    );
  };
};
export const updateCustomer = (item) => {
  return (dispatch) => {
    axios.put("http://localhost:8080/UpdateCustomer/" + item.id, item)
      .then((response) => {
        dispatch(saveUpdate(item));
        //console.log(response.data);
      },
      (err) => {
        console.log(err);
        console.log("קרתה שגיאה");
      });
  };
};

export const saveUpdate = (item) => {
  return {
    type: "CUSTOMER_UPDATED",
    payload: item,
  };
};

export const saveAllCustomers = (list) => {
  return {
    type: "SAVE_ALL_CUSTOMERS",
    payload: list,
  };
};
export const saveCustomerDetails = (customer) => {
  return {
    type: "SAVE_CUSTOMER_DETAILS",
    payload: customer,
  };
};
export const addCustomerAction = (customer) => {
  return {
    type: "ADD_CUSTOMER",
    payload: customer,
  };
};
export const deleteCustomerAction = (id) => {
  return {
    type: "CUSTOMER_DELETED",
    payload: id,
  };
};
