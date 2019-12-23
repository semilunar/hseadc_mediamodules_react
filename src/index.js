import React from "react";
import ReactDOM from "react-dom";

import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/VideoMask.scss";
import "./assets/stylesheets/application.scss";
import "./assets/stylesheets/css.css";
import "./assets/stylesheets/CustomVideo.scss";
import "./assets/stylesheets/Draggable.scss";
import "./assets/stylesheets/Flip.scss";
import "./assets/stylesheets/fonts.scss";
import "./assets/stylesheets/HorizontalScroll.scss";
import "./assets/stylesheets/Preset.scss";
import "./assets/stylesheets/Scroll.scss";
import "./assets/stylesheets/Slider.scss";
import "./assets/stylesheets/Split.scss";
import "./assets/stylesheets/Story.scss";
import "./assets/stylesheets/VideoDarkenWithTitle.scss";
import "./assets/stylesheets/magic-dots.css";

import Page from "./containers/Page";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Page />,
    document.body.appendChild(document.createElement("div"))
  );
});

// ReactDOM.render(<Page />, document.body.appendChild(document.createElement('div'))
