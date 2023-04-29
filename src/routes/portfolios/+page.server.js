import { client } from "$lib/sanity";

export async function load(){
    const portfolioQuery = `*[_type == 'portfolio']{
        _id,
        description,
        title,
        slug,
        portfolioImage,
        portfolio,
        service
      }`
      const testimonialQuery = `*[_type == 'testimonial' && approved == true]{
        _id,
        description,
        position,
        name,
        authorImage,
      }`
      
      const testimonial = await client.fetch(testimonialQuery)

      const portfolios = await client.fetch(portfolioQuery)

    if (portfolios) {
        return {
            portfolios: portfolios,
            testimonial: testimonial
        };
    }

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}

export const prerender = true;
