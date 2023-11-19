import {useCallback, useState} from 'react'
import {FileWithPath, useDropzone} from 'react-dropzone'
import { Button } from '../ui/button';

  type FileUploaderProps = {
    fieldChange: (FILES: File[]) => void;
    mediaUrl: string;
  };

const FileUploader = ({fieldChange}: FileUploaderProps) => {

    const [file, setFile] = useState<File[]>([])
    const [FileUrl, setFileUrl] = useState('');

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFile(acceptedFiles);
        fieldChange(acceptedFiles);
        setFileUrl(URL.createObjectURL(acceptedFiles[0]));
      }, [file])
      const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {
          'image/*': ['.png', '.jpeg', '.jpg', '.svg']
        }
      })

  return (
    <div {...getRootProps()} className="flex flex-col rounded-xl bg-white shadow-inner shadow-slate-800 cursor-pointer p-5">
      <input {...getInputProps()} className="cursor-pointer" />
      {
        FileUrl ? (
          <>
            <div className="file-container">
                <img 
                  src={FileUrl}
                  alt="post image"
                  className="post_upload"
                />
            </div>
            <h1 className="text-center font-thin">Click ro replace your File</h1>
          </>
        ) : (
            <div className="Uploader">
                <img src="/assets/images/upload.svg" alt="" width={40} />
                <h3>Drag and drop photos here</h3>
                <p>PNG,SVG,JPG</p>
                <Button className="special-button">
                  Select from computer
                </Button>
                <Button className="special-button2">
                  Select from Phone
                </Button>
            </div>
        )
      }
    </div>
  )
}

export default FileUploader
