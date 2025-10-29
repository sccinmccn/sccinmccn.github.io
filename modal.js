function openModal(id) {
    document.getElementById(id).style.display = "flex";
    document.body.style.overflow = "hidden"; // 페이지 스크롤 잠금
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";   // 페이지 스크롤 다시 허용
  }
  