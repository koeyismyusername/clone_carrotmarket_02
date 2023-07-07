<script>
  import Curtain from "../components/Curtain.svelte";
  import Footer from "../components/Footer.svelte";
  import { user$ } from "../store";

  function handleLogout(event) {
    window.localStorage.removeItem("access_token");
    user$.set(null);
  }
</script>

<h1>나의 당근</h1>
<div class="wrapper">
  <button type="button" class="btn-logout" on:click={handleLogout}
    >로그아웃</button
  >
</div>
<Footer />
<Curtain />

<style>
  h1 {
    font-weight: 800;
    font-size: 3em;
  }
  .btn-logout {
    width: 200px;
    height: 40px;
    background-color: rgb(250, 250, 250);
    border: 1px solid gray;
    border-radius: 3px;
  }
  .btn-logout:hover {
    cursor: pointer;
    background-color: white;
  }
</style>
