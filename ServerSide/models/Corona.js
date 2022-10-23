function Corona(
  Id,
  CusromerId,
  DateReceivedA,
  ManufacturerA,
  DateReceivedB,
  ManufacturerB,
  DateReceivedC,
  ManufacturerC,
  DateReceivedD,
  ManufacturerD,
  DateOfPositiveAnswer,
  RecoveryDate
) {
  this.Id = Id;
  this.CusromerId = CusromerId;
  this.DateReceivedA = DateReceivedA;
  this.ManufacturerA = ManufacturerA;
  this.DateReceivedB = DateReceivedB;
  this.ManufacturerB = ManufacturerB;
  this.DateReceivedC = DateReceivedC;
  this.ManufacturerC = ManufacturerC;
  this.DateReceivedD = DateReceivedD;
  this.ManufacturerD = ManufacturerD;
  this.DateOfPositiveAnswer = DateOfPositiveAnswer;
  this.RecoveryDate = RecoveryDate;
}
module.exports = { Corona };
