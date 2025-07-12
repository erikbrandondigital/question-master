# Milestone 3

⚙️ Overview – Overall, this week, I built a custom MongoDB API on the backend that stores user data and statistics for Question Master. For the API, I implemented all CRUD operations and error handling. I integrated the jService.io API on the frontend to fetch and display questions to users on either the Final Answer or Answers pages. I also completed the game loop so that users can answer multiple Final Answer questions back to back or all the questions on an entire Answers game board. Additionally, by integrating the custom MongoDB API, I successfully implemented a user journey where the user can register an account in the MongoDB database to keep track of their user data and statistics while they use the Question Master platform. I also learned a lot about the useQuery and useMutation hooks in React Query, how to chain multiple requests together using Axios, and how to preserve useState variables across an entire application using the useContext hook. In conclusion, I’m very proud of what I’ve built this past week and look forward to improving my functional application this week.

<br>

🌵 Challenges – My main challenge this week was implementing the game loop of Question Master. With all the moving pieces, it was sometimes challenging to figure out what piece of the puzzle to focus on. I had to remind myself to get things working before considering how to optimize my code. I sometimes put the cart before the horse and felt rather burnt out at times. Nevertheless, after taking a few breaks here and there and focusing on individual steps one at a time, I believe I have built an excellent minimum viable product at this point. Now it’s time to iron out the kinks and improve the overall experience while making some optimizations under the hood.

<br>

🏆 Accomplishments – My main accomplishments this week were getting the MongoDB API up and running and integrating additional libraries such as React Query and Axios, quickly and easily into my project. I am really proud of how quickly I picked up and implemented a few of these libraries. It was amazing to see how well-designed and efficient libraries can significantly reduce the time it takes to develop an application. I believe that I saved myself many headaches by using libraries like React Query and Axios this week.

<br>

🔮 Next Steps – In the final week, I plan to add some final polishing touches to my application. First, I plan on consolidating my code into more modular pieces because several parts of my codebase have plenty of unnecessary repetition. Second, I plan on figuring out a solution for the rate-limiting I’m experiencing intermittently while querying the jService.io API for six categories for the main game board. I plan to add a delay between requests to see if that will reduce the rate limit errors I’ve been experiencing. Lastly, I plan on adding some additional error messages and polish to the frontend to improve the user experience and provide better feedback when errors occur within the application.

<br>

Please discuss the following:

#### API

- [jService.io API](https://github.com/sottenad/jService)
- Reason you chose the API
  - I chose the jService API because it was the only free and publicly available API for game show questions that I could find in the [GitHub Public APIs Repo](https://github.com/public-apis/public-apis).
- Where in your code did you use it?
  - Answers.jsx, Lines 2 & 28-56
  - FinalAnswers.jsx, Lines 5 & 14-22

#### 1st Library

- [React Icons](https://github.com/react-icons/react-icons)
- [My React Icons Tutorial](https://fullsailedu-my.sharepoint.com/:v:/g/personal/embrandon_student_fullsail_edu/ESK6V4AzqYlJgFEI4wH9LEYBlT5oWmmf7sGLuqWiZMBxfA?e=lvkXC8)
- Reason you chose this library.
  - I chose React Icons because I was planning on using icons in my project for displaying user statistics on the Dashboard page. Since I enjoyed using React Icons a couple of months ago in a different project, I thought it would be an excellent library to use in my project for Project & Portfolio 2. My familiarity with React Icons helped accelerate my development time and gave me time to focus on more important tasks at hand.
- Where in your code is it used?
  - StatsCard.jsx, Lines 8-13 & 22-41

#### 2nd Library

- [TanStack Query (Formerly Known as React Query)](https://github.com/tanstack/query)
- Reason you chose this library.
  - I chose this library partly because it was recommended by my previous instructor Bradley Beltowski. When I hit a couple of snags trying to work with useEffect hooks, I re-discovered React Query while looking for a solution to my problem. When I found out it pretty much handles all the complex things related to network requests, caching, refetching, error handling and more, I was on board. I think the choice to use this library saved me an insane amount of time and made it super easy to make requests to the jService.io API and my custom MongoDB API.
- Where in your code is it used?
  - main.jsx : Lines 6, 18 & 22
  - App.jsx : Lines 2 & 38
  - FinalAnswerForm.jsx : Lines 5 & 21
  - MainAnswerForm.jsx : Lines 5 & 24
  - SettingsForm.jsx : Lines 3 & 32
  - Answers.jsx : Lines 2 & 28

#### Persistent Data

- For this project I selected MongoDB.
- How was it used in your code?
  - I used MongoDB to store user data and statistics related to their ability to answer real game show questions. I used a useContext and a useQuery hook in the App.jsx to always fetch the latest data from the MongoDB server. Then in the FinalAnswerForm & MainAnswerForm, the web app updates the user's statistics as they answer Answers or Final Answer questions. Lastly, the user can directly edit their user data on the Account page in the SettingsForm. All of this was accomplished using React Query useQuery and useMutation hooks, axios for requests and React useContext and useState hooks.
- Where in your code is it used?
  - FinalAnswerForm.jsx : Lines 5 & 21-28
  - MainAnswerForm.jsx : Lines 5 & 24-31
  - SettingsForm.jsx : Lines 3 & 32-39
  - App.jsx : Lines 2 & 38-42
