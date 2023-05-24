<script lang="ts">
    // @ts-ignore
    import Chart from "svelte-frappe-charts";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import type { ChartData } from "../../services/charts";
    import { onMount } from "svelte";
    import { trailService } from "../../services/trail-service";
    import { generateByPlacemark, generateByMethod, getMarkerLayer } from "../../services/trail-utils";
    import LeafletMap from "$lib/LeafletMap.svelte";
    import TrailForm from "$lib/TrailForm.svelte";
    import TrailList from "$lib/TrailList.svelte";
    import type { Placemark, Trail } from "../../services/trail-types";
    import { latestTrail } from "../../stores";

    let byPlacemark: ChartData;
    let placemarkList: Placemark[] = [];
    let trails: Trail[] = [];
    let map: LeafletMap;

    async function refreshDashboard() {
        trails = await trailService.getTrails();
        placemarkList = await trailService.getPlacemarks();
        const trailMarkerLayer = getMarkerLayer(trails);
        if (trails.length > 0) {
            const trailsByPlacemark = await trailService.getTrailsByPlacemarks();
            byPlacemark = generateByPlacemark(trailsByPlacemark);
            map.populateLayer(trailMarkerLayer);
            const lastMarker = trailMarkerLayer.markerSpecs[trailMarkerLayer.markerSpecs.length - 1];
            map.moveTo(lastMarker.location, 8);
        }
    }

    onMount(async () => {
        trailService.reload();
        await refreshDashboard();
    });

    latestTrail.subscribe(async (donation) => {
        await refreshDashboard();
    });
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns m-2 p-2">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Trails By Mode of Transport</h1>
        <Chart data={byPlacemark} type="pie" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Input Trail Details</h1>
        <TrailForm {placemarkList} />
    </div>
</div>
<div class="columns">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Trail Map</h1>
        <LeafletMap height={40} bind:this={map} />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Trail List</h1>
        <TrailList {trails} />
    </div>
</div>