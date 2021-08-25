import React, { useState, useEffect } from 'react';

const ProgressBar = (props) => {

    var addRule = (function (style) {
        var sheet = document.head.appendChild(style).sheet;
        return function (selector, css) {
            var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
                return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
            }).join(";");
            sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
        };
    })(document.createElement("style"));


    const [lngHeight, setLngHeight] = useState([])
    const [frmHeight, setFrmHeight] = useState([])
    const [cnpHeight, setCnpHeight] = useState([])
    const [borderExp, setBorderExp] = useState([])

    useEffect(() => {
        setLngHeight(document.querySelector('.languagesDisplay').clientHeight)
        setFrmHeight(document.querySelector('.frameworksDisplay').clientHeight)
        setCnpHeight(document.querySelector('.conceptionDisplay').clientHeight)
        setBorderExp(document.querySelector('.border-exp'))
    })
    console.log(lngHeight)
    let classNameElem = '';
    if(props.className == 'languagesDisplay'){
        classNameElem += 'lngDisplay';
        
        addRule(".lngDisplay:before", {
            content:'',
            background: 'rgba(180, 179, 179, 0.506)',
            position: 'absolute',
            height: `${lngHeight - 40.8}px`,
            width: '1px',
            transform: 'translate(9px, 19px)'
        });
    }else if(props.className == 'frameworksDisplay'){
        classNameElem += 'frmDisplay';
        
        addRule(".frmDisplay:before", {
            content:'',
            background: 'rgba(180, 179, 179, 0.506)',
            position: 'absolute',
            height: `${frmHeight - 40.8}px`,
            width: '1px',
            transform: 'translate(9px, 19px)'
        });
    }else if(props.className == 'conceptionDisplay'){
        classNameElem += 'cnpDisplay';
        
        addRule(".cnpDisplay:before", {
            content:'',
            background: 'rgba(180, 179, 179, 0.506)',
            position: 'absolute',
            height: `${cnpHeight - 40.8}px`,
            width: '1px',
            transform: 'translate(9px, 19px)'
        });
    }

        
       
    
      

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Année d'experiences</span>
                <span className={classNameElem}>1 ans</span>
                <span className={classNameElem}>3 ans</span>
            </div>
            <div>
                {
                    props.languages.map((item) => {
                        let xpYears = 3;
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;