import fs from 'node:fs';


import frontMatter from 'front-matter';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const load = async ({ params, parent }) => {
    const { config } = await parent();
    const catchAll = params.catchall;
    const staticPage = config.static_pages.find((p: any) => p.path === `/${catchAll}`);

    if (!staticPage) {
        throw error(404, 'Page not found.');
    }

    const s = fs.readFileSync(staticPage.file_path, 'utf-8');
    const { attributes, body: rawBody } = frontMatter(s);
    const body = marked(rawBody);

    return {
        body,
        config,
        title: (attributes as any).title || staticPage.title,
    };
};