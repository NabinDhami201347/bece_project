import React, { useRef, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { LoginInfo, loginSchema } from "../../schemas/login.schema";

import { api } from "../../api";
import CustomError from "../../components/CustomError";

import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>({
    resolver: zodResolver(loginSchema),
  });

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const { setToken } = useAuthContext();

  const { data, mutate } = useMutation({
    mutationFn: (login: LoginInfo) => {
      console.log(data, mutate, "Dayta");
      return api.post("/auth/login", login);
    },
    onError: (error) => {
      // @ts-ignore
      const errorMessage = error?.response?.data?.error;
      setMessage(errorMessage);
      console.error("An error occurred during the mutation:", errorMessage);
    },
    onSuccess: (data) => {
      const accessToken = data?.data?.access_token;
      setToken(accessToken); // Set the token using the setToken method from the AuthContext
    },
  });

  const onSubmit = async (fields: LoginInfo) => {
    console.log(fields, "fields");
    mutate(fields);
    console.log(data?.data["access_token"]);
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
