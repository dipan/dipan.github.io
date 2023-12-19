/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $("li").tooltip({ boundary: 'window' });
})(jQuery); // End of use strict

const app = new Vue({
    el: '#vueApp',
    data: {
        name: undefined,
        email: undefined,
        subject: undefined,
        message: undefined,
        infoMessage: ''
    },
    methods: {
        sendEmail: function () {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    senderEmail: this.email,
                    html: `Resume Contact Form<br/>${this.email}<br/>${this.message}`
                })
            };
            fetch(`https://droplet.dipan.dev/api/v0/email?name=${this.name}&email=mandal.common@gmail.com&subject=${this.subject}`, requestOptions)
                .then(async (response) => {
                    const data = await response.json();
                    console.log(data);

                    if (response.ok) {
                        this.clearAll();
                        this.displayInfoMessage(data.message, 4000);
                    } else {
                        console.log(response);
                        this.displayInfoMessage(data.userMessage);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        isDisabled: function () {
            return this.name == undefined || this.name == ''
                || this.email == undefined || this.email == ''
                || this.subject == undefined || this.subject == ''
                || this.message == undefined || this.message == '';
        },
        clearAll: function () {
            this.name = undefined;
            this.email = undefined;
            this.subject = undefined;
            this.message = undefined;
        },
        displayInfoMessage: function (message, disappearDelay = 0) {
            this.infoMessage = message;
            if (disappearDelay > 0) {
                setTimeout(() => {
                    this.infoMessage = '';
                }, disappearDelay);
            }
        }
    },
    mounted: function () {
        console.log('Vue App mounted successfully');
    }
})