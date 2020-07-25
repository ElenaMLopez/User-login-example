function hasToken(token_key) {
  if (localStorage.getItem(token_key)) {
    return true;
  } else {
    return false;
  }
}

const loginService = (to, from, next) => {
  if (to.path != "/login" && hasToken("karumi_user_token")) {
    next();
  } else {
    next("login");
  }
};

export default loginService;
