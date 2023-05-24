<script lang="ts">
    import type { Trail } from "../services/trail-types";

    export let trails: Trail[];
</script>

<table class="table is-fullwidth">
    <thead>
    <th>Completion Time</th>
    <th>Method</th>
    <th>Trail</th>
    <th>Member</th>
    <th>Image</th>


    </thead>
    <tbody>
    {#each trails as trail}
        <tr>
            <td>
                {trail.time}
            </td>
            <td>
                {trail.method}
            </td>
            <td>
                {trail.placemark.trailType}, {trail.placemark.name}
            </td>
            <td>
                {trail.user.email}
            </td>
            <td>
                <img src={"images/" + trail.placemark.name.toLowerCase() + ".jpg"} alt="Trail Image" />
            </td>

        </tr>
    {/each}
    </tbody>
</table>
