/**
 * Created by JetBrains PhpStorm.
 * User: Waxayaz
 * Date: 28/03/12
 * Time: 19:30
 * To change this template use File | Settings | File Templates.
 */

/**
 *
 */
var JSx11Desktop = $.inherit({
    __constructor: function() {
        this.backgroundImage = null;
    },

    initialise: function() {
        jsx11.core.renderTemplate("#desktop", "desktop/Desktop.html"); // Render Desktop Template
        jsx11.core.renderTemplate("#taskbar", "desktop/Taskbar.html"); // Render Taskbar Template

        // Set Desktop Size
        executeAsync(function(){$("#desktop").css("bottom", jsx11.taskbar.height+"px");});

        this.setBackgroundImage("resources/images/background_image.jpg");
    },

    setBackgroundImage: function(bgImage) {
        this.backgroundImage = bgImage;
        setTimeout(function(){
            $("#desktop").css("background-image", "url("+bgImage+")");
            $("#desktop").css("background-position", "top right");
            $("#desktop").css("background-repeat", "no-repeat");
        }, 50);
    }
});