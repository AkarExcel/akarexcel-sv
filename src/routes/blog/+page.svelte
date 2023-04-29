<script>
 export let data;
 const {ctx} = data
 import {urlFor} from '$lib/sanity'
 import Pagination from '../../component/Pagination.svelte';
 const recentPost = ctx.filter((post,index) => index < 3)

    let currentPage = 1;
    let postPerPage = 2;

    const indexOflastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOflastPost - postPerPage
    const currentPosts = ctx.slice(indexOfFirstPost,indexOflastPost)

  //change pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

</script>

<section class="blog section-padding">
    <div class="container">
      <div class="row mb-45">
        <div class="col-md-12">
          <h6 class="wow" data-splitting="">
            Recent Articles
          </h6>
          <h1 class="wow" data-splitting="">
            From Our Blogs
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            {#each ctx as post }
            <div key={post._id} class="col-md-12">
                <div class="item">
                  <div class="post-img">
                    <a href="post.html">
                      {" "}
                      <img src={urlFor(post.mainImage).url()} alt="" />{" "}
                    </a>
                    <div class="date">
                      <a href="post.html">
                        {" "}
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-EN',{month: 'short'})}</span> <i>{new Date(post.publishedAt).toLocaleDateString('en-EN',{ day: 'numeric'})}</i>{" "}
                      </a>
                    </div>
                  </div>
                  <div class="post-cont">
                    <div class="blog-post-categorydate-wrapper">
                      <a href="blog.html">
                        <div>Blog</div>
                      </a>
                      <div class="blog-post-categorydate-divider" />
                      <div>{post.categories[0].title}</div>
                    </div>
                    <h4>
                      <a href={`post/${post.slug.current}`}>{post.title}</a>
                    </h4>
                    <p>
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
  
            {/each}

                

            <div class="col-md-12">
              <Pagination postPerPage={postPerPage} totalPosts={ctx.length} paginate={paginate}/>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-md-4">
          <div class="row blog-sidebar">
             <!-- search -->
            <div class="col-md-12">
              <!-- <div class="widget search">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Type here ..."
                  />
                  <button type="submit">
                    <i class="ti-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>  -->
            <!-- Recent Posts -->
            <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h5>Recent Posts</h5>
                </div>
                <ul class="recent">
              {#each recentPost as post}
                
                <li key={post._id}>
                <div class="thum">
                  {" "}
                  <img src={urlFor(post.mainImage).url()} alt="" />{" "}
                </div>{" "}
                <a href={`post/${post.slug.current}`}>{post.title}</a>
              </li>
              {/each}
                </ul>
              </div>
            </div>
            <!-- Archives -->
            <!-- <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h5>Archives</h5>
                </div>
                <ul>
                  <li>
                    <a href="#">December 2022</a>
                  </li>
                  <li>
                    <a href="#">November 2022</a>
                  </li>
                  <li>
                    <a href="#">October 2022</a>
                  </li>
                </ul>
              </div>
            </div> -->
            <!-- Categories -->
            <!-- <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h5>Categories</h5>
                </div>
                <ul>
                  <li>
                    <a href="blog.html">
                      <i class="ti-angle-right" />
                      Website Design
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <i class="ti-angle-right" />
                      E-Commerce
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <i class="ti-angle-right" />
                      Web Development
                    </a>
                  </li>
                </ul>
              </div>
            </div> -->
            <!-- Tags  -->
            <!-- <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h5>Tags</h5>
                </div>
                <ul class="tags">
                  <li>
                    <a href="#">Website</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">Branding</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
