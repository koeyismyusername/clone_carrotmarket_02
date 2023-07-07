<script>
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from "svelte-spa-router";
  import { user$ } from "./store.js";
  import {
    GoogleAuthProvider,
    signInWithCredential,
    getAuth,
  } from "firebase/auth";
  import { onMount } from "svelte";
  import Loading from "./pages/Loading.svelte";
  import Mypage from "./pages/Mypage.svelte";

  let isLoading = true;

  function checkLogin(response) {
    const accessToken = window.localStorage.getItem("access_token");
    if (!accessToken) return (isLoading = false);

    const credential = GoogleAuthProvider.credential(null, accessToken);
    const auth = getAuth();
    signInWithCredential(auth, credential)
      .then((result) => {
        user$.set(result.user);
      })
      .then(() => {
        isLoading = false;
      })
      .catch((error) => console.log(error));
  }

  onMount(checkLogin);

  const routes = {
    "/": Main,
    "/signup": Signup,
    "/write": Write,
    "/my": Mypage,
    "*": NotFound,
  };
</script>

{#if isLoading}
  <Loading />
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}
