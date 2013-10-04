define("b-debug", [ "./a-debug" ], function(require) {
    var a = require("./a-debug");
    return {
        test: function() {
            alert("b");
            a.test();
        }
    };
});