import { useState, useEffect } from 'react';
const images = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
].flatMap((img)=> [`a|${img}`, `b|${img}`] ).sort(() => Math.random() - 0.5 )

const Memotest = () => {

  const [guessed, setGuessed] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  useEffect( () => {
    if(selected.length === 2){
      if(selected[0].split("|")[1] === selected[1].split("|")[1]){
        setGuessed( guessed => guessed.concat(selected) )
      }

      setTimeout(()=> setSelected([]) , 1000)
    }
  }, [selected] )

  useEffect(()=>{
    if(guessed.length === images.length){
      alert("You won!")
      location.reload();
    }
  }, [guessed])

  return (
    <ul style={{ cursor: 'pointer' ,display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))', gap: 24}}>
      {
        images.map((img, index) =>  {
          const [ , url] = img.split("|")
          console.log(url)
          return (
            <li onClick={ ()=> selected.length < 2 && setSelected( selected => selected.concat(img) )}
              key={crypto.randomUUID()} style={ { padding : 12, border: '1px solid #666', borderRadius: 12 } }>
              {selected.includes(img) || guessed.includes(img) ? (
                <img src={url} alt="icon"/>
              ) : 
              (
                <img key={crypto.randomUUID()} src="https://icongr.am/clarity/search.svg?size=128&color=currentColor" alt="icon"/>
              )
              }
            </li>
          )
        }
          

        )
      }
    </ul>
  )
}

export default Memotest