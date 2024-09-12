// Encoding function
//
// function toB64(string) {
//     const bytes = new TextEncoder().encode(string);
//     const binString = Array.from(bytes, byte =>
//       String.fromCodePoint(byte)
//     ).join("");
//
//     return btoa(binString);
// }

function fromB64(base64) {
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));

    return new TextDecoder().decode(bytes);
}

// document.write("Hello?");
console.info("[Blocksi Embed]: Running!");
// document.write(fromB64(location.hash.slice(1)));
// document.title = "New Tab";


const containerElem = document.createElement("div");
containerElem.innerHTML = `<style>
    * {
        border: none !important;
    }
    
    html, body, iframe {
        color-scheme: dark light;
        visibility: visible;
        width: 100vw !important;
        height: 100vh !important;
        overflow: hidden;
    }
    
    html, body {
        margin: 0;
        box-sizing: border-box;
    }
    
    iframe {
        border: none;
        padding: 0;
        width: 100%;
        height: 100%;
    }
</style>
<iframe></iframe>`;

document.body.replaceChildren(...containerElem.childNodes);
const iframe = document.querySelector("iframe");

function loadHTML() {
    console.info("[Blocksi Embed]: Loading HTML")

    iframe.srcdoc = fromB64(location.hash.slice(1));
    iframe.contentDocument.documentElement.style.colorScheme = "dark light";
}

window.onhashchange = loadHTML;
loadHTML();
