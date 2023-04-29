<script>
    import Testimonial from '../../component/Testimonial.svelte';
    import Client from '../../component/Client.svelte';
    import {urlFor} from '$lib/sanity'
    export let data
    const {portfolios, testimonial} = data

</script>
<svelte:head>
    <title>
        Portfolio
    </title>
</svelte:head>

<section class="portfolio section-padding">
    <div class="container">
      <div class="row mb-45">
        <div class="col-md-4">
          <h6 class="wow" data-splitting="">
            Our Works
          </h6>
          <h1 class="wow" data-splitting="">
            Portfolio
          </h1>
        </div>
        <div class="col-md-7 offset-md-1 mt-45">
          <p class="wow fadeInUp" data-wow-delay=".6s">
            This is a catalogy of some of the work i have done for client,
             that deserves to be shown on the internet, hope you enjoy them.
          </p>
        </div>
      </div>
      <div class="row">
      {#each portfolios as portfolio}
              <div key={portfolio._id} class="col-md-4">
              <div class="item mb-30">
                <a href={`/portfolio/${portfolio.slug.current}`}>
                  <div class="img-block">
                    <div class="wrapper-img">
                      {" "}
                      <img src={urlFor(portfolio.portfolioImage).url()} class="img-fluid" />{" "}
                    </div>
                    <div class="title-block">
                      <h4>{portfolio.title}</h4>
                      <p>{portfolio.service}</p>
                    </div>
                  </div>
                </a>
              </div>
              
            </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Testiominals -->
<Testimonial testimonial={testimonial}/>
<Client/>