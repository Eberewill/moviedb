import axios from "axios";
import { ResponseInterface } from "../../../../models";


const uri = 'https://api.themoviedb.org/3/trending/all/week?api_key=8664760d6dbc22fafa94f7c71c56e536'

const fetchMediaContents = async (page ?: number): Promise<ResponseInterface | null> => {
    const {data} = await axios.get(`${uri}&page=${page}`);
    return data
  };

  const searchMediaContents = async ( keyWord: string, searchType: string, page ?: number ,): Promise<ResponseInterface | null> => {
    const {data} = await axios.get(`
    https://api.themoviedb.org/3/search/${searchType}?api_key=8664760d6dbc22fafa94f7c71c56e536&language=en-US&page=${page}&query=${keyWord}&include_adult=false`);
    return data
  };




  const mediaService =  {
      fetchMediaContents,
      searchMediaContents
  }

  export default mediaService