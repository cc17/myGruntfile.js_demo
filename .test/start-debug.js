define("start-debug", [ "./b-debug", "./a-debug" ], function(require) {
    var b = require("./b-debug");
    b.test();
});