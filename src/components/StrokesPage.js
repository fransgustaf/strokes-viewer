import React from 'react'

class StrokesPage extends React.Component {
//	state = { strokes: {'data': [{'dots': [{'x': 290.0, 'y': 162.0}, {'x': 295.0, 'y': 162.0}, {'x': 300.0, 'y': 162.0}, {'x': 306.0, 'y': 162.0}, {'x': 315.0, 'y': 162.0}, {'x': 326.0, 'y': 162.0}, {'x': 336.0, 'y': 162.0}, {'x': 341.0, 'y': 162.0}, {'x': 344.0, 'y': 162.0}, {'x': 347.0, 'y': 163.0}, {'x': 351.0, 'y': 169.0}, {'x': 353.0, 'y': 173.0}, {'x': 356.0, 'y': 178.0}, {'x': 357.0, 'y': 183.0}, {'x': 357.0, 'y': 186.0}, {'x': 357.0, 'y': 188.0}, {'x': 357.0, 'y': 189.0}, {'x': 357.0, 'y': 190.0}, {'x': 354.0, 'y': 192.0}, {'x': 350.0, 'y': 194.0}, {'x': 346.0, 'y': 196.0}, {'x': 341.0, 'y': 198.0}, {'x': 333.0, 'y': 200.0}, {'x': 329.0, 'y': 201.0}, {'x': 323.0, 'y': 201.0}, {'x': 317.0, 'y': 201.0}, {'x': 311.0, 'y': 201.0}, {'x': 303.0, 'y': 201.0}, {'x': 298.0, 'y': 201.0}, {'x': 295.0, 'y': 201.0}, {'x': 289.0, 'y': 201.0}, {'x': 287.0, 'y': 201.0}, {'x': 286.0, 'y': 201.0}, {'x': 286.0, 'y': 201.0}, {'x': 285.0, 'y': 201.0}, {'x': 285.0, 'y': 202.0}, {'x': 285.0, 'y': 202.0}, {'x': 287.0, 'y': 205.0}, {'x': 292.0, 'y': 211.0}, {'x': 296.0, 'y': 215.0}, {'x': 303.0, 'y': 223.0}, {'x': 311.0, 'y': 231.0}, {'x': 318.0, 'y': 241.0}, {'x': 323.0, 'y': 248.0}, {'x': 329.0, 'y': 255.0}, {'x': 333.0, 'y': 259.0}, {'x': 335.0, 'y': 262.0}, {'x': 337.0, 'y': 264.0}, {'x': 338.0, 'y': 265.0}, {'x': 340.0, 'y': 267.0}, {'x': 341.0, 'y': 268.0}, {'x': 342.0, 'y': 269.0}, {'x': 342.0, 'y': 270.0}, {'x': 342.0, 'y': 270.0}, {'x': 342.0, 'y': 269.0}]}]} };
//	state = { strokes: [ {'dots': [{'x': 290.0, 'y': 162.0}, {'x': 295.0, 'y': 162.0}, {'x': 300.0, 'y': 162.0}, {'x': 306.0, 'y': 162.0}, {'x': 315.0, 'y': 162.0}, {'x': 326.0, 'y': 162.0}, {'x': 336.0, 'y': 162.0}, {'x': 341.0, 'y': 162.0}, {'x': 344.0, 'y': 162.0}, {'x': 347.0, 'y': 163.0}, {'x': 351.0, 'y': 169.0}, {'x': 353.0, 'y': 173.0}, {'x': 356.0, 'y': 178.0}, {'x': 357.0, 'y': 183.0}, {'x': 357.0, 'y': 186.0}, {'x': 357.0, 'y': 188.0}, {'x': 357.0, 'y': 189.0}, {'x': 357.0, 'y': 190.0}, {'x': 354.0, 'y': 192.0}, {'x': 350.0, 'y': 194.0}, {'x': 346.0, 'y': 196.0}, {'x': 341.0, 'y': 198.0}, {'x': 333.0, 'y': 200.0}, {'x': 329.0, 'y': 201.0}, {'x': 323.0, 'y': 201.0}, {'x': 317.0, 'y': 201.0}, {'x': 311.0, 'y': 201.0}, {'x': 303.0, 'y': 201.0}, {'x': 298.0, 'y': 201.0}, {'x': 295.0, 'y': 201.0}, {'x': 289.0, 'y': 201.0}, {'x': 287.0, 'y': 201.0}, {'x': 286.0, 'y': 201.0}, {'x': 286.0, 'y': 201.0}, {'x': 285.0, 'y': 201.0}, {'x': 285.0, 'y': 202.0}, {'x': 285.0, 'y': 202.0}, {'x': 287.0, 'y': 205.0}, {'x': 292.0, 'y': 211.0}, {'x': 296.0, 'y': 215.0}, {'x': 303.0, 'y': 223.0}, {'x': 311.0, 'y': 231.0}, {'x': 318.0, 'y': 241.0}, {'x': 323.0, 'y': 248.0}, {'x': 329.0, 'y': 255.0}, {'x': 333.0, 'y': 259.0}, {'x': 335.0, 'y': 262.0}, {'x': 337.0, 'y': 264.0}, {'x': 338.0, 'y': 265.0}, {'x': 340.0, 'y': 267.0}, {'x': 341.0, 'y': 268.0}, {'x': 342.0, 'y': 269.0}, {'x': 342.0, 'y': 270.0}, {'x': 342.0, 'y': 270.0}, {'x': 342.0, 'y': 269.0}]} ] };

    constructor(props) {
        super(props);
    
        //this.state = { documentId: this.props.documentId, strokes: [], pages: [] };
        this.state = { documentId: this.props.documentId, pages: [], strokes: [] };
    }

    pages = [];
    strokes = [];
    /*
    componentDidMount() {
        for (var i = 0; i < this.state.strokes.length; i++) {
            this.draw(strokes[i].dots);
    }
    }
    */

   componentDidUpdate() {
       console.log("download");
       this.download();
    }

    async download() {
        this.refs.canvas.setAttribute("style",  "background: url(''); background-size: 100% 100%;  border-style: solid; width: 100%; height: 100%;");
        this.refs.canvas.getContext('2d').clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

        const documentId = this.props.documentId;
        console.log("Getting document: " + documentId);
        if (documentId) {
            try {
                //ToDo: Get document id from URL
                const pagesResult = await fetch('http://localhost:8000/api/document/' + documentId + '/page/');
                const pages = await pagesResult.json();
                this.pages = pages;
/*                this.setState({
                    pages: pages
                });
*/
                const strokesResult = await fetch('http://localhost:8000/api/page/3/stroke/');
                const strokes = await strokesResult.json();
                this.strokes = strokes;
/*                this.setState({
                    strokes: strokes
            });
*/
            } catch (e) {
                console.log(e);
            }

            this.refs.canvas.setAttribute("style",  "background: url('" + (this.pages.length > 0 ? this.pages[0].background_url : 'https://s3-ap-southeast-1.amazonaws.com/fs-background-images/house.jpg') + "'); " + "background-size: 100% 100%;  border-style: solid; width: 100%; height: 100%;");
            //style={{ background: 'url(' + (this.pages.length > 0 ? this.pages[0].background_url : "") + ')', backgroundSize: '100% 100%',  borderStyle: 'solid', width: '100%', height: '100%' }}
            this.draw();
        }
    }

    draw = () =>  {
        //console.log("About to draw");

        const scale = 1;
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var background = new Image();

        /*
        if(this.pages.length > 0 && this.pages[0].background_url) {
            background.src = this.pages[0].background_url;
        } else {
            background.src = "https://s3-ap-southeast-1.amazonaws.com/fs-background-images/house.jpg";
        }
*/
        // Make sure the image is loaded first otherwise nothing will draw.
        //background.onload = () => {
        //    console.log("Drawing");            
        //    ctx.drawImage(background,0,0, canvas.width, canvas.height);   

            const strokes = this.strokes;        
            for (var i = 0; i < strokes.length; i++) {
                var dots = strokes[i].dots;
            
                //console.log("number of dots " + dots.length)
                var prevX = dots[0].x * scale;
                var prevY = dots[0].y * scale;
                for (var j = 1; j < dots.length; j++) {
                            //console.log("drawing " + prevX + " " + prevY + " " + dots[j].x + " " + dots[j].y);
                            ctx.beginPath();
                            ctx.moveTo(prevX, prevY);
                            ctx.lineTo(dots[j].x * scale, dots[j].y * scale);
                            ctx.strokeStyle = "black";
                            ctx.lineWidth = 2;
                            ctx.stroke();
                            ctx.closePath();
                            prevX = dots[j].x * scale;
                            prevY = dots[j].y * scale;
                }
            }
        //}
        //console.log("Document loaded");
    }

    render() {
        //console.log("rendering strokes page");
        return (
            //<canvas ref="canvas" width="210" height="297" style={{ background: 'url(' + (this.pages.length > 0 ? this.pages[0].background_url : "https://s3-ap-southeast-1.amazonaws.com/fs-background-images/house.jpg") + ')', backgroundSize: '100% 100%',  borderStyle: 'solid', width: '100%', height: '100%' }}></canvas>
            <canvas ref="canvas" width="210" height="297" style={{ backgroundSize: '100% 100%',  borderStyle: 'solid', width: '100%', height: '100%' }}></canvas>
        );
    }

}

export default StrokesPage;