import { client } from "$lib/sanity";
export async function match(param){
    const query = `*[_type == 'post']{
        _id,
        slug{
            current
        },
    }`

    const post = await client.fetch(query)
    console.log(post.slug.current)
    return post.includes(param); 
}