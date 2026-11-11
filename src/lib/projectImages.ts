import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

/**
 * Capturas de proyectos procesadas por astro:assets (WebP + srcset).
 * Se cargan con glob para poder referenciarlas por ruta desde los datos.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/**/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

export function findProjectImage(path: string): ImageMetadata | undefined {
  return modules[`../assets/projects/${path}`]?.default;
}

export interface ResponsiveImage {
  src: string;
  srcset: string;
  width: number;
  height: number;
}

/** Versión responsive (WebP) para la imagen principal de una tarjeta. */
export async function responsiveImage(meta: ImageMetadata): Promise<ResponsiveImage> {
  const img = await getImage({
    src: meta,
    widths: [480, 800, 1200],
    format: "webp",
    quality: 78,
  });
  return {
    src: img.src,
    srcset: img.srcSet.attribute,
    width: meta.width,
    height: meta.height,
  };
}

/** Miniatura pequeña para el selector de capturas. */
export async function thumbnail(meta: ImageMetadata): Promise<string> {
  const img = await getImage({ src: meta, width: 192, format: "webp", quality: 70 });
  return img.src;
}
