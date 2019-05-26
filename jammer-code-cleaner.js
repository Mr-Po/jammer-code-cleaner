// ==UserScript==
// @name         论坛(BBS)帖子干扰码清除器
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  清除论坛帖子文本中隐藏的干扰码，便于复制和阅读模式下阅读。
// @author       Mr.Po
// @match        http*://*/thread*
// @match        http*://*/forum.php*
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    /**
     * 是否启用调试模式
     * 启用后，浏览器控制台会显示此脚本运行时的调试数据
     * @type {Boolean}
     */
    var isDebug = false;

    function clean($array, i) {

        if (isDebug) {

            console.log("从第[" + (i + 1) + "]个解析器中，找到干扰：" + $array.length + "个。");
        }

        $array.remove();
    }

    var jammerCodeResolver = $([
        function() {
            return $(".jammer");
        },
        function() {
            return $("#postlist span[style=\"display:none\"]");
        }
    ]);

    jammerCodeResolver.each(function(i, it) {

        var $array = it();

        clean($array, i);
    });
})();