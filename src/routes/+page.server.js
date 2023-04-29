import { client } from '../lib/sanity'

export async function load({ params }) {
    const query = `*[_type == "post"][0...3]{
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
    
      const serviceQuery = `*[_type == 'service']{
        _id,
        description,
        name,
        title,
        slug,
        iconType
      }`
    
      const portfolioQuery = `*[_type == 'portfolio']{
        _id,
        description,
        title,
        slug,
        portfolioImage,
        service
      }`
    
      const testimonialQuery = `*[_type == 'testimonial' && approved == true]{
        _id,
        description,
        position,
        name,
        authorImage,
      }`

    const services = await client.fetch(serviceQuery)
    const portfolio = await client.fetch(portfolioQuery)
    const testimonial = await client.fetch(testimonialQuery)
    const posts = await client.fetch(query)
  
    if (posts && services && testimonial && portfolio) {
      return {
        posts: posts,
        services: services,
        testimonial: testimonial,
        portfolio: portfolio
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }
  export const prerender = false;
  export const csr = true;
  export const ssr = true;