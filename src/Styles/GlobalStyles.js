import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    
    body {
        font-size: 16px;
        line-height: 1.5;
        font-family: NotoSans-Regular,AppleSDGothicNeo-Regular,"맑은 고딕",Malgun Gothic,"돋움",dotum,sans-serif;
        color: #7c7c7c;
        letter-spacing: -0.03em;
        word-wrap: break-word;
        background: #fff;
        -webkit-text-size-adjust: none;
        margin: 0;
        padding: 0;
        border-collapse: separate;
    }
    div {
        margin:0;
        padding:0;
        display: block;
    }
    h1{
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end:0px;
        font-weight: bold;
    }
    h2{
        margin:0;
        padding:0;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    
`;
