import { client } from '$lib/sanity'

export async function load({ params }) {
    const query = `*[_type == "post" && 
    slug.current == $slug ][0]{
      _id,
      publishedAt,
      title,
      author -> {
          image,
          name
      },
     "comments": *[
          _type == "comment" && 
          post._ref == ^._id &&
          approved == true
      ]{
        name,
        _id,
        _updatedAt,
        comment,
        "reply": *[
            _type == "reply" && 
            comment._ref == ^._id &&
            approved == true
        ],
      },
      description,
      mainImage,
      slug,
      body,
  }`
  const postFields = `
  _id,
  name,
  title,
  description,
  'date': publishedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  author -> {
    image,
    name
},
`
const moreQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
    ${postFields}
    body,
  }[0...2]`

    const post = await client.fetch(query, {
        slug: params?.slug
    })

    const morePost = await client.fetch(moreQuery, {
        slug: params?.slug
    })
    if (post && morePost && moreQuery) {
        return {
          post: post,
          morePost: morePost,
          moreQuery: moreQuery,
        };
    }

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };

}