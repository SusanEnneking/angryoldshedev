
import { useEffect, useState } from 'react';
import { Section } from '../blog/blog.types'
const useSections = () => { 
    const [sections, setSections] = useState<Section[]>([]); 
    useEffect(() => {
        const fetchData = async () => {
            const response  = await fetch("http://localhost:8080/categories", {
                method: 'GET',
                headers: {'Content-Type': 'application/json'} 
            })
            const sections = await response.json()
            const sectionList = sections.data.map((section: string) =>{
                return {title: section, url: '#'};
            });
            setSections(sectionList);
        }
        fetchData();
    }, [])

    return sections
  }
  export default useSections;

