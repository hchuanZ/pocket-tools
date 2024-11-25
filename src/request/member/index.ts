import { request_48 } from "../../utils/net";
import { CommonOption } from "../common";
import { token } from "../testToken.ts";

// 获取队伍list
export const getTeamRoomList = async(option: CommonOption) => {
    const url = 'http://47.109.52.152:8848/hapi/im/api/v1/im/team/tab/list'
    return await request_48({
        url, 
        token: option?.token || token,
        method: 'post',
        body: {"groupId":0,"typeId":0,"ctime":0,"limit":20}
    })
}

// 根据队伍，获取成员list
export const getMemberListByTeam = async (option: CommonOption & {tabId: string}) => {
    const url = 'http://47.109.52.152:8848/hapi/im/api/v1/im/team/server/list'
    return await request_48({
        url, 
        token: option?.token || token,
        method: 'post',
        body: {tabId: option?.tabId}
    })
}

// 获取房间信息
export const getRoomInfo = async (option: CommonOption & {channelId: string}) => {
    const url = 'http://47.109.52.152:8848/hapi/im/api/v1/im/team/room/info'
    return await request_48({
        url, 
        token: option?.token || token,
        method: 'post',
        body: {channelId: option?.channelId}
    })
}