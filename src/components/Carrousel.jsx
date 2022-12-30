import React, {useState,useEffect} from 'react'
import Slide from './Slide'
export default function Carrousel() {
    const [index,setIndex]=useState(0)
    const [manga,setManga]=useState([]) 
    //const [id,setId]=useState(0)
    useEffect(()=>{
        fetch('./manga.json')
            .then(res=>res.json())
            .then(data=>{
                setManga(data)
                
            })
    },[])
    //  useEffect(()=>{
    //      let idInterval= setInterval(()=>{
    //          next()
    //      }, 5000)
    //      setId(idInterval)
    //      return clearInterval(id)
    //  },[index])

    function prev(){
        if(index>0){
            setIndex(index-1)
            
        }else{
            setIndex(manga.length-1)
            
        }
    }
    function next(){
        if(index<manga.length-1){
            setIndex(index +1)
            
        }else{
            setIndex(0)
            
        }
    }
  return (
    <div className="slideshowContainer">
           <Slide foto={manga[index]?.photo} nombre={manga[index]?.title}></Slide>
            <a className="prev"  onClick={prev}>&#10094;</a>
            <a className="next"  onClick={next}>&#10095;</a>
          </div>
  )
}
