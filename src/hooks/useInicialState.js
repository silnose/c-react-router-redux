import { useState, useEffect } from 'react';

const useInicialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] }); //handle state
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInicialState;

