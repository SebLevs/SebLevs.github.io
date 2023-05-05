addEventListener('load', init);
function init(){
    loadHeader();
    console.log("A");
}

function loadHeader()
{
    let header = document.getElementsByTagName("header")[0];
    header.innerHTML = 
    '    <div>';
}