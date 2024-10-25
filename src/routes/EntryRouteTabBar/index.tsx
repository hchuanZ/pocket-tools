import { type FC } from "react";
import { TabBar } from "antd-mobile";
import {
  useNavigate,
  useLocation,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { MyInfo } from "../MyInfo";
import { ReplyList } from "../ReplyList";
import { HelperCenter } from "../HelperCenter";
import { Todo } from "../Todo";
// import { useAuthStore } from "../../store";

export const EntryRouteTabBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  // const { authData } = useAuthStore();
  // const isAuth = useMemo(() => {
  //   if (!authData.sToken) return false
  //   return true
  // }, [authData])
  // if (!isAuth) {
  //   navigate("/login");
  // }

  const tabs = [
    {
      key: "/list",
      title: "列表",
      icon: <AppOutline />,
    },
    {
      key: "/todo",
      title: "待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/helper",
      title: "帮助",
      icon: <MessageOutline />,
    },
    {
      key: "/myInfo",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/list" element={<ReplyList />} />
          <Route path="/helper" element={<HelperCenter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/myInfo" element={<MyInfo />} />
          {/* 默认路由 */}
          <Route path="/" element={<Navigate to="/list" replace />} />
        </Routes>
      </div>
      <div style={{ flex: 0 }}>
        {location.pathname !== "/login" && (
          <TabBar activeKey={pathname} onChange={(value) => navigate(value)}>
            {tabs.map((item) => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
        )}
      </div>
    </div>
  );
};
