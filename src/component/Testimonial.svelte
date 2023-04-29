<script>
  export let testimonial;
  import { browser } from '$app/environment';
  import Carousel from 'svelte-carousel'
  import { client, urlFor } from "../lib/sanity";

  if (browser) {
      // client-only code here
  }
</script>
<section id="testimonials" class="testimonials">
    <div
      class="background bg-img bg-fixed section-padding pb-0"
      style='background-image:url(/images/banner.jpg)'
    >
      <div class="container">
        <div class="row">
           <!-- Work together -->
          <div class="col-md-6 mb-30">
            <h4 class="wow" data-splitting="">
              Need help with professional support? Let's work together!
            </h4>
            <div
              class="btn-wrap mt-30 text-left wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div class="btn-link">
                {" "}
                <a href="#" class="white">
                  developerexcela@gmail.com
                </a>{" "}
                <span class="btn-block color3 animation-bounce" />{" "}
              </div>
            </div>
          </div>
          <!-- Testiominals  -->
          <div class="col-md-5 offset-md-1">
            <div class="testimonials-box">
              <h5>What Are Clients Saying?</h5>
          {#if browser}
              <Carousel
              arrows={false}
              pauseOnFocus={true}
              dots={false}
              >
              {#each testimonial as testimony}
              <div key={testimony._id} class="item">
              <p>
                {testimony.description}
              </p>{" "}
              <span class="quote">
                <img src="/images/quot.png" alt="" />
              </span>
              <div class="info">
                <div class="author-img">
                  {" "}
                  <img src={urlFor(testimony.authorImage).url()} alt="" />{" "}
                </div>
                <div class="cont">
                  <h6>{testimony.name}</h6> <span>{testimony.position}</span>
                </div>
              </div>
            </div>
            {/each}
  
 
             </Carousel> 
          {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
