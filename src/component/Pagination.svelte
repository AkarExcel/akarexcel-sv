<script>
      import {page} from '$app/stores'
      export let postPerPage;
      export let totalPosts;
      export let paginate;
      const pageNumbers = [];

      for(let i = 1 ;i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
      }
      console.log($page)
</script>

<ul class="pagination-wrap align-center mb-30 mt-30">

      {#each pageNumbers as num}
            <li 
            key={num} 
            id={num}
            class={$page.url.pathname == `/blog${num}` ? "active" : ""}>
                  <a on:click={() => paginate(num)} href={`#${num}`}>
                    {num}
                  </a>
            </li>
      {/each}
                
</ul>
