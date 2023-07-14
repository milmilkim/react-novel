import useChapter from '@/hooks/useChapter';

const Index = () => {
  const chapter = useChapter();
  const start = () => {
    chapter.goSpecificChapter(1);
  };
  return (
    <>
      <h1>샘플!</h1>
      <button onClick={start}>click</button>
    </>
  );
};

export default Index;
