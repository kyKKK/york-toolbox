"use client";

import "@/app/globals.css";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { toolList } from "./toolList";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const pathName = usePathname();
  // 点击显示Drawer
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleClictDrawerItem = (path: string) => {
    router.push(path);
  };
  // 获取APP Bar标题
  const title = getTitle(pathName);
  function getTitle(path: string): string {
    for (const item of toolList) {
      if (item.Path === path) {
        return item.Name;
      }
    }
    return "Unknown";
  }

  // Drawer项列表
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Toolbar>
        <Typography variant="h6">{"York's Toolbox"}</Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClictDrawerItem("/")}>
            <ListItemText primary="主页" />
          </ListItemButton>
        </ListItem>
        {toolList.map((item) => (
          <ListItem key={item.Id} disablePadding>
            <ListItemButton
              onClick={() => handleClictDrawerItem(item.Path)}
              selected={pathName === item.Path}
            >
              <ListItemText primary={item.Name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <html lang="en">
      <div className="flex min-h-screen flex-col bg-white">
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        <div>{children}</div>
      </div>
    </html>
  );
}
