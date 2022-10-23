import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCustomers,getCustomerDetails } from "../../action/customer";
import "./Customers.css";
const Customer = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    props.getAllCustomers();
  }, []);
  return (
    <>
      <h1>מאגר מידע לקוחות הקופה</h1>
      {props.customers ? (
        <div className="border border-primary">
          {props.customers.map((c) => {
            return (
              <div key={c.Id} className="card">
                {c.firstName} {c.lastName} <br />
                <input
                  className="btn btn-primary"
                  value="show details"
                  type="button"
                  onClick={() => {
                    // props.getCustomerDetails(c.Id);
                    navigate("/CustomerDetails/" + c.Id);
                  }}
                />
              </div>
            );
            <br />;
          })}
        </div>
      ) : null}
      <br />
      <input
        className="btn btn-primary"
        type="button"
        value="Adding a customer"
        onClick={() => navigate("/addCustomer")}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};
export default connect(mapStateToProps, { getAllCustomers,getCustomerDetails })(Customer);
