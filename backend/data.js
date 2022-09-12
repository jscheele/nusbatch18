let users = [
    {
      first_name: "Dena",
      last_name: "Charle",
      email: "dcharle0@indiegogo.com",
      user_id: 1,
      phone: "98765433",
      plan_id: 1,
      signup_date: "2021-01-01T00:00:00.000Z",
    },
    {
      first_name: "Dynah",
      last_name: "Waiting",
      email: "dwaiting1@google.com.br",
      user_id: 2,
      phone: "98765434",
      plan_id: 1,
      signup_date: "2021-01-01T00:00:00.000Z",
    },
    {
      first_name: "Marc",
      last_name: "Conibeer",
      email: "mconibeer2@desdev.cn",
      user_id: 3,
      phone: "98765555",
      plan_id: 1,
      signup_date: "2021-01-01T00:00:00.000Z",
    },
  ];
  
  function get_all_users() {
    return users;
  }
  function get_user_by_user_id(user_id) {
    for (i = 0; i < users.length; i++) {
      if (users[i].user_id == user_id) {
        return users[i];
      }
    }
  }
  
  function add_user(user) {
    users.push(user);
  }
  
  module.exports = {
    add_user,
    get_all_users,
    get_user_by_user_id,
  };
  