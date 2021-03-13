import React,{useState} from 'react';
import axios from 'axios'
import showJsonData from './showJsonData';

function Main(){
    var newFile;
    const [jsonData, setJsonData]=useState([]);
    const [flag,setFlag] = useState(true);
    function fileValidation(e){
        var fileInput =  document.getElementById('files');
        newFile = e.target.files[0];
        var filePath = fileInput.value;         
        var allowedExtensions = /(\.json|\.pdf)$/i;

        if (!allowedExtensions.exec(filePath)) { 
            alert('Invalid file type'); 
            fileInput.value = ''; 
            return false; 
        }       
    }
    function submitFile(e){
        axios.post("http://localhost:9999/fileUpload",newFile,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log("Success");
    }


    function showData(){
       axios.get('http://localhost:9999/fileData',{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((r)=>r.json())
        .then((data)=>{
            setJsonData(data);
            setFlag(true);
        })

    }

    return(
        <>
            {
                flag ? (
                    <div>
                        <input id="files" type="file" onChange={fileValidation}></input>
                        <button type="submit" onClick={submitFile} className="btn btn-dark btn-lg btn-block">Submit FIle</button>
                        <button type="submit" onClick={showData} className="btn btn-dark btn-lg btn-block">Show File Data</button>
                    </div>
                    ):(
                        <showJsonData jsonData/>
                    )
            }
        </>
    );
}
export default Main;
