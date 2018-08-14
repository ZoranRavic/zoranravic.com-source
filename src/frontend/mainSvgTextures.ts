import * as svgtextures from "svg-textures";
import hljs = require('highlight.js/lib/highlight');

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.initHighlightingOnLoad();

// @ts-ignore
window.hljs = hljs;

for (const func in svgtextures)
{
    window[func] = svgtextures[func];
}

for (const example of document.querySelectorAll('.examples .content'))
{
    const codeEl: HTMLElement = example.querySelector('.code');
    const errorEl: HTMLElement = example.querySelector('.error');
    const previewEl: HTMLElement = example.querySelector('.preview');
    console.log(codeEl);
    applySvg(codeEl, previewEl, errorEl);
    codeEl.addEventListener('input', () =>
    {
        applySvg(codeEl, previewEl, errorEl);
        (codeEl as any).__hasChanged = true;
    }, false);
    codeEl.addEventListener('focusout', () =>
    {
        if ((codeEl as any).__hasChanged)
        {
            const code = example.querySelector('code');
            code.innerHTML = hljs.highlight('js', code.innerText).value;
            (codeEl as any).__hasChanged = false;
        }
    }, false);
}

function applySvg(codeEl: HTMLElement, previewEl: HTMLElement, errorEl: HTMLElement)
{
    const code = codeEl.innerText;
    if (code)
    {
        try
        {
            // previewEl.innerHTML = eval(code).toString();
            const res = eval(code);
            previewEl.innerText = '';
            previewEl.appendChild(res.toElement());
            errorEl.innerText = '';
        }
        catch (e)
        {
            errorEl.innerText = `Line ${e.lineNumber}: ${e.message}`;
        }
    }
    else
    {
        previewEl.innerText = '';
        errorEl.innerText = '';
    }
}
