import React, { useState } from "react";
import mime from "mime";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { api } from "../api";

const ImagePickerComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImagePicker.ImagePickerResult | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access the photo library was denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const asset = result.assets[0];
      const mimeType = mime.getType(asset.uri);
      const formData = new FormData();

      // @ts-ignore
      formData.append("file", {
        uri: asset.uri,
        type: mimeType,
        name: asset.fileName || "image.jpg",
      });

      try {
        const response = await api.post("/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Upload successful:", response.data);
      } catch (error) {
        console.log("Upload failed:", error.message);
      }
    }
  };

  return (
    <View>
      <Button title="Select Image" onPress={pickImage} />
      {selectedImage && (
        <>
          <Image source={{ uri: selectedImage.assets[0].uri }} style={{ width: 200, height: 200 }} />
          <Button title="Upload Image" onPress={uploadImage} />
        </>
      )}
    </View>
  );
};

export default ImagePickerComponent;
