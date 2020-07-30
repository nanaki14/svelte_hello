<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Navigate } from 'svelte-router-spa'
  import Button from '../common/Button.svelte'

  export let currentRoute
  
  function callbackFunction(event) {
		console.log(`Notify fired! Detail: ${event.detail}`)
	}
</script>

<main>
  <h1>{currentRoute.name}</h1>
  
  <Button on:notify="{callbackFunction}" message="すごいdispatchイベント" />

	<p><Navigate to="/">Home</Navigate></p>
  <p><Navigate to="/about">About</Navigate></p>
  <p><Navigate to="/news">News</Navigate></p>
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