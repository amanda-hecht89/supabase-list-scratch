import { useState, useEffect } from "react";
import EndangeredList from "./EndangeredList";
import { getAnimalsAndCount } from "./services/Fetch-Utils";
import Pagination from "./Pagination";

const PER_PAGE = 35;

export default function ListPage() {
    const [animal, setAnimal] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalAnimals, setTotalAnimals] useState(1);

    useEffect(() => {
        async function doFetch() {
            const from = currentPage * PER_PAGE;
            const to = (( currentPage + 1) * PER_PAGE) + 1;
            const animalsAndCount = await getAnimalsAndCount(from, to);

            setTotalAnimals(animalsAndCount); setAnimal(animalsAndCount.data)
        }
        doFetch();
    }, [currentPage]);

    const lastPage = Math.floor(totalAnimals / PER_PAGE);


  return (
    <div>
        <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage} />
        <EndangeredList  animal={animal}/>
    </div>
  );
}
