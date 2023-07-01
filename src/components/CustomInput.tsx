import React, { forwardRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

import CustomError from "./CustomError";
import { COLORS } from "../constants";

type CustomInputProps = {
  control: Control;
  name: string;
  icon?: any;
  style?: any;
  onSubmitEditing?: () => void;
} & React.ComponentProps<typeof TextInput>;

const CustomInput = forwardRef<TextInput, CustomInputProps>(
  ({ control, name, onSubmitEditing, icon, style, ...textInputProps }, ref) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur }, fieldState: { error, invalid } }) => (
          <View style={[styles.inputContainer, style]}>
            {icon && <Feather name={icon} size={22} color="#EEE2DE" style={{ paddingRight: 7 }} />}
            <TextInput
              ref={ref}
              {...textInputProps}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholderTextColor="#9BABB8"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={onSubmitEditing}
            />
            {invalid && <CustomError>{error?.message}</CustomError>}
          </View>
        )}
      />
    );
  }
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.input,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
  },
  input: {
    flex: 1,
    color: "#fff",
  },
});

export default CustomInput;
