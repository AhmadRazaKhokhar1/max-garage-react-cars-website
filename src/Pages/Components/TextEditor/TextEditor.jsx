import React, { useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Essentials, Bold, Paragraph, Italic} from '@ckeditor/ckeditor5-build-classic'

const TextEditor = () => {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      // Access the CKEditor instance using the ref
      console.log('Editor is ready to use!', editorRef.current);
    }
  }, [editorRef]);

  return (
    <div className="App">
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                plugins: [ Paragraph, Bold, Italic, Essentials ],
                toolbar: [ 'bold', 'italic' ]
            } }
            data="<p>Hello from the first editor working with the context!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor1 is ready to use!', editor );
            } }
        />

     
</div>
  );
};

export default TextEditor;
