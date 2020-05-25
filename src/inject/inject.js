var text = window.document.body.textContent;

const selectors = [
    'div[itemtype="http://schema.org/Recipe"]',
    'div[data-recipe-id]',
    '.recipe-details-container',
    '#recipe',
    '.recipe'
];
let el = null;
for (let i = 0; i < selectors.length; i++) {
    el = document.querySelector(selectors[i]);
    if (el) {
        console.log('hiding all sibling elements before: ', selectors[i]);
        break;
    }
}

if (el) {
    // chrome.extension.sendRequest({});

    const parent = el.parentElement;
    let node = parent.childNodes[0];

    while (node && node !== el) {
        if (node.nodeType === 1) {
            node.classList.add('real-recipe-hide');
        }
        node = node.nextSibling;
    }
}