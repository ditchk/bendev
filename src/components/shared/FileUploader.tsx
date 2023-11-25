import {useCallback, useState} from 'react'
import {FileWithPath, useDropzone} from 'react-dropzone'
import { Button } from '../ui/button';

  type FileUploaderProps = {
    fieldChange: (FILES: File[]) => void;
    mediaUrl: string;
  };

const FileUploader = ({fieldChange, mediaUrl}: FileUploaderProps) => {

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
          'image/*': ['.png', '.jpeg', '.jpg', '.svg'],
          // 'video/*': ['mp4']
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
                  width={200}
                  className="post_upload"
                />
            </div>
            <h1 className="text-center font-thin">Click ro replace your File</h1>
          </>
        ) : (
            <div className="Uploader">
                <img src="/assets/images/file-plus.svg" alt="" width={50} />
                <h3 className="text-base font-serif ">Drag and drop photos here</h3>
                <p className="text-base font-serif font-thin">PNG,SVG,JPG</p>
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
