<script>
  import BtnWrite from "../components/BtnWrite.svelte";
  import Curtain from "../components/Curtain.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import { getDatabase, ref, onValue } from "firebase/database";

  let items = [];

  const db = getDatabase();
  const dbRef = ref(db, "items/");
  onValue(dbRef, (snapshot) => {
    items = Object.values(snapshot.val());
  });

  function getTimeStamp(insertAt) {
    const timeDif = new Date(new Date().getTime() - insertAt);
    if (timeDif.getUTCFullYear() - 1970 > 0)
      return `${timeDif.getUTCFullYear() - 1970}년 전`;
    if (timeDif.getUTCMonth() > 0) return `${timeDif.getUTCMonth()}개월 전`;
    if (timeDif.getUTCDate() - 1 > 0) return `${timeDif.getUTCDate() - 1}일 전`;
    if (timeDif.getUTCHours() > 0) return `${timeDif.getUTCHours()}시간 전`;
    if (timeDif.getUTCMinutes() > 0) return `${timeDif.getUTCMinutes()}분 전`;
    if (timeDif.getUTCSeconds() > 0) return `${timeDif.getUTCSeconds()}초 전`;
    return "방금 전";
  }
</script>

<Header />

<!-- 메인 콘텐츠 영역 -->
<main>
  <div class="wrapper">
    {#each items.reverse() as item}
      <div class="content">
        <img
          class="image"
          src={item.imgURL}
          alt="이미지를 불러올 수 없습니다"
        />
        <div class="text-group">
          <div class="title">{item.title}</div>
          <div class="meta">
            <span class="location">{item.place}</span>
            <span> · </span>
            <span class="time">{getTimeStamp(item.insertAt)}</span>
          </div>
          <div class="price">{item.price.toLocaleString("ko-KR")}원</div>
        </div>
      </div>
    {/each}
  </div>
</main>

<Footer />
<BtnWrite />
<Curtain />
