<script>
import Router, {location, link} from "svelte-spa-router";
import Menu from "./components/page/Menu.svelte";
</script>

<Router routes={{
	'/': Menu,
	'/menu': Menu,
}}></Router>