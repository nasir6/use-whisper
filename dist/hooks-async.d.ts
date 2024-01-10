import { DependencyList } from 'react';
import { Destructor } from './types.js';

declare const useEffectAsync: (effect: () => Promise<void>, depsOrDes?: DependencyList | Destructor | null, depsOrErr?: DependencyList | ((err: any) => void) | undefined, deps?: DependencyList) => void;
declare const useMemoAsync: <T extends Function>(callback: T, depsOrErr?: DependencyList | ((err: any) => void) | undefined, deps?: DependencyList) => T;

export { useEffectAsync, useMemoAsync };
