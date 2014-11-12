var fs = require('fs');
var vm = require('vm');

var redirs = [];

var text = fs.readFileSync('_includes/redirs.js', 'utf8');

// Fills in redirs.
eval(text);

redirs.forEach(function (redir) {
    redir.urls.forEach(function (url) {
        if (process.argv[2] === '-v') {
            console.log(url);
        } else if (process.argv[2] === '-d') {
            fs.unlinkSync(url + '/index.html');
            fs.rmdirSync(url);
        } else {
            fs.mkdirSync(url);
            fs.writeFileSync(url + '/index.html', '---\nlayout: default\n---\n<a href="' + redir.dest + '">' + redir.dest + '</a>', 'utf8');
        }
    });
});
