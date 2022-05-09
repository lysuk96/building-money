import React from "react";
import { useParams } from "react-router-dom";

//component
import {
    ResultCardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardLink,
    Img,
    H6,
    TextFieldset
} from "./component/Card";

//css
import "./css/result.scss";

//data
import CoinDummy from "./dummy/CoinDummy";
import PastDummy from "./dummy/PastDummy";
import ResultDummy from "./dummy/ResultDummy";
import RewardDummy from "./dummy/RewardDummy";

function Result() {
    const params = useParams();
    const resultId = params.id;
    const coinId = parseInt(params.id / PastDummy.length);
    const pastId = params.id % PastDummy.length;

    const coinInfo = CoinDummy.find(element => element.value == coinId);
    const pastInfo = PastDummy.find(element => element.value == pastId);
    const resultInfo = ResultDummy.find(element=> element.id == resultId);
    
    const ranks = resultInfo.ranks //[ema, 존버..]
    const profits = resultInfo.profits //[110, 100...]
    
    const rewardInfo = RewardDummy.find(e => e.profit[0]<= profits[0] && e.profit[1] >= profits[1])

    // deploy ranking
    const map = ranks.map((e, idx) => {
        if (ranks[idx] == "존버") {
            return (
                <h3 style={{ color: '#5f85bb', marginBlockStart: '0.5em', marginBlockEnd: '0.5em' }}>
                    {idx + 1}위 {ranks[idx]} : {profits[idx]}%
                </h3>
            )
        } else if (idx == 0) {
            return(
                <h3 style={{color: '#e5195f', marginBlockStart: '0.5em', marginBlockEnd: '0.5em'}}>
                    {idx+1}위 {ranks[idx]} : {profits[idx]}%
                </h3>
            )
        } else {
            return(
                <h3 style={{marginBlockStart: '0.5em', marginBlockEnd: '0.5em'}}>
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
                    <h6 style={{ fontFamily: 'Yeon Sung, cursive', fontSize: '1.75rem' }}>
                        "{coinInfo.label}"을(를)<br/>"{pastInfo.label}"에 샀더라면...
                    </h6>

                    <div>
                        {map}
                    </div>

                    <TextFieldset>
                        <H6>
                            <span className="emphasize">{ranks[0]} 방식</span>으로
                            <br/><span className="emphasize">100만원</span>을 투자했다면<br/><br/>
                            <span className="emphasize">{rewardInfo.label}</span>... 🥲
                        </H6>
                        <Img src={'/img'+rewardInfo.img}/>
                    </TextFieldset>

                    <CardLink onClick={() => window.open('https://forms.gle/hEZqSRRkcXMM9jVf8', '_blank')}>그 방식이 대체 뭔데요..?</CardLink>

                </CardBody>
            </ResultCardWrapper>
        </div>
    )
}

export default Result