"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import { toolList } from "./toolbox/toolList";

export default function Home() {
  const router = useRouter();
  

  const buttons = toolList.map((item) => (
    <Button
      key={item.Id}
      variant="contained"
      onClick={() => router.push(item.Path)}
    >
      {item.Name}
    </Button>
  ));

  return (
    <main className="flex min-h-screen flex-col  items-center  justify-around space-y-10 bg-yellow-50">
      <div>
        <Typography variant="h2" gutterBottom className=" grow-1">
          {"York's Tool Box"}
        </Typography>
      </div>
      <div className="flex-wrap justify-center space-x-5">
        {buttons}
      </div>
    </main>
  );
}
