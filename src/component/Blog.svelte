<script>
  import { client, urlFor } from "../lib/sanity";
  export let posts;
  

const months = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
</script>



<section id="blog" class="homepage-blog section-padding">
    <div class="container">
      <div class="row mb-45">
        <div class="col-md-12">
          <h6 class="wow" data-splitting="">
            Recent Articles
          </h6>
          <h1 class="wow" data-splitting="">
            Latest News
          </h1>
        </div>
      </div>
      {#each posts as post, index }
        {#if ((index+1) % 2 != 0)}
        
        <div key={post._id} class="row mb-30">
          <div class="col-md-6">
            <div class="img left">
              <a href={`/post/${post.slug.current}`}>
                <img src={urlFor(post.mainImage).url()} alt="" />
              </a>
            </div>
          </div>
          <div class="col-md-6 valign">
            <div class="content">
              <div class="date">
                
                <h1>{post.publishedAt.match(/\d+/g)[2]}</h1>
                <h6>{months[parseInt(post.publishedAt.match(/\d+/g)[1])]} {post.publishedAt.match(/\d+/g)[0]}</h6>
              </div>
              <div class="cont">
                <h5>{post.title}</h5>
                <p>
                 {post.description}
                </p>
                <div class="btn-wrap">
                  <div class="btn-link">
                    {" "}
                    <a href={`/post/${post.slug.current}`}>
                      Read more <i class="ti-arrow-right" />
                  </a>
                    {" "}
                    <span class="btn-block color1 animation-bounce" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {:else}
        <div class="row mb-30">
          <div class="col-md-6 order2 valign">
            <div class="content">
              <div class="date">
                <h1>{post.publishedAt.match(/\d+/g)[2]}</h1>
                <h6>{months[parseInt(post.publishedAt.match(/\d+/g)[1])]} {post.publishedAt.match(/\d+/g)[0]}</h6>
              </div>
              <div class="cont">
                <h5>{post.title}</h5>
                <p>
                {post.description}
                </p>
                <div class="btn-wrap">
                  <div class="btn-link">
                    {" "}
                    <a href={`/post/${post.slug.current}`}>
                      Read more <i class="ti-arrow-right" />
                  </a>{" "}
                    <span class="btn-block color1 animation-bounce" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order1">
            <div class="img left">
            <a href={`/post/${post.slug.current}`}>
              <img src={urlFor(post.mainImage).url()} alt="" />
            </a>
            </div>
          </div>
        </div>
        {/if}
      {/each}

   </div>
</section>
