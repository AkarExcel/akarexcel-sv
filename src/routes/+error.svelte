<script>
    import { page } from '$app/stores';
</script>

<section class='section-padding' style='height:90vh'
>
    <div class='container'>
        <h1 style="text-align: center;">{$page.error?.message}</h1>
    </div>
</section>