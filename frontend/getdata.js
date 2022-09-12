const SERVER = "https://2d195695-12b1-42a7-93c3-724afe4273b7.mock.pstmn.io";
let path = "/user/all";

let URL = SERVER + path;

const b2 = document.getElementById("b2");
b2.addEventListener("click", () => {
  $.getJSON(URL, (data) => {
    let code = "<ul>";
    data.forEach((element) => {
      code += `<li> Full Name: ${element.first_name} ${element.last_name}`;
    });
    code += "</ul>";
    $(".mypanel").html(code);
  });
});
