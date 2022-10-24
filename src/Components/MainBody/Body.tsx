import { title } from "process";
import React from "react";

import { InfoText } from "./InfoMsg";
import { MainText } from "./MainText";

export const Body = () => {
    return (
        <div id="main-msg-area">
            <MainText />
                <InfoText title="【予定工期】" text="2022年10月 ～ 同年12月中旬頃まで。"></InfoText>
                <InfoText title="【工事内容】" text="使用技術の更新、サイト全体のリニューアル・軽量化、その他成果物展示を目的とした全面工事。"></InfoText>
                <InfoText text="工事期間中は、当ページは閉鎖させていただき、一切の情報を閲覧することができません。終了の見通しが立ちましたら、追ってこのページでお知らせいたします。"></InfoText>
        </div>
    );
};