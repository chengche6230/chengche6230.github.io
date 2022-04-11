var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("真假", "確實", "笑死", "有料", "冷靜");
        var color = new Array("#A7414A", "#282726", "#6A8A82", "#A37C27", "#563838");
        var $i = $("<span/>").text(a[a_idx]);
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 28,
            "left": x - a[a_idx].length * 8,
            "position": "absolute",
            "color": color[a_idx]
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function() {
            $i.remove();
        });
        a_idx = (a_idx + 1) % a.length;
    });
});