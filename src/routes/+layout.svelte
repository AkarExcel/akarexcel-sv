<script>
	import { browser } from '$app/environment';
	import '../app.css'
	import Footer from "../layout/Footer.svelte";
	import Navbar from "../layout/Navbar.svelte"
	let loading = true;
	setTimeout(()=>{loading = false}, 2000)
</script>

<svelte:head>
<link rel="stylesheet" href="/styles/globals.css">
</svelte:head>

{#if browser}
{#if loading}

<div class="preloader-bg" />
<div id="preloader">
	<div id="preloader-status">
	<div class="preloader-position loader">
		{" "}
		<span />{" "}
	</div>
	</div>
</div>
{/if}

<!-- Cursor -->
<div class="cursor js-cursor" />
<Navbar/>
<slot />
<Footer/>
{/if}