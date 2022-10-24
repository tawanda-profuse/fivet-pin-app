# Pin App 📌

This apps main purpose is to maintain user data on a dashboard. The user can add items to the dashboard and ideally unpin them. The data entered by a user remains consistent until further changed. The database in use stores the following fields:

- **item_name**
- **page_name**
- **color**

## Tools

This application makes use of several components which combine to make an integrated system. The tools used to build this application are:

- MongoDB - for storing value fields **(npm install mongoose)**.
- Express (server) - manages routing and page navigation.
- HTML - defines the elements to be laid out.
- EJS - Very useful for creating UI templates **(npm install ejs)**.
- CSS - Further defines layout and controls margins, colors, and positioning.
- JavaScript - takes care of application backend logic.

## Future Goals

I look forward to re-building this app using the React front end library and possibly extending the functionality.

## Accessibility

This application is hosted on Heroku as a Node.js dyno with GitHub continuous deployment enabled. It is available [here](https://fivet-pin-app.herokuapp.com/).

## Tests

|Scenario|Expected Result|Latest Result|Automated|
|:---:|:---:|:---:|:---:|
|Spinning up the express server|The application should run in the intended environment|The application runs successfully ✅|Installed the **nodemon** npm package|
|Accessing different routes|**200 OK** response|All pages are accessible ✅|Defined a route file with JavaScript|
|Adding a new item to pages|The items should render and save in MongoDB|All items render ✅|Express has access to all routes in **server.js**|
|Removing an item from page 1 & 2|The item should disappear and delete from MongoDB|The items are removed from the database ✅|Defined a route to handle this request|
|Unpinning an item from dashboard|The item should disappear|The item is unpinned from the dashboard ✅|N/A|
|Accessing links to external pages|The page should render|The page displays properly ✅|Added relevant **href** attribute to anchor tags|
|Opening and closing form|The form should display and disappear respectively|The buttons act as expected ✅|Toggle the elements **classList** (/public/javascripts/nav.js)|
