import { readdir, readFile } from "node:fs/promises";
import path from "node:path";


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
    const file = await readFile(
        resolve`./src/lib/${name}`
    );

    return new Response(file.buffer);
}
