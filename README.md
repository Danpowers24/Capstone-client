# Application Title: A Description

At the base level, this application allows the user to create and take quizzes. This application was inspired by the need for a way for [PACTS](http://csph.brighamandwomens.org/cultural-dexterity-nih-r01-awarded/) researchers to test surgeons on whether or not they were retaining knowledge from the curriculum the researchers were developing.

## Setup Steps

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository.
1. Run `install command` to install all dependencies
1. Use `start command` to spin up the server.

## Important Links

- [Back-end Repo](https://github.com/Danpowers24/Capstone-api)
- [Deployed API](https://git.heroku.com/shielded-ridge-23072.git)
- Check out the client app [here](https://danpowers24.github.io/Capstone-client/)

## Planning Story

Lorem ipsum dolor amet cloud bread letterpress squid actually, single-origin coffee williamsburg af poutine fingerstache austin semiotics paleo man braid vexillologist. Tumeric literally banjo pickled disrupt cold-pressed thundercats shoreditch try-hard health goth intelligentsia pop-up small batch skateboard farm-to-table. Meh tofu fam, direct trade tattooed stumptown etsy everyday carry activated charcoal. Neutra cornhole polaroid literally salvia, listicle tofu.

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

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /resources
GET | /resources/:id
POST | /resources
PATCH | /resources/:id
DELETE | /resources/:id

### Unsolved Problems

- The application currently does not allow the user to take a quiz. I would love to implement that functionality in the next version.
- I would like to eventually allow administrators to create the quizzes and only let users take quizzes. t

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

#### ERD:
![ERD](https://i.imgur.com/uMAPdyN.png)
