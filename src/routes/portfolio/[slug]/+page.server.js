import { client } from '$lib/sanity'

export async function load({ params }) {
    const query = `*[_type == "portfolio" && 
    slug.current == $slug ][0]{
      _id,
      title,
      link,
      tags,
      gallery,
      firm,
      client,
      date,
      description,
      category
      
  }`
   const postFields = `
      _id,
      title,
      slug,
      portfolioImage,
      service
  `
  const moreQuery = `*[_type == "portfolio" && slug.current != $slug] | order(_updatedAt desc){
    ${postFields},
  }[0...2]`
  
  const testimonialQuery = `*[_type == 'testimonial' && approved == true]{
    _id,
    description,
    position,
    name,
    authorImage,
  }`

  
    const portfolio = await client.fetch(query, {
        slug: params?.slug
    })
  
    const morePortfolio = await client.fetch(moreQuery, {
        slug: params?.slug
    })

    const testimonial = await client.fetch(testimonialQuery)


    if (portfolio && morePortfolio) {
        return {
          portfolio: portfolio,
          morePortfolio: morePortfolio,
          testimonial: testimonial
        };
    } 

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };

}
export const prerender = true;
export const ssr = true;
export const csr = true;