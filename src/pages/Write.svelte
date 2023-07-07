<script>
  import Footer from "../components/Footer.svelte";
  import { getDatabase } from "firebase/database";

  const database = getDatabase();
</script>

<h1>글쓰기</h1>
<form id="form-write">
  <div>
    <label for="image">사진</label>
    <input type="file" name="image" id="image" />
  </div>
  <div>
    <label for="price">가격</label>
    <input type="number" name="price" id="price" required />
  </div>
  <div>
    <label for="place">거래 장소</label>
    <input type="text" name="place" id="place" required />
  </div>
  <div>
    <label for="title">제목</label>
    <input type="text" name="title" id="title" required />
  </div>
  <div>
    <label for="description">설명</label>
    <input type="text" name="description" id="description" />
  </div>
  <button type="submit">글쓰기</button>
</form>
<Footer />
