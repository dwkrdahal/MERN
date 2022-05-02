import { useEffect, useState } from "react"

export function BannerComponent(){
    
    let[data, setData] = useState([])
    let[isLoading, setIsLoading] = useState(true);

    useEffect((pre) => {
        // this hook is executes on every state change
        setIsLoading(false);
    });

    useEffect(() => {
        // this hoook executes only one time at first
    }, [isLoading]);


    return(
        <>
            <p>This is Banner</p>
            <a href="/contact-us">Contact Us</a>
        </>
    )
}