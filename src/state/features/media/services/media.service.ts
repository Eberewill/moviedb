import axios from "axios";
import { ResponseInterface } from "../../../../models";


const uri = 'https://api.themoviedb.org/3/trending/all/week?api_key=8664760d6dbc22fafa94f7c71c56e536'
const fetchMediaContents = async (page ?: number): Promise<ResponseInterface | null> => {
    const {data} = await axios.get(`${uri}&page=${page}`);
    return data
  };


  const mediaService =  {
      fetchMediaContents
  }

  export default mediaService