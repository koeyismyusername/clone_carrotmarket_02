<script>
  import Curtain from "../components/Curtain.svelte";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  function handleLoginGoogle(event) {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        window.localStorage.setItem("access_token", accessToken);
        user$.set(result.user);
      })
      .catch((error) => console.log(error));
  }
</script>

<h1>로그인 하기</h1>
<div class="wrapper">
  <button type="button" class="login-btn google" on:click={handleLoginGoogle}>
    <img
      src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"
      alt="구글 아이콘"
      class="icon"
    />
    <div class="text">Google 로그인</div>
  </button>
</div>
<Curtain />

<style>
  h1 {
    font-weight: 800;
    font-size: 3em;
  }
  .wrapper {
    margin-top: 50px;
  }
  .wrapper > .login-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 3px;
    background-color: rgb(250, 250, 250);
  }
  .wrapper > .login-btn:hover {
    cursor: pointer;
    background-color: white;
  }
  .wrapper > .login-btn > .icon {
    height: 30px;
  }
  .wrapper > .login-btn > .text {
    margin: auto;
  }
</style>
