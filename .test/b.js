define("b", [ "./a" ], function(require) {
    var a = require("./a");
    return {
        test: function() {
            alert("b");
            a.test();
        }
    };
});