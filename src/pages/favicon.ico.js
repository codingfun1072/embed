import sharp from "sharp";
import ico from "sharp-ico";
import path from "node:path";

// Relative to project root
const faviconSrc = path.resolve("./public/favicon.svg");

export async function GET() {
    // Resize to 32px PNG
    const pngBuffer = await sharp(faviconSrc)
        .resize(32, 32, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFormat("png")
        .toBuffer();
    // Generate ico
    const icoBuffer = ico.encode([pngBuffer])

    return new Response(icoBuffer);
}
