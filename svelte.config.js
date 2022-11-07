import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({ postcss: true }),

    kit: {
        trailingSlash: 'always',
        adapter: adapter({ pages: 'docs', assets: 'docs', fallback: null, strict: false })
    }
};

export default config;
