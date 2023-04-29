import { client } from '$lib/sanity'

export async function load() {
    const serviceQuery = `*[_type == 'service']{
        _id,
        description,
        title,
        slug,
        iconType
      }`
    const services = await client.fetch(serviceQuery)

    if (services) {
        return {
            services: services,
        };
    }

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };

}