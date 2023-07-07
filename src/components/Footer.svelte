<!-- 푸터 바 -->
<footer>
  <nav class="menu-bar">
    <a class="item home" href="#/">
      <div class="icon">
        {#if window.location.hash === "#/" || window.location.hash === ""}
          <span class="material-icons"> home </span>
        {:else}
          <span class="material-icons-outlined"> home </span>
        {/if}
      </div>
      <div class="text">홈</div>
    </a>
    <a class="item feed" href="#/feed">
      <div class="icon">
        {#if window.location.hash === "#/feed"}
          <span class="material-icons"> feed </span>
        {:else}
          <span class="material-icons-outlined"> feed </span>
        {/if}
      </div>
      <div class="text">동네생활</div>
    </a>
    <a class="item place" href="#/place">
      <div class="icon">
        {#if window.location.hash === "#/place"}
          <span class="material-icons"> place </span>
        {:else}
          <span class="material-icons-outlined"> place </span>
        {/if}
      </div>
      <div class="text">내 근처</div>
    </a>
    <a class="item chat" href="#/chat">
      <div class="icon">
        {#if window.location.hash === "#/place"}
          <span class="material-icons"> chat </span>
        {:else}
          <span class="material-icons-outlined"> chat </span>
        {/if}
      </div>
      <div class="text">채팅</div>
    </a>
    <a class="item my" href="#/my">
      <div class="icon">
        {#if window.location.hash === "#/place"}
          <span class="material-icons"> person </span>
        {:else}
          <span class="material-icons-outlined"> person </span>
        {/if}
      </div>
      <div class="text">나의 당근</div>
    </a>
  </nav>
</footer>
