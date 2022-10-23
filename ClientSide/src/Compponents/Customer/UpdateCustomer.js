import { connect } from "react-redux";
import { updateCustomer } from "../../action/customer";
import { useParams, useNavigate } from "react-router";
const UpdateCustomer = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();
  let item = { ...props.customers.find((x) => x.Id == id) };
  const change = (e) => {
    let { name, type, value } = e.target;
    if (type == "number") value = +value;
    item[name] = value;
  };

  return (
    <form>
      <h1>עדכון פרטי לקוח {item.Id}</h1>
      <input
        className="form-control"
        type="text"
        name="firstName"
        placeholder="firstName"
        defaultValue={item.firstName}
        onChange={change}
      />{" "}
      <br /> <br />
      <input
        className="form-control"
        type="text"
        name="lastName"
        placeholder="lastName"
        defaultValue={item.lastName}
        onChange={change}
      />{" "}
      <br /> <br />
      <input
        className="form-control"
        type="text"
        name="Id"
        placeholder="ID"
        defaultValue={item.Id}
        onChange={change}
      />{" "}
      <br /> <br />
      <input
        className="form-control"
        type="text"
        name="fullAddress"
        placeholder="fullAddress"
        defaultValue={item.fullAddress}
        onChange={change}
      />{" "}
      <br /> <br />
      <input
        className="form-control"
        type="date"
        name="birthDate"
        placeholder="birthDate"
        defaultValue={item.birthDate}
        onChange={change}
      />{" "}
      <br /> <br />
      <input
        className="form-control"
        type="text"
        name="phone"
        placeholder="phone"
        defaultValue={item.phone}
        onChange={change}
      />{" "}
      <br /> <br />
      <input
        className="form-control"
        type="text"
        name="mobilePhone"
        placeholder="mobilePhone"
        defaultValue={item.mobilePhone}
        onChange={change}
      />{" "}
      <br /> <br />
      {item.DateOfPositiveAnswer &&(<input
        className="form-control"
        type="text"
        name="DateOfPositiveAnswer"
        placeholder="DateOfPositiveAnswer"
        defaultValue={item.DateOfPositiveAnswer}
        onChange={change}
      />)}{" "}
      <br /> <br />
      {item.RecoveryDate && (<input
        className="form-control"
        type="text"
        name="RecoveryDate"
        placeholder="RecoveryDate"
        defaultValue={item.RecoveryDate}
        onChange={change}
      />)}{" "}
      <br /> <br />
      {item.DateReceivedA && (<input
        className="form-control"
        type="text"
        name="DateReceivedA"
        placeholder="DateReceivedA"
        defaultValue={item.DateReceivedA}
        onChange={change}
      />)}{" "}
      <br /> <br />
      {item.ManufacturerA && (<input
        className="form-control"
        type="text"
        name="ManufacturerA"
        placeholder="ManufacturerA"
        defaultValue={item.ManufacturerA}
        onChange={change}
      />)}{" "}
      <br /> <br />
      {item.DateReceivedB && (<input
        className="form-control"
        type="text"
        name="DateReceivedB"
        placeholder="DateReceivedB"
        defaultValue={item.DateReceivedB}
        onChange={change}
      />)}{" "}
      <br /> <br />
      {item.ManufacturerB && (<input
        className="form-control"
        type="text"
        name="ManufacturerB"
        placeholder="ManufacturerB"
        defaultValue={item.ManufacturerB}
        onChange={change}
      />)}{" "}
      <br /> <br />
      {item.DateReceivedC && (<input
        className="form-control"
        type="text"
        name="DateReceivedC"
        placeholder="DateReceivedC"
        defaultValue={item.DateReceivedC}
        onChange={change}
      />)}{" "}
      <br /> <br />
      {item.ManufacturerC && (<input
        className="form-control"
        type="text"
        name="ManufacturerC"
        placeholder="ManufacturerC"
        defaultValue={item.ManufacturerC}
        onChange={change}
      />)}{" "}
      <br/> <br />
      {item.DateReceivedD && (<input
        className="form-control"
        type="text"
        name="DateReceivedD"
        placeholder="DateReceivedD"
        defaultValue={item.DateReceivedD}
        onChange={change}
      />)}{" "}
      <br /> <br /> 
      {item.ManufacturerD && (<input
        className="form-control"
        type="text"
        name="ManufacturerD"
        placeholder="ManufacturerD"
        defaultValue={item.ManufacturerD}
        onChange={change}
      />)}{" "}
      <br /> <br />
      <input
        className="btn btn-primary"
        type="submit"
        value="Update"
        onClick={() => {
          // e.preventDefault();
          props.updateCustomer(item);
          console.log(item)
          alert("פרטי הלקוח עודכנו בהצלחה ");
          navigate("/Customer");          
        }}
      />
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};
export default connect(mapStateToProps, { updateCustomer })(UpdateCustomer);
