# FrontEndDevTask

This project was created using create-react-app.
To Run the project 'npm start client' in /client folder and 'nodemon' in /server.

Following our call, I picked up on a lot of hints that you use SCSS and your own css and components rather than using libraries such as Material-UI and JSS which I have used for the past 3 years in development. I made an effort in learning on how to use SCSS and did so, definitely not utilizing it to its best abilities in terms of inheritance and whatnot. I still need to learn on how to structure the files with it, small stuff to pick up on when I work on it more frequently. I also created my own components besides using the Formik and Yup libraries which I find to be very helpful with form validation.
___________________________________________________________________________

WebPage Flow:
____________________________________
Home/Layout ->

The Project runs on localhost:3000 and the landing page is shown - As soon as it is mounted, an API call is made to get the users public IP. When the Ip is returned, the latitude/longitude associated with it are picked up, and passed as a parameter to the weather api where the current weather conditions are returned; description/temperature/UV index/Icon - These are all displayed on a bar underneath the main NavBar.

The main navBar contains a clickable Logo link on the left which takes the user to either the landing page if logged out or the gamebrowser if logged in. On the right a clickable button takes the user to the login Page.
Underneath the weather conditions bar there is an animated banner with some text and a button component which takes the user to the login page.

The rest of the page contains fake text and feedback components using a flexbox display format.

The footer on the bottom of every page (part of the Layout component) contains a number of unclickable links.

____________________________________
Login Page ->

This page is a simple page containing a Formik Component which does its validation using Yup via a custom validation schema.

Not a lot to explain on this page - if the validation schema is not met, an error message pops up underneath the corresponding field/s in an animated fashion displaying the issue. If everything is fine, an action is fired containing the info, and the reducer stores only the username for it to be used in the Layout. The username is displayed on the right hand side of the Weather Bar - Logged in as '{username}'. The user is then redirected to the GameBrowser Page

_____________________________________
GameBrowser Page ->

As soon as this page is loaded - the games are loaded (further explained in the Section 'Sagas Flow' below). Whilst the games are being loaded an animated Loading Component is displayed; this is then hidden when the games are successfully loaded. The games displayed are large squares with an underlay of the description hidden underneath; when the game is hovered on, a translation happens and the description in shown - along with a background colour change.

In addition to this, a new bar is shown underneath the weather bar. This bar contains a search bar, a clear filter button, a vendor drop-down list, and a pair of ascending and descending order buttons.

A 'filtered' state variable is set to be the same as the props received. This is what is ultimately shown in the GameBrowser

When the search bar input field is changed, a handleChange function is called, this reads the input and filters the current 'filtered' array to only contain games with a partial or full match of what is inside the search bar input after it is lowercased in order to avoid any conflicts. The 'filtered' variable is then set to be the same as the new list generated within this function. If no games are returned, a text message is displayed showing that there are no results.

The filter by Vendor drop down list is populated by generating an array from a set that is filtering the current 'filtered' state variable by their vendor property. When an option is selected, its value is set as a filter criteria for the current 'filtered' state vendor property. The 'filtered' variable is then set to be the same as the array that is returned from this filter. If the 'No Filter' option is selected, filtered is reset to be the same as what is received via the props (no filters applied).

The Ascending and Descending Order buttons use a Bubble Sort algorithm found within the HelperFunctions.js file in /Constants. This function simply returns the sorted array, which is then assigned to the 'filtered' state variable.

The Clear Filters Button simply sets the 'filtered' state variable to what is inside the games.games variable in props, and the 'vendorFilter' state variable is set to be empty as well.

___________________________________________________________________________

Sagas Flow:

I Have been using Sagas for the past 3 years as Redux Middleware. A brief example of how it is used in this project in the GameBrowser Component:

In terms of the GameBrowser Component. When the Component is loaded (ComponentDidMount), it will dispatch an action called getGames(). This Action will fire a type called: GET_GAMES, and will set loading: true in the Reducer prior to being picked up by the Saga.

The Sagas are divided in two generator function sections: a single generator function called a Watcher Saga in this case (getGameSagas()), whilst the other section contains Sagas called Worker Sagas.

Watcher Sagas listen to the Action types being dispatched; when one of the Actions types is picked up, the takeLatest fires the corresponding Worker Saga function which does all the heavy lifting. This is where getGamesCollection worker Saga is fired; this generator function calls the API and fetches the response. Once the response is picked up and verified to be ok, is converts the response to a json format and dispatches the GetGamesSuccess(data) action with the response as a parameter.

The GetGamesSuccess Action then sets the Games to what is received via the API and loading : false in the Reducer. This is where the Component is then able to render the Games List in lieu of the Loading Component.
___________________________________________________________________________

The structure is divided as such:

Assets/ -> Contains the images used in the webpage

Components/
  -> Layout
    -> Contains Components which are included in the Layout of every page
  -> Pages
    -> Contains all the Pages and Components related to each different Page. The Components present in each subfolder are only present in          that page
  -> Shared
    -> Components which are found in different sections of the webpage
    
Constants/ -> Contains files which contain string values for different parts of the page, Routes, Validation Schema and Helper Functions in order to avoid excessive logic in the different components.

Store/ -> Contains items which relate to Redux Actions, Reducers and Sagas
  -> API -> API Endpoints and API Keys which could've been included in the Constants folder but it made sense to separate them into the             Store
  -> User -> Actions, Reducers and Sagas relating to User Items such as IP, Weather Details and Login Status
  -> Game -> Actions, Reducers, and Sagas relating to Game Items - whether they are currently Loading as well as the actual games list                itself
 
