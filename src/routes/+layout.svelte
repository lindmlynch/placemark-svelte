<script lang="ts">
    import { beforeUpdate } from "svelte";
    import { trailService } from "../services/trail-service";

    beforeUpdate(() => {
        trailService.reload();
    });
</script>

<div class="container">
    <slot />
</div>
