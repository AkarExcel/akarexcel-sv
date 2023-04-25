<script>
export let services;
import { browser } from '$app/environment';
import Carousel from 'svelte-carousel'


if (browser) {
    // client-only code here
}

 

</script>

<section id="services" class="services clear section-padding">
  <div class="container">
    <div class="row mb-45">
      <div class="col-md-4">
        <h6 class="wow" data-splitting="">
          Services That I Provide
        </h6>
        <h1 class="wow" data-splitting="">
          Services
        </h1>
      </div>
      <div class="col-md-7 offset-md-1 mt-45">
        <p class="wow fadeInUp" data-wow-delay=".6s">
        Get any of our Services it is easy to Setup, drives conversions, and captures your story. 
        It’s time to Grow your Business Online.   
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
    {#if browser}
    <Carousel
        arrows={false}
        particlesToShow={3}
        particlesToScroll={2}
        pauseOnFocus={true}
        dots={false}
      >
      {#each services as service, index}
          <div key={service._id} class="item">
            <a href={`/service/${service.slug.current}`}>
              {" "}
              <span class={`icon ${service.iconType}`} />
              <h5>{service.title}</h5>
              <p class='text'>
              {service.description}
              </p>
              <div class="numb">{index+1> 9? "":0}{index+1}</div>
            </a>
          </div>
      {/each} 
</Carousel>
{/if}
        <!-- <div class="owl-carousel owl-theme">
        
        </div> -->
      </div>
    </div>
  </div>
</section>

