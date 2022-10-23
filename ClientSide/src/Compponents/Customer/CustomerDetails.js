import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCustomer, updateCustomer } from "../../action/customer";
import "./Customers.css";

const CustomerDetails = (props) => {
  let { id } = useParams();
  let item = { ...props.customers.find((x) => x.Id == id) };
  console.log(item)
  let navigate = useNavigate();
  // useEffect(() => {
  //   getCustomerDetails(id);
  // });
  // ,getCustomerCoronaDetails(item.Id)
  return (
    <>
      <h1>פרטי לקוח {item.Id }</h1>
      <div className="c">
        <label>תעודת זהות</label>
        {"      "}
        {item.Id}
        <br />
        <label> שם פרטי </label>
        {"      "}
        {item.firstName}
        <br />
        <label> שם משפחה </label>
        {"      "}
        {item.lastName}
        <br />
        <label> כתובת </label>
        {"      "}
        {item.fullAddress}
        <br />
        <label> תאריך לידה </label>
        {"      "}
        {item.birthDate}
        <br />
        <label> טלפון </label>
        {"     "}
        {item.phone}
        <br />
        <label> פלאפון נייד </label>
        {"      "}
        {item.mobilePhone}
        <br />
        {item.DateOfPositiveAnswer &&
          `תאריך קבלת תשובה חיובית ${item.DateOfPositiveAnswer}`}
        <br />
        {item.RecoveryDate && `תאריך החלמה ${item.RecoveryDate}`}
        <br />
        {item.DateReceivedA && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">תאריך קבלת החיסון</th>
                <th scope="col">יצרן החיסון</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{item.DateReceivedA && item.DateReceivedA}</td>
                <td>{item.ManufacturerA && item.ManufacturerA}</td>
              </tr>
              {item.DateReceivedB && (
                <tr>
                  <th scope="row">2</th>
                  <td>{item.DateReceivedB && item.DateReceivedB}</td>
                  <td>{item.ManufacturerB && item.ManufacturerB}</td>
                </tr>
              )}
              {item.DateReceivedC && (
                <tr>
                  <th scope="row">3</th>
                  <td>{item.DateReceivedC && item.DateReceivedC}</td>
                  <td>{item.ManufacturerC && item.ManufacturerC}</td>
                </tr>
              )}
              {item.DateReceivedD && (
                <tr>
                  <th scope="row">4</th>
                  <td>{item.DateReceivedD && item.DateReceivedD}</td>
                  <td>{item.ManufacturerD && item.ManufacturerD}</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
        <input
          className="btn btn-primary"
          value="update"
          type="button"
          onClick={() => {
            navigate("/updateCustomer/" + item.Id);
          }}
        />
        {"  "}
        <input
          className="btn btn-primary"
          value="delete"
          type="button"
          onClick={() => {
            props.deleteCustomer(item.Id);
            alert("הלקוח נמחק בהצלחה");
            navigate("/Customer");
          }}
        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};
export default connect(mapStateToProps, {
  deleteCustomer,
  updateCustomer,
})(CustomerDetails);
