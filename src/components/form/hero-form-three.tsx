"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";

interface FormProps {
    placeholderText?: string;
    btnText?: string;
    btnClass?: string;
}

interface FormData {
    yourText: string;
}

const schema = yup.object().shape({
    yourText: yup.string().required("Your Text is required"),
});

const HeroFormThree = ({ placeholderText, btnText, btnClass }: FormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit((data: FormData) => {
        alert(JSON.stringify(data));
        reset();
    });

    return (
        <form onSubmit={onSubmit} noValidate style={{ position: "relative" }}>
            <input
                type="text"
                placeholder={placeholderText || "Write your Text"}
                {...register("yourText")}
            />
            {errors.yourText?.message && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "-25px",
                        left: "20px",
                    }}
                >
                    <ErrorMsg msg={errors.yourText?.message} />
                </div>
            )}
            <button className={btnClass || "it-btn"} type="submit">
                {btnText || "Generate"}
            </button>
        </form>
    );
};
export default HeroFormThree;
