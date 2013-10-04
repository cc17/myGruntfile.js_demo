define("a-debug", [], function(require) {
    return {
        test: function() {
            alert("a");
            document.addEventListener("click", function() {
                alert("body click");
            });
        }
    };
});