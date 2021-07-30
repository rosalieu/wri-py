import React, {useState} from 'react';
import {Button, Input,}from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


const { TextArea } = Input;

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
var width= 'device-width';

const Editor = () => { 
    const [emotionColor, setEmotionColor] = useState("#F8E0E0")
    const changeColor = (color) => this.setState({ color : color })

    const calculateSentiment = () => {
        var Sentiment = require('sentiment');
        var sentiment = new Sentiment();

        let journalEntry = document.getElementById("journal").innerHTML;
        const score = sentiment.analyze(journalEntry).comparative;
        const percentage = Math.round((score+5)*10);
        document.getElementById("sentimentResult").innerHTML = "Score: " + percentage;

        
        // Calculate color
        const gold_color = `hsl(46, 100%, ${150-percentage}%)`;
        const red_color = `hsl(4, 100%, ${percentage+50}%)`;
        //this.setState({ color : red_color });
        if (percentage > 50) {
            setEmotionColor(gold_color)
        }
        else {
            setEmotionColor(red_color)
        }
    }

    return (
        <div 
            style={{
                margin: '0 5vh',
                padding: '25px 50px', 
            }}
        >
            <div style={{padding:"20px", backgroundColor:emotionColor, borderRadius:"25px"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h1>{new Date(Date.now()).toLocaleDateString()}</h1>
                    <h2 id="sentimentResult" style={{textAlign:"right"}}/>
                </div>
                <TextArea id="journal" rows={20} style={{borderRadius:"25px", padding: "25px"}} onChange={calculateSentiment}/>
            </div>
            <Button 
                type="primary" 
                href="/dashboard" 
                size="large"
                style={{
                    background: "gold",
                    borderColor:"gold",
                    color:"black",
                    display: "block",
                    marginTop: "25px",
                    width: '40%',
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >Save Journal Entry</Button>
        </div>
    )
}

export default Editor

/*vh vw*/