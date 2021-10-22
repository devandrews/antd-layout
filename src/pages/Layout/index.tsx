import React, { ReactNode } from "react";

import { Layout } from "antd";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import "../../global.css";

const { Content } = Layout;

interface LayoutPageProps {
  children?: ReactNode;
}

export default function LayoutPage({ children }: LayoutPageProps) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
