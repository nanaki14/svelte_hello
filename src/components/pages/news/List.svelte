<script lang="ts">
  import { Navigate } from 'svelte-router-spa'
  export let currentRoute
</script>

<main>
	<h1>{currentRoute.name}</h1>
	<p><Navigate to="/">Home</Navigate></p>
  <p><Navigate to="/about">About</Navigate></p>
	<p><Navigate to="/news">News</Navigate></p>
	<br>
	<p><Navigate to="/news/1">News 01</Navigate></p>
	<p><Navigate to="/news/2">News 02</Navigate></p>
	<p><Navigate to="/news/3">News 03</Navigate></p>
</main>

<style lang="scss">
	$color: tomato;
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		@media (min-width: 640px) {
			max-width: none;
		}
		h1 {
			color: $color;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}
</style>