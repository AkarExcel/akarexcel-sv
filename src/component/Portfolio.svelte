<script>
  export let portfolio;
  import { browser } from '$app/environment';
  import Carousel from 'svelte-carousel'
  import { client, urlFor } from "../lib/sanity";

  const width = window.innerWidth


</script>
    <section id="portfolio" class="portfolio section-padding">
    <div class="container">
      <div class="row mb-45">
        <div class="col-md-4">
          <h6 class="wow" data-splitting="">
            My Works
          </h6>
          <h1 class="wow" data-splitting="">
            Portfolio
          </h1>
        </div>
        <div class="col-md-7 offset-md-1 mt-45">
          <p class="wow fadeInUp" data-wow-delay=".6s">
            With a Couple of years under my belt as a Developer and Graphic Artist, i take pride in my ability
            to create the best Web App, Smart contract, Flyer and Other Digital services that both look good and are fully functional.
          </p>
        </div>
      </div>
    </div>
    <div class="full-width">
      <div class="row">
        <div class="col-md-12">
    {#if browser}
    <Carousel
      arrows={false}
      particlesToShow={(width > 720) ? 3 :1}
      particlesToScroll={width> 720?2:1}
      pauseOnFocus={true}
      dots={false}
      >
             {#each portfolio as project}
              <div key={project._id} class="item">
              <a href={`/portfolio/${project.slug.current}`}>
                <div class="img-block">
                  <div class="wrapper-img">
                    {" "}
                    <img
                      src={urlFor(project.portfolioImage).url()}
                      class="img-fluid"
                    />{" "}
                  </div>
                  <div class="title-block">
                    <h4>{project.title}</h4>
                    <p>{project.service}</p>
                  </div>
                </div>
              </a>
            </div>
            {/each}
      </Carousel>
      {/if}
        </div>
      </div>
    </div>
  </section>


