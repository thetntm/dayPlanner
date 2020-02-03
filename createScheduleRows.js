var dateElement = $("#dateDisplay");

var currentDateObject = new Date();

var numberOfRows = 9;

var scheduleMain = $("#scheduleMain")

const bgColors = [
    "#F84C23",
    "#F5A640",
    "#EDFD60",
    "#AAEA90",
    "#46D381",
    "#37B0E9",
    "#3C6CE8",
    "#3D43EE",
    "#352FB2"]

const inputBGColors = [
    "#F8A1A3",
    "#F8B2A1",
    "#F2CE9D",
    "#F5FDA4",
    "#CFE8C5",
    "#89D3A8",
    "#94CCE3",
    "#97ADE8",
    "#9EA0EE",
    "#7674B2"]

for (let i = 0; i < numberOfRows; i++) {

    //get the time
    const timeHour = (i + 8) % 12 + 1;
    // const timeMinutes = i % 2 * 3;
    const time = timeHour + ":00";

    //create our html elements
    let row = $('<div class="row scheduleRow">');
    let labelCol = $('<div class="col-md-1">');
    let label = $('<label for="planner' + i + '" class="plannerLabel align-middle" id="label' + i + '">' + time + '</label>')
    let inputCol = $('<div class="col-md-11">');
    let input = $('<input type="text" class="plannerItem align-middle" id="planner' + i + '">');

    //set their parenting structure

    row.append(labelCol);
    labelCol.append(label);

    row.append(inputCol);
    inputCol.append(input);

    scheduleMain.append(row);

    //set additional values

    const currentHour = Math.min(Math.max(currentDateObject.getHours(),9),17); //Get the current hour between 9 and 17.

    const differencial = Math.abs((i+9)-currentHour);

    row.css("background-color",bgColors[differencial]);
    input.css("background-color",inputBGColors[differencial]);
}

//---Set the Date---

dateElement.text((currentDateObject.getMonth() + 1) + "/" + (currentDateObject.getDay() + 1) + "/" + currentDateObject.getFullYear());