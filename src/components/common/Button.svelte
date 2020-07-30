<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let message: string

  const dispatch = createEventDispatcher();

</script>

<button on:click="{() => dispatch('notify', message)}">Fire Event</button>

