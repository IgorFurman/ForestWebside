# Structure

Forest was my first personal project. Project language is Polish. The page 
consists of main page called Forest, offer page and contact page. 

Lastly, the website's CSS and JS files are minified in the dist folder for optimal load times, ensuring a fast and smooth user experience. 

- **Forest**, is an interactive website designed for a fictial company that provides outdoor adventure services. The website is well-crafted and visually appealing, using a combination of captivating images and compelling content to engage visitors. Those are sections of main page: 

  - **Header**  the site starts with a captivating header showcasing the company's name and slogan.
  - **Navigation bar** makes easy for users to traverse different sections of the site. The mobile version of the navigation bar is also carefully designed for optimal user experience on smaller screens.
  - **About us**  section that features a detailed description of the company, accompanied by a beautiful image that captures the essence of their operations. Next, there's an attractive banner with a catchy phrase promoting family adventures. 
  - **Offers**  presents different pricing tiers for the services provided by the company. Each tier has a detailed list of what's included and what's not, enabling potential customers to make informed decisions.
  - **Footer** section providing more information about the company, career opportunities, and documentation. 

- **Contact** page is structured with a user-friendly form to facilitate user interactions. The form fields solicit necessary information such as name, email, and the message they wish to send. Besides the form, there is also an information section detailing the physical address and operating hours of the business. In addition, an embedded Google Maps widget provides a visual cue to the location.

- **Offer** page showcases a variety of outdoor activities available for selection. These activities range from guided hiking trips and mountain biking to animal encounters and bird watching. Each activity is presented within its own container, which includes a vivid and appealing image related to the activity, a heading that concisely names the activity, a brief description likely highlighting the appeal or specific details of the activity, and a button allowing users to select or learn more about the respective offer. There are nine diverse activities in total, indicating a broad range of options for various preferences and skill levels..

# JavaScript 

JavaScript code implements the functionality for a responsive navigation bar and scrollspy features in a website. It also handles the dynamic display of the current year in the footer. The description of each functionality is as follows:

- **Burger menu** navigation bar is set to display or hide based on the clicking of the burger icon and close button respectively. When the mobile navigation bar is displayed, scrolling of the webpage content is blocked, and when the mobile navigation bar is hidden, the scrolling is unblocked. Clicking on any item in the mobile navigation bar will hide the navigation bar and re-enable webpage scrolling.The code accounts for dynamic resizing of the navigation bar by attaching a 'resize' event listener to the window. This ensures that the offset for scrolling to different sections on the webpage is always correct, irrespective of the size of the navigation bar.

- **Scrollspy**: When a user clicks on a navigation link, the page smoothly scrolls to the corresponding section. The color of the navigation bar and navigation link is dynamically changed based on the section of the webpage currently in the viewport. This is done using a 'scroll' event listener on the window and checking which section the current scroll position falls into.

- **Footer Year** The function gets the current year using JavaScript's Date object and then sets the text content of the .footer__year element to this year.

# Gulp & related in json file extensions.

- **Gulp** is a task runner used in front-end development. This helps in automating tasks like Sass/SCSS compilation, auto-prefixing of CSS properties, minification of CSS and JavaScript files, running the local server, reloading the browser automatically, etc.

If you want to configure gulp setting just go into gulpfile.js and configure setting as you want.

# how to run

```bash
git clone <https://github.com/IgorFurman/ForestWebside.git>
cd <project-directory>
npm install
gulp
```