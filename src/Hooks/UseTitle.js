import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - DocPort`;
    }, [title])
}
export default useTitle;