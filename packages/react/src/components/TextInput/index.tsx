import { ComponentProps } from "react";
import { styled } from "../../styles";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input>{
    prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props}/>
        </TextInputContainer>
    )
}

TextInput.displayName = 'TextInput'
