import {promisify} from "$lib/loading";

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({parent}) {
    await parent();
    await promisify();

    console.log('subroute');

    return {
        subRoute: {
            data: 'subroute',
        }
    };
}