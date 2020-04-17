import React from 'react';
import TiRouter from "./router"
import dayjs from "dayjs";

export default () => {
    //我的信息
    const [oMine, setOMine] = React.useState({});
    //菜单信息框
    const [fMenu, setFMenu] = React.useState(-1); //0：关闭 1：开启
    //我的信息框
    const [fMine, setFMine] = React.useState(-1); //0：关闭 1：开启
    //时间信息框
    const [tNow, setTNow] = React.useState(dayjs());
    const [fNow, setFNow] = React.useState(-1); //0：关闭 1：开启

    const tFunc = {
        //底部基础弹框组件
        clickBaseModal: (modal) => {
            setFMenu(modal === "menu" ? (fMenu === 1 ? 0 : 1) : (fMenu === -1 ? -1 : 0));
            setFMine(modal === "mine" ? (fMine === 1 ? 0 : 1) : (fMine === -1 ? -1 : 0));
            setFNow(modal === "now" ? (fNow === 1 ? 0 : 1) : (fNow === -1 ? -1 : 0));
        }
    };

    React.useEffect(() => {
        setInterval(() => {
            setTNow(dayjs());
        }, 1000);
    }, [tNow]);
    return <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
        {/*背景图*/}
        <div className="absolute bg-cover bg-center"
             style={{
                 zIndex: "-1",
                 width: "calc(100vw + 6rem)",
                 height: "calc(100vh + 6rem)",
                 margin: "-3rem",
                 backgroundImage: "url(http://5b0988e595225.cdn.sohucs.com/images/20170723/1ab072e263c047b2a6ed2efa0d1e1281.jpeg)"
             }}/>
        {/*登录框*/}
        <div className="bg-white w-64 h-64 absolute flex-grow animated faster rounded-lg zoomIn shadow"
             onClick={tFunc.clickBaseModal}>
        </div>
        {/*显示页面区域*/}
        <div
            className="w-full flex-grow relative flex justify-center items-center overflow-hidden shadow animated faster fadeIn"
            onClick={tFunc.clickBaseModal}>
            <div className="absolute bg-cover bg-center"
                 style={{
                     zIndex: "-1",
                     width: "calc(100vw + 6rem)",
                     height: "calc(100vh + 6rem)",
                     margin: "-3rem",
                     left: "calc(-50vw + 50%)",
                     // top: "0",
                     backgroundColor: "rgba(255,255,255,.7)",
                     backgroundBlendMode: "lighten",
                     backgroundImage: "url(http://5b0988e595225.cdn.sohucs.com/images/20170723/1ab072e263c047b2a6ed2efa0d1e1281.jpeg)",
                     filter: "blur(1.5rem)"
                 }}/>

            <div className="w-full h-full overflow-auto">
                <TiRouter/>
            </div>

        </div>
        {/*底部菜单区域*/}
        <div
            className="w-full h-12 flex-none flex justify-center animated faster slideInUp select-none">
            {/*弹窗区域*/}
            <div className="flex-grow flex justify-center">

                {/*菜单信息弹窗*/}
                {fMenu > -1 && <div
                    className={"sm:w-2/3 w-full bg-white absolute shadow bottom-0 mb-12 rounded-lg flex items-center justify-center flex-wrap animated overflow-hidden faster " + (fMenu === 1 ? "fadeIn" : "fadeOutDownBig")}>

                    <div className="absolute bg-cover bg-center"
                         style={{
                             zIndex: "-1", width: "calc(100vw + 6rem)",
                             height: "calc(100vh + 6rem)",
                             margin: "-3rem",
                             left: "calc(-50vw + 50%)",
                             top: "calc(-100vh + 3rem + 100%)",
                             backgroundColor: "rgba(255,255,255,.7)",
                             backgroundBlendMode: "lighten",
                             backgroundImage: "url(http://5b0988e595225.cdn.sohucs.com/images/20170723/1ab072e263c047b2a6ed2efa0d1e1281.jpeg)",
                             filter: "blur(1.5rem)"
                         }}/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>
                    <div
                        className="ri-shut-down-line text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer"/>

                </div>}

                {/*时间弹窗*/}
                {fNow > -1 && <div
                    className={"absolute bg-white text-gray-700 text-xs select-none py-2 px-4 shadow bottom-0 mb-12 z-10 rounded-lg flex justify-center items-center animated faster " + (fNow === 1 ? "fadeIn" : "fadeOutDownBig")}>
                    {tNow.format("YYYY年MM月DD日 HH时mm分ss秒") + " " + ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][tNow.day()]}
                </div>}

                {/*用户信息弹窗*/}
                {fMine > -1 && <div
                    className={"absolute bg-white h-16 shadow bottom-0 mb-12 rounded-lg flex justify-between items-center animated faster " + (fMine === 1 ? "fadeIn" : "fadeOutDownBig")}>
                    <div className="flex-none rounded-lg h-16 w-16 mr-1 bg-cover"
                         style={{backgroundImage: "url(https://randomuser.me/api/portraits/men/1.jpg)"}}/>
                    <div className="flex-grow rounded-lg w-40 h-16 flex flex-col items-center justify-center p-1">
                        <div className="text-sm text-blue-500 w-40 truncate flex justify-center items-center">我的名字
                        </div>
                        <div className="text-xs text-gray-700 w-40 truncate flex justify-center items-center">南门区红星店
                            特约设计师助理
                        </div>
                        <div
                            className="text-xs text-gray-700 w-40 truncate flex justify-center items-center">15678973783
                        </div>
                    </div>
                    <div className="flex-none rounded-lg ml-1 mt-1 flex flex-col">
                        <div
                            className="ri-shield-keyhole-line text-blue-500 hover:bg-white hover:text-blue-500 rounded-lg h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer"/>
                        <div
                            className="ri-settings-6-line text-blue-500 hover:bg-white hover:text-blue-500 rounded-lg h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer"/>
                    </div>
                    <div className="flex-none rounded-lg mt-1 flex flex-col">
                        <div
                            className="ri-earth-line text-blue-500 hover:bg-white hover:text-blue-500 rounded-lg h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer"/>
                        <div
                            className="ri-shut-down-line text-blue-500 hover:bg-white hover:text-blue-500 rounded-lg h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer"/>
                    </div>
                </div>}
            </div>
            {/*底部信息框*/}
            <div
                className="absolute z-10 max-w-full rounded-t-sm overflow-hidden flex-none flex justify-center px-1">


                <div className="absolute bg-cover"
                     style={{
                         zIndex: "-1", width: "calc(100vw + 6rem)",
                         height: "calc(100vh + 6rem)",
                         margin: "-3rem",
                         left: "calc(-50vw + 50%)",
                         top: "calc(-100vh + 3rem + 100%)",
                         backgroundColor: "rgba(0,0,0,.5)",
                         backgroundBlendMode: "darken",
                         backgroundImage: "url(http://5b0988e595225.cdn.sohucs.com/images/20170723/1ab072e263c047b2a6ed2efa0d1e1281.jpeg)",
                         filter: "blur(1.5rem)"
                     }}/>
                {/*菜单图标*/}
                <div onClick={() => {
                    tFunc.clickBaseModal("menu");
                }}
                     className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500  rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                {/*消息邮件*/}
                <div onClick={tFunc.clickBaseModal}
                     className="ri-chat-smile-2-line flex-none text-gray-700 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                {/*地址区域*/}
                <div className="flex-grow overflow-y-hidden" onWheel={(event) => {
                    // 调整为左右滚轮滑动
                    event.currentTarget.scrollLeft += event.deltaY * 2;
                }}>
                    <div className="flex" style={{height: 0}}>
                        <div onClick={tFunc.clickBaseModal}
                             className="bg-white text-gray-700 rounded-lg shadow h-10 m-1 text-sm flex flex-none justify-center items-center p-1 cursor-pointer">测试文字测试文字地址
                        </div>
                    </div>
                </div>
                {/*时间日期*/}
                <div onClick={() => {
                    tFunc.clickBaseModal("now");
                }}
                     className="flex-none text-gray-700 bg-white rounded-full border-2 border-orange-500 shadow h-10 w-10 m-1 flex items-center justify-center cursor-pointer">
                    <div className="flex items-baseline justify-center">
                        <div className="text-lg">{tNow.format("HH")}</div>
                        <div className="text-xs">{tNow.format("mm")}</div>
                    </div>
                </div>
                {/*用户头像*/}
                <div onClick={() => {
                    tFunc.clickBaseModal("mine");
                }} className="flex-none rounded-lg shadow h-10 w-10 m-1 cursor-pointer bg-cover"
                     style={{backgroundImage: "url(https://randomuser.me/api/portraits/men/1.jpg)"}}/>
            </div>
        </div>

    </div>;
};
