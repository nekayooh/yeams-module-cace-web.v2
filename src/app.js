import React from 'react';
import TiRouter from "./router"
import dayjs from "dayjs";
import {IntlProvider, FormattedMessage} from "react-intl";
import YAeroGlass from "./components/base/aero_glass"
import YTooltip from "./components/base/tooltip"
import YWindow from "./components/base/window"
import i18 from "./i18/i18";
import {axiosg} from "./base/axios";


export default () => {
    //本地语言
    const [tLocal, setTLocal] = React.useState("zh"); //0：关闭 1：开启
    //登录模式
    const [fLogin, setFLogin] = React.useState(-1); //-1:主页模式 0：关闭 1：开启

    const [oCompany, setOCompany] = React.useState({
        background: [],
        logo: "",
        close_at: null,
        version: "",
    });
    //当前显示背景图信息
    const [tBackground2, setTBackground2] = React.useState(undefined);
    //当前窗口圆角信息
    const [tRounded, setTRounded] = React.useState("rounded-sm");
    //当前显示背景图信息
    const [tBackground, setTBackground] = React.useState(0);
    //计时器
    const [cBackground, setCBackground] = React.useState(null);

    //我的信息
    const [oMine, setOMine] = React.useState({});
    //菜单信息框
    const [fMenu, setFMenu] = React.useState(-1); //0：关闭 1：开启
    //我的信息框
    const [fMine, setFMine] = React.useState(-1); //0：关闭 1：开启
    //时间信息
    const [tNow, setTNow] = React.useState(dayjs());
    //底部滚动条位置
    const [tScrollLeft, setTScrollLeft] = React.useState(0);


    //当前页面
    const [tNowPage, setTNowPage] = React.useState([]);

    const tFunc = {
        //底部基础弹框组件
        clickBaseModal: (modal) => {
            setFMenu(modal === "menu" ? (fMenu === 1 ? 0 : 1) : (fMenu === -1 ? -1 : 0));
            setFMine(modal === "mine" ? (fMine === 1 ? 0 : 1) : (fMine === -1 ? -1 : 0));
        }
    };

    React.useEffect(() => {
        setTimeout(() => {
            setTNow(dayjs());
        }, 1000);
    }, [tNow]);
    React.useEffect(() => {
        if (oCompany.background.length > 1) {
            if (cBackground !== null) {
                clearTimeout(cBackground);
            }
            setCBackground(setTimeout(() => {
                if (tBackground + 1 === oCompany.background.length) {
                    setTBackground(0)
                } else {
                    setTBackground(tBackground + 1)
                }
            }, 5000));
        }
    }, [oCompany, tBackground]);

    React.useEffect(() => {
        axiosg.post1("/login", {}, (response) => {
                if (response.data.status === "success") {

                    setOCompany({
                        background: (response.data.company.background !== "" && response.data.company.background !== null) ? response.data.company.background.split(",").map(value => {
                            //预先加载背景图
                            setTimeout(() => {
                                const loadImage = new Image();
                                loadImage.src = value.split("|")[1];
                            });
                            return value.split("|")[1];
                        }) : [],
                        logo: (response.data.company.logo !== "" && response.data.company.logo !== null) ? response.data.company.logo.split("|")[1] : 123,
                        close_at: response.data.company.close_at,
                        version: response.data.version,
                    });
                    // initg.showToast({type: "error", name: "系统初始化失败，请刷新重试"});
                } else {
                }

                document.querySelector("title").innerHTML = response.data.company.name;
            }, () => {
            }
        );

    }, []);

    return <IntlProvider locale={tLocal} messages={i18[tLocal].data}>
        <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
            {/*登录框*/}
            {fLogin === 1 && oCompany.background.map((value, index) =>
                <YAeroGlass key={index} class={"animated faster " + (tBackground === index ? "fadeIn" : "fadeOut")}
                            backgroundImage={value} filter={"none"}/>)}
            {fLogin === 1 &&
            <div className={"w-64 h-64 absolute flex-grow animated faster zoomIn shadow overflow-hidden "+tRounded}
                 onClick={tFunc.clickBaseModal}>
                <YAeroGlass backgroundColor={"rgba(255,255,255,.85)"} backgroundBlendMode={"lighten"}
                            backgroundImage={tBackground2} left={"calc(50% - 50vw)"}
                            top={"calc(50% - 50vh)"}/>
            </div>}
            {/*主页背景图*/}
            {fLogin === -1 && <YAeroGlass backgroundImage={tBackground2} filter={"none"}/>}
            {/*显示页面区域*/}
            {fLogin === -1 && <div className="w-full flex-grow" onClick={tFunc.clickBaseModal}>
                <YWindow tBackground2={tBackground2} Rounded={tRounded} />
            </div>}
            {/*底部菜单区域*/}
            {fLogin === -1 && <div
                className="w-full h-12 flex-none flex flex-col animated faster slideInUp select-none">
                {/*弹窗区域*/}
                <div className="flex justify-center">

                    {/*菜单信息弹窗*/}
                    {fMenu > -1 && <div
                        className={"sm:w-2/3 sm:h-auto w-full h-screen bg-white absolute shadow bottom-0 mb-12 flex items-center justify-center overflow-hidden animated faster "+tRounded+" " + (fMenu === 1 ? "fadeInUp" : "fadeOutDown")}
                        style={{maxHeight: "calc(100vh - 3rem)"}}>
                        <YAeroGlass backgroundColor={"rgba(255,255,255,.85)"} backgroundBlendMode={"lighten"}
                                    backgroundImage={tBackground2}
                                    left={"calc(50% - 50vw)"} top={"calc(-100vh + 100%)"}/>

                        <div
                            className="w-full h-full flex flex-col">
                            <div className="w-full flex justify-center items-center">
                                <input className={"text-center shadow-inner py-1 px-3 text-sm my-2 "+tRounded}
                                       style={{backgroundColor: "rgba(0,0,0,.03)"}}/>
                                <div className="ri-shut-down-line"/>
                            </div>
                            <div
                                className="w-full flex-grow overflow-auto flex items-center justify-center flex-wrap content-start">
                                <div
                                    className={"ri-shut-down-line text-blue-500 hover:text-blue-500 h-12 w-12 m-1 text-lg flex-none flex items-center justify-center cursor-pointer "+tRounded}/>
                            </div>
                        </div>

                    </div>}


                    {/*用户信息弹窗*/}
                    {fMine > -1 && <div
                        className={"absolute bg-white h-16 shadow bottom-0 mb-12 flex justify-between items-center overflow-hidden animated faster "+tRounded+" " + (fMine === 1 ? "fadeInUp" : "fadeOutDown")}>
                        <YAeroGlass backgroundColor={"rgba(255,255,255,.85)"} backgroundBlendMode={"lighten"}
                                    backgroundImage={tBackground2}
                                    left={"calc(50% - 50vw)"} top={"calc(-100vh + 100%)"}/>
                        <div className={"flex-none h-16 w-16 mr-1 bg-cover "+tRounded}
                             style={{backgroundImage: "url(https://randomuser.me/api/portraits/men/1.jpg)"}}/>
                        <div className={"flex-grow w-40 h-16 flex flex-col items-center justify-center p-1 "+tRounded}>
                            <div className="text-sm text-blue-500 w-40 truncate flex justify-center items-center">我的名字
                            </div>
                            <div className="text-xs text-gray-700 w-40 truncate flex justify-center items-center">南门区红星店
                                特约设计师助理
                            </div>
                            <div
                                className="text-xs text-gray-700 w-40 truncate flex justify-center items-center">15678973783
                            </div>
                        </div>
                        <div className={"flex-none ml-1 mt-1 flex flex-col "+tRounded}>
                            <div
                                className={"ri-shield-keyhole-line text-blue-500 hover:bg-white hover:text-blue-500 h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer "+tRounded}/>
                            <div
                                className={"ri-settings-6-line text-blue-500 hover:bg-white hover:text-blue-500 h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer "+tRounded}/>
                        </div>
                        <div className={"flex-none mt-1 flex flex-col "+tRounded}>
                            <div onClick={() => {
                                setTLocal("en");
                            }}
                                 className={"ri-earth-line text-blue-500 hover:bg-white hover:text-blue-500 h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer "+tRounded}/>
                            <div
                                className={"ri-shut-down-line text-blue-500 hover:bg-white hover:text-blue-500 h-6 w-6 mr-1 mb-1 text-lg flex items-center justify-center cursor-pointer "+tRounded}/>
                        </div>
                    </div>}
                </div>
                {/*底部信息框*/}
                <div className="flex justify-center z-10">
                    <div
                        className={"absolute flex-none z-10 max-w-full flex justify-center px-1 overflow-hidden "+tRounded}>

                        <YAeroGlass backgroundColor={"rgba(0,0,0,.55)"} backgroundBlendMode={"darken"}
                                    backgroundImage={tBackground2}
                                    left={"calc(50% - 50vw)"} top={"calc(-100vh + 3rem + 100%)"}/>
                        {/*菜单图标*/}
                        <YTooltip class={"flex-none"} name={"菜单"} element={
                            <div onClick={() => {
                                tFunc.clickBaseModal("menu");
                            }}
                                 className={"ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer "+tRounded}/>
                        }/>

                        {/*消息邮件*/}
                        {/*<div onClick={tFunc.clickBaseModal}*/}
                        {/*     className="ri-chat-smile-2-line flex-none text-gray-700 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>*/}
                        {/*地址区域*/}
                        <div className="flex-grow overflow-y-hidden" onScroll={(event) => {
                            //firefox下面srcollLeft*2
                            if (navigator.userAgent.indexOf('Firefox') >= 0) {
                                setTScrollLeft(event.currentTarget.scrollLeft * 2);
                            } else {
                                setTScrollLeft(event.currentTarget.scrollLeft);
                            }
                        }} onWheel={(event) => {
                            // 调整为左右滚轮滑动
                            event.currentTarget.scrollLeft += event.deltaY * 2;
                        }}>
                            <div onClick={tFunc.clickBaseModal} className="flex" style={{height: 0}}>
                                <YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                    <div
                                        className={"ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer "+tRounded}/>
                                }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/><YTooltip marginLeft={-tScrollLeft} class={"flex-none"} name={"菜单"} element={
                                <div
                                    className="ri-apps-line flex-none text-blue-500 bg-white hover:bg-white hover:text-blue-500 rounded-lg shadow h-10 w-10 m-1 text-2xl flex items-center justify-center cursor-pointer"/>
                            }/>
                            </div>
                        </div>
                        {/*时间日期*/}
                        <YTooltip class={"flex-none"} name={
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">{tNow.format("YYYY年MM月DD日")}</div>
                                <div className="flex items-center justify-center">{tNow.format("HH时mm分ss秒")}</div>
                                <div
                                    className="flex items-center justify-center">{["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][tNow.day()]}</div>
                            </div>
                        } element={
                            <div onClick={() => {
                                tFunc.clickBaseModal("now");
                            }}
                                 className={"flex-none text-gray-700 bg-white border-2 border-orange-500 shadow h-10 w-10 m-1 flex items-center justify-center cursor-pointer "+ tRounded}>
                                <div className="flex items-baseline justify-center">
                                    <div className="text-lg">{tNow.format("HH")}</div>
                                    <div className="text-xs">{tNow.format("mm")}</div>
                                </div>
                            </div>
                        }/>
                        {/*用户头像*/}
                        <YTooltip class={"flex-none"} name={"我的"} element={
                            <div onClick={() => {
                                tFunc.clickBaseModal("mine");
                            }} className={"flex-none shadow h-10 w-10 m-1 cursor-pointer bg-cover " + tRounded}
                                 style={{backgroundImage: "url(https://randomuser.me/api/portraits/men/1.jpg)"}}/>
                        }/>

                    </div>
                    {/*空白占位*/}
                    <div className="flex-grow h-12" onClick={tFunc.clickBaseModal}/>
                </div>
            </div>}

        </div>
    </IntlProvider>;
};
