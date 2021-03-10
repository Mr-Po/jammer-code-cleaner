// ==UserScript==
// @name         干扰码清除器
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  清除网页中隐藏的干扰码，便于内容复制和阅读模式下阅读。
// @author       Mr.Po
// @match        http*://*/thread*
// @match        http*://*/forum.php*
// @match        https://*/showpaperword?action=showbook&actmode=showpaper*
// @match        https://www.lightnovel.us/cn/detail/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    /*jshint esversion: 8 */

    // 干扰码处理器数组
    const jammerCodeHandlers = [];

    <#list 1..4 as i>
        <#include "/bin/handler-${i}.mjs" parse=false>


    </#list>

    const url = window.location.href;
    jammerCodeHandlers.filter(it=>it.support(url)).forEach(it => it.handle());
})();