/**
 * Created by JetBrains PhpStorm.
 * User: Waxayaz
 * Date: 29/03/12
 * Time: 01:22
 * To change this template use File | Settings | File Templates.
 */

var JSx11Modules = $.inherit({
    __constructor: function() {

    },

    initialise: function() {
        executeAsync(function(){jsx11.modules.loadModule("JSx11-Console");});
    },

    loadModule: function(moduleName) {
        var className = moduleName.replace("-", "");
        /*
        $.ajax({
            url: JSx11_BASE_URL + "resources/js/modules/"+moduleName+".js",
            async: false,
            success: function(data) {
                try {
                    window.eval(data);
                    var moduleInstance = window.eval("new "+className+"();");
                    //var loaded = (moduleInstance != undefined);
                    window.eval("var "+moduleInstance.varName+" = new "+className+"();");
                    window.eval("var loaded = (undefined != "+moduleInstance.varName+");");
                    if(loaded == true) {
                        //debug("JSx11-Modules", ("Module "+moduleName+" is loaded !"));
                        debug("JSx11-Modules", (moduleName+" is loaded and instanciated in var '"+moduleInstance.varName+"'"));
                        moduleInstance.initialise();
                        debug("JSx11-Modules", "Module "+moduleName+" is initialised !");
                        return moduleInstance;
                    } else {
                        debug("JSx11-Modules", "Unable to load module : "+moduleName);
                    }
                } catch(err) {
                    debug("JSx11-Modules", "Unable to load module : "+moduleName);
                    return undefined;
                }
            }
        });
        */

    }
});