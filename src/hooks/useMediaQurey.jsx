import { useEffect, useState } from "react";

const USeMediaQurey = (qurey) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(qurey);
        if(media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener)
        return () => window.removeEventListener("resize", listener)
    }, [matches,qurey]);

    return matches;
}

export default USeMediaQurey;