'use client'

import MobileBrowser from '@/components/Components/MobileBrowser';
import WebBrowser from '@/components/Components/WebBrowser';
import { useEffect, useState } from 'react';

export default function Home() {
  //const [width, setWidth] = useState<number>(window.innerWidth);
  const mobileSize: number = 768;
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= mobileSize);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= mobileSize);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <>
    {isMobile &&
      <MobileBrowser/>
    }
    {!isMobile &&
      <WebBrowser/>
    }
    </>
  )
}
