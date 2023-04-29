<script>
  export let data;
  const {post,morePost,moreQuery} = data
  import {PortableText} from '@portabletext/svelte'
  import { client,urlFor } from '$lib/sanity'
  import Code from '../../../component/code.svelte';
	import Table from '../../../component/table.svelte';
  import Quote from '../../../component/quote.svelte';
 
  let submited = false;


</script>

<section class="section-padding post-page">
  <div class="container">
    <div class="row mb-45">
      <div class="col-md-12">
        <div class="blog-post-categorydate-wrapper">
          <a href="blog.html">
            <div>Blog</div>
          </a>
          <div class="blog-post-categorydate-divider" />
          <div>{new Date(post.publishedAt).toDateString()}</div>
        </div>
        <h1>{post.title}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        {" "}
        <img src={urlFor(post.mainImage).url()} class="mb-30 img-fluid" alt="" />
        <PortableText
          value={
            post.body
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
        <!-- {post.body ?
          <PortableText  
          class=''
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={post.body}
          serializers = {{
              h1: (props) => (
                  <h1 class='text-3xl font-bold my-5' {...props} />
                  ),
              h2: (props) => (
                  <h2 class='text-xl font-bold my-5' {...props} />
                  ),
              li: ({children}) => (
                  <li class='ml-8 list-disc' >
                      {children}
                  </li>
              ),
              blockquote: ({children}) => (
                  <blockquote class='mx-4 italic font-thin text-slate-400 my-5 blockquote'>{children}</blockquote>
              )
              ,
              link: ({href,children}) => (
                  <a href={href} class="text-blue-500 hover:underline">
                      {children}
                  </a>
              )
          }}
          />
          :                
          <BlockContent
          blocks={post.body}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          /> 
          } -->


        <div class="blog-comment-section">
          <div class="row">
            <!-- Comment  -->
            <div class="col-md-6">
              {#each post.comments as comment}
            
                <div key={comment._id} class="blog-post-comment-wrap">
                  <div class="blog-post-user-comment">
                    {" "}
                    <img src="images/team/1.jpg" alt="" />{" "}
                  </div>
                  <div class="blog-post-user-content">
                    <h3>
                      {comment.name} &nbsp;&nbsp;<span>{new Date(comment._updatedAt).toLocaleDateString("en-EN",{ year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </h3>
                    <p>
                      {comment.comment}{" "}
                    </p>{" "}
                    <a class="blog-post-repay" href="#">
                      Reply
                      <i class="ti-back-left" />
                    </a>
                  </div>
                </div>
              
              {/each}
            </div>
            <!-- Contact Form  -->
            <div class="col-md-5 offset-md-1">
              <h3>Leave a Reply</h3>
              {#if submited}
                <div class="row">
                    
                  <div class="col-12">
                    <div class="alert alert-success contact__msg" style="display:block">
                      {" "}
                      Your message was sent successfully.{" "}
                    </div>
                  </div>
                </div>
                {:else}
                  <form on:submit={() => {console.log("hi")}} class="contact__form" action="">
                    <!-- Form message  -->
                    <input 
                    type='hidden'
                    name='id'
                    value={post._id}
                    />

                  <div class="row">
                        <div class="col-12">
                          <div class="alert alert-success contact__msg" style='display:none'>
                              {" "}Your message was sent successfully.{" "}
                          </div>
                        </div>
                    </div>
                    <!-- Form elements  -->
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <input
                          
                          name="name"
                          type="text"
                          placeholder="Full Name *"
                        />
                      </div>
                      <div class="col-md-12 form-group">
                        <input
                          
                          name="email"
                          type="email"
                          placeholder="Email Address *"
                          required=""
                        />
                      </div>
                      <div class="col-md-12 form-group">
                        <textarea
                          
                          name="comment"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Your Comment *"
                          
                        />
                      </div>
                      <div class="col-md-12">
                        <div class="btn-wrap">
                          <div class="btn-link">
                            <input type="submit" defaultValue="Send Comment" />{" "}
                            <span class="btn-block color1 animation-bounce" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
              {/if}     
            </div>
          </div>
          

        </div>
      </div>
    </div>
  </div>
</section>