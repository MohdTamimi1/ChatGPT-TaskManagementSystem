## Week 1 (May/8 - May/12)

- Studying Node.Js basics
- Working on the project structure
- Installing the required packages for Node.Js
- Started Establishing the project structure with basic functionality to validate the successful integration of the plugin with ChatGPT.
- Started Studying the Basics of Express.Js

## Week 2 (May/15 - May/19)

- Studying the basics of Express.Js and how to use it with Node.Js
- Studying Node.Js basics callbacks, promises, and async/await
- Working on openapi.yaml file to define the API endpoints (done for the basic functionality)
- Working on index.js (Done for the basic functionality)
- Working on controllers.js (Done for the basic functionality)
- Working on routes.js (Done for the basic functionality)
- Installing Cors package to allow Cross-Origin Resource Sharing (Done for the basic functionality)
- Fixing basic functionality bugs
- Bugs functionality fixed successfully and the basic functionality is working as expected to add and view tasks in chatGPT
- The state of the plugin, Connected successfully with ChatGPT and the basic functionality is working as expected to add and view tasks in chatGPT

## Week 3 (May/22 - May/26)

- Continuing Studying the basics of Express.Js and how to use it with Node.Js
- Working on delete tasks (Cancelled)
- The whole project will be changed into python instead of Node.Js since it will be easier for me to integrate the plugin with ChatGPT and because I am having a lot of problems with Node.Js.

## Week 4 (May/29 - June/2)

- Studying Python basics
- Convert the project from Node.Js to Python
- Working on each file in the project to convert it from Node.Js to Python (Done for the basic functionality)
- First step is to convert make sure that the basic functionality is working as expected in Python
- openapi.yaml file converted from Node.Js to Python
- deleted json files since they are not needed anymore
- ai-plugin.json file updated to match the new changes
- update to localhost url
- changed index.js to main.py
- will add the ability to add username to have separate tasks for each user (Done)
- add tasks (Done)
- view tasks (Done)
- delete tasks (Done)
- update tasks (Done)

## Week 5 (June/5 - June/9)

- Testing the successful conversion of the project from Node.Js to Python (Done)
- Timer Feature (Start Timer, End Timer and check time elapsed) (Done) finalized and tested
- Studying python libraries and how to use them
- Housekeeping and refactoring the code (Done)
- Testing the plugin with ChatGPT and Fully functional with added features so far (Done)

## Week 6 (June/12 - June/16)

- Studying python Complex data structures: List, Set, Dictionary, Tuple (In progress)
- Workspace folder changed to venv to match the python virtual environment
- started working on Prioritization feature (Done)
- Details about Prioritization feature:
  - Add priority to tasks (Done)
  - View tasks by priority (Done)
  - Update priority of tasks (Done)
  - A simple high/medium/low system to indicate priority. (Done)
- Testing the feature with ChatGPT, testing the functionality of deleting priority and updating and setting a default priority for tasks (Done)
- Priority feature update function is working correctly, and updating task it self requires deleting the existing task then update it with the new task.
- The default priority is set to low for all tasks (Tested and working correctly)
- to-do list sorted by priority from highest to lowest or vice versa (Tested and working correctly)
- priority feature and timer feature are working correctly together (Tested and working correctly)
- Housekeeping and refactoring the code (Done)
- Update the openapi.yaml file to match the new changes (Done)
- Decided to keep update function to be for priority and any update to the task it self will require deleting the existing task then update it with the new task. (ChatGPT will handle the prompt for the user about deleting and updating the task with new update one).

## Week 7 (June/19 - June/23)

- Studying python APIs and how to use them (In progress)
- Testing and working on what next feature to add to the plugin
- Studying the basics of Database and how to use it with python (In progress)
- Working on the logo design for the plugin (in progress)
- Users can benefit of the existing plugins in chatGPT and use them side by side with our plugin to have the best way in managing their tasks and time (Example using Wolfram to convert time elapsed from seconds to minutes and change the format of showing the time) tested and working correctly.
- This week work is focused on the database and how to use it with python and how to integrate it with the plugin to store the tasks and retrieve them when needed. (In progress still not sure about connecting the plugin with database or not)

## Week 8 (June/26 - June/30)

- Studying various topics in python
- As a result of the previous week, and the state of how this project is a show case for the plugin and how it can be integrated with ChatGPT, I decided to not use database and keep the plugin as it is. And the plugin is open to any updates in the future to add more features and to be connected with database.
- All features shown in the proposal are implemented and working correctly.
- Thinking of what next feature to add to the plugin. this depends on the feature to be implemented before the deadline of the project.
- The main reason for this project was to test the plugin and how it can be integrated with chatGPT and testing the successful integration of the plugin with chatGPT and how it can be used side by side with other plugins in chatGPT. The plugin did all the expected functionality and it is working correctly and it is ready to be used by the users.
- The added functionality to the plugin is setting up users to have separate tasks for each user. (not mentioned in the proposal)
- looking for more features to add to the plugin to be implemented before the deadline of the project.
- The new feature to be added to the plugin is the ability to add subtasks to the main task. (not mentioned in the proposal) (in progress)

## Week 9 (July/3 - July/7)

- Working on adding a subtask to the main task (Done)
- openapi.yaml file updated to match the new changes for subtasks (Done)
- main.py file updated to match the new changes for subtasks (Done)
- Testing the new feature (Subtasks) and to make sure that it is working correctly, could take more time to make sure all other features are working correctly with the new feature. (Done)
- The testing for the new feature (Subtasks) is done and it is working correctly with all other features. (Done)
- While testing updating the priority of the main task will delete it and add a new one with the new priority but subtasks will not be deleted and will be added to the new task with the new priority.
