import {JSX} from "react";
import {TopPageComponentProps} from "@/page-components/TopPageComponent/TopComponent.props";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <>
            {products && products.length }
        </>

    );
};