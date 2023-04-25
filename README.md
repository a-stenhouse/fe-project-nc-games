# fe-project-nc-games

## Project Description

Link to hosted app: https://delightful-cat-ca1c23.netlify.app

Link to back-end repo: https://github.com/a-stenhouse/NC_Games_Portfolio_Project

This is a web app that displays games reviews stored in a database, built using React. 

You will initally be presented with a home page that lists all the reviews. The user can use the three select boxes at the top in order to filter, sort and order the reviews acoordingly. The user can also sign-in at the top right (for the purposes of demonstration, you are automatocally signed in as a user upon clicking the "User Sign In" button.

Clicking one of the review cards takes the user to a new page which dsisplays all the review information. The user can upvote a review, view comments and post their own comments. Posting a comment and upvoting require the user to be signed-in. The user can only upvote a review once, however this is not tracked across sessions. Pressing "back to reviews" takes the user back to the reviews page.

##Local Running

Clone the repo locally and run npm -install to ensure all dependencies are installed (please use at least Node version 19.0.1). "cd" into the root root folder "fe-project-nc-games" and run "npm start" to run the React app locally.

IMPORTANT: Please bear in mind, due to free hosting, the back-end can sometimes be extremely slow and might need to "wake up" when a request is sent from the front end to the api. 
