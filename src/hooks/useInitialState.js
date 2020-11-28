import { useState, useEffect } from 'react'

const useInitialState = (URL) => {
    const [ videos, setVideos ] = useState({ 'mylist': [], 'trends': [], 'originals': [] })
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setVideos(data);
            setCategories(Object.keys(data));
        })
    }, [])

    return [videos, categories];
}

export default useInitialState;