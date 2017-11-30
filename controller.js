(function() {

    $("#contact-form").on("submit", function(event) {
        event.preventDefault();
        submit();
    });

    $("a#open-menu").on("click", function(event) {
        event.preventDefault();
        if ($("div.shape").hasClass("shift")) {
            $("div.shape").removeClass("shift");
            $("ul.mobile-nav").removeClass("appear");
        } else {
            $("div.shape").addClass("shift");
            $("ul.mobile-nav").addClass("appear");
        }
    });

    $("a.nav-item").on("click", function(event) {
        event.preventDefault();
        $this = $(this);
        var data = $this.data("link");
        var yPos = 0;
        if (data !== "home") {
            yPos = $("#" + $this.data("link")).offset().top;
        }

        $("html, body").animate({ scrollTop: yPos });
    });

})();

function submit() {
    $.post("contact.php", {
            name: $("#input-name").val(),
            email: $("#input-email").val(),
            content: $("#input-content").val()
        })
        .done(function(data) {
            $("#contact-form").html("<h4>Thank you!</h4><h4>We'll get back to you shortly!</h4>");
        });
}