// 普通BBS论坛 - 隐藏块干扰码
jammerCodeHandlers.push({
    support: url => url.indexOf('thread') > -1 || url.indexOf('forum.php') > -1,
    handle: () => $("#postlist span[style=\"display:none\"]").remove()
});