import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import {PUBLIC_SANITY_DATASET,PUBLIC_SANITY_PROJECT_ID,
} from "$env/static/public";

export const client = createClient({
    dataset: PUBLIC_SANITY_DATASET || 'production',
    projectId: PUBLIC_SANITY_PROJECT_ID ,
    apiVersion: "2021-10-21",
    useCdn: false
});


const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}