export async function get(ctx){
  let user = {
    id: 1,
    username: "webmaster",
    email: "webmaster@cu.co",
    isActive: true,
    profile: {
      firstName: "Webmaster",
      lastName: "Co",
      avatar:{
        url: "/uploads/no-avatar.png"
      },
      birthday: "20/20/1960",
      notifications: true
    }
  }

  return {
    status: 200,
    headers: {
      "content-type": "application/json"
    },
    body: {
      user
    }
  }
}

export async function post(req){

  let body = req.body;
  let params = req.params;
  let query = req.query;

  console.log("routes/api/index req.body", body);
  console.log("routes/api/index req.params", params);
  console.log("routes/api/index req.query", query);

  return {
    status: 200,
    headers: {},
    body: {
      user:body,
      query: query,
      params: params
    }
  }
}