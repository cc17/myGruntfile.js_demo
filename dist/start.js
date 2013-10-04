define("start", [ "./b", "./a" ], function(require) {
    var b = require("./b");
    b.test();
});

define("b", [ "a" ], function(require) {
    var a = require("a");
    return {
        test: function() {
            alert("b");
            a.test();
        }
    };
});

define("a", [], function(require) {
    return {
        test: function() {
            alert("a");
            document.addEventListener("click", function() {
                alert("body click");
            });
        }
    };
});
