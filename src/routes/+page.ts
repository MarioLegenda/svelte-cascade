import {promisify} from "$lib/loading";

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
    await promisify();

    console.log('root');

    return {
        page: {
            data: 'page'
        }
    };
}