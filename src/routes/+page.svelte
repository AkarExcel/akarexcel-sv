<script>
    export let data;
    const posts = data.posts
    const services = data.services
    const portfolio = data.portfolio
    const testimonial = data.testimonial
    import Hero from "../component/Hero.svelte";
    import Blog from "../component/Blog.svelte";
    import Services from "../component/Services.svelte";
    import Client from "../component/Client.svelte";
    import Portfolio from "../component/Portfolio.svelte"
    import Testimonial from "../component/Testimonial.svelte"

</script>




<!-- <Navbar /> -->
<Hero/>

<Services services={services} />
<!-- About & Skills -->
<!-- <Skills/> -->
<!-- Portfolio  -->
<Portfolio portfolio={portfolio} />
<!-- Homepage Blog -->
<Blog posts={posts} />
<!-- Testiominals -->
<Testimonial testimonial={testimonial}/>
<!-- Clients -->
<Client/>