'use client'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {QueryClientProvider} from "@tanstack/react-query";
import {PropsWithChildren, useRef} from "react";
import getQueryClient from "@/react-query/query-client";

const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const queryClient = useRef(getQueryClient())

    return (
        <QueryClientProvider client={queryClient.current}>
            {children}
            {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    );
};

export default QueryProvider;
