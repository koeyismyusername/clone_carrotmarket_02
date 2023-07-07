<script>
  import Curtain from "../components/Curtain.svelte";
</script>

<h1>회원가입</h1>
<form id="form-signup">
  <div>
    <label for="id">아이디</label>
    <input type="text" name="id" id="id" required />
  </div>
  <div>
    <label for="password">비밀번호</label>
    <input
      type="password"
      name="password"
      id="password"
      required
      autocomplete="off"
    />
  </div>
  <div>
    <label for="password2">비밀번호 확인</label>
    <input
      type="password"
      name="password2"
      id="password2"
      required
      autocomplete="off"
    />
  </div>
  <div>
    <label for="name">이름</label>
    <input type="text" name="name" id="name" required />
  </div>
  <div>
    <label for="email">이메일</label>
    <input type="email" name="email" id="email" required />
  </div>
  <div>
    <button type="submit">회원가입 하기</button>
  </div>
</form>
<div id="info" />
<Curtain />
