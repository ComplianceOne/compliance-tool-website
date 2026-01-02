import { Metadata } from "next";
import ErrorMain from "@/views/error";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return <ErrorMain />;
}
