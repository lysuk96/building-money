import React from "react";
import ReactDOM from "react-dom";

import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardButton,
  CardLink
} from "./component/Card";
import {PastPicker, CoinPicker} from "./component/SelectBox"
import "./css/app.css";

function App() {
  return (
    <div class="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Coin What if?</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <div style={{marginBottom : "10px"}}>
                <a>뭘 샀을까?</a>
            </div>
            <CoinPicker></CoinPicker>
          </CardFieldset>

          <CardFieldset>
            <div style={{marginBottom : "10px"}}>
                <a>언제 샀을까?</a>
            </div>
            <PastPicker></PastPicker>
          </CardFieldset>

          <CardFieldset>
            <div style={{marginTop : "10px"}}></div>
            <CardButton type="button">결과 확인하기</CardButton>
          </CardFieldset>

          {/* <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset> */}
        </CardBody>
      </CardWrapper>
    </div>
  );
}

// ReactDOM.render(<YearPicker val={2002} />, document.getElementById('App'))

export default App;