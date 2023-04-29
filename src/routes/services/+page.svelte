<script>
    export let data
    const {services} = data

</script>
<svelte:head>
  <title>Services</title>
</svelte:head>
<section class="services section-padding">
    <div class="container">
      <div class="row mb-45">
        <div class="col-md-4">
          <h6 class="wow" data-splitting="">
            Services That We Provide
          </h6>
          <h1 class="wow" data-splitting="">
            Services
          </h1>
        </div>
        <div class="col-md-7 offset-md-1 mt-45">
          <p class="wow fadeInUp" data-wow-delay=".6s">
            We are commited to giving you the best services, All our
            Services are done with 100% commitment to client satisfaction
            <strong>{" "}Get the Best Service Today</strong>
          </p>
        </div>
      </div>
      <div class="row">
        {#each services as service, index }
          <div key={service._id} class="col-md-4">
          <a href={`/service/${service.slug.current}`}>
            <div class="item mb-30">
              {" "}
              <span class="icon et-laptop" />
              <h5>{service.title}</h5>
              <p class='text'>
                {service.description}
              </p>
              <div class="numb">{index+1> 9? "":0}{index+1}</div>
            </div>
        </a>
        </div>
        {/each}
      </div>
    </div>
  </section>