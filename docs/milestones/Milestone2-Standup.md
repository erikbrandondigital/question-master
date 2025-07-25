# Milestone 2

⚙️ Overview - For Milestone 2, I successfully built all four pages of my project within a few days. The project’s overall appearance matches up perfectly with my prototype, and I am happy with what I've built so far. Not only does it look great, but my project is well-organized, and my component library is fairly flexible. After building some of the main components, it was easy to build whatever was missing. Overall, I think I'm in a great position to start building my MongoDB backend API and integrate the jService.io API with my project.

<br>

🌵 Challenges - This week, I had two main challenges. First, I accidentally made a commit to my repo that didn't include all the staged changes. So, I spent about an hour trying to undo the most recent commit, make the changes locally, and then force-push the changes to my repo to overwrite the commit I messed up. It took me some time to figure it out, but I managed to get it working. Second, I had trouble with the initial setup of my project. My plan was to have one package.json file in the entire project while breaking my project into client and server subfolders. The only problem is that Vite automatically works in the subfolder that it generates. However, I figured out that by specifying the location of the Vite.config.js file in the dev script command in my package.json and adding a root option in the vite.config.js defineConfig() function, I was able to get things working the way I wanted them to. So, while it took me some time to figure things out, I'm happy with how I've set things up.

<br>

🏆 Accomplishments - I think that my main accomplishment this week was being able to build my entire front end in a few days. With all the assignments between Project & Portfolio 2 and Professional Development Seminar 2, I felt like I was falling a little behind. But thankfully, my skills were sharper than I expected, and I was able to get things going in a shorter time than I originally estimated. Not only did I build a single-page web application frontend that matches up perfectly with my prototype, but I also created what I believe to be a modular and flexible component library and project.

<br>

🔮 Next Steps - In the coming weeks, I plan to continue the development of Question Master by integrating the jService.io API and a custom-built MongoDB API with the existing frontend. In addition, I plan to add additional features to the existing web application, such as completing the game loop, validating forms and checking answers, saving and updating statistics and user data, and more. I will also be refactoring my existing codebase as needed too. Hopefully, with a lighter workload this week, I’ll have plenty of time to build out the rest of my project and get things functioning like I originally envisioned.

Please discuss the following:

#### Page #1

- **Dashboard** - The first page that the user sees when they visit the Question Master platform. On this page, the user will see their stats and they will have the option to continue practicing either of the two games modes - Answers or Final Answer.

#### Page #2

- **Answers** - The Answers page will feature the main game board loaded with questions from the jService API. The user will select a clue on the board, which will then be replaced by a clue and answer form. In the form, the user will enter their answer into an input field and click a “check answer” button, which will check the user’s answer, update their statistics & display a message indicating whether they got the question correct or incorrect. After, checking their answer, the user will then select another clue on the board from the remaining available clues. When the entire board is cleared, a new board will be presented to the user so they can continue practicing.

#### Page #3

- **Final Answer** - The Final Answer page will feature a clue loaded from the jService API with an input field at the bottom of the screen where the user can enter their answer and click a “check answer” button, which will check the user’s answer, update their statistics & display a message indicating whether they got the question correct or incorrect. After checking their answer, a new Final Answer clue will be presented to the user so they can continue practicing.

#### Page #4

- **Account** - The Account page will feature a form containing all the user’s information that they have entered into the Question Master platform that they can update at any time. Additionally, there will be a “reset stats” button that users can click to reset their statistics should they wish to start from scratch.

#### Remember that creating a project board, issues, and milestones is 50% of your grade!

If you are having trouble, contact your instructor ASAP, you might need to be part of the ePortoflio group to have better access.
