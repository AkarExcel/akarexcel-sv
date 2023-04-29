<script>
    export let data;
    import {PortableText} from '@portabletext/svelte'
    import Code from '../../../component/code.svelte';
    import Table from '../../../component/table.svelte';
    import Quote from '../../../component/quote.svelte';
    import { client,urlFor } from '$lib/sanity'
    const {service} = data
    
    const faqs = [...service.faq]
    faqs.forEach(element => {
      element.isAnswer = false
    });
    console.log(faqs)

</script>

<svelte:head>
<title>{service.title}</title>
</svelte:head>

<section class="section-padding services-page">
    <div class="container">
      <div class="row mb-45">
        <div class="col-md-12 text-center">
          <h6 class="wow" data-splitting="">
            Services
          </h6>
          <h1 class="wow" data-splitting="">
            {service.title}
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          {" "}
          <img
            src={urlFor(service.mainImage).url()}
            class="mb-45 img-fluid"
            alt=""
          />
          <PortableText
          value={
            service.body
          }
          components={{
              types: {
                // block-level components
                code: Code,
                table: Table
              },
              // list: {
              //   // Swap only the list parts you need
              // },
              block: {
                blockquote: Quote,
                normal: Quote,
                h1:Quote,
                h2: Quote,
                h3: Quote,
                h4: Quote,
                h5: Quote,
                h6: Quote,
              },
          }}
        />

            {#if service.faq.length > 0}
              
                <div class="row">
                <div class="col-md-12 mb-30">
                  <h5>Frequently Asked Questions</h5>
                </div>
                <div class="col-md-12">
                  <ul class="accordion-box clearfix">
                  {#each faqs as faq, i}
                    <li key={faq._id} class={`accordion block ${faq.isAnswer?"active-block":""}`}  >
                      <div on:keydown={()=> {}} on:keypress={() => {}} on:click={() => {faq.isAnswer = !faq.isAnswer}} class={`acc-btn ${faq.isAnswer?"active":""}`} >
                        <span class="count">{i+1}.</span> {faq.question}
                      </div>
                      {#if faq.isAnswer}
                      <div class={`acc-content `} style="display:block">
                        <div class="content active active-block">
                        
                          <div class="text slide-down" >
                            {faq.answer}
                          </div>
                        
                        </div>
                      </div>
                      {/if}
                    </li>
                    {/each}
                    </ul>
                </div>
              </div>
              
            {/if}

        </div>
        <div class="col-md-5">
          <div class="row">
            <div class="col-md-12 mt-45">
              <h5>Service About</h5>
              
              <PortableText
              value={
                service.about
              }
              components={{
                  types: {
                    // block-level components
                    code: Code,
                    table: Table
                  },
                  // list: {
                  //   // Swap only the list parts you need
                  // },
                  block: {
                    blockquote: Quote,
                    normal: Quote,
                    h1:Quote,
                    h2: Quote,
                    h3: Quote,
                    h4: Quote,
                    h5: Quote,
                    h6: Quote,
                  },
              }}
            />
                <div 
                  class="btn-wrap wow fadeInUp text-left mt-45 bg-color"
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
      </div>
    </div>
  </section>