import React, { useState } from "react";
import { useNavigate, Route, Routes } from 'react-router-dom';
import Select from 'react-select';

//component
import {
    HomeCardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardButton,
    CardLink
} from "./component/Card";

//css
import "./css/home.css";

//dummy
import CoinDummy from "./dummy/CoinDummy";
import PastDummy from "./dummy/PastDummy"

//page
import Rank from "./Result"

function Home() {
    let navigate = useNavigate()
    
    const [coin, setCoin] = useState({ label: "BTC", value: 0 })
    const [past, setPast] = useState({ label: "1주전", value: 0 })

    const id = coin.value * PastDummy.length + past.value
    // console.log(id)

    return (
        <div class="Home">
            <HomeCardWrapper>
                <CardHeader>
                    <CardHeading>Coin What if?</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <Select
                            options={CoinDummy}
                            onChange={setCoin}
                            defaultValue={{ label: "BTC", value: 0 }}
                        />
                        <div style={{ marginTop: "10px" }}>
                            <a>을(를)</a>
                        </div>
                    </CardFieldset>

                    <CardFieldset>
                        <Select
                            options={PastDummy}
                            onChange={setPast}
                            defaultValue={{ label: "1주전", value: 0 }}
                        />
                        <div style={{ marginTop: "10px" }}>
                            <a>에 샀더라면...😳</a>
                        </div>
                    </CardFieldset>

                    <CardFieldset>
                        <div style={{ marginTop: "10px" }}></div>
                        <CardButton type="button"
                            onClick={() => {
                                navigate(`/result/${id}`);
                            }}>결과 확인하기</CardButton>
                    </CardFieldset>
                </CardBody>
            </HomeCardWrapper>
        </div>
    );
}

// ReactDOM.render(<YearPicker val={2002} />, document.getElementById('App'))

export default Home;