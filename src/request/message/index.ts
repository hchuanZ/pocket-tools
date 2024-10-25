import { request_48 } from "../../utils/net";

import { CommonOption } from "../common";




// 消息列表
interface GetMessageListProps extends CommonOption {
    lastTime: string;
}
export const getMessageList = async (option: GetMessageListProps) => {
  const { lastTime } = option;
  const url = "https://pocketapi.48.cn/message/api/v1/user/message/list";
  return await request_48({
    url,
    token: option?.token,
    method: "post",
    body: { lastTime },
  });
};

// 房间消息列表
interface GetRoomMsgListProps extends CommonOption {
    limit: number,
    serverId: string,
    channelId: string, 
    nextTime: string
}
export const getRoomMsgList = async (option: GetRoomMsgListProps) => {
    const url = 'https://pocketapi.48.cn/im/api/v1/team/message/list/all'
    return await request_48({
        url, 
        token: option?.token,
        method: 'post',
        body: {...option}
    })
}