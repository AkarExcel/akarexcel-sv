<script lang="ts">
    import type {BlockComponentProps} from '@portabletext/svelte'
  
    export let portableText: BlockComponentProps
  
    $: ({value} = portableText)
    $: ({style = 'normal'} = value)
  </script>
  
  <div class="">
    {#if style === 'h1'}
      <h1><slot /></h1>
    {:else if style === 'h2'}
      <h2><slot /></h2>
    {:else if style === 'h3'}
      <h3><slot /></h3>
    {:else if style === 'h4'}
      <h4><slot /></h4>
    {:else if style === 'h5'}
      <h5><slot /></h5>
    {:else if style === 'h6'}
      <h6><slot /></h6>
    {:else if style === 'blockquote'}
      <blockquote class="bg-blue-100 border-l-2 border-blue-500 p-4 w-full my-4
      italic font-thin text-slate-400 overflow-hidden line-clamp-5 min-h-full text-justify"><slot /></blockquote>
    {:else if style === 'normal'}
      <p><slot /></p>
    {:else}
      <slot />
    {/if}
  </div>