let url = "https://2d195695-12b1-42a7-93c3-724afe4273b7.mock.pstmn.io/user/all";

fetch(url)
  .then((response) => {
    return response.json(); // parses the response
  })
  .then((response) => {
    // console.log(response);  // print that information in console
    // iterate through the list and print only the names.
    for (i = 0; i < 2; i++) {
      console.log("Hello, " + response[i].first_name);
    }
  });
