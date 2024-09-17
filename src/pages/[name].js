import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { isUtf8 } from "node:buffer";
import { minifyHTMLLiterals } from "minify-literals";


function resolve(...params) {
    const relativePath = String.raw(...params);

    return path.resolve(relativePath);
}


const staticPaths = (await readdir(
        resolve`./src/lib/`, 
        { withFileTypes: true }
    ))
    .filter(item => item.isFile())
    .map(({ name }) => ({
        params: { name }
    }));

export function getStaticPaths() {
    return staticPaths;
}

export async function GET({ params: { name } }) {
    const path = resolve`./src/lib/${name}`;
    const file = await readFile(path);
    if(!isUtf8(file) || !path.endsWith(".js")) return new Response(file.buffer);

    //const { code } = await minifyHTMLLiterals(file.toString("utf8"));
    const result = await minifyHTMLLiterals(file.toString("utf8"));
    console.log(result?.code ?? "null!!!");
    return new Response(result?.code ?? file.buffer);
}
