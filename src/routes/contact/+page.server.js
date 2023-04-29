import { client } from "$lib/sanity";

export async function load(){

      const testimonialQuery = `*[_type == 'testimonial' && approved == true]{
        _id,
        description,
        position,
        name,
        authorImage,
      }`
      
      const testimonial = await client.fetch(testimonialQuery)

    if (testimonial) {
        return {
            testimonial: testimonial
        };
    }

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}

export const prerender = true;
// export const ssr = true;
// export const csr = true;
