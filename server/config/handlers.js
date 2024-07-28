export const handleErrorMsg = (err) => {
    var error =err.errors
    return  error? error.map((er) => er.message)[0]: err
    
  };



  export const handleFileType=(file)=>{
    if(file.includes(".jpg"||".jpg"|| ".png"||".webp")){
      return "image"
    }else if(file.includes(".pdf"|| ".doc"|| ".docx")){
      return "document"
    }
  }