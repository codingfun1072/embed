import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";


function resolve(...params) {
    const path = String.raw(...params);

    return fileURLToPath(
        new URL(path, import.meta.url)
    );
}


const staticPaths = await readdir(
        resolve`../lib/`, 
        { withFileTypes: true }
    )
    .filter(item => item.isFile())
    .map(({ name }) => ({
        params: { name }
    }));

export function getStaticPaths() {
    return staticPaths;
}

export async function GET({ params: { name } }) {
    const file = await readFile(
        resolve`../lib/${name}`
    );

    return new Response(file.buffer);
}
