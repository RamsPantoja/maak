import PDFFullWindowViewer from "../../PDFViewer/PDFFullWindowViewer";
import ProfileAdvancedDataLayout from "../../ProfileInformationComponent/ProfileAdvancedDataLayout";


const MyPortfolio = () => {
    return (
        <ProfileAdvancedDataLayout message={'Sube tu portafolio para que te conozcan mejor'}>
            <PDFFullWindowViewer/>
        </ProfileAdvancedDataLayout>
    )
}

export default MyPortfolio;