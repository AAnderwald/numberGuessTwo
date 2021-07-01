//function always create an element based on element you want to create. add to and context content and append it to some parent.

function DOMUtil(tag, parentId, text) {
    let ele = document.createElement (tag);
    ele.textContent = text;
    document.getElementById(parentId).appendChild(ele);
}

