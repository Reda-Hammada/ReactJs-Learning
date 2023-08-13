import axios from "../index";
import { useQuery } from "react-query";
import {SuperHeroKeys} from './query_keys';

const getSuperHeroes = async () => {
    const response = await axios.get('/superheroes');
    return response.data;
}

export const useGetSuperHeroes = () => {
    return useQuery(SuperHeroKeys.superHeroData(),()=>
        getSuperHeroes()
    ,{
        retry:false,
    });
};
