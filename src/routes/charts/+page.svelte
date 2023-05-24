<script lang="ts">
    // @ts-ignore
    import Chart from "svelte-frappe-charts";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import type { ChartData } from "../../services/charts";
    import { onMount } from "svelte";
    import { trailService } from "../../services/trail-service";
    import { generateByPlacemark, generateByMethod } from "../../services/trail-utils";

    let byPlacemark: ChartData;
    let byMethod: ChartData;

    onMount(async () => {
        trailService.reload();

        const trails = await trailService.getTrails();
        const trailsByPlacemark = await trailService.getTrailsByPlacemarks();
        byMethod = generateByMethod(trails);
        byPlacemark = generateByPlacemark(trailsByPlacemark);
    });
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Trails By Means of Transport</h1>
        <Chart data={byMethod} type="bar" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Time to date</h1>
        <Chart data={byPlacemark} type="pie" />
    </div>
</div>