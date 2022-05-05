import React from "react";
import { useParams } from "react-router-dom";

//component
import {
    ResultCardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardButton,
    CardLink
} from "./component/Card";

//css
import "./css/home.css";

//data
import CoinDummy from "./dummy/CoinDummy";
import PastDummy from "./dummy/PastDummy";
import ResultDummy from "./dummy/ResultDummy";

function Result() {
    const params = useParams();
    const resultId = params.id;
    const coinId = parseInt(params.id / PastDummy.length);
    const pastId = params.id % PastDummy.length;

    const coinInfo = CoinDummy.find(element => element.value == coinId);
    const pastInfo = PastDummy.find(element => element.value == pastId);
    const resultInfo = ResultDummy.find(element=> element.id == resultId);

    console.log(resultInfo)
    const ranks = resultInfo.ranks //[1,2,3,4]
    const profits = resultInfo.profits //[100, 90, 80, 70]

    // 1등은 100점 /n 2등은 90점 ... 입니다!
    const map = ranks.map((e, idx) => {
        if (ranks[idx] == "존버") {
            return (
                <h3 style={{ color: 'blue' }}>
                    {idx + 1}위 {ranks[idx]} : {profits[idx]}%
                </h3>
            )
        } else if (idx == 0) {
            return(
                <h3 style={{color: 'red'}}>
                    {idx+1}위 {ranks[idx]} : {profits[idx]}%
                </h3>
            )
        } else {
            return(
                <h3>
                    {idx+1}위 {ranks[idx]} : {profits[idx]}%
                </h3>
            )
        }
    }

    );

    return(
        <div className="Home">
            <ResultCardWrapper>
                <CardBody>
                    <CardHeader>
                        <CardHeading>"{coinInfo.label}"을(를) "{pastInfo.label}"에 샀더라면...</CardHeading>
                    </CardHeader>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}>
                            <a>투자방식 랭크</a>
                            {map}
                        </div>
                    </CardFieldset>

                </CardBody>
            </ResultCardWrapper>
        </div>
    )
}

export default Result