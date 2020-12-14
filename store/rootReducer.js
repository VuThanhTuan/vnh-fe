import adminGlobalReducer from "./admin/adminGlobal";

export default function rootReducer(state, action) {
  // always return a new object for the root state
  return {
    adminGlobal: adminGlobalReducer,
  };
}
