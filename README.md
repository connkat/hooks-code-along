# Hooks Code-a-long

This repo is a walkthrough of the two most commonly used React hooks: `useEffect` and `useState`. We're going to be making a very basic front-end only todo app. If you are interested in building a version of this app with a backend, I have another repo that you can use as a reference [here](https://github.com/connkat/todo).
## Overview
### Lecture Notes
In [lecture-notes.md](lecture-notes.md), you will be able to go through the lesson with concepts from this workshop. I'll update it after the workshop concludes to include anything else that might have been discussed that I didn't pre-document. 

### Folder Structure
The folder called `start-here` contains what is needed to code-along during this interactive lesson. The `final-project` folder holds a completed version of the project that you can use as a reference point if needed. 

## Instructions
Below are the steps you will need to get started. After that we'll be working together in the workshop. 
### Packages
#### node
This project runs on node. Since everyone's setup is different I will refer you to [the official node documentation](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for notes on getting setup with node. 

#### Create React App
Although the project is no longer being maintained in favour for things like [Next.js](https://nextjs.org/learn-pages-router/basics/create-nextjs-app), I wanted to lead this workshop with technology that I am the most familiar with, as my day job right now is 99% backend PHP and I have had limited experience with Next.js.

#### yarn vs npm
I use `yarn` as my package manager, but `npm` will do the same thing. Just note that there are some syntax differences. Fortunately apart from the initial setup of this project there is nothing extra to install. 

### Setting up the project
[Project Repo](https://github.com/connkat/hooks-code-along)
1. Fork this whole repo using the `fork` button in the top right hand side of the repo. 

2. Once you have your own fork of this project, you are going to clone it so you can work on it locally. 
	* Click on `Code`
	* Select `SSH`
	* Click `Copy to Clipboard`

3. Open up a terminal on your computer and navigate to the parent folder that you would like this project to live in. 

4. Paste the SSH key into your terminal like this: `git clone <pasted key>` then hit enter

5. Navigate into the `start-here` folder by using `cd start-here`

6. Install packages by using either `npm i` or `yarn`, depending on which package manager you prefer. 


Now it is time to follow along and ask questions along the way!