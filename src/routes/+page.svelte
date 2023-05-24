<script lang="ts">
    import Header from "$lib/Header.svelte";
    import WelcomeNavigator from "$lib/WelcomeNavigator.svelte";
</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <img width="300" src="/walking.jpg" alt="walking" />
    </div>
    <div class="column">
        <h1 class="title">Kingdom Trails</h1>
        <p>Walking Trails of Kerry</p>
    </div>
</div>
