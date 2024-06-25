import { loadBibliographies } from "kodon";

export const prerender = true;

export async function load({ parent }) {
    const parentData = await parent();

    return loadBibliographies(parentData.config.bibliographies_directory);
}