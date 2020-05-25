# Application Title: A Description

This application allows a user to sign up and sign in. A user can create quizzes and questions for those quizzes. A user can CRUD on their quizzes and questions. This application was inspired by the need for a way for [PACTS](http://csph.brighamandwomens.org/cultural-dexterity-nih-r01-awarded/) researchers to test surgeons on whether or not they were retaining knowledge from the curriculum the researchers were developing.

## Important Links

- [Back-end Repo](https://github.com/Danpowers24/Capstone-api)
- [Deployed API](https://git.heroku.com/shielded-ridge-23072.git)
- Check out the client app [here](https://danpowers24.github.io/Capstone-client/)

## Planning Story

As I do with every project, I started by creating a Trello board. I added some ideas for the application and brainstormed how the different ideas would look. After committing to the quiz application idea, I drew up some ERD's and wireframes on draw.io.

I jumped into a Zoom room with some classmates and we went through the basic setup of the back end together. We did the same for setting up the front end from a React template. From here, we split off and I started to create resources and their relationship to the user. I tested each resource with cURL scripts to make sure the routes were set up correctly before coding any features into the front end.

When stuck on an issue, I like to collaborate with my classmates. I will either ask them for help, or I will take a break and help with their bug. I really benefit from taking a small break and coming back to a bug with a fresh set of eyes.

During the home stretch I relied heavily on GA's issue queue, googling issues, and recalling the work I have done on past projects. Experience is a great teacher, whether it is my own or someone else's.

### User Stories

- As an unauthenticated user, I want to be able to sign up.
- As an unauthenticated user, I want to be able to sign in.
- As an authenticated user, I want to change my password.
- As an authenticated user, I want to log out.

- As an authenticated user, I want to create a quiz.
- As an authenticated user, I want to see my quizzes.
- As an authenticated user, I want to edit my quizzes.
- As an authenticated user, I want to delete one of my quizzes.

- As an authenticated user, I want to create questions for one of my quizzes.
- As an authenticated user, I want to see the questions of one of my quizzes.
- As an authenticated user, I want to edit the questions of one of my quizzes.
- As an authenticated user, I want to delete a question on one of my quizzes.


### Technologies Used

- HTML/CSS
- Bootstrap
- Javascript
- React
- Axios
- cURL

### Unsolved Problems

- The application currently does not allow the user to take a quiz. I would love to implement that functionality in the next version.
- I would like to eventually allow administrators to create the quizzes and only let users take quizzes.

## Images

#### App Screenshot:
![screenshot](https://i.imgur.com/SBqXUCt.png)

---

#### Wireframes:
![wireframe](https://i.imgur.com/nBLSJCD.png)
![wireframe](https://i.imgur.com/37bLMwd.png)
Quiz creation view
![wireframe](https://i.imgur.com/Os9ntYv.png)

---
