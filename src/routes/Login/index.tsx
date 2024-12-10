import { useEffect } from "react"
import {Toast} from 'antd-mobile'
import { getTeamRoomList, getMemberListByTeam } from "../../request/member"
export const Login = () => {
    useEffect(() => {
        try {
            getMemberListByTeam({tabId: '21'}).then(res => console.log(res))
        } catch(error) {
            console.log(error)
        }
    }, [])
    const handleClickLogin = async () => {
        const res = await getMemberListByTeam({tabId: '21'}) as any
        if (res?.success) {
            Toast.show({
                content: 'dede',
                position: 'top'
            })
        }
    }
    return <>login</>
}