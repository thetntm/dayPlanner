//-------------------------VARIABLES----------------------------------

//Global Variables

var unSaved = false; //A Boolean Value that lets us know if the planner was changed without saving

var storedPlanner = localStorage.getItem('QuickPlanner') //The schedule's data, for local storage purposes.


//-------------------------DOM----------------------------------------

//DOM Elements

var saveButton = $("#saveButton"); //The button for saving work

var plannerItems = $(".plannerItem"); //Input fields for each item

var saveBox = $("#saveBox");//The Div containing the Save button

if (storedPlanner) //If there was data stored
{
    storedPlanner = JSON.parse(storedPlanner);
} else //If there is no stored data
{
    storedPlanner = [
        '', //9:00
        '', //9:30
        '', //10:00
        '', //10:30
        '', //11:00
        '', //11:30
        '', //12:00
        '', //12:30
        '', //1:00
        '', //1:30
        '', //2:00
        '', //2:30
        '', //3:00
        '', //3:30
        '', //4:00
        '', //4:30
        '', //5:00
        '', //5:30
        '', //6:00
    ]
}

//--------------------------FUNCTIONS---------------------------------

//Basic Functions

function updatePlanner() //updatePlanner : Updates storedPlanner to match user input
{
    for (let i = 0; i < storedPlanner.length; i++) {
        storedPlanner[i] = $("#planner" + i).val();
    }
}

function loadPlanner() //loadPlanner : Set the values for the planner objects to the stored values
{
    for (let i = 0; i < storedPlanner.length; i++) {
        const storedData = storedPlanner[i];

        $("#planner" + i).val(storedData);
    }
}

//Event Functions

function savePlanner() //savePlanner : updates and saves storedPlanner to localStorage
{
    updatePlanner();
    localStorage.setItem('QuickPlanner',JSON.stringify(storedPlanner));
    unSaved = false;
    saveBox.css("display","none")
}


function plannerItemModified()
{
    const modifiedItemIndex = parseInt(this.id.replace('planner',''));
    unSaved = true;
    saveBox.css("display","block");
}


function unloadEvent(event) // Used for the window.beforeUnLoad event to warn the user if they have unsaved changes
{
    if (unSaved)
    {
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
    }
}

//---------------------------EVENT ASSIGNMENT--------------------------

plannerItems.on("input",plannerItemModified);

saveButton.on("click",savePlanner);

window.addEventListener("beforeunload", unloadEvent);

//---------------------------CODE TO RUN WHEN SCRIPT IS CALLED---------

loadPlanner();