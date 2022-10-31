import { ComponentProps } from "react";
import { Input, Prefix, TextInput } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input>{
    prefix?: string
}

export function TextInputComponent({ prefix, ...props }: TextInputProps) {
    return (
        <TextInput>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props}/>
        </TextInput>
    )
}

TextInputComponent.displayName = 'TextInputComponent'
