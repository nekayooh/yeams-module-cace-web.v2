import React from "react";
import YAeroGlass from "./aero_glass";
import TiRouter from "../../router";

export default (props) => {
    //全屏
    const [fFull, setFFull] = React.useState(false);
    //最大化
    const [fMax, setFMax] = React.useState(false);
    //窗口位置
    const [oPosition, setOPosition] = React.useState({left: 0, top: 0});
    //拖动属性
    const [fMove, setFMove] = React.useState(false);
    // 记录移动开始位置
    const [oMove, setOMove] = React.useState({});

    const tFunc = React.useRef();
    return <div
        className={"flex justify-center items-center shadow animated faster fadeIn overflow-hidden " + (fFull ?"fixed top-0 left-0 z-10":"absolute rounded")}
style={{
            width: (fFull || fMax) ? "100vw" : "40rem",
            height: fFull ? "100vh" : (fMax ? "calc(100vh - 3rem)" : "30rem"),
            maxWidth: "100vw",
            maxHeight: fFull ? "100vh" : "calc(100vh - 3rem)",
            left: (fFull || fMax) ? 0 : oPosition.left,
            top: (fFull || fMax) ? 0 : oPosition.top,
            backgroundColor: "rgba(255,255,255,.7)"
        }}>
        <YAeroGlass backgroundColor={"rgba(255,255,255,.7)"} backgroundBlendMode={"lighten"}
                    backgroundImage={props.tBackground2}
                    left={"calc(0px - " + ((fFull || fMax) ? 0 : oPosition.left) + "px )"}
                    top={"calc(0px - " + ((fFull || fMax) ? 0 : oPosition.top) + "px )"}/>
        {/*拖动弹框*/}
        {fMove && <div className="top-0 left-0 fixed w-screen h-screen" onMouseMove={(e) => {
            //拖动时候改变位置
            if (fMove) {
                setOPosition({
                    left: oMove.left + e.screenX - oMove.screenX,
                    top: oMove.top + e.screenY - oMove.screenY,
                })
            }
        }} onMouseUp={(e) => {
            //拖动结束，结束状态
            setFMove(false);
        }}/>}
        <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
            <div className={"w-full h-6 p-1 flex-none flex items-center " + (fFull ? "absolute top-0 left-0 opacity-0 hover:opacity-100 hover:relative justify-end" : "shadow justify-center")}>
                {!fFull && <div
                    className="text-xs cursor-move flex-grow flex items-center justify-start text-gray-700 ml-1 select-none"
                    onMouseDown={(e) => {
                        // 记录移动开始位置
                        if (!fFull && !fMax) {
                            setOMove({
                                left: oPosition.left,
                                top: oPosition.top,
                                screenX: e.screenX,
                                screenY: e.screenY
                            });
                            setFMove(true);
                        }
                    }}>窗口
                </div>}
                <div className="ri-subtract-line flex-none text-sm flex items-center justify-center cursor-pointer
                            bg-orange-400 rounded-full h-4 w-4 text-gray-200 hover:shadow hover:bg-orange-500 mr-1"/>
                <div onClick={() => {
                    setFMax(!fMax)
                }} className={"flex-none text-xs flex items-center justify-center cursor-pointer" +
                " bg-blue-400 rounded-full h-4 w-4 text-gray-200 hover:shadow hover:bg-blue-500 mr-1 " + (fMax ? "ri-checkbox-multiple-blank-line" : "ri-checkbox-blank-line")}/>
                <div onClick={() => {
                    setFFull(!fFull)
                }} className={"flex-none text-xs flex items-center justify-center cursor-pointer" +
                " bg-green-400 rounded-full h-4 w-4 text-gray-200 hover:shadow hover:bg-green-500 mr-1 " + (fFull ? "ri-checkbox-multiple-blank-line" : "ri-checkbox-blank-line")}/>
                <div className="ri-close-line flex-none text-sm flex items-center justify-center cursor-pointer
                            bg-red-500 rounded-full h-4 w-4 text-gray-200 hover:shadow hover:bg-red-600 mr-1"/>
            </div>
            <div className="w-full flex-grow flex overflow-auto"><TiRouter/></div>

        </div>
    </div>
}