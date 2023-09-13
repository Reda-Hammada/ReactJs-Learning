import React,{useMemo} from 'react'
import Navbar from './Navbar'
import { useGetSuperHeroes } from '../API/superheroes/queries'


const SuperHero = () => {
  const {data,isLoading,isError} = useGetSuperHeroes();
  const superheroes = useMemo(() =>{ return data ?? []}, [data]);


  if(isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
        <Navbar />
        <h1>SuperHero</h1>
        <ul>
        {superheroes.map((superhero, index) => (
          <li key={index}>{superhero.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default SuperHero