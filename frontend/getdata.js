const b2 = document.getElementById("b2");
b2.addEventListener("click", () => {
  fetch("https://2d195695-12b1-42a7-93c3-724afe4273b7.mock.pstmn.io/user/all")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let text = `Hello, ${response[0].first_name}!`;
      $(".mypanel").html(text);
    });
});
