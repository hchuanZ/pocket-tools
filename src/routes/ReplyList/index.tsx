// import { useState } from "react"
import {data} from './../../static/wzy'
import { ListTabs } from '../../components/Replylist/Tabs'
import MyNavBar from "../../components/Replylist/NavBar"
export const ReplyList = () => {
    // const [wzyReplyList, setWzyReplyList] = useState(data)
    console.log("data: ", data)
    return (
        <div>
            <MyNavBar />
            <ListTabs />
        </div>
    )
}