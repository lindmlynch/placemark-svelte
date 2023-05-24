<script lang="ts">
    import { trailService } from "../services/trail-service";
    import type { Placemark } from "../services/trail-types";
    import { loggedInUser } from "../stores";
    import Coordinates from "$lib/Coordinates.svelte";

    export let placemarkList: Placemark[] = [];

    let time = 0;
    let lat = 52.160858;
    let lng = -7.15242;
    let selectedPlacemark = "";
    let methods = ["walk", "cycle"];
    let selectedMethod = "";
    let message = "Please update";

    async function update() {
        if (selectedPlacemark && time && selectedMethod) {
            const placemarkNames = selectedPlacemark.split(",");
            const placemark = placemarkList.find((placemark) => placemark.trailType == placemarkNames[0] && placemark.name == placemarkNames[1]);
            if (placemark) {
                const trail = {
                    time: time,
                    method: selectedMethod,
                    placemark: placemark,
                    lat: lat,
                    lng: lng,
                    user: $loggedInUser,
                    _id: "",
                    img: `images/${placemark.name.toLowerCase()}.jpg`,
                };
                const success = await trailService.update(trail);
                if (!success) {
                    message = "Update not completed - some error occurred";
                    return;
                }
                message = `Thanks! You updated your time of ${time} hours to ${placemark.name} ${placemark.trailType}`;
            }
        } else {
            message = "Please select time, method and trail";
        }
    }
</script>

<form on:submit|preventDefault={update}>
    <div class="field">
        <label class="label" for="time">Enter Time (hrs)</label>
        <input bind:value={time} class="input" id="time" name="time" type="number" />
    </div>
    <div class="field">
        <div class="control">
            {#each methods as method}
                <input bind:group={selectedMethod} class="radio" type="radio" value={method} /> {method}
            {/each}
        </div>
    </div>
    <div class="field">
        <div class="select">
            <select bind:value={selectedPlacemark}>
                {#each placemarkList as placemark}
                    <option>{placemark.trailType},{placemark.name}</option>
                {/each}
            </select>
        </div>
    </div>
    <Coordinates bind:lat bind:lng />
    <div class="field">
        <div class="control">
            <button class="button is-link is-light">Update</button>
        </div>
    </div>
    <div class="box">
        {message}
    </div>
</form>