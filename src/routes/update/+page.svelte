<script lang="ts">
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import { onMount } from "svelte";
    import { trailService } from "../../services/trail-service";
    import type { Placemark, Trail } from "../../services/trail-types";
    import TrailForm from "../../lib/TrailForm.svelte";
    import TrailList from "$lib/TrailList.svelte";
    import { latestTrail } from "../../stores";



    let placemarkList: Placemark[] = [];
    let trails: Trail[] = [];

    onMount(async () => {
        trailService.reload();
        placemarkList = await trailService.getPlacemarks();
        trails = await trailService.getTrails();
    });
    latestTrail.subscribe(async (trail) => {
        trails = await trailService.getTrails();
    });


</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <h1 class="title is-4">Trail Info</h1>
        <TrailList {trails} />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Update Trail Details</h1>
        <TrailForm {placemarkList} />
    </div>
</div>
