$(document).ready(function () {
    $(".nav-portfolio li").click(function () {
        portfolioSwitcher(this);
    });

    $(".my-radio-button").click(function () {
        if($(this).hasClass("active") === false) {
            $(this).addClass("active")
        } else {
            $(this).removeClass("active")
        }
    });

    $(".type-option").click(function () {
        $(".type-option").removeClass("active");
        $(this).addClass("active");
    });

    $(".mode-selection .my-radio-button").click(function () {
        $(".mode-selection .my-radio-button").removeClass("active");
        $(this).addClass("active")
    });

    $("#complectation .my-radio-button").click(function () {
        $("#complectation .my-radio-button") .removeClass("active");
        $(this).addClass("active")
    });

    $("#open-pop-up").click(function () {
        $("#contact-popup").show();
    });

    $("#close-pop-up").click(function () {
        $("#contact-popup").hide();
    });

    $("#otliv-button").click(function () {
        if ($(".dropdown-options-menu").is(":visible")) {
            $(".dropdown-options-menu").hide();
            $("#otliv-list").hide();
        } else {
            $("#otliv-list").show();
        }
    });

    $("#otliv-list li").click(function () {
         var text = $(this).text();
         $("#otliv-arg").text(text);
         if (text === "70") {
             $("#otliv-price").text(150);
         } else if (text === "150") {
             $("#otliv-price").text(300);
         } else {
             $("#otliv-price").text(325);
         }
         $("#otliv-list").hide()
    });

    $("#podokkonnik-button").click(function () {
        if ($(".dropdown-options-menu").is(":visible")) {
            $(".dropdown-options-menu").hide();
            $("#podokkonnik-list").hide();
        } else {
            $("#podokkonnik-list").show();
        }
    });

    $("#podokkonnik-list li").click(function () {
        var text = $(this).text();
        $("#podokkonnik-arg").text(text);
        if (text === "150") {
            $("#podokkonnik-price").text(317);
        } else if (text === "200") {
            $("#podokkonnik-price").text(350);
        } else {
            $("#podokkonnik-price").text(375);
        }
        $("#podokkonnik-list").hide()
    });

    $("#odkosy-button").click(function () {
        if ($(".dropdown-options-menu").is(":visible")) {
            $(".dropdown-options-menu").hide();
            $("#odkosy-list").hide();
        } else {
            $("#odkosy-list").show();
        }
    });

    $("#odkosy-list li").click(function () {
        var text = $(this).text();
        $("#odkosy-arg").text(text);
        if (text === "200") {
            $("#odkosy-price").text(1891);
        } else if (text === "250") {
            $("#odkosy-price").text(2235);
        } else {
            $("#odkosy-price").text(2450);
        }
        $("#odkosy-list").hide()
    });

    function portfolioSwitcher(button) {
        var text = button.innerText;
        if (text === "Все") {
            $(".portfolio-item").show()
        } else if (text === "Окна") {
            $(".portfolio-item").hide();
            $(".portfolio-window").show()
        } else if (text === "Балконы") {
            $(".portfolio-item").hide();
            $(".portfolio-balcony").show()
        } else if (text === "Двери") {
            $(".portfolio-item").hide();
            $(".portfolio-door").show()
        }
        $(".nav-portfolio li").removeClass("active");
        $(button).addClass("active");
    }
});
function mobileMenu() {
    $("#top-bar-items").slideToggle("slow");
}