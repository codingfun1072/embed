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

document.write(`<${"style"}>
    * {
        border: none !important;
    }
    
    html, body, iframe {
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
</${"style"}>
<iframe></iframe>`);

function fromB64(base64) {
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));

    return new TextDecoder().decode(bytes);
}

// document.write("Hello?");
console.log("Help!!!");
/* document.write(fromB64(location.hash.slice(1))); */

document.querySelector("iframe").srcdoc = fromB64(location.hash.slice(1));
document.querySelector("footer").remove();
document
    .querySelector("body div")
    .replaceWith(...document.querySelector("#cat").children);

/* document.title = "New Tab"; */
window.onhashchange = () => location.reload();
// url += "#" + toB64(prompt("z"));
