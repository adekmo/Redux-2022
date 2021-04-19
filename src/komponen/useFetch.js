import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal })
            .then( res => {
                if(!res.ok){
                    throw Error('Something error...')
                }
                return res.json();
            })
            .then(data => {
                setItems(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setLoading(false);
                    setError(err.message);
                }
            })
        }, 1500)

        return () => abortCont.abort();
    }, [url]);

    return{ items, loading, error }
}

export default useFetch;
