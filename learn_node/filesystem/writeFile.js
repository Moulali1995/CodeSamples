const fs=require('fs')

var data=[{
    "widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}    ]

fs.readFile('data.json','utf-8',(err,res)=>{{
    console.log(res)
}})
//console.log(JSON.stringify(data))
fs.writeFile('data.json',JSON.stringify(data),(err,res)=>{
    console.log('Done')
})