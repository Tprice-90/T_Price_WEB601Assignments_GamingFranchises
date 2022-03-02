# T_Price_WEB601Assignments_GamingFranchises
 A project based on my favourite gaming franchises

Name: Terry Price

First assignment:   created Content interface, content-list class, content-card component
                    implemented content list with 3 items, used functions in content list
                    class to display items on page through content-list.component.html file

Second assignment:  removed content-list helper file, created content-list component, implemented
                    6 items into a content-list array within its constructor, used *ngFor to display
                    5 array items on page and styled each element with the first item having a thicker
                    border. Added function that would log image title and id to the console when clicked.
                    Added code which would allow tags, imageurl, or type properties to not be shown if 
                    they weren't set.

Third assignment:   Added 2 more items to content list, created typeFilter pipe that sorts each content
                    item based on it's type attribute, added classes to each item type to change the
                    background colour, created a search function that would return a message saying
                    if the title entered was found within the array displayed in red if not found or
                    green if found.

Fourth Assignment:  Created Hover-Affect directive that would highlight the first item of each content
                    card based on type, directive also underlines item Type when hovered over. Applied
                    a default image related to theme if no image is set.

Fifth Assignment:   Added input functionality to add items to the list and display them. CreatContent 
                    component contains addGame method which includes a Promise. If Promise succeeds,
                    properties are sent to content-list component and form is cleared. If Promise fails
                    (ID,Title,Description,Creator required), error message is displayed under submit
                    button. Once Promise succeeds after failing, error message is removed.