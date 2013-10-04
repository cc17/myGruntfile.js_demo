define("start", [ "./b", "./a" ], function(require) {
    var b = require("./b");
    b.test();
});