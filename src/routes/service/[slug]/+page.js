import { client } from "$lib/sanity";

export async function load({params}){
    const query = `*[_type == "service" && 
    slug.current == $slug ][0]{
      _id,
      title,
      body,
      about,
      mainImage,
      slug,
      "faq": *[
        _type == "faq" && 
        service._ref == ^._id
      ]{
        question,
        answer,
        _id,
        _updatedAt,
      },
  }`

  const service = await client.fetch(query, {slug: params?.slug})

if (service) {
    return {
        service: service,
    };
}

return {
    status: 500,
    body: new Error("Internal Server Error")
};
}