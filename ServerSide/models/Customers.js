function Customer(
  id,
  FirstName,
  LastName,
  FullAddress,
  BirthDate,
  Phone,
  MobilePhone
) {
  this.id = id;
  this.FirstName = FirstName;
  this.LastName = LastName;
  this.FullAddress = FullAddress;
  this.BirthDate = BirthDate;
  this.Phone = Phone;
  this.MobilePhone = MobilePhone;
}
module.exports = { Customer };