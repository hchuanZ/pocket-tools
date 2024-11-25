import { CommonOption } from "../common";
import { request_48 } from "../../utils/net";

enum AnswerType {
    TEXT = 1,
    VIDEO = 3,
    SONG = 2
}

enum ViewType {
    ALL = 0,
    NO_NAME = 1,
    SECRET = 2
}

// 获取翻牌的基础信息，（开了哪些翻牌）
// 入参，memberId
interface GetReplyBaseInfoProps extends CommonOption {
    memberId: string;
}
export const getReplyBaseInfo = async (option: GetReplyBaseInfoProps) => {
    const url = 'http://47.109.52.152:8848/hapi/idolanswer/api/idolanswer/v2/custom/index'
    return await request_48({
        url,
        token: option?.token,
        method: "post",
        body: { memberId: option?.memberId },
      });
}

// 获取翻牌列表
// 入参： memberId，status， beginLimit，limit
interface GetReplyBaseInfoProps extends CommonOption {
    memberId: string;
    status: string;
    beginLimit: number,
    limit: number
}
export const getReplyList = async (option: GetReplyBaseInfoProps) => {
    const url = 'http://47.109.52.152:8848/hapi/idolanswer/api/idolanswer/v1/user/question/list'
    return await request_48({
        url,
        token: option?.token,
        method: "post",
        body: { ...option },
      });
}

// 发送翻牌
// 入参： memberId，status， beginLimit，limit
interface SendIdolAnswerProps extends CommonOption {
    memberId: string;
    content: string;
    type: ViewType,
    cost: string,
    answerType: AnswerType
}
export const sendIdolAnswer = async (option: SendIdolAnswerProps) => {
    const url = 'http://47.109.52.152:8848/hapi/idolanswer/api/idolanswer/v1/user/question/list'
    return await request_48({
        url,
        token: option?.token,
        method: "post",
        body: { ...option },
      });
}

// 撤回翻牌
// 入参： memberId，status， beginLimit，limit
interface QuitIdolAnswer extends CommonOption {
    memberId?: string;
    questionId: string
}
export const quitIdolAnswer = async (option: QuitIdolAnswer) => {
    const url = 'http://47.109.52.152:8848/hapi/idolanswer/api/idolanswer/v1/user/question/operate'
    return await request_48({
        url,
        token: option?.token,
        method: "post",
        body: { memberId: '', questionId: option?.questionId },
      });
}

