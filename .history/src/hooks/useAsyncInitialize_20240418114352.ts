import { useEffect, useState } from "react";

export function useAsyncInitialize<T>(
    func: () => Promise<T>,
    deps: any[] = [],
)