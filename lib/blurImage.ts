import { getPlaiceholder } from "plaiceholder";

export async function blurImage(poster_path: string) {
  const src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { color, base64, pixels } = await getPlaiceholder(buffer);
  return {
    color,
    base64,
    pixels,
  };
}
