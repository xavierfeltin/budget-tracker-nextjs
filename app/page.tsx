'use client'

import MobileBrowser from '@/components/Components/MobileBrowser';
import WebBrowser from '@/components/Components/WebBrowser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

export default function Home() {
  //https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <>
    {mounted &&
      <>
      <BrowserView>
          <WebBrowser/>
      </BrowserView>

      <MobileView>
        <MobileBrowser/>
      </MobileView>
      </>
    }
    </>
  )
}
