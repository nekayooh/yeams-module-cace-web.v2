import React from "react";

export default (props) => {
    //是否显示气泡框
    const [fShow, setFShow] = React.useState(false);
    return <div className={props.class || ""} //额外的样式
                onTouchEnd={() => {
                    setFShow(false);
                }}
                onTouchStart={() => {
                    setFShow(true);
                }}
                onMouseLeave={() => {
                    setFShow(false);
                }}
                onMouseOver={() => {
                    setFShow(true);
                }}>
        {(props.top || !props.bottom) && <div className="relative flex justify-center items-end">
            <div
                className={"fixed flex justify-center items-center rounded-sm shadow text-xs text-white py-1 px-2 " + (fShow ? "" : "hidden")}
                style={{
                    backgroundColor: "rgba(0,0,0,.55)",
                    marginLeft: props.marginLeft || 0,
                    marginTop: props.marginTop || 0
                }}>{props.name || ""}
            </div>
        </div>}
        {props.element || ""}
        {props.bottom && <div className="relative flex justify-center items-start">
            <div
                className={"fixed flex justify-center items-center rounded-sm shadow text-xs text-white py-1 px-2 " + (fShow ? "" : "hidden")}
                style={{
                    backgroundColor: "rgba(0,0,0,.55)",
                    marginLeft: props.marginLeft || 0,
                    marginTop: props.marginTop || 0
                }}>{props.name || ""}
            </div>
        </div>}
    </div>
}