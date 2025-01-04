import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const Container = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
    <div style={{width: '1400px', margin: '0 auto'}}>
        {props.children}
    </div>
);