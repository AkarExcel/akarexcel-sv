<script lang="ts">
    import type {CustomBlockComponentProps} from '@portabletext/svelte'
    interface Cell {
        cells: []
    }
    export let portableText: CustomBlockComponentProps<{
      rows: [Cell]
    }>

    $: ({value} = portableText)

  </script>

<table class="table-auto border-2 my-4 text-center">
    <thead class="bg-white ">
        <tr class="p-2">
            {#each value.rows[0].cells as cell}
                <th class="p-2">{cell}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each value.rows as row,i}
        {#if !(i == 0)}
        <tr>
            {#each row.cells as cell }
                
                    <td class="p-2">{cell}</td>
            
            {/each} 
        </tr> 
        {/if}
        {/each}
    </tbody>
</table>