import React, { useContext } from "react";

import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "../../global.css";
import "./styles.css";
import MenuContext from "../../contexts/MenuContext";

const { Header: Topbar } = Layout;

export default function Header() {
  const { collapsed, setCollapsed } = useContext(MenuContext);

  return (
    <div>
      <Topbar className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
      </Topbar>
    </div>
  );
}
