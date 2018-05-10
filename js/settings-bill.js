var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
//get a reference to the add button
var settingsBillAddBtn = document.querySelector(".settingsBillAddBtn");
var updateSettings = document.querySelector(".updateSettings");
//create a variable that will keep track of the total bill

var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

var smsCostSettings = document.querySelector(".smsCostSetting");
var callCostSetting = document.querySelector(".callCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

var setb = SetiingBill();

function update() {
  var updatesmsCost = parseFloat(smsCostSettings.value);
  setb.setSms(updatesmsCost);

  var uptadecallCost = parseFloat(callCostSetting.value);
  setb.setCall(uptadecallCost);

  var updatewarningLevel = parseFloat(warningLevelSetting.value);
  setb.warni(updatewarningLevel);
  console.log(updatewarningLevel)

  var updatecriticalLevel = parseFloat(criticalLevelSetting.value);
  setb.Critic(updatecriticalLevel);

}

updateSettings.addEventListener('click', update);

function totalSetting() {
  // get the value entered in the billType textfield
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;

    if (setb.totalset() >= setb.criticreturn()) {

    } else if (setb.totalset() <= setb.criticreturn()) {

      //billItemType will be 'call' or 'sms'
      setb.CountsetingType(billItemType);
      // update the correct total
      callTotalSettings.innerHTML = setb.Callstota();
      smsTotalSettings.innerHTML = setb.SmStota();
      totalSettings.innerHTML = setb.totalset();

      //color the total based on the criteria

      if (setb.totalset() >= setb.criticreturn()) {
        // adding the danger class will make the text red
        totalSettings.classList.add("danger");

      } else if (setb.totalset() >= setb.warnireturn()) {
        totalSettings.classList.add("warning");

      }
    }
  }
}
//add an event listener for when e add button is pressed
settingsBillAddBtn.addEventListener('click', totalSetting);
