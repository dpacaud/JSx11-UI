/**
 * Created by JetBrains PhpStorm.
 * User: Waxayaz
 * Date: 28/03/12
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */

var JSx11Core = $.inherit({
    __constructor: function() {

    },

    initialise: function() {

    },

    renderTemplate: function(target, template) {
        var request = null;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (request != undefined) {
            request.onreadystatechange = function() {jsx11.core.renderHtmlResponse(target, request);};
            request.open("GET", JSx11_BASE_URL + "resources/templates/" + template, true);
            request.send( null );
        }
    },

    renderHtmlResponse: function(target, request) {
        if (request.readyState == 4) { // only if request is "loaded"
            if (request.status == 200) { // only if "OK"
                $(target).html(request.responseText);
            } else {
                $(target).html(" Unable to load template:\n"+ request.status + "\n" +request.statusText);
            }
        }
    }
});