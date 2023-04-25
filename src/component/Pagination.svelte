<script>
    export let data;
    const {postPerPage, totalPosts , paginate} = data
    const pageNumbers = [];
    for(let i = 1 ;i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
    }
</script>

<ul className="pagination-wrap align-center mb-30 mt-30">
      {#each pageNumbers as num}
            <li 
            key={num} 
            id={num}
            class={router.pathname == `/blog${num}` ? "active" : ""}>
                  <a onClick={() => paginate(num)} href={`#${num}`}>
                    {num}
                  </a>
            </li>
      {/each}
                
</ul>
