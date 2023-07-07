<script>
  import Curtain from "../components/Curtain.svelte";
</script>

<h1>로그인 하기</h1>
<form id="form-login">
  <div>
    <label for="id">아이디</label>
    <input type="text" name="id" id="id" />
  </div>
  <div>
    <label for="password">비밀번호</label>
    <input type="password" name="password" id="password" autocomplete="off" />
  </div>
  <div>
    <button type="submit">로그인</button>
  </div>
</form>
<div id="info-login" />
<Curtain />
