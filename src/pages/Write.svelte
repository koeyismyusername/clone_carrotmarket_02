<script>
  import Footer from "../components/Footer.svelte";
  import { getDatabase, ref as refDB, push } from "firebase/database";
  import {
    getStorage,
    ref as refStorage,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

  let price, place, title, description;
  let files;

  function handleSubmitFormWrite(event) {
    const insertAt = new Date().getTime();
    const storage = getStorage();
    const storageRef = refStorage(storage, "images" + insertAt + "/" + title);
    let imgURL;

    uploadBytes(storageRef, files[0])
      .then(() => getDownloadURL(storageRef))
      .then((imgURL) => {
        const db = getDatabase();
        const dbRef = refDB(db, "items/");
        push(dbRef, {
          imgURL: imgURL,
          price: price,
          place: place,
          title: title,
          description: description,
          insertAt: insertAt,
        });

        window.location.hash = "#/";
      });
  }
</script>

<h1>글쓰기</h1>
<!-- <button type="button" on:click={handleSubmitFormWrite}>테스트</button> -->
<form id="form-write" on:submit|preventDefault={handleSubmitFormWrite}>
  <div>
    <label for="image">사진</label>
    <input type="file" name="image" id="image" bind:files />
  </div>
  <div>
    <label for="price">가격</label>
    <input type="number" name="price" id="price" required bind:value={price} />
  </div>
  <div>
    <label for="place">거래 장소</label>
    <input type="text" name="place" id="place" required bind:value={place} />
  </div>
  <div>
    <label for="title">제목</label>
    <input type="text" name="title" id="title" required bind:value={title} />
  </div>
  <div>
    <label for="description">설명</label>
    <input
      type="text"
      name="description"
      id="description"
      bind:value={description}
    />
  </div>
  <button type="submit">글쓰기</button>
</form>
<Footer />
