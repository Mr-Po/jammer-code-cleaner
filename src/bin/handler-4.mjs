// 轻之国度 小说站
jammerCodeHandlers.push({
    support: url => url.indexOf('www.lightnovel.us/cn/detail/') > -1,
    handle: () => {

        // 注册根节点拷贝事件
        document.oncopy = e => {

            let content;
            try {
                content = document.selection.createRange().text;
            } catch (t) {
                content = window.getSelection().toString();
            }

            const clipboardData = window.clipboardData || e.clipboardData;

            clipboardData.setData("Text", content);
        };
    }
});