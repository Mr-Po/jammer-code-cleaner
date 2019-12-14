// ==UserScript==
// @name         干扰码清除器
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  清除网页中隐藏的干扰码，便于内容复制和阅读模式下阅读。
// @author       Mr.Po
// @match        http*://*/thread*
// @match        http*://*/forum.php*
// @match        https://*/showpaperword?action=showbook&actmode=showpaper*
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

        if ($array == null) {
            return;
        }

        if (isDebug) {

            console.log("从第[" + (i + 1) + "]个解析器中，找到干扰：" + $array.length + "个。");
        }

        $array.remove();
    }

    var jammerCodeResolver = $([
        // 普通BBS论坛 - 样式干扰码
        function(i) {
            return $(".jammer");
        },
        // 普通BBS论坛 - 隐藏块干扰码
        function(i) {
            return $("#postlist span[style=\"display:none\"]");
        },
        // 海棠文化小说站
        function(i) {

            $("#readpagewidth").on('DOMNodeInserted', function() {

                clean($(this).find("font.OutStrRnds"), i);
            });

            return null;
        }
    ]);

    jammerCodeResolver.each(function(i, it) {

        var $array = it(i);

        clean($array, i);
    });
})();