import React from "react";

import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "../../global.css";
import "./styles.css";

const { Header: Topbar } = Layout;

export default function Header() {
  const collapsed = true;

  return (
    <div>
      <Topbar className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => {},
          }
        )}
      </Topbar>
    </div>
  );
}
