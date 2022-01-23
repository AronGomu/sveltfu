<script lang="ts">
import Router, {location, link} from "svelte-spa-router";
import Game from "./components/page/Game.svelte";
import Menu from "./components/page/Menu.svelte";

// defining routes of Router
// don't forget, this is a HASH BASED router so don't forget to put '/#' before any routes
const routes = {
    '/': Menu,

    '/game': Game,

    '*': Menu, // has ot be last
}
</script>

<body>
    <Router {routes}/>
</body>