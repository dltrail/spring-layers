import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



    // $(function () {
    //     var controller = new ScrollMagic.Controller();

    //     //Zoom into double images
    //     var firstScene = new ScrollMagic.Scene({
    //         triggerElement: '#trigger-one',
    //     })
    //         .setClassToggle('#story-one', 'slide-in')
    //         .addTo(controller);

    //         var secondScene = new ScrollMagic.Scene({
    //         triggerElement: '#trigger-two',
    //     })
    //         .setClassToggle('#story-two', 'slide-in')
    //         .addTo(controller);

    //         var secondScene = new ScrollMagic.Scene({
    //         triggerElement: '#trigger-three',
    //     })
    //         .setClassToggle('#story-three', 'slide-in')
    //         .addTo(controller);

    //         var secondScene = new ScrollMagic.Scene({
    //         triggerElement: '#trigger-four',
    //     })
    //         .setClassToggle('#story-four', 'slide-in')
    //         .addTo(controller);
    // })

