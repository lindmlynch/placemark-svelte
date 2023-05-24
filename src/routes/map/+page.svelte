<script lang="ts">
    import Header from "$lib/Header.svelte";
    import LeafletMap from "$lib/LeafletMap.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import { onMount } from "svelte";
    import { trailService } from "../../services/trail-service";
    import { getMarkerLayer } from "../../services/trail-utils";

    let map: LeafletMap;

    onMount(async () => {
        trailService.reload();
        const trails = await trailService.getTrails();
        const trailMarkerLayer = getMarkerLayer(trails);
        map.populateLayer(trailMarkerLayer);
    });
</script>

<Header>
    <MainNavigator />
</Header>

<LeafletMap bind:this={map} />
