<script>
  export let data;
  const {portfolio, morePortfolio, testimonial} = data
  import { client,urlFor } from '$lib/sanity'
  import Carousel from 'svelte-carousel'
	import { browser } from '$app/environment';
	import Testimonial from '../../../component/Testimonial.svelte';
  import Client from '../../../component/Client.svelte';

  $: portfolioT = portfolio;
  console.log(portfolioT)
  const prev = () => {
    location.replace(`/portfolio/${morePortfolio[0].slug.current}`);
  }
  const next = () => {
    location.replace(`/portfolio/${morePortfolio[1].slug.current}`);
  }

</script>

<section class="section-padding portfolio-page">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <!-- Images  -->
        <div class="row">
          <div class="col-md-12 gallery-item">
          {#if browser}
            <Carousel
              arrows={false}
              particlesToShow={1}
              particlesToScroll={1}
              pauseOnFocus={false}
              dots={true}
              >
              {#if portfolio.gallery}
              {#each portfolio.gallery as image, index}
              <div key={index} class="item">
                <div class="gallery-item-inner">
                  <a
                    href={urlFor(image).url()}
                    title=""
                    class="img-zoom"
                  >
                    <div class="gallery-box">
                      <div class="gallery-img">
                        {" "}
                        <img
                          src={urlFor(image).url()}
                          class="img-fluid mx-auto d-block"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/each}
              {/if}
              </Carousel>
          {/if}
          </div>
        </div>
      </div>
      <div class="col-md-5 offset-md-1">
        <h6 class="wow" data-splitting="">
          {portfolioT.category}
        </h6>
        <h1 class="wow" data-splitting="">
          {portfolioT.title}
        </h1>
        <p class="mt-45 wow fadeInUp" data-wow-delay=".1s">
          {portfolioT.description}
        </p>
        <p class="mt-45 wow fadeInUp" data-wow-delay=".2s">
          <span>Date :</span> {new Date(portfolioT.date).toLocaleDateString('en-EN', { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
        <p class="wow fadeInUp" data-wow-delay=".3s">
          <span>Client :</span> {portfolioT.client}
        </p>
        <p class="wow fadeInUp" data-wow-delay=".3s">
          <span>Firm Name :</span> {portfolioT.firm}
        </p>
        <p class="wow fadeInUp" data-wow-delay=".3s">
          <span>Category :</span> 
          {#each portfolioT.tags as tag, index}
            {tag}
            {#if !(index+1 == portfolioT.tags.length)}
            ,{" "}
            {/if}
          {/each}
        </p>
        <div
          class="btn-wrap wow fadeInUp text-left mt-45"
          data-wow-delay=".9s"
        >
          <div class="btn-link">
            {" "}
            <a href={portfolio.link} target="_blank" rel='noreferrer'>
              Live website <i class="ti-arrow-top-right" />{" "}
            </a>{" "}
            <span class="btn-block color1 animation-bounce" />{" "}
          </div>
        </div>
        <div 
          class="btn-wrap wow fadeInUp text-left mt-45 bg.color"
          data-wow-delay=".9s">
        <div class="btn-link">
            {" "}
            <a href='/contact' target="_blank" rel='noreferrer'>
              Get Quote <i class="ti-arrow-top-right" />{" "}
            </a>{" "}
            <span class="btn-block color1 animation-bounce" />{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Next & Prev  -->
  <section class="nex-prv">
    <div class="container">
      <div class="row">
        <div class="col-md-5 rest">
          <a href={`/portfolio/${morePortfolio[0].slug.current}` } on:click|preventDefault={prev}>
          <div class="prv">
            <div
              class="img bg-img"
              data-background="images/portfolio/9.jpg"
            >
              <div class="text-left ontop">
                <h5>{morePortfolio[0].title}</h5>{" "}
                <span class="sub-title mb-0 mt-10">
                  Prev Project
                </span>
              </div>
              <div class="overly" />
            </div>
          </div>
          </a>
        </div>
        <div class="col-md-2 text-center rest">
          <a
            href='/portfolios'
            class="all-works d-flex align-items-center"
          >
            {" "}<span class="icon full-width ti-layout-grid3" />{" "}
          </a>
        </div>
        <div class="col-md-5 rest">
          <a  href={`/portfolio/${morePortfolio[1].slug.current}`} on:click|preventDefault={next}>
          <div class="nxt">
            <div
              class="img bg-img"
              data-background="images/portfolio/4.jpg"
            >
              <div class="text-right ontop">
                <h5>{morePortfolio[1].title}</h5>{" "}
                <span class="sub-title mb-0 mt-10">
                  Next Project
                </span>
              </div>
              <div class="overly" />
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <Testimonial testimonial={testimonial}/>
  
  <Client/>