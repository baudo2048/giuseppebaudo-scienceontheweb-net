/* this script insert a node before the first script tag
*/
var lastEl = document.getElementsByTagName('script')[0];
var myNode = document.createElement('div');
var body = document.getElementsByTagName('body')[0];
myNode.innerHTML = '<form action="../samples/php-file-io/save-page.php" method="post"><input name="msg" type="text"><input type="submit"></form>';
body.insertBefore(myNode, lastEl);