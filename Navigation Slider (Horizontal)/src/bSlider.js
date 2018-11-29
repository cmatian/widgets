// bSlider
function bSlider(element) {
    function getState() {
        if ( $bar.find('li').hasClass('active') ) {
            return $bar.find('li.active')
        }
        return false;
    }

    var $bar = $(element),
        active = getState(),
        pointer = $bar.find('li'),
        slider = $('.slider'),
        barHeight = pointer.outerHeight() - slider.height(),
        animateSpeed = 425,
        fadeSpeed = 325;

    // Flag determines which animation behavior the function will follow and when
    var flag = true;

    // Initial Slider set up - set to the currently active list item if it exists
    if ( active ) {
        var activeLeft = active.offset().left,
            activeWidth = active.outerWidth();
        slider.css({ "width": activeWidth, "left": activeLeft, "top": barHeight});
        $(pointer).on('mouseenter', function() {
            var ptrWidth = $(this).outerWidth(),
                ptrLeft = $(this).offset().left;
            var styleData = { "width": ptrWidth, "left": ptrLeft, "top": barHeight };
            slider.stop().animate(styleData, animateSpeed);
        });
    } else {
        // Initialize the slider as hidden
        slider.fadeOut(0);
        /*
        - On mouse enter calculate the positioning of the bar relative to the li element the cursor is hovering over.
            - If the flag is true it will fadeIn from the cursor location (and set the flag to false)
            - Else it will animate the bar position - this is for when the user cursor goes to another li element without leaving the ul boundary
                -If the opacity never completely transitioned to 1, the function will run and force opacity to continue transition while animating
         */
        $(pointer).on('mouseenter', function() {
            var ptrWidth = $(this).outerWidth(),
                ptrLeft = $(this).offset().left;
            var styleData = { "width": ptrWidth, "left": ptrLeft, "top": barHeight };
            if ( flag ) {
                slider.css(styleData).fadeIn(fadeSpeed);
                flag = false;
                return;
            }

            slider.stop().animate(styleData, animateSpeed);
            if ( slider.css('opacity') !== 1 ) {
                // {Queue: False} means the fadeIn will not wait for other animations
                // It will occur as the animation progresses
                slider.fadeIn({"queue": false}, fadeSpeed);
            }
        });
    }

    // Resets the slider back to the currently active list element OR it will fadeOut - depends on whether or not the slider has an active li
    $bar.on('mouseleave', function () {
        if ( active ) {
            slider.stop().animate({width: activeWidth, left: activeLeft, top: barHeight}, animateSpeed);
            return;
        }
        flag = true;
        slider.fadeOut(fadeSpeed);
    });
}



