$(function() {
    const emailValido = email => {
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
        }else if (!emailValido(email)) {
            $("label#email_error").text("Por favor, escribe un correo electrónico válido");
            $("label#email_error").show()
            $("input#email").focus();
            return false;
        }

        var subject = $("input#subject").val();

        if (subject == "") {
            $("label#subject_error").show();
            $("input#subject").focus();
            return false;
        }

        var textarea = $("#textarea").val();

        if (textarea == "") {
            $("label#textarea_error").show();
            $("#textarea").focus();
            return false;
        }

        var dataString = 'name='+ name + '&email=' + email + '&subject=' + subject + '&textarea=' + textarea;

        $.ajax({
            method: "POSTE",
            url: "https://formsubmit.co/ajax/676b1aa032ca54d23e4e5e871085ee7f",
            dataType: "json",
            data: dataString,
            accepts: 'application/json',
            success: () => {
                $('#contact__form').html("<div id='message'></div>");
                $('#message').html("<img id='checkmark' src='assets/check.svg' class='message__check' />")
                .append("<h2 class='message__title'> Gracias por comunicarse</h2>")
                .append("<h3 class='message__subtitle'> Su mensaje ha sido enviado correctamente.</h3>")
                .append("<p class='message__text'> Me pondré en contacto con usted a la brevedad </p>")
                .hide()
                .fadeIn(700);
            },
            error: () =>{
                $('#contact__form').html("<div id='message--error'></div>");
                $('#message--error').html("<img id='checkmark' src='assets/failure.svg' class='message__check' />")
                .append("<h2 class='message__title'> ¡Error! </h2>")
                .append("<p class='message__text--error'> Ha ocurrido un error, por favor vuelva a intentarlo nuevamente.</p>")
                .hide()
                .fadeIn(700);
            }
        });
       
        return false;
    });
});



