import { useState, useEffect } from 'react';
// import { FormControl } from '@mui/material';
import React from 'react';
import './Home.css'

import MultiActionAreaCard from './MultiActionAreaCard';


function Home() {
    const [dog, setdog] = useState([]);
    const [text,settext]=useState("")
    useEffect(() => {
        const fetchdogdata = async () => {
            // try {
            //     const res = await fetch('https://api.thedogapi.com/v1/breeds');
            //     const data = await res.json();
            //     setdog(data);
            //     console.log(data);
            // } catch (error) {
            //     console.error(error)
            // }
            const url = 'https://dogbreeddb.p.rapidapi.com/';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '3703761f71msh6ed3ea1ba59e553p1021d8jsnf902beb0fae7',
                    'x-rapidapi-host': 'dogbreeddb.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setdog(result)
            } catch (error) {
                console.error(error);
            }

        }
        fetchdogdata()

    }, [])
    const SearchDog=async()=>{
        const url = `https://dogbreeddb.p.rapidapi.com/?search?q=${text}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3703761f71msh6ed3ea1ba59e553p1021d8jsnf902beb0fae7',
		'x-rapidapi-host': 'dogbreeddb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setdog(result)
} catch (error) {
	console.error(error);
}



    }
    const handlesubmit=(e)=>{
        e.preventDefault();

        SearchDog();
    }
    return (
        <>
            {!dog ? <h1 className='loading_detail'>loading detail...</h1> : <>
                <section className='heading_application'>
                    <h1>Dog application</h1>
                </section>
                <section>
                    <form onSubmit={handlesubmit}>
                        <input type="text" id="search_bar" placeholder='  Search Dog'value={text} onChange={(e)=>settext(e.target.value)} ></input>
                    </form>
                </section>
                <section className="cards_section">
                    {dog.map((dog) => (
                        <MultiActionAreaCard dog_detail={dog} />

                    ))}
                </section>
            </>}
        </>
    )
}
export default Home;