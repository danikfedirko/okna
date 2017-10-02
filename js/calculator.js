var price = 10000;
var priceStep2 = price;
var priceStep3 = priceStep2;
$(document).ready(function () {

    $("#price-final").click(function () {
        var price = $(this).text().replace(/ /g,'');
        price = parseInt(price);
        price = price + 1;
        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $("#price-final").text(price);
    });

    $("#type-opt-1").click(function () {
        price = 5000;
        var priceformat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $("#price-final").text(priceformat);
        $(".mode-option .my-radio-button").removeClass("active");
        $("#type-mode-1").addClass("active");
        priceStep2 = price;
        $("#complectation .my-radio-button").removeClass("active");
        $("#standart-compl").addClass("active");
        $(".my-radio-button-box").removeClass("active")
    });

    $("#type-opt-2").click(function () {
        price = 7500;
        var priceformat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $("#price-final").text(priceformat);
        $(".mode-option .my-radio-button").removeClass("active");
        $("#type-mode-1").addClass("active");
        priceStep2 = price;
        $("#complectation .my-radio-button").removeClass("active");
        $("#standart-compl").addClass("active");
        $(".my-radio-button-box").removeClass("active")
    });

    $("#type-opt-3").click(function () {
        price = 10000;
        var priceformat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $("#price-final").text(priceformat);
        $(".mode-option .my-radio-button").removeClass("active");
        $("#type-mode-1").addClass("active");
        priceStep2 = price;
        $("#complectation .my-radio-button").removeClass("active");
        $("#standart-compl").addClass("active");
        $(".my-radio-button-box").removeClass("active")
    });

    $("#type-opt-4").click(function () {
        price = 7500;
        var priceformat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $("#price-final").text(priceformat);
        $(".mode-option .my-radio-button").removeClass("active");
        $("#type-mode-1").addClass("active");
        priceStep2 = price;
        $("#complectation .my-radio-button").removeClass("active");
        $("#standart-compl").addClass("active");
        $(".my-radio-button-box").removeClass("active")
    });

    $("#type-opt-5").click(function () {
        price = 6000;
        var priceformat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $("#price-final").text(priceformat);
        $(".mode-option .my-radio-button").removeClass("active");
        $("#type-mode-1").addClass("active");
        priceStep2 = price;
        $("#complectation .my-radio-button").removeClass("active");
        $("#standart-compl").addClass("active");
        $(".my-radio-button-box").removeClass("active")
    });

    $("#type-mode-1").click(function () {
        if ($(this).hasClass("active") === true) {
            priceStep2 = price;
            var priceformat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            $("#price-final").text(priceformat);
            $("#complectation .my-radio-button").removeClass("active");
            $("#standart-compl").addClass("active");
            $(".my-radio-button-box").removeClass("active")
        }
    });

    $("#type-mode-2").click(function () {
        if ($(this).hasClass("active") === true) {
            var temp = price + 500;
            priceStep2 = temp;
            var priceformat = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            $("#price-final").text(priceformat);
            $("#complectation .my-radio-button").removeClass("active");
            $("#standart-compl").addClass("active");
            $(".my-radio-button-box").removeClass("active")
        }
    });

    $("#standart-compl").click(function () {
        if ($(this).hasClass("active") === true) {
            var priceformat = priceStep2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            $("#price-final").text(priceformat);
            $(".my-radio-button-box").removeClass("active")
        }
    });

    $("#premium-compl").click(function () {
        if ($(this).hasClass("active") === true) {
            var temp = priceStep2 + 2500;
            priceStep2 = temp;
            var priceformat = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            $("#price-final").text(priceformat);
            $(".my-radio-button-box").removeClass("active")
        }
    });

    $("#check-box-1").click(function () {
        if ($(this).hasClass("active") === true) {
            var tempprice = parseInt($("#price-final").text().replace(/ /g, ''));
            var temp = tempprice + parseInt($("#otliv-price").text());
            $("#price-final").text(temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
        } else {
            $("#price-final").text(priceStep2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        }
    });

    $("#check-box-2").click(function () {
        if ($(this).hasClass("active") === true) {
            var tempprice = parseInt($("#price-final").text().replace(/ /g, ''));
            var temp = tempprice + parseInt($("#podokkonnik-price").text());
            $("#price-final").text(temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
        } else {
            $("#price-final").text(priceStep2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        }
    });

    $("#check-box-3").click(function () {
        if ($(this).hasClass("active") === true) {
            var tempprice = parseInt($("#price-final").text().replace(/ /g, ''));
            var temp = tempprice + parseInt($("#odkosy-price").text());
            $("#price-final").text(temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
        } else {
            $("#price-final").text(priceStep2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        }
    });

    $("#check-box-4").click(function () {
        if ($(this).hasClass("active") === true) {
            var tempprice = parseInt($("#price-final").text().replace(/ /g, ''));
            var temp = tempprice + 1500;
            $("#price-final").text(temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
            console.log(priceStep2);
        } else {
            $("#price-final").text(priceStep2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        }
    });

});