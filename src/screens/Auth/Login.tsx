import React, { useRef, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { LoginInfo, loginSchema } from "../../schemas/login.schema";

import { login } from "../../api";
import CustomError from "../../components/CustomError";

const Login = () => {
  const [message, setmessage] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>({
    resolver: zodResolver(loginSchema),
  });

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onSubmit = async (info: LoginInfo) => {
    const response = await login(info);
    setmessage(response["error"]);
    console.log(response);
  };
  return (
    <View style={styles.container}>
      <CustomInput
        icon="mail"
        name="email"
        ref={emailRef}
        control={control}
        placeholder="Email"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <CustomInput
        icon="key"
        name="password"
        secureTextEntry
        control={control}
        ref={passwordRef}
        placeholder="Password"
        onSubmitEditing={handleSubmit(onSubmit)}
      />

      {message && <CustomError message={message} />}
      {/* <QuickLinks title="Forgot Password" /> */}
      <CustomButton
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        backgroundColor={errors && Object.keys(errors).length > 0 ? "gray" : "#4942E4"}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
