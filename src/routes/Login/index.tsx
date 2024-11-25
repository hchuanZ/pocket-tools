import { useEffect } from "react"
import { getTeamRoomList } from "../../request/member"
export const Login = () => {
    useEffect(() => {
        try {
            getTeamRoomList({}).then(res => console.log(res))
        } catch(error) {
            console.log(error)
        }
    }, [])
    getTeamRoomList({})

    return <>login</>
}