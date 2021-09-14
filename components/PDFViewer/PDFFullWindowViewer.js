import { useEffect } from "react";
import ViewSDKClient from "../../utils/viewSDKClient";

const PDFFullWindowViewer = () => {
    useEffect(() => {
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready()
        .then(() => {
            viewSDKClient.previewFile('pdf-div', {});
        });
    },[]);

    return (
        <div id='pdf-div'></div>
    )
}

export default PDFFullWindowViewer;