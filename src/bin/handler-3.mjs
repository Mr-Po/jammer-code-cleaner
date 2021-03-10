// 海棠文化小说站
jammerCodeHandlers.push({
    support: url => url.indexOf('showpaperword?action=showbook&actmode=showpaper') > -1,
    handle: () => {

        // 当此节点被插入内容时
        $("#readpagewidth").on('DOMNodeInserted', function() {

            // 移除指定节点
            $(this).find("font.OutStrRnds").remove();
        });
    }
});