import "/node_modules/@fortawesome/fontawesome-free/css/all.css";
import "/node_modules/@fortawesome/fontawesome-free/js/all.js";
import showCardsWorks from "./works/cards/showCardsWorks.js";
import showCardsAbout from "./about/showCardsAbout.js";
import selectPopup from "./works/popups/selectPopup.js";
import navSlide from "./events/navigation.js";
import formEvent from "./events/mobileForm.js";
import "/assets/css/style.css";
import "/src/assets/js/bootstrap/bootstrap.bundle.min.js";

require.context(
  "/src/assets/img/background/desktop/",
  false,
  /\.(jpg|png|svg|webm)$/
);
require.context(
  "/src/assets/img/background/mobile/",
  false,
  /\.(jpg|png|svg|webm)$/
);
require.context(
  "/src/assets/img/recent_works/",
  false,
  /\.(jpg|png|svg|webm)$/
);

//  shows all the card that contain the information of the projects
showCardsWorks();

//  shows all the card that contain the information of the about me section
showCardsAbout();

//  activate the popup that contain the information of the projects
selectPopup();

//  activate the navigation bar
navSlide();

//  activate the form when the screen is less than 576px
formEvent();
