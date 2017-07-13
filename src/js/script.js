
// Owl Carousel

$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            992:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
});

//

// Translate

var arrLang = {
    'ru' : {
        'menu' : 'пункт',
        'p top' : 'Таким образом, дальнейшее развитие различных форм деятельности обеспечивает актуальность форм воздействия.',
        'button lorem': 'Кнопка',
        'button ipsum': 'Кнопка',
        'p text': 'Дорогие друзья',
        'p content': 'Генератор псевдочитабельного текста (рыботекста) полезен дизайнерам и верстальщикам при наполнении макетов и тестовых сайтов. Данный приём позволяет без лишнего труда создать эффект заполненности сайта текстовым контентом.Текст рыба или Lorem Ipsum специально делают лишённым логического смысла, чтобы пользователь мог сосредаточиться на визуальном восприятии макета.',
        'label name': 'Ваше имя',
        'label comment': 'Ваш комментарий'
    },
    'en' : {
        'menu' : 'item',
        'p top' :'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'button lorem': 'Button',
        'button ipsum': 'Button',
        'p text': 'Lorem ipsum',
        'p content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'label name': 'Your Name',
        'label comment': 'Your comment'
    }
};
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        })
    })
});

//
// Create Form

var $form = $('<form>',{ id: "form", method:"post"});
var $lName = $('<label for="name" class="lang" key="label name">Your Name:</label>');
var $name = $('<input>', { id: "name", type: "name", value: "" });
var $lComment = $('<label for="comment" class="lang" key="label comment">Your comment:</label>');
var $comment = $('<textarea>', { id: "comment", type: "text", row: 4, value: "" });
var $submit = $('<input>', { type: "submit", value: "Send"});
$form.append($lName);
$form.append($name);
$form.append($lComment);
$form.append($comment);
$form.append($submit);
$('#container').html($form);

//

// localStorage

var elem = document.querySelectorAll('input, textarea');
var elements = [];
elements.push(elem[0], elem[1]);
// console.log(elements);


for (i=0; i<elements.length; i++) {
    (function(element) {
        var id = element.getAttribute('id');
        element.value = sessionStorage.getItem(id);
        element.oninput = function() {
            sessionStorage.setItem(id, element.value);
        };
    })(elements[i]);
}

//

// validate Form
// не работает

/*form.onsubmit = function validate(form) {
     e.preventDefault();
     var reason = "";
     if (form.elem[0].value == "" || /[^a-zA-z]/.test(form.elem[0].value))
         reason += "Ошибка имени ";
     if (form.elem[1].value == "" || /[^0-9]/.test(form.elem[1].value))
         reason += "Ошибка заполнения ";

     if (reason == "")
         return true;
     else {
         alert(reason);
         return false;
     }
 };
*/

//