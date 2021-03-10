// 普通BBS论坛 - 样式干扰码
jammerCodeHandlers.push({
    support: url => url.indexOf('thread') > -1 || url.indexOf('forum.php') > -1,
    handle: () => $('.jammer').remove()
});