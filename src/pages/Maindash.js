import React from 'react'
import Input from 'components/Input';
import DropFileInput from 'components/drop-file-input/DropFileInput';
import Upload from 'components/Upload';
import AppView from 'overview/view/app-view';

export default function Maindash() {
  return (
    <>

<AppView />
    <Input/>
    
    

    <DropFileInput/>
    
    <Upload/>
    </>
  )
}
