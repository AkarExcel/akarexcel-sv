<script>
import { browser } from '$app/environment';
import Carousel from 'svelte-carousel'

if (browser) {
    // client-only code here
}

</script>

<section id="clients" class="clients">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          {#if browser}
            <Carousel   
            arrows={false}
            particlesToShow={3}
            particlesToScroll={2}
            pauseOnFocus={true}
            dots={false}
            >
                <div class="clients-logo">
                    <a href="#0">
                      <img src="images/clients/1.png" alt="" />
                    </a>
                </div>
                  <div class="clients-logo">
                    <a href="#0">
                      <img src="images/clients/2.png" alt="" />
                    </a>
                  </div>
                  <div class="clients-logo">
                    <a href="#0">
                      <img src="images/clients/3.png" alt="" />
                    </a>
                  </div>
                  <div class="clients-logo">
                    <a href="#0">
                      <img src="images/clients/4.png" alt="" />
                    </a>
                  </div>
                  <div class="clients-logo">
                    <a href="#0">
                      <img src="images/clients/5.png" alt="" />
                    </a>
                  </div>
                  <div class="clients-logo">
                    <a href="#0">
                      <img src="images/clients/6.png" alt="" />
                    </a>
                  </div>
            </Carousel>
        {/if}
        </div>
      </div>
    </div>
</section>
