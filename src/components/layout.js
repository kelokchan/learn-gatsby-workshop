import React from 'react';
import { Header } from './header';
import './layout.css'; 

export const Layout = ({ children }) => (
  <>
    <Header />
    <main class="layout-container">{children}</main>
  </>
);
