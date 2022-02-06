<script>
import Button from "../parts/Button.svelte";

console.log("On Menu");
</script>

<div>
  <Button text="New Game" url="#/game" />
  <Button text="Continue" url="#/new-game" disabled={true}/>
  <Button text="Options" url="#/options"/>

</div>

<style></style>