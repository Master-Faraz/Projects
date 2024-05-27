// Import necessary libraries
"use client"
import { useState } from 'react';
import service from "@/appwrite/config"; // Assuming your Appwrite service

const ImageHandling = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  var imgArray = [];

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files.length > 4) {
      alert('You can only select up to 4 images.'); // Or display an error message
      return; // Prevent updating state if selection exceeds limit
    }

    setSelectedImages([...files]); // Update state with all selected files (up to 4)
  };

  const uploadMultipleImages = async () => {
    const uploadPromises = selectedImages.map(async (file) => {
      try {
        const response = await service.uploadFile(file); // Call service function
        imgArray.push(response?.$id)
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle individual upload errors (e.g., display error message)
      }
    });

    console.log(imgArray)

    try {
      await Promise.all(uploadPromises);
      console.log('All images uploaded successfully!');
      // Handle overall success (e.g., display success message)
    } catch (error) {
      console.error('Error uploading some or all images:', error);
      // Handle overall upload failure (e.g., notify user)
    }
  };

  // JSX code for the upload form (unchanged)
  return (
    <div>
      <div className="w-1/3 px-2">
        <label>Your Image Files (Max 5)
          <input type="file" name="myImages" accept="image/*" multiple onChange={handleImageChange} />
        </label>

        <button type="submit" className="w-full" onClick={() => uploadMultipleImages()}>
          {"Submit"}
        </button>

        {/* {<div className="w-full mb-4">
                    <img
                        src={service.getFilePreview("665358590032b95733c3")}
                        alt={"Not found"}
                        className="rounded-lg"
                    />
                </div>} */}
      </div>
    </div>
  );
};

export default ImageHandling;





// import service from "@/appwrite/config";
// import { useState } from "react";
// const page = () => {

//     const [selectedImages, setSelectedImages] = useState([]);


//     const handleImageChange = (event: any) => {
//         const files = event.target.files;
//         setSelectedImages([...files]); // Update state with all selected files
//     };

//     const uploadMultipleImages = async () => {
//         const uploadPromises = selectedImages.map(async (file) => {
//             try {
//                 const response = await service.uploadFile(file); // Call service function
//                 console.log('Image uploaded successfully:', response);
//             } catch (error) {
//                 console.error('Error uploading image: ', error);
//                 // Handle individual upload errors (e.g., display error message)
//             }
//         });

//         try {
//             await Promise.all(uploadPromises);
//             console.log('All images uploaded successfully!');
//             // Handle overall success (e.g., display success message)
//         } catch (error) {
//             console.error('Error uploading some or all images:', error);
//             // Handle overall upload failure (e.g., notify user)
//         }
//     };





//     // JSX code for the upload form
//     return (


//         <div>
//             <div className="w-1/3 px-2">
//                 <input type="file" name="myImages" accept="image/*" multiple onChange={handleImageChange} />


//                 <button type="submit" className="w-full" onClick={() => uploadMultipleImages()}>
//                     {"Submit"}
//                 </button>


//                 {/* {<div className="w-full mb-4">
//                     <img
//                         src={service.getFilePreview("file1")}
//                         alt={"Not found"}
//                         className="rounded-lg"
//                     />
//                 </div>} */}

//             </div>
//         </div>
//     );
// };

// export default page;



