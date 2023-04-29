import { client } from '$lib/sanity'

export async function load({ params }) {
    const query = `*[_type == "post"][0...100]{
        _id,
        title,
        publishedAt,
        categories[] -> {
          title,         
    },
        author -> {
          name,
          image
        },
        description,
        mainImage,
        slug
      }`

    const ctx = await client.fetch(query)

    if (ctx) {
        return {
          ctx: ctx,
        };
    }

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };

}