/**
 * Created by JetBrains PhpStorm.
 * User: Waxayaz
 * Date: 28/03/12
 * Time: 18:34
 */

include("JSx11-Core.js");
include("JSx11-Auth.js");
include("JSx11-Desktop.js");
include("JSx11-Taskbar.js");

var JSx11_BASE_URL = "http://localhost/JSx11-UI/";

var jsx11 = null;

/***************************************************************************************************
 * Entry point of JSx11 Application
 */
$(function() {
    // Create JSx11 Application
    jsx11 = new JSx11();
    jsx11.checkNavigatorCompatibility();

    // Initialise User Desktop
    jsx11.initialiseUserDesktop();
});
/*
*
***************************************************************************************************/


/**
 * JSx11 Class
 */
var JSx11 = $.inherit({
    __constructor : function(){
        this.core = new JSx11Core();
        this.auth = new JSx11Auth();
        this.desktop = new JSx11Desktop();
        this.taskbar = new JSx11Taskbar();
    },

    checkNavigatorCompatibility: function() {
        // TODO: Implement Navigator compatibility check
    },

    initialiseUserDesktop: function() {
        // Render main layout
        this.core.renderTemplate("body", "UserDesktopLayout.html");

        // Initialise Taskbar and Desktop
        jsx11.taskbar.initialise();
        jsx11.desktop.initialise();
    }
});



/***************************************************************************************************
 * UTILS
 */
function executeAsync(method) {
    setTimeout(method, 50);
}