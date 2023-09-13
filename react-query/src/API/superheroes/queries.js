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
        //refetchInterval this will refetch every time after the interval by default it is set to false 
        //refetchIntervalInBackground this like the one before but it will continue to refetch data even we are  not in focus in the browser 
        //refetchOnMount:true, this will refetch the data on the component mount //default behavior of react query 
        //refetchOnWindowFocus:true, this will do a data fetching in the background  when you tab out then you tab in again or be on window focus // default value agian 
        // we can do data tranformation with map filter ... using select:(data)=>{}
    
    
    });
};
