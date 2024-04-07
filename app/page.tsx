'use client'

import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col  items-center justify-center space-y-10 bg-yellow-50">
      <Typography variant="h2" gutterBottom className=' grow-1'>
        York's Tool Box
      </Typography>
      <div className="flex-wrap justify-center space-x-5 space-y-5" >
        <Button variant="contained" onClick={() => router.push("/toolbox/rename_folders")}>批量修改文件名</Button>
      </div>
    </main>
  );
}
