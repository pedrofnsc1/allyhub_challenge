import React from "react";

export default function useFetch(){
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const request = React.useCallback(async (url) => {
        let response;
        let json;
        try{
           setError(null);
            response = await fetch(url);
            json = await response.json();    
        }catch(error){
            json = null;
            setError(error.message);
        } finally {
            setData(json);
            return {response, json};
        }
    }, []);
    
    return {data, error, request};
}