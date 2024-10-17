import { Tabs } from "antd-mobile"

export const ListTabs = () => {
    return (
        <Tabs>
            <Tabs.Tab title={'成员'} key='member'>成员</Tabs.Tab>
            <Tabs.Tab title={'消息'} key='message'>消息</Tabs.Tab>
        </Tabs>
    )
}