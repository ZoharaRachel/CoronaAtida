import { connect } from "react-redux";
import { addCustomer } from "../../action/customer";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import "./Customers.css";

const AddCustomer = (props) => {
  let [Id, setId] = useState(false);
  let [firstName, setfirstName] = useState(false);
  let [lastName, setlastName] = useState(false);
  let [birthDate, setbirthDate] = useState(false);
  let [phone, setphone] = useState(false);
  let [mobilePhone, setmobilePhone] = useState(false);

  let IdRef = useRef(null);
  let firstNameRef = useRef(null);
  let lastNameRef = useRef(null);
  let fullAddressRef = useRef(null);
  let birthDateRef = useRef(null);
  let phoneRef = useRef(null);
  let mobilePhoneRef = useRef(null);
  let RecoveryDateRef = useRef(null);
  let DateOfPositiveAnswerRef = useRef(null);
  let DateReceivedARef = useRef(null);
  let ManufacturerARef = useRef(null);
  let DateReceivedBRef = useRef(null);
  let ManufacturerBRef = useRef(null);
  let DateReceivedCRef = useRef(null);
  let ManufacturerCRef = useRef(null);
  let DateReceivedDRef = useRef(null);
  let ManufacturerDRef = useRef(null);

  let customer = {
    Id: "",
    firstName: "",
    lastName: "",
    fullAddress: "",
    birthDate: "",
    phone: "",
    mobilePhone: "",
    RecoveryDate: "",
    DateOfPositiveAnswer: "",
    DateReceivedA: "",
    ManufacturerA: "",
    DateReceivedB: "",
    ManufacturerB: "",
    DateReceivedC: "",
    ManufacturerC: "",
    DateReceivedD: "",
    ManufacturerD: "",
  };

  let navigate = useNavigate();
  const change = (e) => {
    let { name, type, value } = e.target;
    if (type == "number") value = +value;
    customer[name] = value;
  };

  const valid = () => {
    Id =
      IdRef.current.value == "" ||
      IdRef.current.value.length < 9 ||
      IdRef.current.value.length > 10;
    console.log(Id);
    firstName =
      firstNameRef.current.value.length < 2 || firstNameRef.current.value == "";
    lastName =
      lastNameRef.current.value.length < 2 || lastNameRef.current.value == "";
    birthDate = birthDateRef.current.value > Date().now;
    phone = phoneRef.current.value < 11;
    mobilePhone = mobilePhoneRef.current.value < 11;
    return !(Id || firstName || lastName || birthDate || phone || mobilePhone);
  };
  return (
    <>
      <h1>הוספת לקוח</h1>
      <form className="form-floating">
        <input
          className="form-control"
          type="text"
          name="Id"
          placeholder="Enter ID"
          ref={IdRef}
          onChange={change}
        />
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="firstName"
          placeholder="Enter first name"
          ref={firstNameRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="lastName"
          placeholder="Enter last name"
          ref={lastNameRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="fullAddress"
          placeholder="Enter full address"
          ref={fullAddressRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="date"
          name="birthDate"
          placeholder="birthDate"
          ref={birthDateRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="phone"
          placeholder="Enter phone number"
          ref={phoneRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="mobilePhone"
          placeholder="Enter mobile phone"
          ref={mobilePhoneRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="DateOfPositiveAnswer"
          placeholder="DateOfPositiveAnswer"
          ref={DateOfPositiveAnswerRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="RecoveryDate"
          placeholder="RecoveryDate"
          ref={RecoveryDateRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="DateReceivedA"
          placeholder="DateReceivedA"
          ref={DateReceivedARef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="ManufacturerA"
          placeholder="ManufacturerA"
          ref={ManufacturerARef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="DateReceivedB"
          placeholder="DateReceivedB"
          ref={DateReceivedBRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="ManufacturerB"
          placeholder="ManufacturerB"
          ref={ManufacturerBRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="DateReceivedC"
          placeholder="DateReceivedC"
          ref={DateReceivedCRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="ManufacturerC"
          placeholder="ManufacturerC"
          ref={ManufacturerCRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="DateReceivedD"
          placeholder="DateReceivedD"
          ref={DateReceivedDRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="form-control"
          type="text"
          name="ManufacturerD"
          placeholder="ManufacturerD"
          ref={ManufacturerDRef}
          onChange={change}
        />{" "}
        <br /> <br />
        <input
          className="btn btn-primary"
          type="submit"
          value="Add"
          onClick={(e) => {
            if (valid()) {
              alert("הלקוח התווסף בהצלחה");
              props.addCustomer(customer);
              navigate("/Customer");
              e.preventDefault();
            } else alert("פרטי הלקוח שגויים");
          }}
        />
      </form>
    </>
  );
};
export default connect(null, { addCustomer })(AddCustomer);
