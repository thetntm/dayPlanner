var dateElement = $("#dateDisplay");

var currentDateObject = new Date();

var numberOfRows = 9;

var scheduleMain = $("#scheduleMain")

const bgColors = [
    "#FF4D36",
    "#F5A640",
    "#EDFD60",
    "#AAEA90",
    "#46D381",
    "#37B0E9",
    "#3C6CE8",
    "#3D43EE",
    "#352FB2"]

const inputBGColors = [
    "#F8B2A1",
    "#F2CE9D",
    "#F5FDA4",
    "#CFE8C5",
    "#89D3A8",
    "#94CCE3",
    "#97ADE8",
    "#9EA0EE",
    "#7674B2"]

const bgColorsDarkened = [
    "#80080A",
    "#805521",
    "#787F30",
    "#5D7F4E",
    "#2A7F4E",
    "#1D657F",
    "#213B7F",
    "#161954",
    "#13113F",

]

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

    const currentHour = currentDateObject.getHours(); //Get the current hour. Modify this line to test for different times of day.

    const differencial = Math.min(Math.max(-8,i-(currentHour-9)),8);

    //Calculate the differencial between the two values, maxing out at 8 and -8 (representing blue and darkened blue)

    if (differencial >= 0)
    {
        row.css("background-color",bgColors[Math.abs(differencial)]);
    } else
    {
        row.css("background-color",bgColorsDarkened[Math.abs(differencial)]);
    }

    input.css("background-color",inputBGColors[Math.abs(differencial)]);
}

//---Set the Date---

dateElement.text((currentDateObject.getMonth() + 1) + "/" + (currentDateObject.getDate() + 1) + "/" + currentDateObject.getFullYear());