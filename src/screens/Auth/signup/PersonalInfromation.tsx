import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";

import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

const PersonalInfromation = () => {
  const { control, handleSubmit } = useForm();

  const nameRef = useRef<TextInput>(null);
  const addressRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const departmentRef = useRef<TextInput>(null);
  const semesterRef = useRef<TextInput>(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        icon="user"
        name="name"
        ref={nameRef}
        control={control}
        placeholder="Full name"
        onSubmitEditing={() => addressRef.current?.focus()}
      />
      <CustomInput
        icon="map"
        name="address"
        ref={addressRef}
        control={control}
        placeholder="Address"
        onSubmitEditing={() => phoneRef.current?.focus()}
      />
      <CustomInput
        name="phone"
        icon="phone"
        ref={phoneRef}
        control={control}
        placeholder="Phone number"
        onSubmitEditing={() => departmentRef.current?.focus()}
      />

      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomInput
          name="department"
          control={control}
          ref={departmentRef}
          placeholder="Department"
          style={{ flex: 1 }}
          onSubmitEditing={() => semesterRef.current?.focus()}
        />
        <CustomInput
          name="semester"
          ref={semesterRef}
          control={control}
          placeholder="Semester"
          keyboardType="numeric"
          onSubmitEditing={handleSubmit(onSubmit)}
          style={{ flex: 1 }}
        />
      </View>

      <CustomButton title="Continue" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default PersonalInfromation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
