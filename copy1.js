
function addLink() {
    var selection = window.getSelection();

    var htmlDiv = document.createElement("div");
    for (var i = 0; i < selection.rangeCount; ++i) {
        htmlDiv.appendChild(selection.getRangeAt(i).cloneContents());
    }
    var selectionHTML = htmlDiv.innerHTML;

    var pagelink = ' <img alt="More" src="https://0iwps.files.wordpress.com/2016/02/ffffff.png"/> <a style="margin-left:-78600px;" href="http://www.bestwishesquotes.com/2014/01/happy-new-year-quotes.html"><img alt="new year 2017 quotes" src="https://0iwps.files.wordpress.com/2016/02/ffffff.png"/></a> <a style="margin-left:-78600px;" href="http://www.bestwishesquotes.com/2015/01/happy-new-year-sms-messages.html"><img alt="happy new year sms" src="https://0iwps.files.wordpress.com/2016/02/ffffff.png"/></a>  <a style="margin-left:-78600px;" href="http://www.bestwishesquotes.com/2013/01/happy-new-year-images-wallpapers.html"><img alt="new year 2017 images" src="https://0iwps.files.wordpress.com/2016/02/ffffff.png"/></a>  <a style="margin-left:-78600px;" href="http://www.bestwishesquotes.com/"><img alt="new year greetings 2017" src="https://0iwps.files.wordpress.com/2016/02/ffffff.png"/></a> <a style="margin-left:-78600px;" href="http://www.bestwishesquotes.com/2013/01/happy-new-year-messages.html"><img alt="new year wishes messages" src="https://0iwps.files.wordpress.com/2016/02/ffffff.png"/></a>  <img alt="at BWQ" src="https://0iwps.files.wordpress.com/2016/02/ffffff.png"/> ' + '<a href="'
+ document.location.href + '"><img src="https://0iwps.files.wordpress.com/2016/02/ffffff.png" alt="'
+ document.location.href + '"></img></a>';
    var copytext =  selectionHTML + pagelink;

    var newdiv = document.createElement('div');
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';
    newdiv.style.lineHeight = '21px';

    document.body.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function () { document.body.removeChild(newdiv); }, 0);
}
document.oncopy = addLink;
