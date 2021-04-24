As a user, i want to see a list of Rick after the page loads

As a user, I want to select a `status` from a dropdown to filter the list of ricks


as a usere, I want to click a reset button to undo the filter so i can see the original list again. 


-Mvp
    - DomContentLoaded eventListener that will make a fetch request and then render ricks to the page, includding name, status, location and image. 
    
    -Dropdown with change EventListener that will rerender the list of ricks based on the "status" filter

    - reset button with click listener that will revert back to original list of ricks. 