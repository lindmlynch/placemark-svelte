<script lang="ts">
    import { goto } from "$app/navigation";
    import { trailService } from "../../services/trail-service";

    trailService.logout();
    goto("/");
</script>
