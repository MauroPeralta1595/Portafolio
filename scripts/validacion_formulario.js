$(function() {
    const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    $('.error').hide();
    $(".contact__form__button").click(function() {
        $('.error').hide();

        var name = $("input#name").val();

        if (name == "") {
            $("label#name_error").show();
            $("input#name").focus();
            return false;
        }

        var email = $("input#email").val();

        if (email == "") {
            $("label#email_error").text("Este campo es obligatorio.")
            $("label#email_error").show();
            $("input#email").focus();
            return false;
        }else if (!emailVálido(email)) {
            $("label#email_error").text("Por favor, escribe un correo electrónico válido");
            $("label#email_error").show()
            $("input#email").focus();
            return false;
        }

        var subject = $("input#subject").val();

        var textarea = $("#textarea").val();

        var dataString = 'name='+ name + '&email=' + email + '&subject=' + subject + '&textarea=' + textarea;
        $.ajax({
            method: "POST",
            url: "https://formsubmit.co/ajax/e557f9d82b822641ff07371b3d640a0f",
            dataType: "json",
            data: dataString,
            accepts: 'application/json',
        });

        function showMessage(){
            $('#contact__form').html("<div id='message'></div>");
            $('#message').html("<img id='checkmark' src='assets/check.svg' class='message__check' />")
            .append("<h2 class='message__title'> Gracias por comunicarse</h2>")
            .append("<h3 class='message__subtitle'> Su mensaje ha sido enviado correctamente.</h3>")
            .append("<p class='message__text'> Me pondré en contacto con usted a la brevedad </p>")
            .hide()
            .fadeIn(700);
        }
        
        
        showMessage();
       
        return false;
    });
});


