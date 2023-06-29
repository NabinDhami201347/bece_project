import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

const SignupInformation = () => {
  const { control, handleSubmit } = useForm();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confrimPasswordRef = useRef<TextInput>(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        icon="mail"
        name="email"
        control={control}
        ref={emailRef}
        placeholder="college email"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <CustomInput
        icon="lock"
        name="password"
        secureTextEntry
        control={control}
        ref={passwordRef}
        placeholder="strong password"
        onSubmitEditing={() => confrimPasswordRef.current?.focus()}
      />
      <CustomInput
        icon="lock"
        secureTextEntry
        control={control}
        name="confirmPassword"
        ref={confrimPasswordRef}
        placeholder="strong password"
        onSubmitEditing={handleSubmit(onSubmit)}
      />
      <CustomButton onPress={handleSubmit(onSubmit)} title="Signup" />
    </SafeAreaView>
  );
};

export default SignupInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
