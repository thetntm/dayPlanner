var numberOfRows = 18;

var scheduleMain = $("#scheduleMain")

for (let i = 0; i < numberOfRows; i++) {

    //get the time
    const timeHour = (Math.floor(i/2) + 8) % 12 + 1;
    const timeMinutes = i % 2 * 3;
    const time = timeHour + ":" + timeMinutes + "0";

    //create our html elements
    let row = $('<div class="row scheduleRow">');
    let labelCol = $('<div class="col-sm-2">');
    let label = $('<label for="planner' + i + '" class="plannerLabel align-middle" id="label' + i + '">' + time + '</label>')
    let inputCol = $('<div class="col-sm-10">');
    let input = $('<input type="text" class="plannerItem align-middle" id="planner' + i + '">');

    //set their parenting structure

    row.append(labelCol);
    labelCol.append(label);

    row.append(inputCol);
    inputCol.append(input);

    scheduleMain.append(row);
}