import { configureStore } from "@reduxjs/toolkit";

import AuthSlice  from './slices/authSlice'

const store = configureStore({
  reducer: {
    Auth:AuthSlice,

    // tableData: tableReducer,
    // selectOrders: selectReducer,
    // userManagement:usermanagementReducer,
    // dasboardStatus:dasboardStatusReducer
  },
  
});

export default store;
