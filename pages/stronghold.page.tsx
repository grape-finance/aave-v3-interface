import Image from 'next/image';
import { useEffect } from 'react';
import { useRootStore } from 'src/store/root';

import { MainLayout } from '../src/layouts/MainLayout';

export default function Home() {
  const trackEvent = useRootStore((store) => store.trackEvent);

  useEffect(() => {
    trackEvent('Page Viewed', {
      'Page Name': 'Stronghold',
    });
  }, [trackEvent]);

  return (
    <>
      <Image
        src="/background_sronghold_deskop.png"
        alt="background image"
        className="object-cover"
        layout="fill"
      />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
