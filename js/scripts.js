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