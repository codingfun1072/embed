import { getCollection } from "astro:content";

export async function GET() {
    const gameEntries = await getCollection("games");
    const gameSlugs = gameEntries.map((entry) => [
        entry.slug.split("/").at(-1),
        entry.slug,
    ]);

    return new Response(
        /* javascript */
        `export const gamesMap = Object.freeze(new Map(${JSON.stringify(gameSlugs)}));
export const games = Object.freeze([...gamesMap.keys()]);\n`
    );
}
