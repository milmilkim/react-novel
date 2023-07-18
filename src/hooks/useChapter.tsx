import { useNavigate, useParams } from 'react-router-dom';
import { PAGE } from '../../novel.config.json';
import { route } from '@/@types/route';

const useChapter = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const prefix = PAGE.PREFIX;

  const goNextChapter = () => {
    const nextChapter = Number(id?.replace(prefix, '')) + 1;
    goSpecificChapter(nextChapter)
  };

  const goSpecificChapter = (chapter: number) => {
    navigate(`${route.Contents}/${prefix}${chapter}`);
  };

  return { goNextChapter, goSpecificChapter };
};

export default useChapter;
