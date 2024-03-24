This Project is created to show how micro-frontends work. We used all react applications for micro-frontend but we can use vue or angular as per our requirements. we used Webpack`s ModuleFederationPlugin to configure Webpack. this is a movie app where we created different applications for different modules for ex, the details page, the home page, the container application, and the seat booking application. 
we also created a server to send a movie details application. 

* steps to run these projects locally.
1) Clone this repository from Git Hub or download the ZIP file.
2) After cloning, Install all the node modules of each application.
3) There are total 6 subfolders -> 4 micro-frontend applications, 1 container application, and 1 backend server for API.
4) After installing all node-modules first we will start backend server - MF_Server by command "npm run dev". The application will run on port 5555.
5) After that we will run all the running application using command - "npm run serve"
6) Every application run on different port as we configured in webpack.congig.js file.
     1) DetailsPageApp - The application shows the details of the selected movie.
     2) HomePageApp    - The application shows the list of movies and a navigation bar for quickly book movies.
     3) MovieApp       - The application is a container application, it contains and maintains all the small applications.
     4) ReactComponents- The Application contains the components we require. ex button.
     5) SeatSelectionApp- The Application provide a functionality to select the seat for movie we selected.
     6) MF_server       - The Application we used to create API for our Application.

* After runnning all the application go to localhost:9000 proper application will work.
* Note : if application not run. check the port in your system it might use already.


https://user-images.githubusercontent.com/6877923/115474571-03c75800-a23e-11eb-8096-8973aad5fa9f.mp4

https://youtu.be/C-u5WLJ9Yk4?si=OzwuHxRamHFDw7q6
