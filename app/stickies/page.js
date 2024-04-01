'use client';
import Footer from '../../components/footer';
import NavBar from '../../components/navbar';
import PageTemplate from './../../components/pageTemplate';
import React, {useEffect, useState} from 'react';
import Sticky from '../../components/sticky';
import StickyInterface from '../../util/StickyInterface';

export default function page() {
  let [stickyContent, setStickyContent] = useState<StickyInterface>({
    title: '',
    text: '',
  });
  let [stickies, setStickies]: any = useState<StickyInterface[]>([]);
  useEffect(() => {
    setStickies([
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ]);
  }, []);
  return (
    <PageTemplate>
      <div className='w-full min-h-screen flex justify-center align-middle font-geist_sans'>
        <div className='w-full md:w-3/6 px-4 text-[#170202]'>
          <div className=''>
            <NavBar />
            <h1 className='text-2xl md:text-3xl font-semibold mb-6'>
              Stickies
            </h1>
            {/* <div className='flex flex-wrap justify-stretch border gap-6'> */}
            <BabelStickies stickies={stickies} />
            {/* </div> */}
            <div className='w-full h-8 md:h-11' />
            <Footer />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

function BabelStickies({stickies: setStickies}: {stickies: StickyInterface[]}) {
  let [stickiesArr, setStickiesArr] = useState<React.JSX.Element[]>([]);
  useEffect(() => {
    for (let i = 0; i < setStickies.length; i++) {
      stickiesArr.push(
        <Sticky
          text={setStickies[i].text}
          title={setStickies[i].text}
          closeFunction={() => {
            setStickiesArr(
              stickiesArr
                .slice(0, i)
                .concat(stickiesArr.slice(i + 1, stickiesArr.length)),
            );
            console.log(stickiesArr);
          }}
        />,
      );
      console.log(stickiesArr);
    }
  }, []);

  return (
    <div className='flex flex-wrap justify-stretch border gap-6'>
      {stickiesArr.map((element) => element)}
    </div>
  );
}
