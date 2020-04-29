import React from "react";

export default (props) => {
    return <div className={"absolute bg-cover bg-center " + (props.class || "")} //额外样式类
                style={{
                    zIndex:props.zIndex ||  "-1", //图片宽度
                    width: props.width || "calc(100vw + 6rem)", //图片宽度
                    height: props.height || "calc(100vh + 6rem)", //图片高度
                    left: props.left || "auto", //图片左侧位置
                    top: props.top || "auto", //图片高度位置
                    margin: props.margin || "-3rem", //图片边距
                    backgroundColor: props.backgroundColor || "transparent", //混合背景
                    backgroundBlendMode: props.backgroundBlendMode || "normal", //混合模式
                    backgroundImage: "url(" + (props.backgroundImage || "https://api.dujin.org/bing/1920.php") + ")", //默认图片
                    filter: props.filter || "blur(1.5rem)"  //图片高斯
                }}/>
}