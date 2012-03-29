/**
 * Created by JetBrains PhpStorm.
 * User: Waxayaz
 * Date: 28/03/12
 * Time: 18:34
 */
__require("JSx11-Core.js");

var JSx11_BASE_URL = "http://localhost/JSx11-Client/";
var jsx11 = null;

/***************************************************************************************************
 * Entry point of JSx11 Application
 * Executed when index.html page is loaded
 */
$(function() {
    debug("Starting JSx11-Client...");
    jsx11 = new JSx11();
    jsx11.initialise();
    jsx11.core.waitForModulesLoaded(function() {
        jsx11.initialiseUserDesktop();
    });
});
/*
*
***************************************************************************************************/



/***************************************************************************************************
 * JSx11 Main Class
 * ------------------------------------------------------------------------------------------------
 * This class initialise all JSx11-Client modules and configuration
 *
 */
var JSx11 = $.inherit({

    /**
     * Constructor - Build new JSx11-Client application
     */
    __constructor : function(){
        this.core = new JSx11Core();
    },


    /**
     * Initialise JSx11 Application
     */
    initialise: function() {
        // Load needed modules
        this.core.loadModule("JSx11-Desktop");
        this.core.loadModule("JSx11-Taskbar");

        // Callback
        jsx11.core.waitForModulesLoaded(function() {
            jsx11.desktop = new JSx11Desktop();
            jsx11.taskbar = new JSx11Taskbar();
        });
    },


    /**
     * Initialise User Desktop
     */
    initialiseUserDesktop: function() {
        // Render main layout
        this.core.renderTemplate("body", "UserDesktopLayout.html");

        // Initialise Taskbar and Desktop
        jsx11.taskbar.initialise();
        jsx11.desktop.initialise();
    }
});
/*
*
***************************************************************************************************/



/***************************************************************************************************
 * UTILS
 */
function executeAsync(method) {
    setTimeout(method, 60);
}

function debug(className, log_txt) {
    if (window.console != undefined) {
        if(log_txt)
            console.log("[JSx11-UI] ["+className+"] " + log_txt);
        else
            console.log("[JSx11-UI] "+ className);
    }
}

function __require(file) {
    document.write("<script type='text/javascript' src='resources/js/"+file+"'><\/script>");
}