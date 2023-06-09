/* eslint-disable */
import Popup from "./popupModel.js";
import popup from "./popupElements.js";
import fetchVideo from "./popupExeptions.js";
import { Modal } from "bootstrap";

const active = (obj) => {
  const popupElement = new Popup(
    popup[obj].targetPopup,
    popup[obj].title,
    popup[obj].badgesPopup,
    popup[obj].webm,
    popup[obj].png,
    popup[obj].live,
    popup[obj].source,
    popup[obj].description
  );
  document.body.insertAdjacentHTML("afterbegin", popupElement.show());
  fetchVideo(popup[obj].webm, popup[obj].png);
  const budgets = new Modal(
    document.getElementById(`${popup[obj].targetPopup}`)
  );
  budgets.show();
};

export default active;
