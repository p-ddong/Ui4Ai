import { useState } from 'react';
import { Box, Button, Image, Input, VStack } from '@chakra-ui/react';
import './App.css'

function App() {
  const [image, setImage] = useState(null); 
  const [outputImage, setOutputImage] = useState(null); 


  const handleImageUpload = (e) => {
    // đây là hàm để nhận hình
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleAddInClick = () => {
    // gọi axios ở đây
    setOutputImage(image); 
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" className="mainpage" gap={"100px"}>
      
      <VStack>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className="input">
        <Input
          id="fileInput"
          type="file"
          accept="image/*"
          display="none"
          onChange={handleImageUpload}
        />
        {image && (
          <Box marginTop="20px">
            <Image src={image} alt="Uploaded Preview" boxSize="200px" objectFit="cover" />
          </Box>
        )}
        </Box>
 
      <Button onClick={() => document.getElementById('fileInput').click()} color={'black'} margin="10px" colorPalette={'gray'} variant="surface">
          Upload File
      </Button>

      </VStack>




      <VStack>
        <Box className="output">
          {outputImage && (
            <Image
              src={outputImage}
              alt="Output"
              boxSize="200px"
              objectFit="cover"
            />
          )}
        </Box>

        <Button onClick={handleAddInClick} color={'black'} colorPalette={'gray'} variant="surface"  margin="10px" >
          Add in?
        </Button>

      </VStack>
    </Box>
  );
}

export default App;
