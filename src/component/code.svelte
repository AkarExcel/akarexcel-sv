<script lang="ts">
    import type {CustomBlockComponentProps} from '@portabletext/svelte'
    import Highlight from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import github from "svelte-highlight/styles/github";

    export let portableText: CustomBlockComponentProps<{
      code: string
      language: string
    }>

    $: ({value} = portableText)

    let code = '';

    setTimeout(() => {
    getCode() //loading the code
    }, 100);

    const getCode = async () =>{
        code = value.code
    }
  
  </script>
  <svelte:head>
    {@html github}
  </svelte:head>
  <Highlight language={javascript} {code} />
  
  <!-- <pre>
    <p>{value.language}</p>
    <code>{value.code}</code>
  </pre> -->
  
  <style>
    p {
      text-transform: uppercase;
      background-color: #444;
      color: white;
      display: inline-block;
      padding: 0.25em;
      margin: 0;
    }
  </style>