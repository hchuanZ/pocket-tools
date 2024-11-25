import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getTeamRoomList } from '../../../request/member';

export function RequireAuth({ children }: any) {
  const location = useLocation();
//   useEffect(() => {
//     (async () => {
//         const res = await getTeamRoomList({})
//         debugger
//         // alert(res)
//     })()
//   }, [])
  const isAuthenticated = true;

  if (!isAuthenticated) {
    // 用户未认证，重定向到登录页面，并附带当前位置，以便登录后可以返回
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // 用户已认证，渲染对应的子组件
}
