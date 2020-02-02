var numberOfRows = 19;

var scheduleMain = $("#scheduleMain")

const bgColors = [
    "#352FB2",
    "#3D43EE",
    "#3C6CE8",
    "#37B0E9",
    "#46D381",
    "#AAEA90",
    "#EDFD60",
    "#F5A640",
    "#F84C23",
    "#FA0F13",
    "#F84C23","#F5A640","#EDFD60","#AAEA90","#46D381","#37B0E9","#3C6CE8","#3D43EE","#352FB2"]

const inputBGColors = [
    "#7674B2",
    "#9EA0EE",
    "#97ADE8",
    "#94CCE3",
    "#89D3A8",
    "#CFE8C5",
    "#F5FDA4",
    "#F2CE9D",
    "#F8B2A1",
    "#F8A1A3","#F8B2A1","#F2CE9D","#F5FDA4","#CFE8C5","#89D3A8","#94CCE3","#97ADE8","#9EA0EE","#7674B2"]

for (let i = 0; i < numberOfRows; i++) {

    //get the time
    const timeHour = (Math.floor(i/2) + 8) % 12 + 1;
    const timeMinutes = i % 2 * 3;
    const time = timeHour + ":" + timeMinutes + "0";

    //create our html elements
    let row = $('<div class="row scheduleRow">');
    let labelCol = $('<div class="col-sm-1">');
    let label = $('<label for="planner' + i + '" class="plannerLabel align-middle" id="label' + i + '">' + time + '</label>')
    let inputCol = $('<div class="col-sm-11">');
    let input = $('<input type="text" class="plannerItem align-middle" id="planner' + i + '">');

    //set their parenting structure

    row.append(labelCol);
    labelCol.append(label);

    row.append(inputCol);
    inputCol.append(input);

    scheduleMain.append(row);

    //set additional values

    row.css("background-color",bgColors[i]);
    input.css("background-color",inputBGColors[i]);
}