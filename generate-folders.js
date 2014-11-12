var fs = require('fs');

var redirs = [{'urls': ['soundcloud', 'sc', 's'], 'dest': 'https://soundcloud.com/leaf'}];

redirs.forEach(function (redir) {
    redir.urls.forEach(function (url) {
        fs.mkdirSync(url);
        fs.writeFileSync(url + '/index.html', '---\nlayout: default\n---\n', 'utf8');
    });
});
