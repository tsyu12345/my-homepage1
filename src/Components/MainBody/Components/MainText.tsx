import React from "react";

import { InfoText } from "./InfoMsg";

export const MainText = () => {
    return (
        <div id="mainText">
            <p className="msg">この度は、当サイトをご覧いただき、誠にありがとうございます。</p>
            <p className="msg">大変申し訳ございませんが、ただいま当サイトはリニューアル工事に伴い、2022年 10月31日をもって一時閉鎖させていただいております。</p>
            <p className="msg">工事の詳細について以下をお読みいただき、リニューアル後にまたお越しください。お待ちしております。</p>
            <div className="info-text-wrapper">
                <InfoText title="【予定工期】" text="2022年10月 ～ 同年12月中旬頃まで。"></InfoText>
                <InfoText title="【工事内容】" text="使用技術の更新、サイト全体のリニューアル・軽量化、その他成果物展示を目的とした全面工事。"></InfoText>
                <InfoText text="工事期間中は、当ページは閉鎖させていただき、一切の情報を閲覧することができません。終了の見通しが立ちましたら、追ってこのページでお知らせいたします。"></InfoText>
            </div>
        </div>
    );
};