export const isAuth = ({ next, store, nextMiddleware }) => {
  console.log(store.state.Auth.isAuth);
  if (!store.state.Auth.isAuth) {
    next("/");

    return;
  }

  return nextMiddleware();
};
